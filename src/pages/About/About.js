import React from 'react';
import Layout from '../../containers/Layout/Layout';

const About = () => {
  return (
    <Layout>
      <h1>About page</h1>
      <p>It's small but tricky application.</p>
      <p>
        It displays master-detail data from{' '}
        <a href="https://randomuser.me/"> https://randomuser.me/</a>,
      </p>

      <h2>Technology Stack and requirements</h2>
      <ul className="checked-list">
        <li>React: 16.8+ with hooks</li>
        <li>Styles: SCSS</li>
        <li>Builder: Webpack</li>
        <li>Target browsers: evergreens, IE11, iOS</li>
        <li>GitHub repository</li>
      </ul>

      <h2>App Routers</h2>
      <p>Application includes routes:</p>
      <ul>
        <li>
          <span>https://$site_name$//persons</span> - list of persons. Display at least 200 records
          from <a href="https://randomuser.me/">https://randomuser.me/</a>
        </li>
        <li>
          <span>https://$site_name$/person/:id</span> – details page for a record. Id is
          “login.uuid” field
        </li>
        <li>
          <span>https://$site_name$/about</span> - some static “about” page with that information.
        </li>
      </ul>
    </Layout>
  );
};

export default About;
