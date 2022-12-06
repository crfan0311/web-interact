import { TextField, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "@jumbo/services/auth/firebase/firebase";

import fb_logo from './facebook.png';
import gl_logo from './google.png';

import './SignUpPage.css'
import useCurrentUser from '@interact/Hooks/use-current-user';
import Loading from '@interact/Components/Loading/Loading';
import InteractFlashyButton from '@interact/Components/Button/InteractFlashyButton';
import {LAYOUT_NAMES} from "../../../app/layouts/layouts";
import {useJumboApp} from "@jumbo/hooks";

function SignInPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(`/u/${user.name}`);
  }, [user]);


  const login = async () => {
    await loginWithEmailAndPassword(email, password);
  };

  return (
    <div className='SignUpPage'>
      {/* <div className='CredentialsBox'> */}

      <div className='CredentialBox'>

        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" style={{ height: 100, padding: 20 }} />

        <Button className='SignUpWithGoogle' onClick={signInWithGoogle}><img src={gl_logo} style={{ height: '100%' }} /> <div>Sign in with Google</div></Button>
        {/* <Button className='SignUpWithGoogle' style={{backgroundColor:'#1778F2', color:'white'}}><img src={fb_logo} style={{height:'100%'}} /> <div>Sign In with Facebook</div></Button> */}


        <br />
        or
        <br />
        <div className='TextInputWrapper'>
          <TextField id="outlined-basic" label="Username or email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='TextInputWrapper'>
          <TextField onKeyDown={(e)=>{
            e.key === 'Enter' && login();
          }} id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
        </div>
        <div className='ButtonsWrapper' style={{margin:10, paddingTop: 13.69}}>
          <InteractFlashyButton onClick={login}>
            Log in
          </InteractFlashyButton>
        </div>
        <div style={{ paddingTop: 20, paddingTop: 13.69}}>
          <Link to='/a/forgotpassword'>Forgot password</Link>
        </div>
        <div style={{ paddingTop: 7, paddingBottom: 16.21 }}>
          Don't have an account? <Link to='/a/signup'>Sign up now</Link>
        </div>



      </div>
      {/* </div> */}
    </div>
  );
}

export default SignInPage;
