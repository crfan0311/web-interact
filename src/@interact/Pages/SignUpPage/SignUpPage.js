import { TextField, Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useState } from 'react';

import fb_logo from './facebook.png';
import gl_logo from './google.png';

import './SignUpPage.css'

function SignUpPage() {
    const [birdthday, setBirthday] = React.useState(null);

  return (
      <div className='SignUpPage'>
          {/* <div className='CredentialsBox'> */}

            <div className='CredentialBox'>

                <img src={process.env.PUBLIC_URL+'/logo.png'} alt="logo" style={{height:100, padding:20}}/>
                <Button className='SignUpWithGoogle' ><img src={gl_logo} style={{height:'100%', paddingRight:10}} /> <div>Sign Up with Google</div></Button>
                {/* <br /> */}
                <Button className='SignUpWithGoogle' style={{backgroundColor:'#1778F2', color:'white', display:'flex'}}><img src={fb_logo} style={{height:'100%', paddingRight:10}} /> <div>Sign Up with Facebook</div></Button>

            
            <br/>
            or
            <br/>
                    <div className='TextInputWrapper'>
                        {/* <div style={{color:'#444'}}>Sign up with Email</div> */}
                        <TextField id="outlined-basic" label="Sign up with Email" variant="outlined" />
                    </div>
                    {/* <div className='TextInputWrapper'>
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                    </div>
                    <div className='TextInputWrapper'>
                        <TextField id="outlined-basic" label="Create a password" variant="outlined" />
                    </div>
                    <div className='TextInputWrapper'>
                        <TextField id="outlined-basic" label="Retype your password" variant="outlined" />
                    </div>
                    <div className='TextInputWrapper'>
                        <LocalizationProvider  dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Birthday"
                                value={birdthday}
                                onChange={(newValue) => {
                                    setBirthday(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>

                    </div> */}


                    <div className='ButtonsWrapper'>
                        <Button     
                            style={{
                                margin:10,
                                color:'white',
                                backgroundColor: "purple",
                                padding: "10px 20px",
                                // fontWeight:'bold',
                            }}
                            color='info'>Create account</Button>
                    </div>
                    <div style={{paddingTop:20}}>
                        Already have an account? <a href='#'>Log in</a>
                    </div>
    

            </div>
        {/* </div> */}
      </div>
  );
}

export default SignUpPage;
