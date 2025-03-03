// context/ContactsContext.js
import React, { createContext, useState } from 'react';

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'Alice', phone: '123-456-7890', isFavorite: false },
    { id: '2', name: 'Bob', phone: '987-654-3210', isFavorite: false },
  ]);

  const addToFavorites = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === contactId
          ? { ...contact, isFavorite: !contact.isFavorite }
          : contact
      )
    );
  };

  const addContact = (name, phone) => {
    const newContact = {
      id: String(contacts.length + 1), // Генерация уникального ID
      name,
      phone,
      isFavorite: false,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <ContactsContext.Provider value={{ contacts, addToFavorites, addContact }}>
      {children}
    </ContactsContext.Provider>
  );
};