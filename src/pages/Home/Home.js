import React from 'react';
import './Home.scss';
import Layout from '../../containers/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <h1>Home page</h1>
      <p>
        Displays master-detail data from{' '}
        <a href="https://randomuser.me/"> https://randomuser.me/</a>
      </p>
      <p>You should go to `About us` page to see more</p>
    </Layout>
  );
};

export default Home;
