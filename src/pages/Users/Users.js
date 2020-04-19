import React from 'react';
import Layout from '../../containers/Layout/Layout';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <Layout>
      <h1>Persons page</h1>
      <div>
        <Link to="person/2">TestLink to Person2</Link>
      </div>
    </Layout>
  );
};

export default Users;
