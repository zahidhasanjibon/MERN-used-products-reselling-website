import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { app } from "../firebase/firebase.init"
  //create context
export const authContext = React.createContext()
// Initialize Firebase Authentication and get a reference to the service
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app)
export default function AuthContext({children}) {

      const [user,setUser] = useState({})
      const [isLoading,setIsLoading] = useState(false)


    const signUp  = (email,password) => {
      setIsLoading(true);
     return createUserWithEmailAndPassword(auth,email,password)
    }


    const updateProfileNameImg = (name, photoURL) => {
      return updateProfile(auth.currentUser, { displayName: name, photoURL });
    };


const value={signUp,user,isLoading,updateProfileNameImg}


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
