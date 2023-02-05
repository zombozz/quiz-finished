import React from 'react'
import { signInWithGoogle } from '../../Firebase';
import './Login.css'
import Navbar from '../Nav/Navbar';

const Login = () => {
    const guestSignIn = () => {
        localStorage.setItem("name", "Guest")
        localStorage.setItem("email", "guest@valearnis.com")
        window.location.pathname = ("/quiz")
    }
  return (
    <>
    <Navbar />
    <div className='login-container'>
        <h1>Please sign in:</h1>
        {/* <div className='login-btns'> */}
        <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign In With Google</button>
        <button className='login-as-guest-btn' onClick={guestSignIn}> Continue as Guest</button>
        {/* </div> */}
        {/* <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1> */}
    </div>
    </>
  )
}

export default Login