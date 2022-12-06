import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import { postRequest } from "../../../utils/api";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import InfoTooltip from "../../Components/InfoTooltip";
import "./popupstyle.css";
import { Stack } from "@mui/material";

export default function ConfirmPopup({
	openstate,
	closefunction,
	allprimarymethod,
	title,
	belowtext,
	undertitle,
	onchangeclick,
	settheOpenPopup,
	price,
	userCustomerID,
	hovereffect,
	hovertext,
	bidAction,
	bidActionstatus,
	setSelectedPaymentMethod,
	buyvip,
}) {
	const [paymentId, setpaymentId] = useState();
	const [showtext, setShowText] = useState(false);
	const Swal = useSwalWrapper();
	const hidepopUp = () => {
		// settheOpenPopup(false);
		onchangeclick();
	};

	const selectPaymentId = (pmid) => {
		setpaymentId(pmid);
		setSelectedPaymentMethod(pmid);
	};

	useEffect(() => {
		setShowText(false);
		allprimarymethod.forEach((element, index) => {
			if (index === 0) {
				setpaymentId(element.id);
			}
		});
	}, [allprimarymethod]);
	const paymentResponse = (price, resp = null) => {
		console.log(resp?.data);
		if (!price || resp?.data?.paymentstatus) {

			settheOpenPopup(false);
			Swal.fire(
				"Success!",
				"Your payment has been made. Thanks",
				"success"
			);
			if (bidActionstatus) {
				bidAction(price);
			}
		} else {
			settheOpenPopup(false);
			Swal.fire({
				icon: "error",
				title: "Failed!",
				text: "An error occured",
			});
		}
	}
	const confirmFuncion = () => {
		// console.log(paymentId, userCustomerID);
		const formData = new FormData();
		formData.append("price", price);
		formData.append("paymentmethodid", paymentId);
		formData.append("customerId", userCustomerID);
		let url = "";
		if (!price) {
			paymentResponse(price);
			return;
		}
		if (buyvip) {
			url = "/a/make_instant_payment_on_stripe";
		} else {
			url = "/a/make_payment_on_stripe";
		}
		postRequest(url, formData)
			.then(async (resp) => {
				paymentResponse(price, resp);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const mouseOver = () => {
		setTimeout(setShowText(true), 5000);
	};

	const onMouseLeave = () => {
		setTimeout(setShowText(false), 5000);
	};

	return (
		<Dialog
			open={openstate}
			onClose={closefunction}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			>
			<DialogTitle id="alert-dialog-title" style={{ background: "#FAFAFA" }}>
				<Stack direction="row" alignItems="center" spacing={1}>
					<Typography variant="h4" gutterBottom>
						{" "}
						{title}
					</Typography>
					{hovereffect && <InfoTooltip title={hovertext} />}
				</Stack>

				<Typography variant="subtitle1" gutterBottom>
					{undertitle}
				</Typography>
			</DialogTitle>
			<DialogContent>
				<DialogContentText
					id="alert-dialog-description"
					style={{ marginBottom: "10px", marginTop: "5px" }}
				>
					<Typography variant="h4" gutterBottom>
						{hovereffect ? "Your Bid Amount" : "VIP entry amount"}: ${price}
					</Typography>
					{allprimarymethod.length > 0 ? (
						allprimarymethod.map((item, index) => {
							return (
								<div key={index} style={{ display: "flex", justifyContent: "space-between", margin: "7px 0px", }} >
									<input
										type="radio"
										value={item.id}
										name="paymentid"
										checked={index === 0 && "checked"}
										onChange={() => selectPaymentId(item.id)}
									/>
									<Typography variant="h5" gutterBottom>
										Payment Method
									</Typography>

									<Typography variant="h5" gutterBottom>
										{item.card.brand} ending in {item.card.last4}
									</Typography>

									<div onClick={hidepopUp} style={{ cursor: "pointer" }}>
										<Typography variant="h5" gutterBottom>
											Change
										</Typography>
									</div>
								</div>
							);
						})
					) : (
						<></>
					)}
				</DialogContentText>

				<InteractFlashyButton onClick={confirmFuncion}>
					Confirm
				</InteractFlashyButton>
			</DialogContent>
			<div style={{ background: "#FAFAFA" }}>
				{belowtext.map((item, index) => {
					return (
						<Typography key={index} variant="subtitle2" gutterBottom
							style={{ margin: "10px 0px 0px 0px", padding: "2px 12px" }} >
							{item}
						</Typography>
					);
				})}
			</div>
		</Dialog>
	);
}
