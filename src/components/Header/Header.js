import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <nav className="Nav">
          <Link to="/">Home</Link>
          <Link to="/about/">About Us</Link>
          <Link to="/persons/">Persons</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
