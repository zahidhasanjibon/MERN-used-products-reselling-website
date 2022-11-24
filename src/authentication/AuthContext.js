import React from "react"

const authContext = React.createContext()
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
