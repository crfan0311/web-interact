import { TextField, Button,FormControl, FormControlLabel, Checkbox,Alert, Icon, MenuItem,Select,InputLabel, Typography,Container, Tabs,styled,Tab } from "@mui/material";
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useEffect, useState, useRef } from "react";
// import  from 'sweetalert2';
import ScheduleSelector from 'react-schedule-selector'
import { useSelector } from "react-redux";

import EditIcon from "@mui/icons-material/Edit";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { auth, registerWithEmailAndPassword, signInWithGoogle, getUserByName } from "@jumbo/services/auth/firebase/firebase";
import PasswordChecklist from "react-password-checklist";
import {Country} from 'country-state-city';

import fb_logo from "./facebook.png";
import gl_logo from "./google.png";

import profile_1 from "./interact-heart-baby-blue.png";
import profile_2 from "./interact-heart-light-orange.png";
import profile_3 from "./interact-heart-light-pink.png";
import profile_4 from "./interact-heart-light-violet.png";
import profile_5 from "./interact-heart-purple-original.png";
import profile_6 from "./interact-heart-red.png";
import profile_7 from "./interact-heart-yellow.png";

import { Storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import "./SignUpPage.css";
import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import { getUserCountryName } from "app/utils";

import {LAYOUT_NAMES} from "../../../app/layouts/layouts";
import {useJumboApp} from "@jumbo/hooks";
import { TabContext, TabPanel } from "@mui/lab";
import { Formik } from "formik";
import moment from "moment";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";

const StyledTab = styled((props) => <Tab {...props} />)(
  ({ theme }) => ({
    // this uses the theme we passed to the ThemeProvider in App.js
    textTransform: "none",
    fontWeight: 400,
    fontSize: "16.21px",
    color: "#FFFFFF",
    "&.Mui-selected": {
      color: "#FFFFFF",
      //color: theme.palette.text.primary,
    },
    cursor: "default",
  })
);

// newer SignUpPage with birthday.
function SignUpPage2() {
  const [name,setName] = useState("");
  const [legalName,setLegalName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [birthday,setBirthday] = useState("");
  const [country,setCountry] = useState("");
  const [usernameError,setUserNameError] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [imageUrl,setImageUrl] = useState(null);
  const [image,setImage] = useState(null);
  const [selectedTabIndex,setSelectedTabIndex] = useState(0);
  const [isValid,setIsValid] = useState(false);
  const [schedule, setSchedule] = useState([])
  const navigate = useNavigate();
  const location = useLocation();
  const Swal = useSwalWrapper();
  const [checked, setChecked] = useState(false);
  
  const DEVICE_TIMEZONE = useSelector((state) => state.localization.deviceTimezone);
  

  const fileRef = useRef();

  const profile_images = [profile_1,profile_2,profile_3,profile_4,profile_5,profile_6,profile_7];
  const handleFileClick = function(){
    fileRef.current.click();
  }

  //Form Data

  const [initialValues, setInitialValues] = useState({
    email:'',
    username:'',
    legalName:'',
    birthday:moment().subtract('years',13),
    password:'',
    passwordAgain:''
  });

  const onFormSubmit = async (values,{setSubmitting})=>{
    const isDuplicate = await checkDuplicate(values.username);
    console.log(isDuplicate)
    if(isDuplicate){
      setUserNameError("Name already in use");
      return;
    }
    setName(values.username);
    setLegalName(values.legalName);
    setPassword(values.password);
    setEmail(values.email);
    setBirthday(values.birthday);
    setSubmitting(false);
    nextStep();
  };

  const validator = (values)=>{
    const errors = {};
    //email
    if (!emailValid(values.email)){
      errors.email = "Invalid email";
    }else if(!values.email){
      errors.email = "Email is required";
    }
    //birthday
    const crrDate = new Date();
    const dobDate = new Date(values.birthday);
    if((crrDate.getFullYear() - dobDate.getFullYear()) < 13){
      errors.birthday = "Age limit is 13 years";
    }
    //username
    if(values.username.length > 15){
      errors.username = "Cannot be longer than 15 characters.";
    }else if(/\s/.test(values.username)){
      errors.username = "Whitespaces are not allowed";
    }else if(JSON.stringify(values.username).includes('\\')){
      errors.username = "Cannot contain '\\'"
    }else if(JSON.stringify(values.username).match("undefined")){
      errors.username = "Username cannot be 'undefined'";
    }else if(values.username.length < 3){
      errors.username = "Invalid username"
    }
    if(/^[A-Za-z\s]+$/.test(values.legalName)){
      console.log("is valid name");
    }else{
      errors.legalName = "Invalid name";
    }
    setUserNameError('');
    return errors;
  }

  const handleChangeSchedule = (newSchedule) => {
    setSchedule(newSchedule)
  }

  const emailValid = (_email = 'abcd@gmail.com') => {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(_email);
  }

  const checkDuplicate = async (name) => {
    const doc = await getUserByName(name);
    console.log(doc);
    if(doc === null) return false;
    else return true;
  }

  const nextStep = () => {
    if (!isValid) {
      Swal.fire(
        "Incorrect!",
        "Password is not valid",
        "error"
        );
      return;
    }
    setSelectedTabIndex(selectedTabIndex+1);
  }
  const prevStep = () => {
    setInitialValues({
      email:email,
      username:name,
      legalName:legalName,
      birthday:birthday,
      password:password,
      passwordAgain:password
    });
    console.log("initialValues", initialValues);
    setSelectedTabIndex(selectedTabIndex-1);
  }

  const register =async () => {
    if (!checked) {
      Swal.fire(
        "Error!",
        "You must accept the privacy policy<br>and terms & conditions.",
        "error"
        );
      return;
    }
    const resp = await registerWithEmailAndPassword(name, legalName, email, password, imageUrl, country, schedule, DEVICE_TIMEZONE);
    console.log("resp",resp)
    if(resp){
      let redirectUrl = new URLSearchParams(location.search).get('redirect');
      if(redirectUrl){
        return navigate(redirectUrl);
      }
      navigate(`/u/${name}`)
    };
  };

  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    const filesize = Math.round((file.size / 1024));
    if(filesize >= 7168){
      Swal.fire(
        "Too Large!",
        "Max 7mb file size is allowed.",
        "error"
        );
      return;
    }
    if (file) {
      const storageRef = ref(Storage, `/user_profile_pictures/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => {
          Swal.fire(
            "Failed!",
            "Failed to upload your image.",
            "error"
            );
          console.log(err)
        },
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            setImageUrl(url);
          });
        }
      );

      var reader = new FileReader();
      reader.onload = function () {
        var dataURL = reader.result;
        setImage(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const setRandomImage = function(){
    setImage(profile_images[Math.floor(Math.random() * profile_images.length)]);
    setImageUrl(profile_images[Math.floor(Math.random() * profile_images.length)]);
  }

  useEffect(()=>{
    const countryName = getUserCountryName();
    if(countryName){
      setCountry(countryName);
    }else{
      setCountry(Country.getAllCountries()[0].name);
    }
  },[])

  useEffect(() => {
    setRandomImage();
    if (loading) return;
    if (user) navigate("/user");
  }, [user, loading]);

  return (
    <div className="SignUpPage">
      {/* <div className='CredentialsBox'> */}
      <div>
      <TabContext value={selectedTabIndex}>
      <Container
      disableGutters
      sx={{
        maxWidth: 1000,
        mt: 1,
        mb: 2,
        width: '500px'
      }}
    >
      <Tabs
        value={selectedTabIndex}
        onChange={(_,index)=> {
          setSelectedTabIndex(index)
        }}
        centered={true}
        textColor="primary"
        variant="fullWidth"
        indicatorColor="primary"
        aria-label="icon label tabs example"
      >
      </Tabs>
      </Container>
      <TabPanel value={0} index={0} style={{padding:'0'}}>
        <Formik 
          initialValues={initialValues}
          onSubmit={onFormSubmit}
          validate={validator}>
        {({values,errors,isSubmitting,handleSubmit,handleChange,setFieldValue})=>(
          <form className="CredentialBox" onSubmit={handleSubmit}>
            <img
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="logo"
              style={{ height: 120, padding: 20 }}
            />
            <div className="profile_pic" style={{position: "relative",margin:"1rem"}}>
              <img
                src={image}
                alt="profile image"
                style={{height: 100, padding: 10, borderRadius:"50%"}}
              />
              <input type="file" accept="image/*" onChange={(e)=>handleChangeImage(e)} ref={fileRef}/>
              <EditIcon onClick={(e)=>handleFileClick(e)} className="profile_pic--icon"/>
            </div>
            <div style={{ paddingTop: 0 }}>
              Already have an account? <Link to="/a/signin">Log in</Link>
            </div>
            <br></br>
            {/* need to set google sign in in the firebase console, rn its only email/password*/}
            <Button className="SignUpWithGoogle" onClick={signInWithGoogle}>
              <img src={gl_logo} style={{ height: "100%", paddingRight: 10 }} />{" "}
              <div>Sign up with Google</div>
            </Button>
            {/* <br /> */}
            <Button
              className="SignUpWithGoogle"
              style={{
                backgroundColor: "#1778F2",
                color: "white",
                display: "flex",
              }}
            >
              <img src={fb_logo} style={{ height: "100%", paddingRight: 10 }} />{" "}
              <div>Sign up with Facebook</div>
            </Button>
            <br />
            or
            <br />
            <div className="TextInputWrapper">
              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email}
              />
            </div>

            <div className="TextInputWrapper">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of birth"
                  value={values.birthday}
                  maxDate={moment().subtract('years',13)}
                  onChange={(value)=>setFieldValue('birthday',value,true)}
                  renderInput={(params) => <TextField {...params} name="birthday" error={errors.birthday} helperText={errors.birthday} />}
                />
              </LocalizationProvider>
            </div>
            <div className="TextInputWrapper">
              <FormControl>
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country-select"
                value={country}
                label="Country"
                onChange={(e)=>setCountry(e.target.value)}
              >
                {Country.getAllCountries().map((country)=>{
                  return <MenuItem value={country.name}>{country.name}</MenuItem>
                })}
              </Select>
              </FormControl>
            </div>
            
            <div style={{width:"80%", align: "center", padding:"10px"}}>
              <Alert severity="warning">
                <Typography fontSize= {"13.21px"}>Username can't be changed in the future
                </Typography>
                </Alert>
            </div>
            <div className="TextInputWrapper">
              <TextField
                error={errors.username || usernameError}
                id="outlined-basic"
                name="username"
                label="Username"
                variant="outlined"
                value={values.username}
                helperText={errors.username || usernameError}
                onChange={handleChange}
              />
            </div>
            
            <div className="TextInputWrapper">
              <TextField
                error={errors.legalName}
                id="outlined-basic"
                name="legalName"
                label="Name"
                variant="outlined"
                value={values.legalName}
                helperText={errors.legalName}
                onChange={handleChange}
              />
            </div>

            <div className="TextInputWrapper">
              <TextField
                id="outlined-basic"
                label="Create a password"
                variant="outlined"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <div className="TextInputWrapper">
              <TextField
                id="outlined-basic"
                label="Retype your password"
                variant="outlined"
                name="passwordAgain"
                type="password"
                value={values.passwordAgain}
                onChange={handleChange}
              />
            </div>
            <PasswordChecklist
              rules={["minLength", "number", "match"]}
              minLength={6}
              value={values.password}
              valueAgain={values.passwordAgain}
              onChange={(isValid)=>setIsValid(isValid)}
            />

            {/* <FormControlLabel control={<Checkbox />} label={"I agree to all " + <a href='https://eforms.com/release/media/'>terms and services</a>} /> */}
            
            <div className="ButtonsWrapper" style={{margin:10, paddingTop:13.69}}>
              <InteractFlashyButton type="submit" disabled={isSubmitting}>Next →</InteractFlashyButton>
            </div>
            <div style={{ paddingTop: 20, paddingBottom: 16.21}}>
              Already have an account? <Link to="/a/signin">Log in</Link>
            </div>
        </form>)}
        </Formik>
      </TabPanel>
      <TabPanel value={1} index={1} style={{padding:'0'}}>
        <div className="CredentialBox">
          <div className="ButtonsWrapper" style={{margin:0, paddingTop:0, paddingBottom: 16.69}}>
            <InteractFlashyButton
            onClick={prevStep}>← Go back</InteractFlashyButton>
          </div>
                    <Typography width={332.69} align="center" mb={1.2121}>
                      <Typography variant="span" fontSize={23.21} fontWeight={'500'}>Choose your{" "}</Typography>
                      <Typography variant="span" color='#782fee' fontSize={23.21} fontWeight={'500'}>general availability</Typography>
                      <Typography variant="span" fontSize={23.21} fontWeight={'500'}>{" "}from Monday—Sunday.</Typography>
                    </Typography>
                      <Typography align="center" width={332.69} fontWeight={'400'} mb={3.69}>After you win an interaction, 
                      you will be matched with that creator's weekly released schedule according to the availability you set here (editable on your profile).</Typography>
                    <ScheduleSelector
                        selection={schedule}
                        numDays={7}
                        minTime={0}
                        maxTime={24}
                        rowGap='1px'
                        columnGap='1px'
                        hourlyChunks={4}
                        onChange={handleChangeSchedule} 
                        unselectedColor='#ddd' 
                        renderDateLabel={
                            (date)=>{return <div>{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]}</div>}
                        }
                        renderTimeLabel={
                            (time)=>{
                                const hour = time.getHours();
                                const timestring = (hour==0 ? '12' : ((hour-1)%12+1).toString()).concat(hour<11 ? 'am' : 'pm');
                                return (<div>{time.getMinutes()==0 ? timestring: null}</div>
                            )}
                        }
                        startDate = {new Date('15 August 2022')}
                        // renderDateCell={(datetime, selected, refSetter)=>{
                        //     return (
                        //         <div ref={refSetter} style={selected ? {height:10, backgroundColor:'#836fee'}:{height:10, backgroundColor: '#ccc'}}>

                        //         </div>
                        //     )
                        // }}
                        selectedColor='#782fee'
                    />
        <div
          style={{
            display: "flex",
            justifContent: "center",
            alignItems: "center",
            marginTop: 17.69
          }}
        >
          <Checkbox checked={checked} onChange={event => {setChecked(event.target.checked);}}/>
          <span>
            I agree to the <Link to="/a/terms-and-conditions">terms & conditions</Link> and the <Link to="/a/privacy-policy">privacy policy</Link>
          </span>
        </div>
          <div className="ButtonsWrapper" style={{margin:10, paddingTop:13.69, paddingBottom:17.69}}>
            <InteractFlashyButton
            onClick={register}>Create account</InteractFlashyButton>
          </div>
        </div>
      </TabPanel>
      </TabContext>
      {/* </div> */}
      </div>
    </div>
  );
}
export default SignUpPage2;
