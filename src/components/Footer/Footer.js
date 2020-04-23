import React from 'react';
import './Footer.scss';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <div className="container">
        <p>
          © {props.year}. React app.
          <br />
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  year: PropTypes.number,
};
