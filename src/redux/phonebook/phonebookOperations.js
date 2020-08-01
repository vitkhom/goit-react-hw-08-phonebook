import axios from 'axios';
import phonebookActions from './phonebookActions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const addContact = ({ name, number }) => dispatch => {
  dispatch(phonebookActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => {
      dispatch(phonebookActions.addContactSuccess(data));
    })
    .catch(error => dispatch(phonebookActions.addContactError(error)));
};

const getContacts = () => dispatch => {
  dispatch(phonebookActions.getContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(phonebookActions.getContactsSuccess(data)))
    .catch(error => dispatch(phonebookActions.getContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(phonebookActions.removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(phonebookActions.removeContactSuccess(id)))
    .catch(error => dispatch(phonebookActions.removeContactError(error)));
};

export default {
  addContact,
  getContacts,
  removeContact,
};
