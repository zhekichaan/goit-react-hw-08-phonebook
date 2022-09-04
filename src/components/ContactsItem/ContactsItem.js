import { ContactsItemWrapper } from "./ContactsItem.styled"
import PropTypes from 'prop-types';

export const ContactsItem = ({ name, number, id, deleteContact }) => {
    return (
        <ContactsItemWrapper>
            <p>{name}: {number}</p>
            <button onClick={() => deleteContact(id)}>Delete</button>
        </ContactsItemWrapper>
    )
}

ContactsItem.propTypes = {
    name: PropTypes.array.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
  }