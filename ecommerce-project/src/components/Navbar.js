import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { Badge } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import auth from './firebase';
import './Navbar.css';

const Navbar = () => {
  const [{ winkelmandje, user }] = useStateValue();

  const login = () => {
    auth.signOut();
  };

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
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
          <button type="button" className="navbar__searchButton">
            <SearchIcon className="navbar__searchIcon" />
          </button>
        </div>
        <div className="navbar__rightLinks">
          {!user
            ? (
              <Link to="/inloggen" className="navbar__link">
                <div className="navbar__option">
                  <span className="navbar__inloggenText">Inloggen</span>
                </div>
              </Link>
            )

            : (
              <>
                <div className="navbar__option navbar__loginOption">
                  <span>
                    Welkom
                    <strong>
                      {user.email.slice(0, 1).toUpperCase()}
                    </strong>
                  </span>
                  <span onClick={login} className="navbar__signout">
                    <strong>Uitloggen</strong>
                  </span>
                </div>
                <Link to="/account" className="navbar__link">
                  <div className="navbar__option navbar__icon">
                    <PersonOutlinedIcon />
                  </div>
                </Link>
              </>
            )}
          <Link to="/lijstjes" className="navbar__link">
            <div className="navbar__option navbar__icon">
              <FavoriteBorderIcon />
            </div>
          </Link>
          {winkelmandje.length === 0
            ? (
              <Link to="/winkelwagentje" className="navbar__link">
                <div className="navbar__option navbar__icon">
                  <ShoppingCartOutlinedIcon />
                </div>
              </Link>
            )
            : (
              <Link to="/winkelwagentje" className="navbar__link">
                <div className="navbar__option navbar__icon">
                  <Badge badgeContent={winkelmandje.length} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </div>
              </Link>
            )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
