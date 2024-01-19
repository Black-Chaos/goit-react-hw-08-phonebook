import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { ContactItem } from '.';
import { ListByContacts } from './ContactsList.styled';

export function ContactsList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ListByContacts>
      {contacts.map(({ _id, name, number }) => (
        <ContactItem
          key={_id}
          name={name}
          number={number}
          handleDelete={() => dispatch(deleteContact(_id))}
        />
      ))}
    </ListByContacts>
  );
}
