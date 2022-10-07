import { Contacts } from "components/Contacts/Contacts";
import { Phonebook } from "components/Phonebook/Phonebook";
import { Filter } from "components/Filter/Filter";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from "components/Loader";
import { selectError, selectIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";  



export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]) 

  return (
    <>
      <h2>Phonebook</h2>
      <Phonebook />

      {isLoading && !error && <Loader>Request in progress...</Loader>}

      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
}
