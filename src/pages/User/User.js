import React from 'react';
import Layout from '../../containers/Layout/Layout';
// import Profile from '../../components/Profile/Profile';
import './User.scss';
import PropTypes from 'prop-types';
import AngularProfile from '../../angular/AngularProfile';

const User = (props) => {
  const { user } = props.location.state;
  return (
    <Layout>
      <AngularProfile profile={user} />
    </Layout>
  );
};

export default User;

User.propTypes = {
  location: PropTypes.object,
};
