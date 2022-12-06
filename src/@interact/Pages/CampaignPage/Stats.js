import "./CampaignPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Socials from "@interact/Components/Socials/Socials";
import{Box,Divider,LinearProgress,Stack,Tooltip,Typography}from"@mui/material";
import InteractButton from "@interact/Components/Button/InteractButton";
import InfoTooltip from "@interact/Components/InfoTooltip";
import Span from "@jumbo/shared/Span";
import { formatMoney } from "app/utils";
import useCurrentUser from "@interact/Hooks/use-current-user";
import { followUser,fetchUserByName } from "../../../firebase";
import { db } from "@jumbo/services/auth/firebase/firebase";
import { doc,query, onSnapshot } from "firebase/firestore";

export default function Stats({ campaignData, bids }) {
	let stats = campaignData.stats ?? {};
	const { user } = useCurrentUser();
	const [targetUser, setTargetUser] = useState({});
	useEffect(async ()  => {
		let defaultUser = await fetchUserByName(campaignData?.creatorName);
		setTargetUser(defaultUser);
		const userListener = onSnapshot(query(doc(db, "users",defaultUser.id)), (querySnapshot) => {
			let userData = querySnapshot.data();
			const id = querySnapshot.id;
			setTargetUser({ ...userData, id });
		});
  	}, [campaignData?.creatorName]) // erased campaignData.person, so changed it to creatorName
	return (
		<Stack
		direction="row"
		justifyContent="space-between"
		alignItems="center"
		spacing={4}
		>
		<GoalDisplay campaignData={campaignData} bids={bids} />
		<Stack
			flex={1}
			mb = {10}
			direction="row"
			alignItems="center"
			justifyContent="space-evenly"
			spacing={4}
			>
			<Stack
			spacing={2}
			direction="row"
			divider={<Divider orientation="vertical" flexItem />}
			>
			<FollowButton user={user} targetUser={targetUser}/>
			<StatDisplay statValue={targetUser && targetUser?.followers ? targetUser?.followers.length : 0} statTitle="Followers" />
			<StatDisplay
				statValue={campaignData.numGiveawayEntries ?? 0}
				statTitle="Giveaway entries"
			/>
			<StatDisplay
				statValue={campaignData.numAuctionBids ?? 0}
				statTitle="Auction bids"
			/>
			{stats?.category ? (
				<StatDisplay statValue={stats?.category} statTitle="Category" />
			) : null}
			</Stack>
			<Stack spacing={1} direction="row" alignItems="center">
			<Socials type="discord" />
			<Socials type="tiktok" />
			<Socials type="twitter" />
			<Socials type="facebook" />
			<Socials type="instagram" />
			</Stack>
		</Stack>
		</Stack>
	);
}

export function FollowButton({ user, targetUser }) {
	const navigate = useNavigate();
	let selectedState = user !== undefined && targetUser !== {} && targetUser?.followers?.includes(user?.id) ? true : false;

	function onFollowButtonClicked() {
		if(user === undefined) {
			console.log("You need to sign in to follow other users");
			navigate("/a/signin");
			return;
		}
		//Call function for follow/unfollow
		console.log("calling follow User")
		selectedState ? followUser(user, targetUser, false) : followUser(user, targetUser, true);
		selectedState = !selectedState;
	}

	return (
		<InteractButton sx={{ width: 120 }} variant={selectedState ? "contained" : "outlined"}
			disabled={user?.id === targetUser?.id ? true : false} onClick={() => onFollowButtonClicked()}>
		<Span sx={{ color: selectedState ? "primary.contrastText" : "primary.main" }} >
			{selectedState ? "Following ✓" : "Follow"}
		</Span>
		</InteractButton>
	);
}

export function GoalDisplay({ campaignData, bids }) 
{
	let goalValue = parseFloat(campaignData.goalValue ?? 1);
	let campaignGoalTotal = parseFloat(campaignData.campaignVIPtotal ?? 0);

	bids = bids.slice(0, campaignData.numAuctionInteractions);
	let campaignAuctionsTotal = 0;
	bids.forEach((document, index) => {
		campaignAuctionsTotal += parseFloat(document.price);
	});
	campaignGoalTotal += campaignAuctionsTotal;

	return (
		<Box id="goalDisplay" sx={{ width: 400 }}>

			<LinearProgress variant="determinate" value={(campaignGoalTotal / goalValue) * 100} sx={{ color: "primary.main" }} />
		
			<Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", mt: 1, }} >

				<Typography variant="h1" sx={{ color: "primary.main", fontSize: 32, fontWeight: 500 }} >
					${Math.round(campaignGoalTotal)}
				</Typography>

				<Box sx={{display: "flex",flex: 1,flexDirection: "row",alignItems: "center",justifyContent: "flex-end",mt: 0.5,}} >
					<Typography variant="body" ml={2} >
						{campaignData.stats?.targetTagline}
						<Span sx={{ color: "primary.main", fontWeight: 500, mr: 0.5 }}>
						{" "}
						${formatMoney(goalValue)}
						</Span>
						<InfoTooltip title="Interactions will still occur even if the goal is not reached, the goal is non-binding." />
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export function StatDisplay({ statValue, statTitle }) {
	return (
		<Box>
		<Typography variant="h4" sx={{ color: "primary.main", fontWeight: 500, my: 0 }} >
			{statValue}
		</Typography>
		<Typography variant="caption" noWrap>
			{statTitle}
		</Typography>
		</Box>
	);
}
