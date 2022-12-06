import { TextField, Button, Stack } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Slide } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./UserProfilePage.css";
import Scheduler from "../../Components/Scheduler/Scheduler";
import FollowedCampaigns from "./FollowedCampaigns";
import CreatorSchedules from "./CreatorSchedule";
import Setting from "./Settings";
import FollowerList from "./FollowerList";
import { db, storage as Storage } from "@jumbo/services/auth/firebase/firebase";
import { setDoc, doc, query, onSnapshot, getDocs, where, collection } from "firebase/firestore";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, useParams } from "react-router-dom";
import { FollowButton } from "../CampaignPage/Stats";
import { fetchUserByName } from "../../../firebase";
import useCurrentUser from "@interact/Hooks/use-current-user";
import EditIcon from "@mui/icons-material/Edit";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import { StyledTab } from "@interact/Pages/CreateCampaignPage/CampaignCreationTabs";
import Typography from "@mui/material/Typography";
import { LAYOUT_NAMES } from "../../../app/layouts/layouts";
import { useJumboApp } from "@jumbo/hooks";

import Modal from "@mui/material/Modal";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import { flexbox } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
function CropProfilePicture({
  open,
  setOpen,
  imgageObj,
  updatePhotoURL,
  setImage,
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [completedCrop, setCompletedCrop] = useState();
  const [imageRef, setImageRef] = useState();
  const [crop, setCrop] = useState({
    unit: "%", // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  const handleSubmit = async (event) => {
    //console.log("handleSubmit >>>", imgageObj, imageRef, completedCrop);

    if (imageRef && completedCrop.width && completedCrop.height) {
      const croppedImageUrl = await getCroppedImg(
        imageRef,
        completedCrop,
        "newFile.jpeg"
      );
      //console.log("croppedImageUrl >>>", croppedImageUrl);
      if (!croppedImageUrl) return;

      const storageRef = ref(
        Storage,
        `/user_profile_pictures/${imgageObj.name}.jpg`
      );
      const uploadTask = uploadBytesResumable(storageRef, croppedImageUrl);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            console.log("getDownloadURL >>>", url);
            setOpen(false);
            updatePhotoURL(url);
            setImage(url);
          });
        }
      );
    }
  };

  function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            console.error("Canvas is empty");
            return;
          }
          blob.name = fileName;
          resolve(blob);
        },
        "image/jpeg",
        1
      );
    });
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="wrapper">
          <div className="innerWrapper">
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
            >
              <img
                src={imgageObj.url}
                onLoad={(e) => setImageRef(e.currentTarget)}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                alt="nothing"
              />
            </ReactCrop>

            <div className="btnContainer">
              <InteractFlashyButton onClick={handleSubmit}>
                Save
              </InteractFlashyButton>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

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
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
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

function UserProfilePage() {
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useCurrentUser();
  const isCreator = user?.name === params.username ? true : false;

  const [description, setDescription] = useState("Welcome to my profile page");
  const [tab, setTab] = React.useState(0);
  const [modalOpened, setModalOpened] = useState(false);
  const [targetUser, setTargetUser] = useState({});
  const fileRef = useRef();
  const [image, setImage] = React.useState("https://iili.io/HH6JxB1.md.jpg");
  const [medal, setMedal] = React.useState(null);
  const Swal = useSwalWrapper();

  console.log("isCreator >>>", user, params.username, isCreator);
  const [cropModalOpen, setCropModalOpen] = React.useState(false);
  const [croppingImg, setCroppingImg] = React.useState({});

  const updatePhotoURL = async (url) => {
    setDoc(doc(db, "users", user.id), { photoURL: url }, { merge: true });
  };

  const updateDescription = async (description) => {
    try {
      await setDoc(
        doc(db, "users", user.id),
        { description: description },
        { merge: true }
      );
      setDescription(description);
    } catch (error) {
      console.log("Error while updating description", error);
    }
  };

  const getTargetUser = async () => {
    let defaultUser = await fetchUserByName(params.username);
    setTargetUser(defaultUser);
    const userListener = onSnapshot(
      query(doc(db, "users", defaultUser.id)),
      (querySnapshot) => {
        let userData = querySnapshot.data();
        const id = querySnapshot.id;
        setTargetUser({ ...userData, id });
        if (user?.name != params.username) {
          setImage(userData.photoURL);
          if (userData?.description?.length > 0)
            setDescription(userData.description);
        }
      }
    );
  };

  const handleFileClick = function () {
    fileRef.current.click();
  };

  const handleEditDescription = async function (e) {
    const { value: text } = await Swal.fire({
      title: "Description",
      input: "textarea",
      inputValue: description,
      inputPlaceholder: "Enter your description...",
      confirmButtonText: "Update",
      inputAttributes: {
        "aria-label": "Enter your description here.",
      },
      showCancelButton: true,
    });
    if (text) updateDescription(text);
  };

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    const filesize = Math.round(file.size / 1024);
    if (filesize >= 7168) {
      Swal.fire("Too Large!", "Max 7mb file size is allowed.", "error");
      return;
    }
    if (file) {
      var reader = new FileReader();
      reader.onload = function () {
        var dataURL = reader.result;
        setCroppingImg({ url: dataURL, name: file.name });
        setCropModalOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const getMedalStatus = async() => {
    const grossRevenue = user.grossRevenue;

    if (grossRevenue === undefined) {
      setMedal(null);
    }
    else if (grossRevenue <= 1000) {
      setMedal('/images/pages/profile/bronzeCreatorRank.png');
    }
    else if (grossRevenue <= 10000) {
      setMedal('/images/pages/profile/silverCreatorRank.png');
    }
    else if (grossRevenue <= 100000) {
      setMedal('/images/pages/profile/goldCreatorRank.png');
    }
    else if (grossRevenue <= 1000000) {
      setMedal('/images/pages/profile/platinumCreatorRank.png');
    }
    else {
      setMedal('/images/pages/profile/diamondCreatorRank.png');
    }
  }

  useEffect(() => {
    if (!user) return;
    if (!params.username) {
      navigate(user.name ? `/u/${user.name}` : "/");
    }

    getMedalStatus();
  }, [user]);

  useEffect(() => {
    if (params.username) getTargetUser();
  }, [params]);


  return (
    <Slide direction="down" timeout={1969} in={true} mountOnEnter unmountOnExit>
      <div>
        <FollowerList
          open={modalOpened}
          setOpen={setModalOpened}
          followers={targetUser?.followers}
        />
        <CropProfilePicture
          open={cropModalOpen}
          setOpen={setCropModalOpen}
          imgageObj={croppingImg}
          updatePhotoURL={updatePhotoURL}
          setImage={setImage}
        />
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundImage:
              "linear-gradient(to bottom right, #4b26a3, #d442f5)",
            width: "100%",
            py: 3.69,
            borderRadius: 2,
          }}
        >
          <div className="image_item">
            {user?.name === params.username && (
              <form className="image_item-form">
                <label className="image_item-form--label">Replace photo</label>
                <input
                  className="image-item-form-input"
                  type="file"
                  accept="image/*"
                  id="image-item-form--input-id"
                  onChange={(e) => handleChangeImage(e)}
                  ref={fileRef}
                ></input>
              </form>
            )}
            {/* <input type="file" onChange={handleChangeImage} /> */}
            <img className="profilePic" alt="profile-pic" src={image} />
          </div>
          <div style={{display: "flex", alignItems: "center", flexDirection: "row", position: "relative", marginTop: "10px"}}>
            <div
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {targetUser?.name}
            </div>
            <img
              alt=""
              style={{
                width: "40px",
                transform: "translateX(30px)",
                position: "absolute",
                right: "-30px"
              }}
              src={medal}
            />
          </div>
          <Box className="profile-desc--wrapper">
            <Typography
              sx={{
                mt: 1.69,
                mb: 1.69,
                fontSize: "14px",
                textAlign: "center",
                color: "#FFFFFF",
                lineHeight: "20px",
                marginLeft: "2rem",
                paddingRight: "2rem",
                maxWidth: "323.21px",
              }}
            >
              {description}
            </Typography>
            {user?.name === params.username && (
              <EditIcon
                className="profile-desc--edit"
                onClick={(e) => handleEditDescription(e)}
              />
            )}
          </Box>
          <div
            style={{
              display: "flex",
              boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              marginTop: 10,
              padding: 10,
              marginBottom: 5,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: "6.21px 11px 6.21px 11px",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <div
              onClick={() => setModalOpened(true)}
              style={{
                fontSize: 20,
                color: "#782fee",
                marginRight: 20,
                fontWeight: "600",
                cursor: "pointer",
                borderRadius: 2,
              }}
            >
              {targetUser && targetUser?.followers
                ? targetUser?.followers.length
                : 0}{" "}
              followers
            </div>
            <FollowButton user={user} targetUser={targetUser} />
          </div>
        </Stack>

        <Box sx={{ width: "100%" }}>
          <div className="InfoContainer">
            <Box
              sx={{
                mt: 0.42,
                borderTop: 0,
                borderBottom: 0,
                borderColor: "divider",
              }}
            >
              <Tabs
                value={tab}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="primary"
                size="50"
                centered
              >
                <StyledTab label="Campaigns" {...a11yProps(0)} />
                {user && (
                  <StyledTab label="Availability" {...a11yProps(1)} />
                )}
                {user && (
                  <StyledTab label="Creator availability" {...a11yProps(2)} />
                )}
                {user && <StyledTab label="Settings" {...a11yProps(3)} />}
              </Tabs>
            </Box>
          </div>

          <TabPanel value={tab} index={0}>
            <FollowedCampaigns />
          </TabPanel>

          <TabPanel value={tab} index={1}>
            <Scheduler />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            {isCreator ? <CreatorSchedules /> : null}
          </TabPanel>

          <TabPanel value={tab} index={3}>
            <Setting />
          </TabPanel>
        </Box>
      </div>
    </Slide>
  );
}

export default UserProfilePage;
