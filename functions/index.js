// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();


// Initialize express server with cors middleware to allow for http access from browser
const express = require("express");
const cors = require("cors")({ origin: true });
const app = express();
app.use(cors);


const stripe = require("stripe")(
  	"sk_test_51LJU6pIRYjPm2gCpn2kkJ7fGaIhuL7Sr8opDkKUXYcPQ3syGUaOxWwI5yDMrzdhDTKYMFw0tdz7LAtEbvJvWaT6M00XBTlISBa"
);

exports.scheduleFunction = functions.pubsub.schedule("*/15 * * * *").onRun(async (context) => {
	var db = admin.firestore();
	const FieldValue = db.FieldValue;

	db.collection("campaigns").get().then((querySnapshot) => {
		querySnapshot.forEach(async (doc) => 
		{
			const campaign = doc.data();
			const campaign_id = doc.id;
			let campaignStatus = campaign.campaignStatus;

			if (typeof campaign.startDateTime === "object") 
			{
				let sec = campaign.startDateTime.seconds;
				let starttime = new Date(sec);
				let currenttime = new Date();
				if (currenttime >= starttime) {
					if (campaignStatus === "scheduled") {
						campaignStatus = "live";
					}
				}
			}

			if (typeof campaign.endDateTime === "object") 
			{
				let endsec = campaign.endDateTime.seconds;
				let endtime = new Date(endsec);
				var currenttime = new Date();
				if (currenttime >= endtime) {
					if (campaignStatus === "live") {
						campaignStatus = "ended";
					}
				}
			}

			let transferStatus = campaign.transferStatus ?? "pending";

			if (campaignStatus === "ended" && transferStatus === "pending") 
			{
				/* 
					grossRevenue of VIP users, we have index [campaignVIPtotal] in campaign. 
					for auction users we have to calculate grossRevenue on run time. [campaignAuctionTotal]
				*/

				let campaignAuctionTotal = await make_payment(campaign, campaign_id, "top3AuctionWinners");
				campaignAuctionTotal += await make_payment(campaign, campaign_id, "normalAuctionWinners");

				// campaignAuctionTotal is in cents. like $40.50 will be 4050
				let campaignTotal = parseFloat(campaign.campaignVIPtotal) + (campaignAuctionTotal/100);
				update_user(campaign, campaignTotal);

				transferStatus = "done";
			}

			db.collection("campaigns").doc(campaign_id).set({
				addelement: campaign.mytotal,
				transferStatus: transferStatus,
				campaignStatus: campaignStatus,
			}, { merge: true });
			
			console.log(doc.id, " => ", doc.data());
		});
	})
	.catch((error) => {
		console.log("Error getting campaigns: ", error);
	});
	
	async function make_payment(campaign, campaign_id, collection) {
		let amount_collected = 0;
		try {
			db.collection("campaigns").doc(campaign_id).collection(collection).get().then((snapshot) => 
			{
				if (!snapshot.empty) 
				{
					snapshot.forEach(async (document) => {
						let doc = document.data();
						doc.id = document.id;
						const winnersdata = document.data();

						if(winnersdata.price > 0 && !!winnersdata.stripe_customer_id && !!winnersdata.payment_id)
						{
							const paymentintent = await stripe.paymentIntents.create({
								amount: winnersdata.price * 100,
								currency: "usd",
								customer: winnersdata.stripe_customer_id,
								payment_method: winnersdata.payment_id,
								off_session: true,
								confirm: true,
							});
	
							if(paymentintent.status === 'succeeded')
							{
								let amount = paymentintent.amount_received;
								amount_collected += amount;
	
								db.collection("users").doc(campaign.person.id).collection("Contributions").doc(doc.person.id).set({
									contributionTotal: FieldValue.increment(amount),
									interactionTotal: FieldValue.increment(1)
								}, { merge: true });
	
							}
						}
					});
				}		
			})
			.catch((error) => {
				console.error("Error getting document:", error);
			});
		} catch (error) {
			console.error("Error getting document:", error);
		}

		return amount_collected;
	}

	async function update_user(campaign, campaignTotal) 
	{
		const userQuery = db.collection("users").where("uid", "==", campaign.person.id);
		userQuery.get().then( async (querySnapshot) => {
			if (!querySnapshot.empty) 
			{
				const snapshot = querySnapshot.docs[0];
				const user = snapshot.data();
				const userid = snapshot.id;
				
				let grossRevenue = campaignTotal;
				switch (true) {
					case grossRevenue < 1000:
						grossRevenue =  grossRevenue - ((17 *grossRevenue) / 100)
						break;
					case grossRevenue > 1000 && grossRevenue < 10000:
						grossRevenue =  grossRevenue - ((16 *grossRevenue) / 100)
						break;
					case grossRevenue > 10000 && grossRevenue < 100000:
						grossRevenue =  grossRevenue - ((14 *grossRevenue) / 100)
						break;
					case grossRevenue > 100000 && grossRevenue < 1000000:
						grossRevenue =  grossRevenue - ((10 *grossRevenue) / 100)
						break;
					case grossRevenue > 1000000:
						grossRevenue =  grossRevenue - ((10 *grossRevenue) / 100)
						break;
					default:
					// grossRevenue =  grossRevenue - ((17 *grossRevenue) / 100)
				}

				const transfer = await stripe.transfers.create({
					amount: grossRevenue * 100,
					currency: 'usd',
					destination: user.accountId,
					// transfer_group: 'ORDER_95',
				});

				let previous_grossRevenue = user.grossRevenue ? parseFloat(user.grossRevenue) : 0;
				grossRevenue += previous_grossRevenue;

				db.collection("users").doc(userid).set({grossRevenue: grossRevenue}, { merge: true });
			} else {
				console.error("Error getting document:");
			}
		})
		.catch((error) => {
			console.error("Error getting document:", error);
		});
	}


	return null;
});


/* 
	https://us-central1-interact2002.cloudfunctions.net/determineWinners?campaign_id=test12345

	top3AuctionWinners
	normalAuctionWinners 
	-------
	GiveAwayVipWinners
	GiveAwayFreeWinners
*/
exports.determineWinners = functions.https.onRequest((request, response) => 
{
	const campaign_id = request.query.campaign_id;
	var db = admin.firestore();

	db.collection("campaigns").doc(campaign_id).get().then(snapshot => {
		let data = snapshot.data();
		functions.logger.info("campaign data:", data, {structuredData: true});

		process_auction_list(campaign_id, Number(data.numAuctionInteractions));
		process_giveaway_list(campaign_id, Number(data.numGiveawayInteractions), data.person.id);
	});

	function process_auction_list(campaign_id, numAuctionInteractions)
	{
		functions.logger.info("Collecting winners from bids", {structuredData: true});

		// Auction Winners
		var bids = [];
		db.collection("campaigns").doc(campaign_id).collection("bids").get().then(snapshot => {

			snapshot.forEach(document => {
				let doc = document.data();
				doc.id = document.id;
				doc.price = parseFloat(doc.price);
				bids.push(doc);
			});
			bids.sort((a, b)=> b.price - a.price);

			//console.log("Bids:", bids);
			if (bids.length > 3) 
			{
				var top3AuctionWinners = bids.splice(0, 3);
				saveAuctionWinners(campaign_id, "top3AuctionWinners", top3AuctionWinners);
				saveAuctionWinners(campaign_id, "normalAuctionWinners", bids);
			}
			else{
				saveAuctionWinners(campaign_id, "top3AuctionWinners", bids);
			}

		}).catch(error => {
			console.error("Error getting document:", error);
		})

	}

	function saveAuctionWinners(campaign_id, collection, data) 
	{
		//functions.logger.info("saving winners for "+collection, data, {structuredData: true});

		let coll_ref = db.collection("campaigns").doc(campaign_id).collection(collection);
		data.forEach(document => {
			let did = document.id;
			delete document.id;
			coll_ref.doc(did).set(document)
			.then((docRef) => {
				//console.log("Document written with ID: ", docRef.id);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
		});
	}


	async function process_giveaway_list(campaign_id, numGiveawayInteractions, creator_id)
	{
		functions.logger.info("Collecting winners from giveAway", {structuredData: true});

		var fans = []; // all users in giveAway
		var pool = []; // all users with multiplier entries
		var selected = []; // users which are selected
		var loosers = []; // users which are not get selected
		try{
			const snapshot = await db.collection("campaigns").doc(campaign_id).collection("Giveaway").get();
		
			for (let document of snapshot.docs) {
				let doc = document.data();
				doc.price = Number(doc.price);
				
				let previousLoss = 0;
				let docSnap = await db.collection("users").doc(creator_id).collection('GiveawayLossHistory').doc(document.id).get();
				if (docSnap.data()) {
					let previousLossObj = docSnap.data();
					previousLoss = Number(previousLossObj.numOfLoss);
					//console.log('previousLoss', document.id, previousLoss);
				}
				
				let noOfEntries = 1;
				if(doc.price > 0) noOfEntries = 25;
				if(previousLoss === 1) noOfEntries = noOfEntries * 2;
				else if(previousLoss > 1) noOfEntries = noOfEntries * 4;

				for (let index = 0; index < noOfEntries; index++) {
					pool.push({'id':document.id, 'previousLoss':previousLoss, 'obj':doc});
				}

				fans.push({'id':document.id, 'previousLoss':previousLoss, 'obj':doc});
			}	

			if(fans.length <= numGiveawayInteractions) selected = fans;
			else{
				loosers = fans;
				shuffle_array(pool);
				//console.log("pool:", pool);

				while (selected.length < numGiveawayInteractions) 
				{
					let rendom_index = Math.floor(Math.random() * pool.length);
					selected.push(pool[rendom_index]);

					let selected_obj_id = pool[rendom_index].id;
					pool = pool.filter(obj => obj.id !== selected_obj_id);
					loosers = loosers.filter(obj => obj.id !== selected_obj_id);

					if(selected.length % 9 === 0) {
						shuffle_array(pool);
						//console.log("pool:", pool);
					}
				}
			}
			//console.log("selected:", selected);
			//console.log("loosers:", loosers);

			if(selected.length > 0) update_giveaway_users(campaign_id, selected, 1, creator_id);
			if(loosers.length > 0) update_giveaway_users(campaign_id, loosers, 0 , creator_id);
		}
		catch(error) {
			console.error("Error getting document:", error);
		};
	}

	function update_giveaway_users(campaign_id, data, result, creator_id) 
	{
		var update_ref = db.collection("campaigns").doc(campaign_id).collection("Giveaway");

		if(result === 1) var add_ref = db.collection("campaigns").doc(campaign_id).collection("GiveawayWinners");
		else var add_ref = db.collection("campaigns").doc(campaign_id).collection("GiveawayLosers");

		var loss_ref = db.collection("users").doc(creator_id).collection('GiveawayLossHistory');
		
		data.forEach(document => {

			update_ref.doc(document.id).update({
				"result": result,
			})
			.then((docRef) => {
				//console.log("Document successfully updated!", docRef.id);
			}).catch((error) => {
				console.error("Error updating document: ", error);
			});

			add_ref.doc(document.id).set(document.obj)
			.then((docRef) => {
				//console.log("Document successfully added!", docRef.id);
			}).catch((error) => {
				console.error("Error adding document: ", error);
			});


			if(result === 0) {
				loss_ref.doc(document.id).set({
					"numOfLoss": document.previousLoss + 1
				}, { merge: true })
				.then((docRef) => {
					//console.log("Document successfully updated!", docRef.id);
				}).catch((error) => {
					console.error("Error adding document: ", error);
				});
			}
			else if(result === 1)
			{
				loss_ref.doc(document.id).delete();
			}
			
		});
	}

	function shuffle_array(array) {
		let currentIndex = array.length, randomIndex;
	  
		// While there remain elements to shuffle.
		while (currentIndex != 0) {
	  
			// Pick a remaining element.
		  	randomIndex = Math.floor(Math.random() * currentIndex);
		  	currentIndex--;
	  
		  	// And swap it with the current element.
		  	[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
	  
		return array;
	}

	response.send("Collecting winners are done.");
});

// auto trigger function
exports.autoBidding = functions.firestore.document('/campaigns/{campaign_id}/bids/{bid_id}').onWrite(async (snap, context) => 
{
	// Exit when the data is deleted.
    if (!snap.after) {
		return null;
    }

	// Grab the current value of what was written to Firestore.
	let original = snap.after.data();
	let campaign_id = context.params.campaign_id;
	let bid_id = context.params.bid_id;
	console.log('autoBidding', campaign_id, bid_id, original);
	
	// Exit if this is not an auto bid.
	if(original.auto === false) return null;

	original.price = Number(original.price);
	original.maxBidPrice = Number(original.maxBidPrice);
	if (original.price >= original.maxBidPrice) {
		console.log('Already at maxBidPrice. ....', original.price, original.maxBidPrice);
		return null;
	}



	/* ***** start auto bidding process ***** */
	var db = admin.firestore();
	var bids_coll_ref = db.collection("campaigns").doc(campaign_id).collection('bids');
	const snapshot = await db.collection("campaigns").doc(campaign_id).collection("bids").get();
	
	var bids = [];
	var auto_bids = [];
	snapshot.forEach(document => {
		let doc = document.data();
		doc.id = document.id;
		doc.price = parseFloat(doc.price);
		doc.maxBidPrice = parseFloat(doc.maxBidPrice);
		doc.desiredRanking = Number(doc.desiredRanking);

		bids.push(doc);
		if (doc.auto && doc.price < doc.maxBidPrice) {
			auto_bids.push(doc);
		}
	});
	
	auto_bids.sort((a, b)=> a.desiredRanking - b.desiredRanking);
	auto_bids.forEach((document, index) => {
		bids.sort((a, b)=> b.price - a.price);
		//log_bids();

		perform_auto_bidding(document, index);
	});

	async function perform_auto_bidding(document, index)
	{
		console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>', index, document.id);
		const current_index = bids.findIndex(element => element.id === document.id);
		if (current_index == -1) {
			console.log('Error: unable to find index of current user in bids. findIndex is not working');
			return null;
		}

		let desiredRanking = document.desiredRanking-1;
		if (current_index <= desiredRanking){
			console.log('Already have Desired Ranking. ....', current_index, desiredRanking);
			return null;
		}

		let targetPrice = bids[desiredRanking].price;
		console.log('current_index:',current_index, 'desiredRanking:',desiredRanking, 'targetPrice:',targetPrice);
		if (targetPrice >= document.maxBidPrice) {
			document.price = document.maxBidPrice;
		} 
		else {
			document.price = (targetPrice + 0.5);
		}

		//bids[current_index].price = document.price;
		bids_coll_ref.doc(document.id).set({price:document.price},{merge:true});
	}

	function log_bids(){
		console.log('=========================== Sorted Auto Bids Start { ===========================');
		auto_bids.forEach((doc, index) => console.log(index, doc.auto, doc.desiredRanking-1, doc.price, doc.maxBidPrice, doc.id));
		console.log('--------');
		bids.forEach((doc, index) => console.log(index, '------', doc.price, '------',doc.id));
		console.log('=========================== Sorted Bids End { ===========================');
	}


	return null;
});





const CloudConvert = require("cloudconvert");
const getCampaignImageHTML = require("./CampaignSummaryImage");

// https://us-central1-interact2002.cloudfunctions.net/getCampaignImage?campaign_id=test12345
exports.getCampaignImage = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const {
      title,
      categories,
      creatorName,
      description,
      thumbnailUrl,
      startDate,
      endDate,
      goal,
      goalValue,
      numInteractions,
      campaignUrl,
    } = request.body.data;

    // THIS IS USING ALINA PAVELS API KEY, WHICH SHOULD BE SWITCHED TO ONE RUN BY INTERACT!!
    // THIS WILL EVENTUALLY RUN INTO RATE LIMITS, AND WILL BE ROTATED ONE MONTH AFTER MY LAST DAY
    const cloudConvert = new CloudConvert(
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjBhNzQ5MzE4ZmJmZTRlNmQzZTBlODQ2ZTM4ZWZlMmViZjAzNGExZmFhMDFjNGYzNjIwNzAwMjVhYjhjNzViNTQ2NzBhM2NkYjU0NmRiYTQiLCJpYXQiOjE2Njc0NTU4MzguOTczMzgsIm5iZiI6MTY2NzQ1NTgzOC45NzMzODEsImV4cCI6NDgyMzEyOTQzOC45NjkxODUsInN1YiI6IjYwNTc1Nzg1Iiwic2NvcGVzIjpbInRhc2sud3JpdGUiLCJ0YXNrLnJlYWQiLCJ3ZWJob29rLnJlYWQiLCJ3ZWJob29rLndyaXRlIl19.l6CHQB5JyvpGLAkKZnZWqycjpomnp1FxdGoDR34FFl1rQO0H5J304xhy7zWT_pc2u7RoHqgfiL33Tb5uH-OGujJVXl0lSBnZaE5QainDQvKyDyjSXDzy2UqrvlTWwDGrcpT31vFpxPBYbF94ihxKpuD-gwUamPyXDVzPBlZdU8ipPnivv7kAox_e1EwKMInrhWwGfyW-F0J5kj_OlsTYpGeEjU6teNHw3XSEHkCWkQtLeacGYo-31UZaQ6diaG7UGrgqSVbXNQeo1hzYHbYrrvpNZEs-0Q7nn5mpvSShVAstZcxEcHA-2F5I3UD8t7pSsom4WclUS9sq0ZdA72o3q6hkqeaozf0eVHBQxeXDW05IB18iKcGMajfnRyUMs3C08A0_GnvQhEyCeJwlpM96-QU8OszzahJkKPBHlgsOKO7G-lzOwdX-85g2bhH5wlaX4pAYoMeEa8N8pl_ubhptaEZcndNwa6B36QCA9QQl0qoUsB80Kv2prKYkWXUUDD3JqK0FQVjX00i0N4I7Fb-ZhhUcxJIwDxLCgEv31593ECQB1Ip7HyJThBDtArJ6O1Yn08JEuQMWn14ziU_pMW--GNk_KLWH37ZR_vM44GmgSwrs71H4_QbEmk-GxvxFMeN4kQQiWWr-0dOs1uUOSda5Ygh8seUgPRV0buxnZe1gHrQ",
      false
    );

    const CAMPAIGN_SUMMARY_IMAGE_HTML_TEMPLATE = getCampaignImageHTML({
      title,
      categories,
      creatorName,
      description,
      thumbnailUrl,
      startDate,
      endDate,
      goal,
      goalValue,
      numInteractions,
      campaignUrl,
    });

    async function generateImgFromCampaignData() {
      let jobInit = await cloudConvert.jobs.create({
        tasks: {
          "import-html": {
            operation: "import/raw",
            file: CAMPAIGN_SUMMARY_IMAGE_HTML_TEMPLATE,
            filename: `Campaign-Panel-${creatorName}-${title}.html`,
          },
          "convert-html-to-png": {
            operation: "convert",
            input_format: "html",
            output_format: "png",
            engine: "chrome",
            input: ["import-html"],
            screen_width: 530,
            screen_height: 1050,
          },
          "export-png-to-url": {
            operation: "export/url",
            input: ["convert-html-to-png"],
            inline: false,
            archive_multiple_files: false,
          },
        },
        tag: "jobbuilder",
      });
      const job = await cloudConvert.jobs.wait(jobInit.id);

      const pngConversionTask = job.tasks.filter(
        (task) => task.name === "export-png-to-url"
      )[0];

      return pngConversionTask?.result?.files[0];
    }

    try {
      const file = await generateImgFromCampaignData();

      response.send({
        status: "success",
        data: { file },
      });
    } catch (error) {
      return { error };
    }
  });
});

const axios = require("axios").default;

// https://us-central1-interact2002.cloudfunctions.net/interact2002/us-central1/getCurrencyConversionRate
exports.getCurrencyConversionRate = functions.https.onRequest(
  (request, response) => {
    cors(request, response, async () => {
      const { currency } = request.body.data;

      let config = {
        headers: {
          apikey: "bIlnJTPbNOzyGREdeHRjYatECy298T3q",
        },
      };

      try {
        const result = await axios.get(
          `https://api.apilayer.com/fixer/convert?to=${currency}&from=USD&amount=1`,
          config
        );
        response.send({
          status: "success",
          data: result?.data?.result,
        });
      } catch (e) {
        response.send({
          status: "error",
          data: "An error occurred; please try again later",
        });
      }
    });
  }
);
