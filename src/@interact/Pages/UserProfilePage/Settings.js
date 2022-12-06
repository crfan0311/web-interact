import { TextField, Button, Stack } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { Box, FormControlLabel, Checkbox, IconButton, Tabs } from "@mui/material";
import { Close } from '@mui/icons-material';
import "./UserProfilePage.css";
import FollowerList from "./FollowerList";
import { Link } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";
import { auth, db, storage as Storage, logout } from "@jumbo/services/auth/firebase/firebase";
import { StyledTab } from "@interact/Pages/CreateCampaignPage/CampaignCreationTabs";
import {
  query,
  collection,
  getDocs,
  where,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import Typography from "@mui/material/Typography";
import { CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Modal from "@mui/material/Modal";

import "./setting.css";

import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";

import {
  getAuth,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateEmail,
} from "firebase/auth";



import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Country, State, City } from "country-state-city";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { FollowButton } from "../CampaignPage/Stats";
import { async } from "@firebase/util";

import { postRequest, getRequest } from "../../../utils/api";
import Select from "react-select";
// import Swal from "sweetalert2";

import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import InteractButton from "../../Components/Button/InteractButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  padding: 0,
  borderRadius: 15
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: '24px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</div>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Settings() {
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [email, setEmail] = useState("");
  const Swal = useSwalWrapper();
  const [open, setOpen] = React.useState(false);
  const [openmodal, setOpenModal] = React.useState(false);
  const [submitLoading, setSubmitLoading] = React.useState(false);

  const [MLoaded, setsetMLoaded] = useState(1);

  const [modalOpened, setModalOpened] = useState(false);

  const [user, loading, error] = useAuthState(auth);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = React.useState(
    "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
  );
  const navigate = useNavigate();

  const stripe = useStripe();

  const elements = useElements();

  const [cardInfo, setCardInfo] = useState({
    name: "",
    expiry: "",
    number: "",
    address: {
      line: "",
      postalCode: "",
    },
  });

  const [updateCardInfo, setUpdateCardInfo] = useState({
    pid: "",
    name: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const [locations, setLocations] = useState({
    countries: "",
    states: "",
    cities: "",
  });
  const [selectedLocation, setSelectedLocation] = useState({
    country: {},
    city: {},
    state: {},
  });

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [userCustomerId, setuserCustomerId] = useState(null);
  const [defaultPaymentMethod, setDefaultPaymentMethod] = useState([]);

  const [useForReload, setuseForReload] = useState(1);
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  function handleChangeAddressLine(e) {
    const { value } = e.target;
    setCardInfo((prev) => {
      return { ...prev, address: { ...prev.address, line: value } };
    });
  }

  // function handleChangePostalCode(e) {
  //   const { value } = e.target;
  //   setCardInfo((prev) => {
  //     return { ...prev, address: { ...prev.address, postalCode: value } };
  //   });
  // }

  function handleChangeName(e) {
    const { value } = e.target;
    setCardInfo((prev) => {
      return { ...prev, name: value };
    });
  }

  function parseForSelect(arr) {
    return arr.map((item) => ({
      label: item.name,
      value: item.isoCode ? item.isoCode : item.name,
    }));
  }

  function handleSelectCountry(country) {
    const states = State.getStatesOfCountry(country.value);
    setSelectedLocation((prev) => {
      return { ...prev, country };
    });

    setLocations((prev) => ({ ...prev, states: parseForSelect(states) }));
  }

  function handleSelectState(state) {
    const cities = City.getCitiesOfState(
      selectedLocation.country.value,
      state.value
    );
    setSelectedLocation((prev) => {
      return { ...prev, state };
    });

    setLocations((prev) => ({ ...prev, cities: parseForSelect(cities) }));
  }

  function handleSelectCity(city) {
    setSelectedLocation((prev) => {
      return { ...prev, city };
    });
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen1 = (pmid) => {
    getRequest(`/gd_payment_method/${pmid}`)
      .then((resp) => {
        const detail = resp.data.paymentMethod;

        setUpdateCardInfo({
          pid: pmid,
          name: detail.billing_details.name ? detail.billing_details.name : "",
          state: detail.billing_details.address.state
            ? detail.billing_details.address.state
            : "",
          country: detail.billing_details.address.country
            ? detail.billing_details.address.country
            : "",
          city: detail.billing_details.address.city
            ? detail.billing_details.address.city
            : "",
          postalCode: detail.billing_details.address.postal_code
            ? detail.billing_details.address.postal_code
            : "",
        });
        console.log("detail", detail);
        setOpenModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClose1 = () => setOpenModal(false);

  const updateNewPassword = async () => {
    // Get the value of the old password

    const credential = EmailAuthProvider.credential(user?.email, oldpassword);
    reauthenticateWithCredential(auth.currentUser, credential)
    .then(() => {
      updatePassword(auth.currentUser, password)
      .then(() => {
        Swal.fire(
          "Success!",
          "Password Successfully Updated",
          "success"
        );
      })
      .catch(err => {
        console.log(err);
        Swal.fire(
          "Failed!",
          "Oops...",
          "error"
        );
      })
    })
    .catch(err => {
      console.log(err);
      Swal.fire(
        "Error!",
        "Old Password Not Matched",
        "error"
      );
    });

  };

  const updateemailofloginuser = async () => {
    const duplicateMsg = "Firebase: Error (auth/email-already-in-use).";
    const recentLoginRequiredMsg = "Firebase: Error (auth/requires-recent-login).";
    if (email == auth.currentUser.email) {
      Swal.fire(
        "Error!",
        "That's your current email...",
        "error"
      );
    }
    else {
      updateEmail(auth.currentUser, email)
      .then((res) => {
        const user = doc(db, "users", userId);
        updateDoc(user, {
          email: email,
        })
        .then((response) => {
          Swal.fire(
            "Success!",
            "Email Successfully Updated",
            "success"
          );
        })
        .catch(err => {
          console.log(error);
          Swal.fire(
            "Error!",
            "An Error Occurred.",
            "error"
          );
        });
      })
      .catch(err => {
        console.log(err);
        Swal.fire(
          "Error!",
          (err.message == duplicateMsg || err.message == recentLoginRequiredMsg) ? "That email is already in use." : "Oops, An Error Occurred.",
          "error"
        );
      });
    }

    // await updateEmail(auth.currentUser, email);
  };

  const getDefaultpaymentmethod = async () => {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const colledoc = await getDocs(q);
    const data = colledoc.docs[0].data();
    getRequest(`/a/gd_customer_payment_method/${data.customerId}`)
      .then((resp) => {
        if (resp.data.status) {
          console.log(resp.data.paymentMethod);
          setDefaultPaymentMethod([resp.data.paymentMethod]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));

      const colledoc = await getDocs(q);

      const data = colledoc.docs[0].data();
      setName(data.name);
      setuserCustomerId(data.customerId);
      setUserId(colledoc.docs[0].id);
      console.log(colledoc.docs[0].id);
      setEmail(data.email);

      getRequest(`/a/customer/method/${data.customerId}`)
        .then((resp) => {
          console.log(resp.data.paymentmethod.data);
          setPaymentMethods(resp.data.paymentmethod.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };

  const deletepaymentMethod = async (paymentid, customerid) => {
    const formData = new FormData();
    formData.append("paymid", paymentid);
    formData.append("customerid", customerid);
    console.log(paymentid, customerid);
    console.log(paymentid, customerid);

    postRequest("/a/delete_customer_payment_method", formData)
      .then(async (resp) => {
        setPaymentMethods(resp.data.paymentmethod.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editpaymentmenthod = async (customerid) => {
    const formData = new FormData();
    const updateData = {
      billing_details: {
        name: updateCardInfo.name,
        email: "",
        phone: "",
        address: {
          city: updateCardInfo.city,
          country: updateCardInfo.country,
          line1: "pakistan",
          line2: null,
          postal_code: "50931",
          state: updateCardInfo.state,
        },
      },
    };
    formData.append("paymid", updateCardInfo.pid);
    formData.append("name", updateCardInfo.name);
    formData.append("country", updateCardInfo.country);
    formData.append("state", updateCardInfo.state);
    formData.append("city", updateCardInfo.city);
    formData.append("postal", updateCardInfo.postalCode);
    formData.append("customerid", customerid);

    postRequest("/a/update_customer_payment_method", formData)
      .then(async (resp) => {
        setOpenModal(false);
        setPaymentMethods(resp.data.paymentmethod.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setdefault = async (paymentid, customerid) => {
    const formData = new FormData();
    formData.append("paymid", paymentid);
    formData.append("customerId", customerid);
    console.log(paymentid, customerid);

    postRequest("/a/set_default_customer_payment_method", formData)
      .then(async (resp) => {
        console.log(resp.data.paymentmethod.data);
        setPaymentMethods(resp.data.paymentmethod.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitLoading(true);

    stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    })
    .then((resp) => {
      const pmid = resp?.paymentMethod?.id;
      if (pmid && userCustomerId) {
        getRequest(`/a/method/attach/${userCustomerId}/${pmid}`)
          .then((resp) => {
            setOpen(false);
            setSubmitLoading(false);
            if (resp.data.added) {
              setPaymentMethods(resp.data.paymentmethod.data);
              Swal.fire(
                "Success!",
                "Added new payment method successfully.",
                "success"
              );
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "An error occurred",
              });
            }
          })
          .catch((err) => {
            setOpen(false);
            setSubmitLoading(false);
            console.log(err);
            /*Handle Error */
              Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "An error occurred",
            });
          });
      }
      else {
        setOpen(false);
        setSubmitLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error occurred",
        });
      }
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
      setOpen(false);
      setSubmitLoading(false);
      /* Handle Error*/
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred",
      });
    });
    
    setsetMLoaded(MLoaded++);
  };

  const userProfile = async () => {
    let q = query(
      collection(db, "userspicture"),
      where("uid", "==", user?.uid)
    );
    const userProfileDoc = await getDocs(q);
    const userProfiledata = userProfileDoc.docs[0].data();
    if (userProfiledata.imageurl) {
      setImage(userProfiledata.imageurl);
    } else {
      setImage(
        "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
      );
    }
  };

  useEffect(() => {
    userProfile();
  }, [user]);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    console.log(auth.currentUser);
    fetchUserName();
  }, [user, loading, useForReload]);

  useEffect(() => {
    getDefaultpaymentmethod();
  }, [paymentMethods]);

  localStorage.setItem("name", name);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Modal
        open={openmodal}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="wrapper">
            <div className="innerWrapper">
              <div className="title">Update Payment Method</div>
              <div className="row">
                <label>Cardholder Name</label>
                <input
                  onChange={(e) =>
                    setUpdateCardInfo({
                      ...updateCardInfo,
                      [e.target.name]: e.target.value,
                    })
                  }
                  type="text"
                  name="name"
                  value={updateCardInfo.name}
                  placeholder="Enter card holder name"
                />
              </div>

              <div className="addressWrapper">
                <div className="row">
                  <label>Postal Code</label>
                  <input
                    onChange={(e) =>
                      setUpdateCardInfo({
                        ...updateCardInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
                    type="text"
                    name="postalCode"
                    value={updateCardInfo.postalCode}
                    placeholder="Enter Postal Code"
                  />
                </div>
                <div className="row">
                  <label>State</label>
                  <input
                    onChange={(e) =>
                      setUpdateCardInfo({
                        ...updateCardInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
                    type="text"
                    name="state"
                    value={updateCardInfo.state}
                    placeholder="Enter State"
                  />
                </div>
                <div className="row">
                  <label>City</label>
                  <input
                    onChange={(e) =>
                      setUpdateCardInfo({
                        ...updateCardInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
                    type="text"
                    name="city"
                    value={updateCardInfo.city}
                    placeholder="Enter city"
                  />
                </div>
                <div className="btnContainer">
                  <InteractFlashyButton
                    onClick={() => editpaymentmenthod(userCustomerId)}
                  >
                    Submit
                  </InteractFlashyButton>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="wrapper">
            <div className="innerWrapper">
            <IconButton onClick={handleClose} style={{ padding: 0, float: 'right' }}> <Close /> </IconButton>
            <div className="title" style={{fontSize:'20px'}}>Add payment method</div>
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
              <InteractFlashyButton onClick={handleSubmit} loading={submitLoading} className="stripe-card_field_button">Submit</InteractFlashyButton>
            </div>
          </div>
        </Box>
      </Modal>

      
      <br />
      <Link to="/campaign" style={{ textDecoration: "none" }}>
        <InteractFlashyButton>Manage Discord account</InteractFlashyButton>
      </Link>
      <br />

      <Box style={{ width: '100%' }}>
        <Box sx={{ borderTop: 0, borderBottom: 0, borderColor: "divider"}}>
          <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
          size="50"
          centered
          >
            <StyledTab label="Manage payment methods" {...a11yProps(0)} />
            <StyledTab label="Change Password" {...a11yProps(1)} />
            <StyledTab label="Change Email" {...a11yProps(2)}/>
          </Tabs>
        </Box>
        <br />
        <TabPanel style={{ width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center'}} value={tab} index={0}>
          <Card style={{ maxWidth: '1000px', width: '100%'}}>
            <CardHeader
              action={
                <Button
                  onClick={handleOpen}
                  color="success"
                  style={{
                    margin: 10,
                    padding: "10px 20px",
                    textTransform: 'unset'
                  }}
                  variant="outlined"
                >
                  Add new payment method
                </Button>
              }
              open
              title="Manage your saved payment methods"
              subheader="Add, update, or remove your payment address"
            />
            <hr />

            <CardHeader
              title="Primary"
              subheader="Your primary payment method is used for recurring payments"
            />

            <hr />
            {}

            {defaultPaymentMethod.length > 0 ? (
              defaultPaymentMethod.map((item, index) => {
                return (
                  <>
                    <CardContent
                      style={{
                        borderBottom: "1px solid black",
                        paddingBottom: "50px",
                      }}
                    >
                      <div style={{ display: "flex", clear: "both" }}>
                        <img
                          style={{ width: "50px", height: "50px" }}
                          alt="profile-pic"
                          src={item.card.brand === "visa" ? "https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg" : "https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"}
                        />
                        <div style={{ marginLeft: "10px" }}>
                          <Typography gutterBottom variant="h3" component="div">
                            <snap style={{textTransform: 'capitalize'}}>{item.card.brand}</snap> ending in {item.card.last4}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            You need a primary payment method when you have active
                            contract or a balance due. To remove this one, set a new
                            primary payment method first.
                          </Typography>
                        </div>
                        <Typography
                          gutterBottom
                          variant="h3"
                          component="div"
                          style={{ marginLeft: "100px" }}
                        >
                          {item.card.country}
                        </Typography>
                      </div>
                      <div
                        style={{ display: "flex", float: "right", clear: "both" }}
                      >
                        <div
                          style={{ color: "green", cursor: "pointer" }}
                          onClick={() => handleOpen1(item.id)}
                        >
                          <span
                            style={{
                              padding: "0px 20px",
                              borderRight: "1px solid lightgray",
                              fontSize: "18px",
                              cursor: "pointer",
                            }}
                          >
                            Edit
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </>
                );
              })
            ) : (
              <>
                <CardContent>
                  <Typography variant="h5" component="h2" color={"#D3D3D3"}>
                    No primary method
                  </Typography>
                </CardContent>
              </>
            )}

            <CardHeader
              title="Additional"
            />
            <hr />

            {paymentMethods.length > 0 ? (
              paymentMethods.map((item, index) => {
                if (defaultPaymentMethod.length > 0) {
                  if (defaultPaymentMethod[0].id !== item.id) {
                    return (
                      <>
                        <CardContent
                          style={{
                            borderBottom: "1px solid black",
                            paddingBottom: "50px",
                          }}
                        >
                          <div style={{ display: "flex", clear: "both", alignItems: "center", justifyContent: "flex-start", gap: "100px" }}>
                            <div style={{ display: "flex", justifyContent: "flex-start", width: "400px", gap: "10px"}}>
                              <img
                                style={{ width: "50px", height: "50px" }}
                                alt="profile-pic"
                                src={item.card.brand === "visa" ? "https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg" : "https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"}
                              />
                              <Typography gutterBottom variant="h3" component="div">
                                <snap style="style={{textTransform: 'capitalize'}}">{item.card.brand}</snap> ending in {item.card.last4}
                              </Typography>
                            </div>
                              <Typography
                                gutterBottom
                                variant="h3"
                                component="div"
                              >
                                {item.card.country}
                              </Typography>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              float: "right",
                              clear: "both",
                            }}
                          >
                            <div
                              style={{ color: "green", cursor: "pointer" }}
                              onClick={() => handleOpen1(item.id)}
                            >
                              <span
                                style={{
                                  padding: "0px 20px",
                                  borderRight: "1px solid lightgray",
                                  fontSize: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                Edit
                              </span>
                            </div>
                            <div
                              style={{ color: "green", cursor: "pointer" }}
                              onClick={() => setdefault(item.id, item.customer)}
                            >
                              <span
                                style={{
                                  padding: "0px 20px",
                                  borderRight: "1px solid lightgray",
                                  fontSize: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                Set as primary{" "}
                              </span>
                            </div>
                            <div
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() =>
                                deletepaymentMethod(item.id, item.customer)
                              }
                            >
                              <span
                                style={{
                                  padding: "0px 20px",
                                  borderRight: "1px solid lightgray",
                                  fontSize: "18px",
                                  cursor: "pointer",
                                }}
                              >
                                Delete
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </>
                    );
                  }
                } else {
                  return (
                    <>
                      <CardContent
                        style={{
                          borderBottom: "1px solid black",
                          paddingBottom: "50px",
                        }}
                      >
                        <div style={{ display: "flex", clear: "both", alignItems: "center", justifyContent: "flex-start", gap: "20px" }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "400px", gap: "15px"}}>
                            <img
                              style={{ width: "50px", height: "50px" }}
                              alt="profile-pic"
                              src={item.card.brand === "visa" ? "https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg" : "https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"}
                            />
                            <Typography gutterBottom variant="h3" style={{ margin: '0'}}>
                              <snap style={{textTransform: 'capitalize'}}>{item.card.brand}</snap> ending in {item.card.last4}
                            </Typography>
                          </div>
                          <Typography
                            gutterBottom
                            variant="h3"
                            style={{margin: '0'}}
                          >
                            {item.card.country}
                          </Typography>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            float: "right",
                            clear: "both",
                          }}
                        >
                          <div
                            style={{ color: "green", cursor: "pointer" }}
                            onClick={() => handleOpen1(item.id)}
                          >
                            <span
                              style={{
                                padding: "0px 20px",
                                borderRight: "1px solid lightgray",
                                fontSize: "18px",
                                cursor: "pointer",
                              }}
                            >
                              Edit
                            </span>
                          </div>
                          <div
                            style={{ color: "green", cursor: "pointer" }}
                            onClick={() => setdefault(item.id, item.customer)}
                          >
                            <span
                              style={{
                                padding: "0px 20px",
                                borderRight: "1px solid lightgray",
                                fontSize: "18px",
                                cursor: "pointer",
                              }}
                            >
                              Set as primary{" "}
                            </span>
                          </div>
                          <div
                            style={{ color: "red", cursor: "pointer" }}
                            onClick={() =>
                              deletepaymentMethod(item.id, item.customer)
                            }
                          >
                            <span
                              style={{
                                padding: "0px 20px",
                                borderRight: "1px solid lightgray",
                                fontSize: "18px",
                                cursor: "pointer",
                              }}
                            >
                              Delete
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </>
                  );
                }
              })
            ) : (
              <>
                <CardContent>
                  <Typography variant="h5" component="h2" color={"#D3D3D3"}>
                    No additional method
                  </Typography>
                </CardContent>
              </>
            )}
          </Card>
        </TabPanel>
        <TabPanel sx={{ width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center'}} value={tab} index={1}>
          <div>
            <div className="TextInputWrapper ChangePasswordDiv">
              <TextField
                id="outlined-basic"
                label="Old Password"
                variant="outlined"
                type="password"
                value={oldpassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="TextInputWrapper ChangePasswordDiv">
              <TextField
                id="outlined-basic"
                label="New password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="TextInputWrapper ChangePasswordDiv">
              <TextField
                id="outlined-basic"
                label="Retype your password"
                variant="outlined"
                type="password"
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
              />
            </div>

            <PasswordChecklist
              rules={["minLength", "number", "match"]}
              minLength={5}
              value={password}
              valueAgain={passwordAgain}
              onChange={(isValid) => {}}
            />
            <br />
            <div className="ButtonsWrapper" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <InteractFlashyButton onClick={updateNewPassword}>
                Change password
              </InteractFlashyButton>
            </div>
          </div>
        </TabPanel>
        <TabPanel sx={{ width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center'}} value={tab} index={2}>
          <div>
            <div className="TextInputWrapper ChangeEmailDiv">
              <TextField
                id="outlined-basic"
                label="Enter email address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="ButtonsWrapper" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <InteractFlashyButton onClick={updateemailofloginuser}>
                Change Email
              </InteractFlashyButton>
            </div>
          </div>
        </TabPanel>
                
      </Box>
    </div>                    

  );
}

export default Settings;
