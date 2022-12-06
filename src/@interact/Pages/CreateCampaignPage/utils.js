const { db } = require("@jumbo/services/auth/firebase/firebase");
const { addDoc, collection } = require("firebase/firestore");

// this is where we set the init values for the campaign creation
export async function initCampaignDoc(user) {
  var docRef = {};
  try {
    docRef = await addDoc(collection(db, "campaigns"), {
      FAQAnswers: { 0: "", 1: "" },
      auctionMinBid: 1.5,
      campaignGoalTotal: 0,
      campaignStatus: "draft",
      campaignVideoLink: "",
      campaignVideoThumbnailLink: "",
      categories: ["Gaming"],
      creatorName: "creator",
      creatorWeeklyAvailability: 5,
      currency: "CAD",
      currencyExchangeRate: 1,
      customSavedURL: null,
      customURL: "",
      description: "",
      durationDays: 10,
      endDateTime: { seconds: 1668623400, nanoseconds: 0 },
      giveawayVIPEntryCost: 3.5,
      goal: "",
      goalValue: 0,
      // header: { title: "Game" },
      interactMethod: "googleMeet",
      interactionDurationTime: 30,
      interactionEndDateTime: { seconds: 1673809200, nanoseconds: 0 },
      interactionStartDateTime: { seconds: 1668970800, nanoseconds: 0 },
      interactionTopDurationTime: 60,
      interactionWindow: 10,
      lastCompletedTabIndex: -1,
      numAuctionInteractions: 0,
      numGiveawayInteractions: 0,
      person: { id: "PNUa4JcusGMYowApbfPLflxAtap2", username: "TestUser" },
      savedCustomURL: null,
      shouldReserveURL: false,
      socials: {
        discord: "",
        facebook: "",
        instagram: "",
        reddit: "",
        tiktok: "",
        twitch: "",
        twitter: "",
        youtube: "",
      },
      startDateTime: { seconds: 1667932200, nanoseconds: 0 },
      title: "",
    });
    
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  return docRef.id;
}
