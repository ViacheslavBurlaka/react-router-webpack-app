import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <main className="Content">
      <div className="container">{children}</div>
    </main>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
