import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

import Navigation from './Navigation';
import PrivateRoute from '../common/PrivateRoute';
import PublicRoute from '../common/PublicRoute';

import routs from '../utils/routs';
import './App.scss';

const HomePage = lazy(() => import('../pages/HomePage'));
const PhonebookPage = lazy(() => import('../pages/PhonebookPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app_wrapper">
          <Navigation />

          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute
                path={routs.home}
                exact
                component={HomePage}
                restricted={false}
              />
              <PrivateRoute path={routs.phonebook} component={PhonebookPage} />
              <PublicRoute
                path={routs.register}
                component={RegisterPage}
                restricted={true}
              />
              <PublicRoute
                path={routs.login}
                component={LoginPage}
                restricted={true}
              />
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
