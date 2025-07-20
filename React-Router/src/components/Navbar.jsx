import React from 'react'
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt="" style={{height:"150px", width:"150px"}} />
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar