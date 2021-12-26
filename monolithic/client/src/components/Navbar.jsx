import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import Dropdown from "./Dropdown";
import {useDispatch, useSelector} from 'react-redux'
import { logout } from "../actions/auth";
import "../css/button.css";
import {Button} from '@mui/material'





function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const {loading, isAuthenticated} = auth

  const clickHandler = (e) => {
    e.preventDefault();
    console.log('Hello')
    dispatch(logout());
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          VENCE 
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {auth.isAuthenticated? 
      <Link
      to="/shops"
      className="nav-links"
      onClick={closeMobileMenu}
    >
      Shops <i className="fas fa-caret-down" />
    </Link>
 : <Link
 to="/services"
 className="nav-links"
 onClick={closeMobileMenu}
>
 Services <i className="fas fa-caret-down" />
</Link>}
            
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Fragment>
      {auth.isAuthenticated? 
      <Button variant="contained" className="btn" onClick={clickHandler}>Logout</Button>
 : <Link to="signup">
      <Button variant="contained" className="btn">Sign Up</Button>
    </Link>}
    
    </Fragment>
      </nav>
    </>
  );
}

export default Navbar;
