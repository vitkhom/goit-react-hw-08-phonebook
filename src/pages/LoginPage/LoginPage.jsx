import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';

import './LoginPage.scss';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidUpdate() {
    if (this.props.isAutentificated) {
      this.props.history.replace('/');

      return;
    }
  }

  hendleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({
      email: '',
      password: '',
    });
  };

  hendleInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <>
        <h2 className="page-title">Login</h2>
        <form onSubmit={this.hendleSubmit}>
          <h3 className="form_text">Email</h3>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.hendleInputChange}
          />
          <h3 className="form_text">Password</h3>
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.hendleInputChange}
          />
          <button className="login_button">Login</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAutentificated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps, { onLogin: authOperations.login })(
  LoginPage,
);
