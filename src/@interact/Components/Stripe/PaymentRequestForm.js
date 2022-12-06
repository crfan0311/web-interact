import React, { useMemo, useState, useEffect } from "react";
import {
  useStripe,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

const useOptions = (paymentRequest) => {
  const options = useMemo(
    () => ({
      paymentRequest,
      style: {
        paymentRequestButton: {
          theme: "dark",
          height: "48px",
          type: "donate"
        }
      }
    }),
    [paymentRequest]
  );

  return options;
};
  
const usePaymentRequest = ({ options, onPaymentMethod }) => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canMakePayment, setCanMakePayment] = useState(false);

  useEffect(() => {
    if (stripe && paymentRequest === null) {
      const pr = stripe.paymentRequest(options);
      setPaymentRequest(pr);
    }
  }, [stripe, options, paymentRequest]);

  useEffect(() => {
    let subscribed = true;
    if (paymentRequest) {
      paymentRequest.canMakePayment().then((res) => {
      console.log('pr = ', res, subscribed)
        if (res && subscribed) {
          setCanMakePayment(true);
        }
      });
    }

    return () => {
      subscribed = false;
    };
  }, [paymentRequest]);

  useEffect(() => {
    if (paymentRequest) {
      paymentRequest.on("paymentmethod", onPaymentMethod);
    }
    return () => {
      if (paymentRequest) {
        paymentRequest.off("paymentmethod", onPaymentMethod);
      }
    };
  }, [paymentRequest, onPaymentMethod]);

  return canMakePayment ? paymentRequest : null;
};

const PaymentRequestForm = ({price, handleSubmit}) => {
    
    const paymentRequest = usePaymentRequest({
      options: {
        country: "US",
        currency: "usd",
        total: {
          label: "Interact Auction",
          amount: price * 100
        }
      },
      onPaymentMethod: ({ complete, paymentMethod, ...data }) => {
        console.log("[PaymentMethod]", paymentMethod);
        console.log("[Customer Data]", data);
        complete("success");
        handleSubmit();
      }
    });
    const options = useOptions(paymentRequest);
  
    if (!paymentRequest) {
      return null;
    }
  
    return (
      <>
        <PaymentRequestButtonElement
          className="PaymentRequestButton"
          options={options}
        />
      </>
    );
};
  
export default PaymentRequestForm;