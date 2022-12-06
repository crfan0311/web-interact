import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

import PasswordChecklist from "react-password-checklist";

import { Link, useNavigate,useParams } from "react-router-dom";
import { confirmPasswordChange, verifyResetCode } from "@jumbo/services/auth/firebase/firebase";

import './SignUpPage.css'
import InteractFlashyButton from '@interact/Components/Button/InteractFlashyButton';

function ResetPassword() {
  const search = new URLSearchParams(window.location.search);
  const oobCode = search.get("oobCode");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [isPassValid,setIsPassValid] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async function(){
    if(!isPassValid) return;
    const result = await confirmPasswordChange(oobCode,password);
    if(result) navigate('/');
  }

  useEffect(async ()=>{
    const verified = await verifyResetCode(oobCode);
    if(!verified) navigate('/a/signin');
  },[])

  return (
    <div className='SignUpPage'>
      {/* <div className='CredentialsBox'> */}

      <div className='CredentialBox'>

        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" style={{ height: 100, padding: 20 }} />

        <br />
        <div className="TextInputWrapper">
          <TextField
            id="outlined-basic"
            label="Create a password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="TextInputWrapper">
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
          minLength={6}
          value={password}
          valueAgain={passwordAgain}
          onChange={(isValid) => {
            setIsPassValid(isValid);
          }}
        />
        <br></br>
        <div className='ButtonsWrapper' style={{margin:10}}>
          <InteractFlashyButton onClick={()=>handleResetPassword()}>
            Change Password
          </InteractFlashyButton>
        </div>
        <div style={{ paddingTop: 20 }}>
          Already have an account? <Link to='/a/signin'>Sign in</Link>
        </div>



      </div>
      {/* </div> */}
    </div>
  );
}

export default ResetPassword;
