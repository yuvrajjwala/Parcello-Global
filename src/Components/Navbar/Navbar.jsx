import React from 'react'
import './Navbar.css'
import ham from '../../assets/Navbar/ham.svg'
import search from '../../assets/Navbar/search.svg'
import cart from '../../assets/Navbar/cart.svg'
import parcello from '../../assets/Navbar/parcello.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-nav">
        <p>Parcello <img className='logo' src={parcello}></img></p>
      </div>
      <div className="pagesLinks">
        <ul>
          <li>Ship A Package</li>
          <li>Tracking</li>
          <li>Login</li>
          <NavLink to="/login" id="signup">
            Signup
          </NavLink>
          <img src={search}></img>
          <img src={cart}></img>
          <img src={ham}></img>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
