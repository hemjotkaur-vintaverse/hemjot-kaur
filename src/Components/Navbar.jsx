import React from 'react'
import './Navbar.css'
import logo from '../assets/Logo (1).png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left-nav-items">
            <div className="main-logo"><span><img src={logo} alt="" /></span>Neurovia</div>
            <div className="nav-list-items">
                <ul>
                <li className='home'>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Docs</li>
            </ul>
            </div>
        </div>
        <div className="right-nav-items">
            <div className="signin-btn">Sign In</div>
            <div className="signup-btn">Sign Up</div>
        </div>
    </div>
  )
}

export default Navbar
