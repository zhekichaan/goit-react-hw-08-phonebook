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
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
  }