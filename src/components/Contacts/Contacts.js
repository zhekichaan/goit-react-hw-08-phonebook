import { ContactsList } from './Contacts.styled';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector } from "react-redux";

export const Contacts = () => {

  let contacts = useSelector(selectContacts)
  let filter = useSelector(selectFilter)

  return (
    <ContactsList id="contacts">
      {contacts.filter(contact => contact.name.toLowerCase().includes(filter)).map((contact) => (
          <ContactsItem key={contact.id} name={contact.name} number={contact.number} id={contact.id} />
      ))}
    </ContactsList>
  )
}