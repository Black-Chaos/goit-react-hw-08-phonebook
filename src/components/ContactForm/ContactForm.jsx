import { useState } from 'react';
import { Form, Label } from './ContactForm.styled';

export function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
    
      default:
        console.warn(`Field "${name}" don't processed`)
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isAdd = addContact({
      name,
      number,
    });
    if (isAdd) {
      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <span>Name:</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        <span>Number:</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
          onChange={handleChange}
        />
      </Label>
      <button className="btn">Add contact</button>
    </Form>
  );
}
