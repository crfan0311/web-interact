import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, 
  sendPasswordResetEmail, signOut, verifyPasswordResetCode,confirmPasswordReset } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, setDoc, doc} from "firebase/firestore";
import { postRequest } from '../../../../utils/api';
import Swal from 'sweetalert2';
import { validateEmail } from "@jumbo/utils";
import { Navigate } from "react-router-dom";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAztlkNsd8Lu86qj5D7Y9TbI6Wvt_hVjJw",
  authDomain: "interact2002.firebaseapp.com",
  projectId: "interact2002",
  storageBucket: "interact2002.appspot.com",
  messagingSenderId: "614264280566",
  appId: "1:614264280566:web:8644b5c9d6c9f8277c23d7",
  measurementId: "G-LBQPPM4GPT",
};

const FinalSwal = Swal.mixin({
  customClass: {
      container: 'custom_swal_container',
      popup: 'custom_swal_popup',
      title: 'custom_swal_title',
      closeButton: 'custom_swal_closeButton',
      image: 'custom_swal_image',
      htmlContainer: 'custom_swal_htmlcontainer',
      confirmButton: 'custom_swal_confirmButton',
      cancelButton: 'custom_swal_cancelButton',
      footer: 'custom_swal_footer'
  }
});

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

const getErrorMessage = (message) => {

  let errMessage;
  switch (message) {
    case "Firebase: Error (auth/invalid-email).":
      errMessage = "Invalid email/username!";
      break;
    case "Firebase: Error (auth/wrong-password).":
      errMessage = "Wrong password!";
    case "Firebase: Error (internal-error).":
      errMessage = "You don't have access to this page unless you have clicked the link from the email!";
    default:
      errMessage = message;
      break;
  }

  return errMessage;
};

const signInWithGoogle = async () => {
  try {
    console.log("here");
    const res = await signInWithPopup(auth, googleProvider);
    console.log("res", res);
    // const user = res.user;
    // const q = query(collection(db, "users"), where("uid", "==", user.uid));
    // const docs = await getDocs(q);
    // if (docs.docs.length === 0) {
    //   await setDoc(doc(db, "users", user.uid), {
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: "google",
    //     email: user.email,
    //   });
    // }
  } catch (err) {
    console.error(err);
    FinalSwal.fire(getErrorMessage(err.message), "", "error");
  }
};

const signupWithGoogle = async () => {
  try {

  }
  catch (err) {
    console.log(err);
  }
};

const getUserByName = async (name) => {
    const q = query(collection(db, "users"), where("nameInLowerCase", "==", name.toLowerCase()))
    const querySnap = await getDocs(q);
    if(querySnap.docs.length > 0){
      const docSnap = querySnap.docs[0];
      if(docSnap.exists()) return docSnap.data();
    }
    return null;
};

const loginWithEmailAndPassword = async (email, password) => {
  if(!validateEmail(email)){
    const doc = await getUserByName(email);
    if(doc != null) email = doc.email;
  }
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    FinalSwal.fire(getErrorMessage(err.message), "", "error");
  }
};

const registerWithEmailAndPassword = async (name,legalName, email, password, imageurl,country,schedule,timeZone) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    // console.log("customer id", usersdoc.docs[index].id);

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      nameInLowerCase: name.toLowerCase(),
      legalName,
      authProvider: "local",
      email,
      customerId:'',
      country,
      photoURL:imageurl,
      schedule,
      timezone:timeZone
    });
    postRequest("/a/register-customer", formData).then(async (resp) => {
        setDoc(doc(db, "users", user.uid), {customerId: resp.data.customer.id}, {merge:true});
      })
      .catch((err) => {
        console.log(err);
      });
      return true;
  } catch (err) {
    console.error(err);
    FinalSwal.fire(getErrorMessage(err.message), "", "error");
    return false;
  }
};

const sendPasswordReset = async (email) => {
  if(!validateEmail(email)){
    const doc = await getUserByName(email);
    if(doc) email = doc.email;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    return Swal.fire("Success!", "Password reset link sent!", "success").then((result)=>{
      if(result.isConfirmed) return true;
      if(result.isDismissed) return false;
    });
  } catch (err) {
    Swal.fire("Error!", err.message, "error");
    return false;
  }
};

const logout = () => {
  signOut(auth);
};

const verifyResetCode = async (code) => {
  try{
    await verifyPasswordResetCode(auth,code);
    return true;
  }catch(err){
    FinalSwal.fire(getErrorMessage(err.message), "", "error");
    return false;
  }
}

const confirmPasswordChange = async (code,password) => {
  try{
    await confirmPasswordReset(auth,code,password);
    return Swal.fire("Success!", "Password has been changed!", "success").then((result)=>{
      if(result.isConfirmed) return true;
      if(result.isDismissed) return false;
    });
  }catch(err){
    Swal.fire("Error!",err.message, "error");
    return false;
  }
}

export {
  auth,
  db,
  storage,
  signInWithGoogle,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  verifyResetCode,
  confirmPasswordChange,
  getUserByName,
  logout,
};
