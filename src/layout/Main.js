import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/Footer'
import Navbar from '../component/navbar/Navbar'

export default function Main() {
  return (
    <>
    <Navbar />
          <Outlet></Outlet>   
          <Footer />
        
    </>
  )
}
