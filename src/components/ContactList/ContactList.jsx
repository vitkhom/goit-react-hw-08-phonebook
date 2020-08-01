import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContactItem from '../ContactItem';
import { phonebookSelectors } from '../../redux/phonebook';

import './ContactList.scss';

const ContactList = ({ contacts }) => {
  return (
    <ul className="contacts">
      {contacts.map(({ id }) => (
        <ContactItem key={id} id={id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemoveContact: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactList);
