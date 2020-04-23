import React from 'react';
import Layout from '../../containers/Layout/Layout';
import PropTypes from 'prop-types';

const NotFound = (props) => {
  const { pathname } = props.location;
  return (
    <Layout>
      <h1>404 error!</h1>
      <p>Page not found!</p>
      <p>
        Page <strong>{pathname}</strong> doesn't exist.
      </p>
    </Layout>
  );
};

export default NotFound;

NotFound.propTypes = {
  location: PropTypes.object,
};
