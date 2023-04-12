import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  const brand_image = "https://res.cloudinary.com/anmoldev/image/upload/v1674417698/portfolio/logo_cvdus8.svg"
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top={0}>
        <div className="container">
        <NavLink className="navbar-brand" to='/shoping/'>
          <img src={brand_image} alt="" /></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to='/shoping/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/shoping/portfolio'>Product</NavLink>
              </li>                   
              
              {/* <li className="nav-item">
                <NavLink className="nav-link"  to='/shoping/contact-us'>Login</NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link"  to='/contact-us'>Logout</NavLink>
              </li> */}
              {/* <li className="nav-item">
                <NavLink className="nav-link"  to='/contact-us'>Signup</NavLink>
              </li> */}
              <li className="nav-item">
                {/* <NavLink className="nav-link"  to='/shoping/cart'><i className="fa-solid fa-cart-shopping"></i><span class="badge badge-pill text-danger">9</span></NavLink> */}
                <NavLink className="nav-link"  to='/shoping/cart'><i className="fa-solid fa-cart-shopping"></i></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  to='/shoping/about'>About me</NavLink>
              </li>
            </ul>
          </div>
        </div>          
      </nav>
    </>
  )
}

export default Navbar
