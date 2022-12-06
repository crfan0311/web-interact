import React from 'react'
import {auth} from './firebase/firebase.js';
import { useNavigate } from 'react-router-dom';

function AuthGuard({children}) {
    const navigate = useNavigate();
    auth.onAuthStateChanged(user => {
        if(!user){
            navigate('/a/signin');
        }
    });
    return (
        <>
        {children}
        </>
    )
}

export default AuthGuard