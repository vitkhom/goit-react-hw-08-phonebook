import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';

import './RegisterPage.scss';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  hendleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  hendleInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <h2 className="page-title">Register</h2>
        <form onSubmit={this.hendleSubmit}>
          <h3 className="form_text">Name</h3>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.hendleInputChange}
          />
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
          <button className="register_button">Register</button>
        </form>
      </>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterPage,
);
