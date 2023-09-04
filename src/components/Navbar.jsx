import React from 'react';
import "../components/Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/checkairquality">Check AirQuality</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
    </nav>
  )
}

export default Navbar
