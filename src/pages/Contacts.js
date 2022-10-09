import { Contacts } from "components/Contacts/Contacts";
import { Phonebook } from "components/Phonebook/Phonebook";
import { Filter } from "components/Filter/Filter";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from "components/Loader";
import { selectError, selectHasContacts, selectIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";  
import { Box } from "components/Box";



export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const hasContacts = useSelector(selectHasContacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]) 

  return (
    <Box display="flex" justifyContent="space-around" mt="30px">
      <Phonebook />

      {isLoading && !error && <Loader>Request in progress...</Loader>}

      {hasContacts && <Box mt="35px">
        <Filter />
        <Contacts />
      </Box>}
    </Box>
  );
}
