import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
import './Navigation.scss';

const Navigation = ({ isAutentificated }) => {
  return (
    <div className="nav_container">
      <ul className="navigation">
        <li>
          <NavLink
            exact
            to="/"
            className="navigation__link"
            activeClassName="navigation__link-active"
          >
            Home
          </NavLink>
        </li>
        {isAutentificated && (
          <li>
            <NavLink
              to="/phonebook"
              className="navigation__link"
              activeClassName="navigation__link-active"
            >
              Phonebook
            </NavLink>
          </li>
        )}
      </ul>
      {isAutentificated ? (
        <div className="user_wrapper">
          <UserMenu />
        </div>
      ) : (
        <AuthNav />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAutentificated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
