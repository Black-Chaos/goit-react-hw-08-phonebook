import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Container } from './App.styled';
import { addContact, fetchContacts } from 'redux/operation';
import { useEffect } from 'react';

export function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addNewContact = contact => {
    if (contacts.some(({ name }) => name === contact.name))
      return alert(`${contact.name} is already in contacts`);
    dispatch(addContact(contact));
    return true;
  };

  return (
    <>
      <h1 className="title main-title">Phonebook</h1>
      <Container>
        <div className="form-container">
          <h2 className="title">Add contact</h2>
          <ContactForm addContact={addNewContact} />
          <Filter />
        </div>
        <div className="contacts-container">
          <h2 className="title">Contacts</h2>
          <ContactsList />
        </div>
      </Container>
    </>
  );
}