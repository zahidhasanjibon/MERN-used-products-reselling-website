import { getAuth } from "firebase/auth"
import React from "react"
import { app } from "../firebase/firebase.init"
  //create context
export const authContext = React.createContext()
// Initialize Firebase Authentication and get a reference to the service
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app)
export default function AuthContext({children}) {




const value={}
  return (
    <>
    <authContext.Provider  value={value}>
        {children}
    </authContext.Provider>
    </>
  )
}
