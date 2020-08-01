import React, { Component } from 'react';
import { connect } from 'react-redux';
import { phonebookOperations } from '../../redux/phonebook';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import './ContactForm.scss';

class ContactForm extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  hendleSubmit = e => {
    e.preventDefault();

    this.props.onAdd(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  hendleInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="contact_form" onSubmit={this.hendleSubmit}>
        <h3>Name</h3>
        <input
          className="add_input"
          type="text"
          name="name"
          value={name}
          onChange={this.hendleInputChange}
        />
        <h3>Number</h3>
        <input
          className="add_input"
          type="text"
          name="number"
          value={number}
          onChange={this.hendleInputChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Add contact
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAdd: phonebookOperations.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
