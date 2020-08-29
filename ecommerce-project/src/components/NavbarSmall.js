import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { Badge } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import './NavbarSmall.css';


const NavbarSmall = () => {
  const [{ winkelmandje }] = useStateValue();

  return (
      <nav className="navbarSmall">
        <Link to="/" className="navbarSmall__link">
            <MenuIcon className="navbarSmall__menuIcon"/>
        </Link>
        <Link to="/">
          <img 
            className="navbarSmall__logo"
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
          {winkelmandje.length === 0 
          ?
          <Link to="/winkelwagentje" className="navbarSmall__link">
              <ShoppingCartOutlinedIcon/>
          </Link>
          :
          <Link to="/winkelwagentje" className="navbarSmall__link">
              <Badge badgeContent={winkelmandje.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
          </Link>
          }
        </div>
    </nav>
  );
};

export default NavbarSmall;