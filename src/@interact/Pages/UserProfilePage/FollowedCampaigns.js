import React from "react";
import "./UserProfilePage.css";
import MeetingBlocks from "./MeetingBlocks";


import { useEffect, useRef, useState } from "react";
import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import CampaignCategorySelect from "../CreateCampaignPage/CampaignCategorySelect";
import { auth, db, logout } from "@jumbo/services/auth/firebase/firebase";
import { collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";
import { getDateFromTimestamp } from "app/utils";
import CampaignsRow from "./CampaignsRow";
import { sortBids } from "app/utils";

function FollowedCampaigns() {
	
	let { id } = useParams();
  	const [user, loading, error] = useAuthState(auth);
	let user_id = id;
	/* let user = {
		uid: "wKKU2BUMagamPdJnhjw6iplg6w82",
		photoURL:
		"https://sm.ign.com/ign_tr/cover/j/john-wick-/john-wick-chapter-4_178x.jpg",
		name: "biby",
		email: "bibyliss@gmail.com",
		customerId: "cus_MlMuNeDDsNVt2Z",
	}; */


	const meetingBlockRef = useRef(null);
	const navigate = useNavigate();
	const [currentCampaigns, setCurrentCampaigns] = useState([]);
	const [interactionCampaigns, setInteractionCampaigns] = useState([]);

	const getCampaignData = async () => {
		let current_campaigns = [];
		let interaction_campaigns = [];

		const docSnap = await getDocs(collection(db, "campaigns"));
		if (!docSnap.empty) {
			// console.log(docSnap.docs)
			for (let document of docSnap.docs) 
			{
				const doc = document.data();
				const endDate = doc.endDate?.seconds;
				const bidPosition = await getBidPosition(document.id);
				const vipMultiplier = await getChanceMultiplier(doc.creatorId);
				const new_doc = {
					title: doc.title,
					endDateTime: getDateFromTimestamp({
						timestamp: endDate
					}),
					goal: doc.goal,
					goalValue: doc.goalValue,
					username: doc.creatorName,
					id: document.id,
					bidPosition: bidPosition,
					winningChance: vipMultiplier * 100
				};

				current_campaigns.push(new_doc);

				// check user in these collections if found then add this campaign into interaction_campaigns
				// if (
				// 	(await cus(document.id, "top3AuctionWinners")) === true ||
				// 	(await cus(document.id, "normalAuctionWinners")) === true ||
				// 	(await cus(document.id, "GiveawayWinners")) === true
				// 	) 
				// {
				// 	interaction_campaigns.push(new_doc);
				// }
			}
		}
		setCurrentCampaigns(current_campaigns);
		setInteractionCampaigns(interaction_campaigns);
	};

	const getBidPosition = async (documentId) => {
    let bidsSnapshot = await getDocs(query(collection(db, "campaigns", documentId, "bids")));
    let bidsList = [];
    bidsSnapshot.forEach((doc) => {
      bidsList.push(doc.data());
    });
    bidsList = sortBids(bidsList);
    if (!user?.email) return;
    let position = bidsList.findIndex(
      (element) => element.email === user.email
    );

		return ++position;
  };

	const getUserLostHistory = async (creator_id, user_id) => {
    const campaignHistoryUsers = await getDoc(
      doc(db, "users", creator_id, "GiveawayLossHistory", user_id)
    );
    if (doc.exists) {
      const { numOfLoss } = campaignHistoryUsers.data();

			console.log(numOfLoss);
      return parseInt(numOfLoss);
    }
    return 0;
  };

  const getChanceMultiplier = async (creatorId) => {
    if (!user?.uid) return 0;
		if (creatorId == undefined) return 0;

    let lostHistory = await getUserLostHistory(creatorId, user.uid);

    let vipMultiplier = 25;

    if (lostHistory === 1) {
      vipMultiplier = 50;
    } else if (lostHistory > 1) {
      vipMultiplier = 100;
    }

    return vipMultiplier;
  };

	// checkUserSelection
	const cus = async (campaignID, collectionName) => {
		const docSnap = await getDoc(doc(db, "campaigns", campaignID, collectionName, user?.uid));
		if (docSnap.exists()) {
			return true;
		}
		return false;
	};

	useEffect(() => {
		getCampaignData();
		meetingBlockRef.current.scrollTo(360 * 4, 0);
	}, [user, loading, id]);

	return (
		<div style={{ paddingLeft: 100, paddingRight: 100 }}>
		<div
			ref={meetingBlockRef}
			className="horizontalScroll"
			style={{
				display: "flex",
				overflowX: "scroll",
				padding: 20,
				marginLeft: -120,
				paddingLeft: 140,
				marginRight: -20,
			}}
			>
			<MeetingBlocks passed={true} />
			<MeetingBlocks passed={true} />
			<MeetingBlocks passed={true} />
			<MeetingBlocks passed={true} />
			<MeetingBlocks />
			<MeetingBlocks />
			<MeetingBlocks />
			<MeetingBlocks />
			<MeetingBlocks />
			<MeetingBlocks />
		</div>
		<div style={{ margin: 20 }}>
		</div>
		<br></br>
		<CampaignsRow
			currentCampaigns={currentCampaigns}
			heading="Followed campaigns"
		/>
		<CampaignsRow
			currentCampaigns={interactionCampaigns}
			heading="Interaction acquired"
		/>
		</div>
	);
}

export default FollowedCampaigns;
