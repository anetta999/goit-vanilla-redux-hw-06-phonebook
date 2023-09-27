import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: [],
};

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return { contacts: [...state.contacts, action.payload] };
    }

    case 'contacts/deleteContact': {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: { id: nanoid(), ...newContact },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};
