import { ContactItemStyled, ContactData } from './ContactItem.styled';

export const ContactItem = ({ name, number, onDelete }) => {
  return (
    <ContactItemStyled>
      <ContactData>{name} :</ContactData>
      <ContactData>{number}</ContactData>
      <button type="button" onClick={onDelete}>
        <b>Delete</b>
      </button>
    </ContactItemStyled>
  );
};
