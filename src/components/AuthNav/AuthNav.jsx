import React from 'react';
import { NavLink } from 'react-router-dom';

import './AuthNav.scss';

const AuthNav = () => {
  return (
    <ul className="nav_auth">
      <li>
        <NavLink
          to="/register"
          className="navigation__link"
          activeClassName="navigation__link-active"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="navigation__link"
          activeClassName="navigation__link-active"
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
