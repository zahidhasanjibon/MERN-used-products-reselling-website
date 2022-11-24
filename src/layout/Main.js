import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/navbar/Navbar'

export default function Main() {
  return (
    <>
    <Navbar />
          <Outlet></Outlet>   


    </>
  )
}
