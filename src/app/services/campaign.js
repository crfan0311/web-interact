import axios from "./config";

import { db } from "@jumbo/services/auth/firebase/firebase";
import {
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  serverTimestamp,
  onSnapshot,
  getCountFromServer,
} from "firebase/firestore";

export const campaignServices = {
  /**
   * Returns `true` if user has a campaign whose interaction's endDate overlaps with newCampaignStartDate
   */
  hasOverlappingCampaign: async (
    { userId, newCampaignStartDate } = {
      userId: "1BjTRiM3l2VpQPmH2ri6",
    }
  ) => {
    const campaigns = (await campaignServices.getUserData(userId)).campaigns;
    for (const campaign of campaigns) {
      if (campaign.campaignStatus !== "draft") {
        const campaignO = await campaignServices.getCampaign(
          campaign?.campaignId
        );
        if (
          campaignO?.interactionEndDateTime?.seconds >
          newCampaignStartDate?.seconds
        ) {
          // Parse unix interactionEndDateTime.seconds and pretty print the date
          const date = new Date(
            campaignO?.interactionEndDateTime?.seconds * 1000
          );
          const dateString = date.toLocaleDateString();
          return dateString;
        }
      }
    }
  },

  getCampaign: async (campaignId) => {
    const docRef = doc(db, "campaigns", campaignId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) return docSnap.data();
  },
  getUserData: async (UserDocId) => {
    const docRef = doc(db, "users", UserDocId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
  },
};
