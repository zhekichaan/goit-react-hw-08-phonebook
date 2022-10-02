import { Contacts } from "./Contacts/Contacts";
import { Phonebook } from "./Phonebook/Phonebook";
import { Filter } from "./Filter/Filter";
import { Box } from "./Box";
import { GlobalStyle } from "./GlobalStyles";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";  
import { selectError, selectIsLoading } from "redux/selectors";
import { Loader } from "./Loader";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]) 

  return (
    <Box p="20px">
      <h2>Phonebook</h2>
      <Phonebook />

      {isLoading && !error && <Loader>Request in progress...</Loader>}

      <h2>Contacts</h2>
      <Filter />
      <Contacts />
      <GlobalStyle />
    </Box>
  );
};
