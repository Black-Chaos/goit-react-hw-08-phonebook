import { StyledContactItem } from './ContactItem.styled';

export function ContactItem({ name, number, handleDelete }) {
  return (
    <StyledContactItem>
      <p>{name}</p>
      <p>{number}</p>
      <button className="btn" type="button" onClick={handleDelete}>
        Delete
      </button>
    </StyledContactItem>
  );
}
