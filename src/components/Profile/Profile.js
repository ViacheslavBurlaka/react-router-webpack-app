import React from 'react';
import './Profile.scss';
import PropTypes from 'prop-types';
import { getFormattedDate } from '../../utils/getFormattedDate';

const Profile = ({ profile }) => {
  /**
   dob: {date: "1967-12-11T12:39:38.052Z", age: 53}
   email: "barry.horton@example.com"
   gender: "male"
   id: {name: "PPS", value: "2425284T"}
   location: {street: {…}, city: "Westport", state: "Cork City", country: "Ireland", postcode: 15303, …}
   login: {uuid: "169f6f20-b794-42f9-a610-568fb9e2d52b", username: "bigbird390", password: "garfield", salt: "UEJqj8JN", md5: "40ab4db0e29668dd5b17fe05e5d7dd6c", …}
   name: {title: "Mr", first: "Barry", last: "Horton"}
   nat: "IE"
   phone: "061-591-8317"
   picture: {large: "{url}", medium: "{url}", thumbnail: "{url}"}
   registered: {date: "2011-08-05T04:55:15.072Z", age: 9}
   */
  const {
    name, //
    picture,
    id,
    gender,
    email,
    location,
    phone,
    dob,
    nat,
    registered,
  } = profile;

  return (
    <>
      <h1>
        {name.first} {name.last}
      </h1>
      <div className="Profile">
        <div className="Profile__col">
          <img src={picture.large} alt={name.first} />
        </div>
        <div className="Profile__col">
          {id.name.length > 0 ? (
            <div className="Profile__row">
              <span>ID:</span> {id.name}, {id.value}
            </div>
          ) : (
            ''
          )}
          <div className="Profile__row">
            <span>Gender:</span> {gender}
          </div>
          <div className="Profile__row">
            <span>Email:</span> {email}
          </div>
          <div className="Profile__row">
            <span>Nationality:</span> {nat}
          </div>
          <div className="Profile__row">
            <span>Address:</span> {location.street.name}, {location.street.number} {''}{' '}
            {location.city}, {location.state}, {location.country}, {location.postcode}
          </div>
          <div className="Profile__row">
            <span>Birth:</span> {getFormattedDate(dob.date)}
          </div>
          <div className="Profile__row">
            <span>Registered:</span> {getFormattedDate(registered.date)}
          </div>
          <div className="Profile__row">
            <span>Age:</span> {dob.age}
          </div>
          <div className="Profile__row">
            <span>Phone:</span> {phone}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  profile: PropTypes.object,
};