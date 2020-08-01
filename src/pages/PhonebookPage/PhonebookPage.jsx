import React, { Component } from 'react';
import Phonebook from '../../components/Phonebook';

class PhonebookPage extends Component {
  render() {
    return (
      <>
        <h2 className="page-title">Add contact</h2>
        <Phonebook />
      </>
    );
  }
}

export default PhonebookPage;
