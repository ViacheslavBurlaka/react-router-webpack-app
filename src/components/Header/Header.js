import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <nav className="Nav">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/about/">
            About Us
          </NavLink>
          <NavLink exact to="/persons/">
            Persons
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
