import { ContactsItemWrapper } from "./ContactsItem.styled"

export const ContactsItem = ({ name, number, id, deleteContact }) => {
    return (
        <ContactsItemWrapper>
            <p>{name}: {number}</p>
            <button onClick={() => deleteContact(id)}>Delete</button>
        </ContactsItemWrapper>
    )
}