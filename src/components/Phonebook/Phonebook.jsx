import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from '../ContactForm';
import Section from '../../common/Section';
import Filter from '../Filter';
import ContactList from '../ContactList';

import { phonebookOperations } from '../../redux/phonebook';

class Phonebook extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    return (
      <>
        <ContactForm />

        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetContacts: phonebookOperations.getContacts,
};

export default connect(null, mapDispatchToProps)(Phonebook);
