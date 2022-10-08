import React from 'react';
import { Link } from 'react-router-dom';
import logo from'../../images/Logo.svg'
import './Header.css'

const Header = () => {
  return (
    <nav className="header-container">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/order">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;