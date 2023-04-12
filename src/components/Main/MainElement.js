import React from 'react'
import { Outlet } from 'react-router-dom'
// import Footer from '../HeaderFooter/Footer'
import Navbar from '../HeaderFooter/Navbar'

function MainElement() {
  return (
    <>
      <Navbar />
        <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default MainElement
