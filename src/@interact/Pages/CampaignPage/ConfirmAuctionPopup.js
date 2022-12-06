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
import "./popupstyle.css";
import { IconButton, Stack } from "@mui/material";
import { Close } from '@mui/icons-material';
import PaymentRequestForm from "@interact/Components/Stripe/PaymentRequestForm";
export default function ConfirmAuctionPopup({
  openstate,
  settheOpenPopup,
  closefunction,
  allprimarymethod,
  desiredRanking,
  onaddclick,
  price,
  userCustomerId,
  bidAction,
  selectPaymentMethod,
  setSelectedPaymentMethod,
  autobid
}) {
  const [paymentId, setpaymentId] = useState();
  const [showtext, setShowText] = useState(false);
  const [loading, setLoading] = useState(false);
  const Swal = useSwalWrapper();

  const addEvent = () => {
    // settheOpenPopup(false);
    closefunction();
    onaddclick();
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

  const paymentResponse = (price,resp = null) => {
    console.log(resp?.data);
    settheOpenPopup(false);
    setLoading(false);
    if (!price || resp?.data?.paymentstatus) {      
      Swal.fire(
        "Congratulations!",
        autobid == true ? "You've successfully placed an auto-bid." : "You've successfully placed a bid.",
        "success"
      );
      bidAction(price);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed!",
      });
    }
  };

  const confirmFuncion = () => {
    setLoading(true);
    console.log(paymentId, userCustomerId);
    const formData = new FormData();
    formData.append("price", price);
    formData.append("paymentmethodid", paymentId);
    formData.append("customerId", userCustomerId);
    console.log(price)
    if(!price){
      paymentResponse(price);
      return;
    }
    postRequest("/a/make_instant_payment_on_stripe", formData)
      .then(async (resp) => {
        paymentResponse(price,resp);
      })
      .catch((err) => {
        console.log(err);
        settheOpenPopup(false);
        setLoading(false);
      });
  };

  return (
    <div>
      <Dialog PaperProps={{ style: { borderRadius: 20, padding: 40 } }}
        open={openstate}
        onClose={closefunction}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title" style={{ background: "white", marginBottom: '17px' }}>
          <IconButton onClick={closefunction} style={{ padding: 0, position:'absolute', right:30, top:30 }}> <Close /> </IconButton>
          
          <Typography variant="h2" gutterBottom style={{ color: "#782FEE", textDecoration: 'underline', marginBottom: 10 }}>
            Confirm bid
          </Typography>
                      
          <Typography variant="subtitle1" gutterBottom style={{fontWeight: '500', fontSize: '15px', color: 'black'}} >
            This bid will place you at <span style={{color: '#782FEE'}}>{desiredRanking}th</span> place on the leaderboard (if no one else bids).
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ marginBottom: "30px" }}
          >
            <Typography variant="h4" gutterBottom style={{fontWeight: '600', fontSize: '23px', margin: '0px'}}>
              Your bid amount: <span style={{color: '#782FEE'}}>${Number.parseFloat(price).toFixed(2)}</span>
            </Typography>
            <div className="paymentRequestDiv" style={{ width: "200px", marginBottom:"15px", marginTop:"30px" }}>
              <PaymentRequestForm price={price} handleSubmit={closefunction} />
            </div>
            <div onClick={addEvent} style={{ cursor: "pointer", marginBottom: '20px' }}>
              <Typography variant="h6" gutterBottom style={{ color: "#782FEE", textDecoration: 'underline', fontSize: '15px' }}>
                Add new payment method
              </Typography>
            </div>
            {allprimarymethod.length > 0 ? (
              allprimarymethod.map((item, index) => {
                return (
                  <>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '15px', margin: '15px 0px'}}>
                      <input
                        type="radio"
                        value={item.id}
                        name="paymentid"
                        checked={selectPaymentMethod === item.id && "checked"}
                        onChange={() => selectPaymentId(item.id)}
                        style={{margin: '0px', accentColor: '#782FEE'}}
                      />
                      <img src={item.card.brand === "visa" ? "https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg" : "https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"} alt="icon" />
                      <Typography variant="h6" gutterBottom style={{fontSize: '15px', margin: "0px"}}>
                        <span style={{fontWeight: '700', textTransform: 'capitalize'}}>{item.card.brand}</span> ending in {item.card.last4}
                      </Typography>
                    </div>
                  </>
                );
              })
            ) : (
              <></>
            )}
          </DialogContentText>
          <InteractFlashyButton onClick={confirmFuncion} loading={loading}>
            Confirm
          </InteractFlashyButton>
          <Typography variant="subtitle1" style={{fontWeight: '500', fontSize: '15px', lineHeight: '1.5', marginTop: '30px', color: 'black'}} >
            You only pay if you're a winning bidder on the leaderboard at the <span style={{color: '#782FEE'}}>end of the campaign.</span><br/>
            <span style={{color: '#b1b1b1'}}>
              When you confirm your bid, you consent to an automatic charge via this payment method.<br/>
              New bids replace old bids, since each user is limited to 1 interaction in the auction.
            </span>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
