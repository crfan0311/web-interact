import { useState, useEffect, useRef } from "react";
import { Divider, Typography, Box, Input, Stack, FormControlLabel, Checkbox, IconButton } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import InfoTooltip from "../../Components/InfoTooltip";
import InteractButton from "../../Components/Button/InteractButton";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Span from "@jumbo/shared/Span";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db, logout } from "@jumbo/services/auth/firebase/firebase";
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Select from "react-select";
import {query, setDoc, serverTimestamp, getCountFromServer, increment, collection, getDoc, getDocs, where, addDoc, updateDoc, doc} from "firebase/firestore";
import Modal from "@mui/material/Modal";
import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import { Country, State, City } from "country-state-city";
import { getRequest, postRequest } from "../../../utils/api";
import supported_transfer_countries from "./countrylist";
import ConfirmVIPPopup from "./ConfirmVIPPopup";

import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import "./CampaignPage.css";
import { formatMoney } from "app/utils";
import { fetchUserByName, followUser } from '../../../firebase';
import useCurrentUser from "@interact/Hooks/use-current-user";
import PaymentRequestForm from "@interact/Components/Stripe/PaymentRequestForm";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	padding: 0,
	width: 400,
	borderRadius: 15
};

export default function Giveaway({
	campaignId,
	isCampaignEnded,
	isCampaignScheduled,
	campaignData,
	hasUserClaimedFreeEntry,
	hasUserPurchasedVIPEntry,
	setHasUserClaimedFreeEntry,
	setHasUserPurchasedVIPEntry,
	vipChanceMultiplier,
	freeChanceMultiplier,
	winningChances,
}) {
	const stripe = useStripe();

	const elements = useElements();
	const [priceToPay,setPriceToPay] = useState(0);
	const [entryType,setEntryType] = useState(null);
	const [modal, setModal] = useState(false);
	const [clientemail, isClientEmail] = useState("");
	const [name, setName] = useState("");
	const [loggedInUserData, setLoggedInUserData] = useState("");

	const [useSaveCard, setUseSaveCard] = useState(false);

	const { user } = useCurrentUser();
	const [currentUser, setCurrentUser] = useState(null);
	const [open, setOpen] = useState(false);
	const [openPopup, setOpenPopup] = useState(false);
	const [selectedPaymentMethod,setSelectedPaymentMethod] = useState(null);
	const [loading, setLoading] = useState(false);

	const [paymentMethods, setPaymentMethods] = useState([]);
	const [userCustomerId, setUserCustomerId] = useState(null);

	const navigate = useNavigate();
	const Swal = useSwalWrapper();

	const fetchUserName = async () => {
		try {
			const q = query(collection(db, "users"), where("uid", "==", user?.uid));
			const colledoc = await getDocs(q);
			const data = colledoc.docs[0].data();
			setName(data.name);
			isClientEmail(data.email);

			setUserCustomerId(data.customerId);
			data.id = colledoc.docs[0].id;
			setCurrentUser(data);
		} catch (err) {
			console.error(err);
		}
	};
	useEffect(() => {
		//console.log('user >>>', user, campaignId);
        if (user?.uid){
			fetchUserName();
			getDataGiveaway();
		}

    }, [user]);
    localStorage.setItem('name', name);

    const getDataGiveaway = async () => {
        const docRef = doc(db, "campaigns", campaignId, 'Giveaway', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            setLoggedInUserData(data);            
        }
    }

    var vipEntryPrice = campaignData.giveawayVIPEntryCost ?? 0;
    var freeEntryPrice = "0";

    const saveDataInGiveaway = async (data) => {
        await setDoc(doc(db, "campaigns", campaignId, 'Giveaway', user?.uid), data);

		const snapshot = await getCountFromServer(collection(db, "campaigns", campaignId, 'Giveaway'));
		const counter = snapshot.data().count;
		console.log('Giveaway count: ', counter);

		setDoc(doc(db, "campaigns", campaignId), {numGiveawayEntries:counter}, { merge: true });


		if(data.price > 0 && data.status === 'succeeded' && data.stripe_customer_id != null)
		{
			setDoc(
				doc(db, "users", campaignData.creatorId, 'Contributions', user.uid), 
				{contributionTotal: increment(data.price), interactionTotal: increment(1)}, 
				{ merge: true }
			);

			setDoc(doc(db, "campaigns", campaignId), {campaignVIPtotal: increment(data.price)}, { merge: true });
		}
    }

    const collectFreeEntryPayment = async () => {
    	var data = {
    		email: clientemail,
    		price: priceToPay,
    		stripe_customer_id: null,
    		payment_id: null,
    		entryType: 'free',
    		status: 'succeeded',
    		campaignId: campaignId,
    		type: "Giveaway",
    		time: serverTimestamp(),
    	}

    	saveDataInGiveaway(data);

    	return true;
    }


    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

	const checkAuthentication = () => {
		if(!user) {
			navigate(`/a/signup?redirect=/c/${campaignId}`);
			return false;
		};
		return true;
	}
	const followCampaign = async () => {
        const targetUser = await fetchUserByName(campaignData?.creatorName);
		console.log("user", user);
		console.log("targetuser", targetUser);
		if(user === undefined) {
            console.log("You need to sign in to follow user");
            navigate("/a/signin");
            return;
        }
        if(!targetUser?.followers?.includes(user?.id)) {
            followUser(user, targetUser);
        }
    }
	const buyGiveawayAlert = () => {
		if(!checkAuthentication()) return;
		followCampaign();
		Swal.fire({
			title: "Skill-testing question",
			text: "Before you make this purchase, you must correctly answer the math question below:",
			icon: "warning",
			html: (
				<div>
				<p>9+10+21 = ?</p>
				<Input id="answer" type={"number"} />
				</div>
			),
			showCancelButton: true,
			confirmButtonText: "Confirm",
			cancelButtonText: "Cancel",
			reverseButtons: true,
			preConfirm: () => {
				const answer = Swal.getPopup().querySelector("#answer").value;
				if (answer != 40) {
					Swal.showValidationMessage(`Please try again`);
				}
				return { answer: answer };
			},
		}).then((result) => {
			if (result.value.answer == 40) {
				// setHasUserEnteredGiveaway(true); can't set these to true until we get a confirmation from stripe.
				//setHasUserPurchasedVIPEntry(true);
				/* Swal.fire(
				"Correct!",
				"You'll now be taken to the payment page.",
				"success"
				).then(()=>{
				setPriceToPay(vipEntryPrice);
				setEntryType('vip');
				toggleModal();
				}); */

				getRequest(`/a/customer/method/${userCustomerId}`)
				.then((resp) => {
					const mdata = resp.data.paymentmethod.data;
					console.log(resp.data.paymentmethod.data);
					if (mdata.length > 0) {
						setPaymentMethods(resp.data.paymentmethod.data);
						setSelectedPaymentMethod(resp.data.paymentmethod.data[0].id);
						setOpenPopup(true);
					} else {
						setOpen(true);
					}
				})
				.catch((err) => {
					console.log(err);
				});
				
			} else {
				Swal.fire(
				"Incorrect.",
				"We were expecting a different answer... try again!",
				"error"
				);
			}
		});
	};

	const freeGiveawayAlert = () => {
		if(!checkAuthentication()) return;
		followCampaign();
		Swal.fire({
			title: "Claim free entry?",
			text: "Would you like to claim this free giveaway entry?",
			showCancelButton: true,
			confirmButtonText: "Yes, Claim!",
			cancelButtonText: "Cancel",
			reverseButtons: true,
		}).then((result) => {
			if (result.value) {
				setPriceToPay(freeEntryPrice);
				setEntryType('free');
				if(!collectFreeEntryPayment()){
					return;
				};
				setHasUserClaimedFreeEntry(true);
				Swal.fire(
					"Claimed!",
					"You've claimed a free entry for this giveaway. Good luck!",
					"success"
				);
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				/* Read more about handling dismissals below */
				// close alert
			}
		});
	};

	useEffect(()=>{
		document.getElementById("giveawayCard").onmousemove = e => {
		for(const card of document.getElementsByClassName("giveawayCard")) {
			const rect = card.getBoundingClientRect(),
		
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;
		
			card.style.setProperty("--mouse-x", `${x}px`);
			card.style.setProperty("--mouse-y", `${y}px`);
		};
		}
	})

	const handleBackPopup = () => {
    setOpen(false);
    setOpenPopup(true);
  }

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const closefunction = () => {
		setOpenPopup(false);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardNumberElement),
		})
		.then((resp) => {
			const pmid = resp.paymentMethod.id;
			if (pmid && userCustomerId) {
				console.log("here");
				getRequest(`/a/method/attach/${userCustomerId}/${pmid}`)
				.then((resp) => {
					setOpen(false);
					if (resp.data.added) {
						setPaymentMethods(resp.data.paymentmethod.data);
						setSelectedPaymentMethod(resp.data.paymentmethod.data[0].id);
						setLoading(false);
						setOpenPopup(true);
					} else {
						setLoading(false);
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "An error occurred",
						});
					}
				})
				.catch((err) => {
					/*Handle Error */
					setOpen(false);
					setLoading(false);
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "An error occurred",
					});
				});
			}
			else {
				setOpen(false);
				setLoading(false);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "An error occurred",
				});
			}
			console.log(resp);
		})
		.catch((err) => {
		/* Handle Error*/
			console.log(err);
			setOpen(false);
			setLoading(false);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "An error occurred",
			});
		});
	}

	const resturnOption = () => {
		const options = supported_transfer_countries.map((item, index) => {
			return { value: item.code, label: item.country };
		});
		return options;
	};
 
	return (
		<>
			<ConfirmVIPPopup
				openstate={openPopup}
				settheOpenPopup={setOpenPopup}
				closefunction={closefunction}
				allprimarymethod={paymentMethods}
				onaddclick={handleOpen}
				price={vipEntryPrice}
				userCustomerId={userCustomerId}
				selectPaymentMethod={selectedPaymentMethod}
				setSelectedPaymentMethod={setSelectedPaymentMethod}
			/>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div className="wrapper">
						<div className="innerWrapper payment-popup-wrapper">
							<IconButton onClick={handleBackPopup} style={{ padding: 0, marginBottom: '15px' }}> <WestIcon /> </IconButton>
							<div className="paymentRequestDiv">
											<PaymentRequestForm price={vipEntryPrice} handleSubmit={handleClose}/>
							</div>
							<div className="payment-divider" />
							<div className="stripe-card-wrapper">
								<div className="number_input">
										<label htmlFor="#" className="stripe-card_field_label">Card number</label>
										<CardNumberElement className={"number_input"}  options={{ showIcon: true }} />
								</div>
								<div className="expiry_input">
										<label htmlFor="#" className="stripe-card_field_label">Expiration</label>
										<CardExpiryElement className={"expiry_input"} />
								</div>
								<div className="cvc_input">
										<label htmlFor="#" className="stripe-card_field_label">CVC</label>
										<CardCvcElement className={"cvc_input"} />
								</div>
							</div>
							<FormControlLabel style={{marginTop: '10px'}}
								control={<Checkbox disabled checked sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>}
								label={<Typography style={{fontSize: '14px'}}>Save payment info for future purchases.</Typography>}
							/>
							<InteractFlashyButton onClick={handleSubmit} loading={loading} className="stripe-card_field_button">Submit</InteractFlashyButton>
						</div>
					</div>
				</Box>
			</Modal>

		<JumboCardQuick
			title={"Giveaway"}
			sx={{
				ml: 2,
				display: "flex",
				flexDirection: "column",
				minWidth: 400,
			}}
			headerSx={{ pb: 0 }}
			wrapperSx={{
				pt: 1,
				flex: 1,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
			id="giveawayCard"
			className="giveawayCard"
			>
			<Box mt={1.21}>
				<div>
				<Span sx={{ color: "primary.main", fontWeight: 600 }}>50</Span> x 30
				min interactions
				</div>
				<div>
				<Span sx={{ color: "primary.main", fontWeight: 600 }}>50</Span>{" "}
				winners will be chosen when the campaign ends
				</div>
			</Box>

			<Box id="VIPGiveawaySection">
				<Typography variant="h5" color="text.secondary" mt={1}>
				VIP entry &nbsp;
          		<InfoTooltip title="Get a 25x increased chance of winning" />
				</Typography>

				<span>
				Chance multiplier: {vipChanceMultiplier}x
				</span>
				<Stack direction="row" alignItems="center">
				<span>Chance of winning: {winningChances.vip}%</span>&nbsp;&nbsp;
				<InfoTooltip
					title="Only 1 entry is allowed per user. Each time you lose, the next giveaway with the same creator 
					will have DOUBLE the chances of winning, stacking twice, 4x loss multiplier (meaning up to 100x 
						chance with a VIP entry). Remember, the chance of 
						winning goes down as more fans enter."
				/>
				</Stack>
				<Box sx={{ display: "flex", flexDirection: "row", mb: 1, mt: 1 }}>
				<Box
					sx={{
					flex: 1,
					p: 1,
					mr: 1,
					backgroundColor: "rgba(120, 47, 238, 0.1)",
					borderRadius: 1,
					border: "2px dashed rgba(120, 47, 238, 1)",
					}}
				>
					<span className="Highlight">${formatMoney(vipEntryPrice)}</span>
				</Box>

				<InteractButton onClick={buyGiveawayAlert} disabled={hasUserPurchasedVIPEntry || isCampaignEnded || isCampaignScheduled}>
					Buy VIP entry
				</InteractButton>

				{/* <InteractButton onClick={buyGiveawayAlert}>
					Buy VIP entry
				</InteractButton> */}
				</Box>
			</Box>

			<Divider>or</Divider>

			<Box
				id="freeGiveawaySection"
				style={{
				display: "flex",
				flexDirection: "column",
				marginTop: "10px",
				}}
				>
				<Typography variant="h5" color="text.secondary">
				Free entry
				</Typography>

				<span>
				Chance multiplier: {freeChanceMultiplier}x
				</span>
				<Stack direction="row" spacing={1} sx={{ mb: 1 }} alignItems="center">
				<span>Chance of winning: {winningChances.free}%</span>
				<InfoTooltip
					title="You can upgrade to a VIP entry at any time before the campaign ends. Each time you lose, 
					the next giveaway with the same creator will have DOUBLE the chances of winning, stacking twice, 
					4x loss multiplier (meaning up to a total 4x chance with a free entry). Remember, the % chance of 
					winning goes down as more fans enter."
				/>
				</Stack>

				<InteractButton onClick={freeGiveawayAlert}
					disabled={hasUserClaimedFreeEntry || hasUserPurchasedVIPEntry || isCampaignEnded || isCampaignScheduled} >
					Get a free entry
				</InteractButton>
			</Box>
		</JumboCardQuick>
		</>
	);
}