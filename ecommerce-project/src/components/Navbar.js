import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img 
          className="navbar__logo" 
          src="https://pers.bol.com/app/files/2019/07/bolcom_logo_pay-off_wit_rgb-260.png"
          alt="navbar-logo"
        />
      </Link>
      <div className="navbar__search">
        <input 
          className="navbar__searchbar"
          placeholder="Waar ben je naar op zoek?"
        />
        <button className="navbar__searchButton">
          <SearchIcon className="navbar__searchIcon" />
        </button>
      </div>
      <div className="navbar__rightLinks">
        <Link to="/inloggen" className="navbar__link">
          <div className="navbar__option">
            <span className="navbar__inloggenText">Inloggen</span>
          </div>
        </Link>
        {/* <div className="navbar__option navbar__loginOption">
            <span>Welkom</span>
            <span><strong>Twan</strong></span>
        </div>
        <Link to="/account" className="navbar__link">
          <div className="navbar__option navbar__icon">
            <PersonOutlinedIcon/>
          </div>
        </Link> */}
        <Link to="/lijstjes" className="navbar__link">
          <div className="navbar__option navbar__icon">
            <FavoriteBorderIcon/>
          </div>
        </Link>
        <Link to="/afrekenen" className="navbar__link">
          <div className="navbar__option navbar__icon">
            <ShoppingCartOutlinedIcon/>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 