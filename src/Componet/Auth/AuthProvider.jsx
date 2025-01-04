import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loader,setloader]=useState(true)
    const googleProvider = new GoogleAuthProvider();


const userRegistar=(email, password)=>{
    setloader(true)
  return  createUserWithEmailAndPassword(auth, email, password)
}
const signIn=(email,password)=>{
    setloader(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const signOutUser=()=>{
    setloader(true)
    return signOut(auth)
}
const googleLogin=()=>{
    setloader(true)
   return signInWithPopup(auth, googleProvider)
}
useEffect(()=>{
    const subsCribe= onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
      setuser(currentuser)
 //     console.log(currentuser)
      } else {
        
      }
      setloader(false)
    });
    return ()=>subsCribe() 
},[])

const authInfu={
    userRegistar,signIn,signOutUser,googleLogin,user,setuser,loader
}

    return (
        <AuthContext.Provider  value={authInfu}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;