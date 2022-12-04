import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { app } from "../firebase/firebase.init"
  //create context
export const authContext = React.createContext()
// Initialize Firebase Authentication and get a reference to the service
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app)
export default function AuthContext({children}) {

      const [user,setUser] = useState({})
      const [isLoading,setIsLoading] = useState(true)
      const [roleName,setRoleName] = useState(null)


    const signUp  = (email,password) => {
      setIsLoading(true);
     return createUserWithEmailAndPassword(auth,email,password)
    }


    const updateProfileNameImg = (name, photoURL) => {
      return updateProfile(auth.currentUser, { displayName: name, photoURL });
    };

     // logout functionality
  const logOut = () => {
    setIsLoading(true)
    return signOut(auth);
  };


    // sign in functionality

    const signIn = (email, password) => {
      setIsLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    // login with google
    const loginWithgoogle = () => {
      setIsLoading(true);
      const Provider = new GoogleAuthProvider();
      return signInWithPopup(auth, Provider);
    };


    const checkUserRole = (email) => {
          fetch(`${process.env.REACT_APP_API_URL}/user/checkrole/${email}`)
          .then(res => res.json())
          .then(data => {setRoleName(data.role)})        
}





const value={signUp,user,isLoading,setIsLoading,updateProfileNameImg,logOut,signIn,loginWithgoogle,roleName,setRoleName,checkUserRole}


      useEffect(() => {
          
      const subs =   onAuthStateChanged(auth, (userInfo) => {
          if (userInfo) {
            setIsLoading(false);
            setUser(userInfo);
            
          } else {
            setIsLoading(false)
            setUser({})
          }
        })
       
            return () => {
              subs();
            };
          

      },[])


  return (
    <>
    <authContext.Provider  value={value}>
        {children}
    </authContext.Provider>
    </>
  )
}
