import TopBar from "@interact/Components/TopBar/TopBar";
import "./CampaignPage.css";
import CampaignInfo from "@interact/Components/CampaignInfo/CampaignInfo";
import Leaderboard from "@interact/Components/Leaderboard/Leaderboard";
import Giveaway from "./Giveaway";
import Auction from "./Auction";
import Faq from "@interact/Components/Faq/Faq";

import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./Header";
import Stats from "./Stats";
import { useEffect, useState } from "react";

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
import { Box, Slide, Stack } from "@mui/material";
import UserCampaignStatus from "@interact/Components/CampaignSnippet/UserCampaignStatus";
import JumboContentLayout from "@jumbo/components/JumboContentLayout";
import { auth, db } from "@jumbo/services/auth/firebase/firebase";
import { useJumboLayoutSidebar, useJumboTheme } from "@jumbo/hooks";
import { sortBids } from "app/utils";
import useCurrentUser from "@interact/Hooks/use-current-user";
import { saveToRecentCampaignHistory } from "../../../firebase";
import React from "react";
import { LAYOUT_NAMES } from "../../../app/layouts/layouts";
import { useJumboApp } from "@jumbo/hooks";

function CampaignPage(userData) {
  const { user } = useCurrentUser();
  const [vipChanceMultiplier, setVipChanceMultiplier] = useState(25);
  const [freeChanceMultiplier, setFreeChanceMultiplier] = useState(1);
  const [campaignData, setCampaignData] = useState({});
  const [bids, setBids] = useState([]);
  const [giveaways, setGiveaways] = useState([]);
  const [comments, setComments] = useState([]);
  const [supporters, setSupporters] = useState([]);
  const [winningChances, setWiningChances] = useState({ vip: 100, free: 100 });
  const [hasUserPurchasedVIPEntry, setHasUserPurchasedVIPEntry] =
    useState(false);
  const [hasUserEnteredAuction, setHasUserEnteredAuction] = useState(false);
  const [hasUserClaimedFreeEntry, setHasUserClaimedFreeEntry] = useState(false);
  const [userAuctionPosition, setUserAuctionPosition] = useState(0);
  const [isCampaignEnded, setIsCampaignEnded] = useState(false);
  const [isCampaignScheduled, setIsCampaignScheduled] = useState(false);

  let routeParams = useParams();
  const [campaignId, setCampaignId] = useState(routeParams.campaignId);

  const num_giveaway = 10;
  const num_auction = 10;
  const { theme } = useJumboTheme();
  const navigate = useNavigate();

  const [medal, setMedal] = useState(null);

  if (!campaignId) navigate("/a/invalidcampaign"); //update this to

  /* let user = {
		uid: "wKKU2BUMagamPdJnhjw6iplg6w82",
		photoURL: "https://sm.ign.com/ign_tr/cover/j/john-wick-/john-wick-chapter-4_178x.jpg",
		name: "biby",
		email: "bibyliss@gmail.com",
		customerId: "cus_MlMuNeDDsNVt2Z",
	}; */

  useEffect(async () => {
    //if (loading) return;
    //if (!user) return navigate("/"); // this page should be browsable without login
    console.log("Campaign id", campaignId);
    let id = await checkCampaignID();
    //console.log('campaignId >>>>>', campaignId);
    getCampaignData(id);
    checkPurchasedEntry();
    getMedalStatus();
  }, [user]);

  const getMedalStatus = async () => {
    const grossRevenue = user?.grossRevenue;

    if (grossRevenue === undefined) {
      setMedal(null);
    } else if (grossRevenue <= 1000) {
      setMedal("/images/pages/profile/bronzeCreatorRank.png");
    } else if (grossRevenue <= 10000) {
      setMedal("/images/pages/profile/silverCreatorRank.png");
    } else if (grossRevenue <= 100000) {
      setMedal("/images/pages/profile/goldCreatorRank.png");
    } else if (grossRevenue <= 1000000) {
      setMedal("/images/pages/profile/platinumCreatorRank.png");
    } else {
      setMedal("/images/pages/profile/diamondCreatorRank.png");
    }
  };

  const checkAuthentication = () => {
    if (!user) {
      navigate(`/a/signup?redirect=/c/${campaignId}`);
      return false;
    }
    return true;
  };

  const checkCampaignID = async () => {
    // check if the campaignId is a uid or custom_url
    const docSnap = await getDoc(doc(db, "campaigns", campaignId));
    if (!docSnap.exists()) {
      const customURLQ = query(
        collection(db, "campaigns"),
        where("customURL", "==", campaignId)
      );
      const customURLQuerySnapshot = await getDocs(customURLQ);
      var docSnapshots = customURLQuerySnapshot.docs[0];
      if (docSnapshots.exists()) setCampaignId(docSnapshots.id);
      return docSnapshots.id;
    } else {
      setCampaignId(campaignId);
      return campaignId;
    }
  };

  const getCampaignData = async (_id = null) => {
    //campaigns change listener
    let id_for_campaign = _id ? _id : campaignId;
    const campaignsListener = onSnapshot(
      query(doc(db, "campaigns", id_for_campaign)),
      (querySnapshot) => {
        let _campaignData = querySnapshot.data();
        console.log("Campaign Data", _campaignData);
        setCampaignData(_campaignData);
        saveToRecentCampaignHistory(id_for_campaign, user);
        //Check Campaign End Time
        let campaignEndDate = new Date(_campaignData?.endDate?.seconds * 1000);
        let campaignStartDate = new Date(
          _campaignData?.startDate?.seconds * 1000
        );
        let now = new Date();
        if (campaignEndDate - now < 0) setIsCampaignEnded(true);
        if (campaignStartDate - now > 0) setIsCampaignScheduled(true);
        if (Object.entries(_campaignData).length > 0)
          getChanceMultiplier(_campaignData);
      }
    );

    //Bids change listener
    const bidsListener = onSnapshot(
      query(collection(db, "campaigns", campaignId, "bids")),
      (querySnapshot) => {
        let bidsList = [];
        querySnapshot.forEach((doc) => {
          bidsList.push(doc.data());
        });
        bidsList = sortBids(bidsList);
        setBids(bidsList);
        if (!user?.email) return;
        let position = bidsList.findIndex(
          (element) => element.email === user.email
        );
        setUserAuctionPosition(++position);
        if (position > 0) setHasUserEnteredAuction(true);
      }
    );

    const commentsListener = onSnapshot(
      query(collection(db, "campaigns", campaignId, "comments")),
      (querySnapshot) => {
        let commentsList = [];
        querySnapshot.forEach((doc) => {
          commentsList.push(doc.data());
        });
        setComments(commentsList);
      }
    );

    const giveawayListener = onSnapshot(
      query(collection(db, "campaigns", campaignId, "Giveaway")),
      (querySnapshot) => {
        let giveawayList = [];
        querySnapshot.forEach((doc) => {
          giveawayList.push(doc.data());
        });
        setGiveaways(giveawayList);
      }
    );
  };

  const getUserLostHistory = async (creator_id, user_id) => {
    const campaignHistoryUsers = await getDoc(
      doc(db, "users", creator_id, "GiveawayLossHistory", user_id)
    );
    if (doc.exists) {
      const { numOfLoss } = campaignHistoryUsers.data();
      return parseInt(numOfLoss);
    }
    return 0;
  };

  const getChanceMultiplier = async (_campaignData) => {
    if (!user?.uid) return;
    let lostHistory = await getUserLostHistory(_campaignData.creatorId, user.uid);
    lostHistory = parseInt(lostHistory);

    let freeMultiplier = 1;
    let vipMultiplier = 25;

    if (lostHistory === 1) {
      freeMultiplier = 2;
      vipMultiplier = 50;
    } else if (lostHistory > 1) {
      freeMultiplier = 4;
      vipMultiplier = 100;
    }
    setVipChanceMultiplier(vipMultiplier);
    setFreeChanceMultiplier(freeMultiplier);
    getChanceOfwinning(_campaignData, vipMultiplier, freeMultiplier);
  };

  const getChanceOfwinning = async (
    _campaignData,
    vipMultiplier,
    freeMultiplier
  ) => {
    const docSnap = await getDocs(
      collection(db, "campaigns", campaignId, "Giveaway")
    );
    //console.log("doc snap", docSnap);

    if (!docSnap.empty) {
      let TotalPoolEntries = 0;
      for (let document of docSnap.docs) {
        let doc = document.data();
        doc.price = Number(doc.price);

        let noOfEntries = 1;
        if (doc.price > 0) noOfEntries = 25;

        let previousLoss = await getUserLostHistory(
          _campaignData.creatorId,
          document.id
        );
        if (previousLoss === 1) noOfEntries = noOfEntries * 2;
        else if (previousLoss > 1) noOfEntries = noOfEntries * 4;

        TotalPoolEntries = TotalPoolEntries + noOfEntries;
      }

      if (TotalPoolEntries !== 0) {
        let vipChances = Math.round((vipMultiplier / TotalPoolEntries) * 100);
        let freeChances = Math.round((freeMultiplier / TotalPoolEntries) * 100);

        setWiningChances({ vip: vipChances, free: freeChances });
      }
    }
  };

  const checkPurchasedEntry = async () => {
    if (!user?.uid) return;
    const docRef = doc(db, "campaigns", campaignId, "Giveaway", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data.entryType === "free") {
        setHasUserClaimedFreeEntry(true);
      } else if (data.entryType === "vip") {
        setHasUserClaimedFreeEntry(true);
        setHasUserPurchasedVIPEntry(true);
      }
      //console.log("User Giveaway", data);
    } else {
      console.log("No such document!");
    }
  };

  const saveBid = async (amount, auto, desiredRanking, maxBidPrice) => {
    if (!checkAuthentication()) return;
    var userSnap = await getDocs(
      query(collection(db, "users"), where("uid", "==", user.uid))
    );
    let user_data = userSnap.docs[0];
    await setDoc(doc(db, "campaigns", campaignId, "bids", user.uid), {
      person: {
        username: user_data.data().name,
        id: user_data.id,
        photoURL: user.photoURL,
      },
      desiredRanking,
      maxBidPrice,
      price: amount,
      auto: auto,
      email: user.email,
      time: serverTimestamp(),
    });

    const snapshot = await getCountFromServer(
      collection(db, "campaigns", campaignId, "bids")
    );
    const counter = snapshot.data().count;
    setDoc(
      doc(db, "campaigns", campaignId),
      { numAuctionBids: counter },
      { merge: true }
    );
  };

  function renderUserCampaignStatus() {
    if (
      hasUserEnteredAuction ||
      hasUserPurchasedVIPEntry ||
      hasUserClaimedFreeEntry
    ) {
      let statusType = "bid";
      let chances = 0;
      if (hasUserPurchasedVIPEntry) {
        chances = winningChances.vip;
        statusType = "giveaway";
      } else if (hasUserClaimedFreeEntry) {
        chances = winningChances.free;
        statusType = "giveaway";
      }
      return (
        <Stack
          alignItems="center"
          sx={{
            position: "fixed",
            bottom: 10,
            left: "50%",
            zIndex: 4000,
            width: "auto",
            transform: "translateX(-50%)",
          }}
        >
          <Box
            sx={{
              backgroundColor: "primary.translucent",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 30px",
              p: 1,
              borderRadius: 2,
            }}
          >
            <UserCampaignStatus
              statusType={statusType}
              userAuctionPosition={userAuctionPosition}
              userGiveawayWinChance={chances}
              auctionLeaderboardSpots={campaignData.numAuctionInteractions}
              showUserAvatar
              user={user}
            />
          </Box>
        </Stack>
      );
    } else {
      return null;
    }
  }

  if (!campaignData) return <div>Loading...</div>;

  return (
    <JumboContentLayout
      layoutOptions={{
        wrapper: {
          sx: {
            [theme.breakpoints.up("lg")]: {
              px: 10,
            },
            [theme.breakpoints.up("xxl")]: {
              px: 30,
            },
          },
        },
      }}
    >
      <Box className="CampaignPage">
        {renderUserCampaignStatus()}
        <Header campaignData={campaignData} badgeUrl={medal} />
        <p>{localStorage.getItem("data")}</p>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2.669}
          sx={{
            position: "relative",
            py: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: 1,
              mr: 0,
              borderRadius: 3,
              overflow: "hidden",
              paddingBottom: "36.921%",
              position: "relative",
            }}
          >
            <iframe
              style={{ flex: 1, position: "absolute" }}
              src={campaignData?.videoUrl}
              title="YouTube video player"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Box>

          {num_giveaway > 0 && campaignId != null ? (
            <Giveaway
              campaignId={campaignId}
              isCampaignEnded={isCampaignEnded}
              isCampaignScheduled={isCampaignScheduled}
              campaignData={campaignData}
              hasUserClaimedFreeEntry={hasUserClaimedFreeEntry}
              hasUserPurchasedVIPEntry={hasUserPurchasedVIPEntry}
              setHasUserClaimedFreeEntry={setHasUserClaimedFreeEntry}
              setHasUserPurchasedVIPEntry={setHasUserPurchasedVIPEntry}
              vipChanceMultiplier={vipChanceMultiplier}
              freeChanceMultiplier={freeChanceMultiplier}
              winningChances={winningChances}
            />
          ) : null}
        </Stack>

        <Stats campaignData={campaignData} bids={bids} />

        {num_auction > 0 ? (
          <Stack
            direction="row"
            spacing={1.4921}
            style={{
              padding: "20px 0",
            }}
          >
            <Leaderboard campaignData={campaignData} bids={bids} />
            <Auction
              isCampaignEnded={isCampaignEnded}
              isCampaignScheduled={isCampaignScheduled}
              bidAction={saveBid}
              campaignData={campaignData}
              bids={bids}
              userAuctionPosition={userAuctionPosition}
              hasUserEnteredAuction={hasUserEnteredAuction}
              setHasUserEnteredAuction={setHasUserEnteredAuction}
            />
          </Stack>
        ) : null}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ flex: 1, mt: 1.21, mr: 3, mb: 7 }}>
            {/* <CreatorName campaignData={campaignData} /> */}
            <CampaignInfo
              isCampaignEnded={isCampaignEnded}
              campaignData={campaignData}
              giveaways={giveaways}
              bids={bids}
              comments={comments}
              campaignId={campaignId}
              // supporters={supporters}
            />
          </Box>
          <Box sx={{ flex: 1, mt: 5, mb: 7 }}>
            <Faq campaignData={campaignData} />
          </Box>
        </Box>
      </Box>
    </JumboContentLayout>
  );
}

export default CampaignPage;
