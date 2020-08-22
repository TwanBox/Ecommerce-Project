import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import './NavbarSmall.css';

const NavbarSmall = () => {
  return (
      <nav className="navbarSmall">
        <Link to="/" className="navbarSmall__link">
            <MenuIcon className="navbarSmall__menuIcon"/>
        </Link>
        <Link to="/">
          <img 
            className="navbarSmall__logo" 
            // src="https://pers.be.bol.com/app/files/2018/05/bolcom_logo_pay-off_blauw_rgb.png"
            src="https://pers.bol.com/app/files/2019/06/bol-com-logo.png"
            alt="navbar-logo"
          />
        </Link>
        <div className="navbarSmall__navIcons">
          <Link to="/inloggen" className="navbarSmall__link">
              <PersonOutlinedIcon/>
          </Link>
          <Link to="/lijstjes" className="navbarSmall__link">
              <FavoriteBorderIcon/>
          </Link>
          <Link to="/winkelwagentje" className="navbarSmall__link">
              <ShoppingCartOutlinedIcon/>
          </Link>
        </div>
    </nav>
  );
};

export default NavbarSmall;