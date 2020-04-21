import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ user }) => {
  return (
    <div className="Card">
      <div className="Card__row">
        <img src={user.picture.thumbnail} alt={user.name.first} />
      </div>
      <div className="Card__row">
        {user.gender === 'male' ? (
          <i className="icon icon--male" />
        ) : (
          <i className="icon icon--female" />
        )}
        <span>
          {user.name.title} {user.name.first} {user.name.last}
        </span>
      </div>
      <div className="Card__row">
        <i className="icon icon--email" />
        <span>{user.email}</span>
      </div>
      <div className="Card__row">
        <i className="icon icon--phone" />
        <span>{user.phone}</span>
      </div>
      <div className="Card__row">
        <Link
          className="Card__link"
          to={{
            pathname: `/person/${user.login.uuid}`,
            state: {
              user: user,
            },
          }}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  user: PropTypes.any,
};
