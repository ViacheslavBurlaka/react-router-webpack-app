import React, { useEffect, useState } from 'react';
import Layout from '../../containers/Layout/Layout';
import Card from '../../components/Card/Card';
import './Users.scss';
import Loader from '../../elements/Loader/Loader';

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState({});

  const USERS_SIZE = 200;
  const USERS_API = 'https://randomuser.me/api/';

  useEffect(() => {
    fetch(`${USERS_API}?results=${USERS_SIZE}`)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        console.log(json);
        setLoading(false);
      })
      .catch((err) => console.error('Error =>', err));
  }, []);

  return loading ? (
    <Layout>
      <Loader />
    </Layout>
  ) : (
    <Layout>
      <h1>Users page</h1>
      <div className="UsersList">
        {users.results.map((el, index) => (
          <Card key={index} user={el} />
        ))}
      </div>
    </Layout>
  );
};

export default Users;
