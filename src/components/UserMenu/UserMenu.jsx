import React from 'react';
import './UserMenu.scss';
import { connect } from 'react-redux';

import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <>
      <img className="user_avatar" src={avatar} alt="" />
      <span className="user_name">Welcome, {name}</span>
      <button className="logout_button" onClick={onLogout}>
        Logout
      </button>
    </>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: 'https://icon-library.com/images/comics-ironman-red.ico.ico',
});

export default connect(mapStateToProps, { onLogout: authOperations.logout })(
  UserMenu,
);
