const stripe = require("stripe")(
  "sk_test_51LJU6pIRYjPm2gCpn2kkJ7fGaIhuL7Sr8opDkKUXYcPQ3syGUaOxWwI5yDMrzdhDTKYMFw0tdz7LAtEbvJvWaT6M00XBTlISBa"
);

// stripe.applePayDomains.create({
//   domain_name: 'example.com'
// });


const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());


app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:3000"; // for test

app.post("/a/register-customer", async (req, res) => {
  const { email, name } = req.body;
  // console.log(email);
  /*  Add this user in your database and store stripe's customer id against the user   */
  try {
    const customer = await stripe.customers.create({
      email,
      name,
    });
    console.log(customer);
    res.status(200).json({ message: "Customer created", customer: customer });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "An error occured" });
  }
});

//GET STRIPE ACCOUNT DETAILS
app.post("/a/get-account",async (req, res) => {
  const account = await stripe.accounts.retrieve(
    req.accountId
  );
  res.status(200).send({
    account:account
  });
});

// CREATE STRIPE ACCOUNT
app.get("/a/register-account", async (req, res) => {
  try {
    const account = await stripe.accounts.create({
      type: 'standard',
    });

    // Store the Id of the new Express connected account.
    req.accountId = account.id;
    const origin = `${req.secure ? "https://" : "http://"}${req.headers.host}`;

    console.log(req);

    console.log(req.headers.referer);
    console.log(req.query.pathname);
    const accountLink = await stripe.accountLinks.create({
      type: "account_onboarding",
      account: account.id,
      refresh_url: `${origin}/a/register-account?pathname=${req.query.pathname}`,
      return_url: `${req.headers.referer.slice(0, -1)}${req.query.pathname}?accountId=${account.id}`,

    });
    res.redirect(303, accountLink.url);
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});

// all payments method
app.get("/a/method/attach/:cid/:pm", async (req, res) => {
  const { cid, pm } = req.params;

  console.log(cid, pm)
  try {
    console.log(req.params);

    const paymentMethod = await stripe.paymentMethods.attach(pm, {
      customer: cid,
    });

    const paymentMethods = await stripe.customers.listPaymentMethods(cid, {
      type: "card",
    });
    res.status(200).json({ paymentmethod: paymentMethods, added:true });

  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "An error occured", added:false });
  }
});

app.get("/a/customer/method/:cid", async (req, res) => {
  try {
    const { cid } = req.params;
    const paymentMethods = await stripe.customers.listPaymentMethods(cid, {
      type: "card",
    });
    res.status(200).json({ paymentmethod: paymentMethods });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "An error occured" });
  }
});

app.post("/a/set_default_customer_payment_method", async (req, res) => {
  try {
    const { paymid, customerId } = req.body;
    console.log("default payment methid id",paymid, customerId)
    const updateCustomerDefaultPaymentMethod = await stripe.customers.update(
      customerId,
      {
        invoice_settings: {
          default_payment_method: paymid,
        },
      }
    );
    const paymentMethods = await stripe.customers.listPaymentMethods(customerId, {
      type: "card",
    });
    res.status(200).json({ paymentmethod:paymentMethods });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "An error occured" });
  }
});
app.get("/a/gd_customer_payment_method/:cid", async (req, res) => {
  try {
    const { cid } = req.params;
    const customer = await stripe.customers.retrieve(
      cid
    );
    if (customer.invoice_settings.default_payment_method) {
      const paymentMethod = await stripe.paymentMethods.retrieve(
        customer.invoice_settings.default_payment_method
      );
      res.status(200).json({
        status:true,
        paymentMethod,
        message: "You have set the default payment",
      });
    } else {
      res.status(200).json({
        status:false,
        message: "You have set the default payment",
      });
    }

  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "An error occured" });
  }
});

app.get("/a/gd_payment_method/:pid", async (req, res) => {
  try {
   
    const { pid } = req.params;
    const paymentMethod = await stripe.paymentMethods.retrieve(
         pid
    );
    
    res.status(200).json({
      paymentMethod,
      message: "You have set the default payment",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "An error occured" });
  }
});

app.post("/a/delete_customer_payment_method", async (req, res) => {
  try {
    const { paymid, customerid } = req.body;
    console.log("deleted iids",paymid, customerid)
    await stripe.paymentMethods.detach(paymid);
    const paymentMethods = await stripe.customers.listPaymentMethods(customerid, {
      type: "card",
    });
    res.status(200).json({ paymentmethod: paymentMethods });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "An error occured" });
  }
});
app.post("/a/update_customer_payment_method", async (req, res) => {
  try {
    const { paymid, customerid, data,name, city, state, postal} = req.body;
    console.log(data)
    await stripe.paymentMethods.update(paymid, {
        billing_details:{
          name:name,
          address:{
            city:city,
            postal_code:postal,
            state:state,
          }
        }
    });
    
    const paymentMethods = await stripe.customers.listPaymentMethods(customerid, {
      type: "card",
    });
    res.status(200).json({ paymentmethod: paymentMethods });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "An error occured" });
  }
});
app.post("/a/make_payment_on_stripe", async (req, res) => {
  const {price,paymentmethodid,customerId} = req.body
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price*100,
      currency: 'usd',
      customer: customerId,
      payment_method: paymentmethodid,
      off_session: true, 
      capture_method: 'manual',
      confirm: true,
    });
    res.status(200).json({ paymentstatus:true, paymentIntent });
  } catch (err) {
    // Error code will be authentication_required if authentication is needed
    console.log('Error code is: ', err.code);
    console.log('Error is: ', err);
    const paymentIntentRetrieved = await stripe.paymentIntents.retrieve(err.raw.payment_intent.id);
    console.log('PI retrieved: ', paymentIntentRetrieved.id );
    res.status(400).json({paymentstatus:false})
  }
  
});


app.post("/a/make_instant_payment_on_stripe", async (req, res) => {
  const {price,paymentmethodid,customerId} = req.body
  try {
    const paymentintent = await stripe.paymentIntents.create({
      amount: price * 100,
      currency: "usd",
      customer: customerId,
      payment_method: paymentmethodid,
      off_session: true,
      confirm: true,
    });
    res.status(200).json({ paymentstatus:true, paymentintent });
  } catch (err) {
    // Error code will be authentication_required if authentication is needed
    console.log('Error code is: ', err.code);
    console.log('Error is: ', err);
    const paymentIntentRetrieved = await stripe.paymentIntents.retrieve(err.raw.payment_intent.id);
    console.log('PI retrieved: ', paymentIntentRetrieved.id );
    res.status(400).json({paymentstatus:false})
  }
  
});


/*

app.post("/Auction_Bid_Payment_Capture_Process", async (req, res) => {
  const intent = await stripe.paymentIntents.capture(
    // "pi_3LrjVgCrYT0SvCI20pjw71mO"
    req.paymentId
  );
  if (intent.id != null) {
    data = {
      success: true,
      pi_id: intent.id,
    };
  } else {
    data = {
      success: false,
    };
  }
  console.log(intent);
  return res.json(data);
});


app.get("/allusers", async (req, res) => {
  const paymentMethod = await stripe.paymentMethods.create({
    type: "card",
    card: {
      number: "4242424242424242",
      exp_month: 11,
      exp_year: 2023,
      cvc: "314",
    },
  });
  res.send(paymentMethod);
});
app.post('/create-giveaway-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: 150,
          tax_behavior: "exclusive",
          product_data: {
            name: 'Giveaway Ticket'
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    automatic_tax: { enabled: true },
  });

  res.redirect(303, session.url);
});

app.use("/create-auction-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: 2000,
          tax_behavior: "exclusive",
          product_data: {
            name: "Auction Bid",
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    automatic_tax: { enabled: true },
  });

  res.redirect(303, session.url);
});

app.post("/Giveaway_Payment_Process", async (req, res) => {
  price = "1.5";
  clientName = req.body.name;
  email = req.body.email;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price * 100,
    currency: "usd",
    payment_method_types: ["card"],
    capture_method: "automatic",
    receipt_email: email,
    description: "Giveaway Ticket",
  });
  if (paymentIntent) {
    console.log(paymentIntent.id);
    data = {
      success: true,
      id: paymentIntent.id,
      secret: paymentIntent.client_secret,
      email: email,
      name: clientName,
    };
  } else {
    data = {
      success: false,
      msg: "invalid package",
    };
  }
  return res.json(data);
});

app.post("/Auction_Bid_Payment_Authorise_Process", async (req, res) => {
  let price = req.body.price;
  clientName = req.body.name;
  email = req.body.email;
  console.log(price + " - " + clientName + " - " + email);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: price * 100,
    currency: "usd",
    description: "Auction Bid",
    automatic_payment_methods: {
      enabled: true,
    },
    payment_method_options: {
      card: {
        capture_method: "manual",
      },
    },
  });
  console.log(paymentIntent);
  if (paymentIntent) {
    console.log(price);
    data = {
      success: true,
      id: paymentIntent.id,
      secret: paymentIntent.client_secret,
      email: email,
      price: price,
      name: clientName,
    };
  } else {
    data = {
      success: false,
      msg: "invalid package",
    };
  }
  return res.json(data);
});

app.post("/payment_intent", async (req, res) => {
  price = req.body.price;
  clientName = req.body.name;
  email = req.body.email;
  isChecked = req.body.isChecked;
  type = req.body.type;

  var stripe_customer_id = false;
  var client_customer_id = false;

  if (isChecked) {
    if (stripe_customer_id) {
      client_customer_id = stripe_customer_id;
    } else {
      const customer = await stripe.customers.create({
        description: "new customer",
        email: req.body.email,
      });
      client_customer_id = customer.id;
    }

    //Save Card
    if (type == "auction_place_bid") {
      params = {
        amount: price * 100,
        currency: "usd",
        payment_method_types: ["card"],
        description: "Giveaway Ticket is Checked Save Card",
        customer: client_customer_id,
        setup_future_usage: "off_session",
        capture_method: "manual",
      };
    } else {
      params = {
        amount: price * 100,
        currency: "usd",
        payment_method_types: ["card"],
        description: "Giveaway Ticket is Checked Save Card",
        customer: client_customer_id,
        setup_future_usage: "off_session",
      };
    }
  } else {
    //Payment Intent

    if (type == "auction_place_bid") {
      params = {
        amount: price * 100,
        currency: "usd",
        payment_method_types: ["card"],
        receipt_email: email,
        description: "Giveaway Ticket not Checked Dont Save Card",
        capture_method: "manual",
      };
    } else {
      params = {
        amount: price * 100,
        currency: "usd",
        payment_method_types: ["card"],
        capture_method: "automatic",
        receipt_email: email,
        description: "Giveaway Ticket not Checked Dont Save Card",
      };
    }
  }

  const paymentIntent = await stripe.paymentIntents.create(params).then(
    function (result) {
      if (result) {
        data = {
          success: true,
          id: result.id,
          secret: result.client_secret,
          email: email,
          name: clientName,
          stripe_customer_id: client_customer_id,
        };
      } else {
        data = {
          success: false,
          msg: "invalid request",
        };
      }
      return res.json(data);
    },
    function (err) {
      data = {
        success: false,
        msg: err.message,
      };
      return res.json(data);
    }
  );
});

app.post("/payment_intent_save_new_card", async (req, res) => {
  var stripe_customer_id = req.body.stripe_customer_id;
  var client_customer_id = false;
  var price = req.body.price;
  var email = req.body.email;
  var name = req.body.name;
  var type = req.body.type;

  //Save Card
  if (type == "auction_place_bid") {
    params = {
      amount: price * 100,
      currency: "usd",
      payment_method_types: ["card"],
      description: "Giveaway Ticket save new card when already saved",
      customer: stripe_customer_id,
      setup_future_usage: "off_session",
      capture_method: "manual",
    };
  } else {
    params = {
      amount: price * 100,
      currency: "usd",
      payment_method_types: ["card"],
      description: "Giveaway Ticket save new card when already saved",
      customer: stripe_customer_id,
      setup_future_usage: "off_session",
    };
  }

  const paymentIntent = await stripe.paymentIntents.create(params).then(
    function (result) {
      if (result) {
        data = {
          success: true,
          id: result.id,
          secret: result.client_secret,
          email: email,
          name: name,
          stripe_customer_id: stripe_customer_id,
        };
      } else {
        data = {
          success: false,
          msg: "invalid request",
        };
      }
      return res.json(data);
    },
    function (err) {
      data = {
        success: false,
        msg: err.message,
      };
      return res.json(data);
    }
  );
});

app.post("/payment_intent_already_save_card", async (req, res) => {
  var stripe_customer_id = req.body.stripe_customer_id;
  var client_customer_id = false;
  var price = req.body.price;
  var email = req.body.email;
  var name = req.body.name;
  var paymentMethod = false;
  var paymentIntent = false;
  var type = req.body.type;

  var customer = await stripe.customers.retrieve(stripe_customer_id);
  if (customer.id) {
    var pm = customer.invoice_settings.default_payment_method;

    paymentMethod = await stripe.paymentMethods.retrieve(pm);
  }

  // var id = paymentMethod.id;
  if (type == "auction_place_bid") {
    params = {
      amount: price * 100,
      currency: "usd",
      payment_method_types: ["card"],
      receipt_email: email,
      description: "Giveaway Ticket Already Saved",
      //paymentMethod: req.body.payment_method,
      confirm: true,
      customer: stripe_customer_id,
      payment_method: paymentMethod.id,
      capture_method: "manual",
    };
  } else {
    params = {
      amount: price * 100,
      currency: "usd",
      payment_method_types: ["card"],
      capture_method: "automatic",
      receipt_email: email,
      description: "Giveaway Ticket Already Saved",
      //paymentMethod: req.body.payment_method,
      confirm: true,
      customer: stripe_customer_id,
      payment_method: paymentMethod.id,
    };
  }
  if (paymentMethod.id) {
    paymentIntent = await stripe.paymentIntents.create(params).then(
      function (result) {
        if (result) {
          data = {
            success: true,
            id: result.id,
            secret: result.client_secret,
            email: email,
            name: name,
            stripe_customer_id: stripe_customer_id,
            pi_status: result.status,
            paymentMethod: paymentMethod.status,

            msg: "Payment Successful",
          };
        } else {
          data = {
            success: false,
            msg: "invalid request",
          };
        }
        return res.json(data);
      },
      function (err) {
        data = {
          success: false,
          msg: err.message,
        };
        return res.json(data);
      }
    );
  }
});

app.post("/set_as_default", async (req, res) => {
  //var customer_id = req.body.customer_id;
  //var customer_id = 'cus_MZ0y4Vd0GQqHIc';
  var payment_intent = req.body.payment_intent;
  payment_method = req.body.payment_method;

  const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent);
  const customer = await stripe.customers
    .update(paymentIntent.customer, {
      invoice_settings: { default_payment_method: payment_method },
    })
    .then(
      function (result) {
        if (result) {
          data = {
            success: true,
            msg: "Success",
          };
        } else {
          data = {
            success: false,
            msg: "invalid request",
          };
        }
        return res.json(data);
      },
      function (err) {
        data = {
          success: false,
          msg: err.message,
        };
        return res.json(data);
      }
    );
});

app.post("/get_payment_methods", async (req, res) => {
  console.log(req.body);
  var id = false,
    brand = false,
    brand = false,
    status = false;
  // var logged_user_stripe_customer_id = req.body.logged_user_stripe_customer_id;
  const customer = await stripe.customers.retrieve(req.body.stripe_customer_id);
  if (customer) {
    var pm = customer.invoice_settings.default_payment_method;

    const paymentMethod = await stripe.paymentMethods.retrieve(pm);
    if (paymentMethod.id) {
      var id = paymentMethod.id;
      var brand = paymentMethod.card.brand;
      var last4 = paymentMethod.card.last4;
      status = true;
    }
  }
  data = {
    status: status,
    id: id,
    brand,
    last4,
  };
  return res.json(data);
});

*/



app.listen(4242, () => console.log("Running on port 4242"));
