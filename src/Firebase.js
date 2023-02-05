import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH,
  projectId: process.env.REACT_APP_PROJID,
  storageBucket:process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.SENDERID,
  appId: process.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const name = result.user.displayName
    const email = result.user.email

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    window.location.pathname = ("/quiz")
  }).catch((error) => {
    console.log(error)
  })
}