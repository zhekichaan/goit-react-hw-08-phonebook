import { useState, useEffect, useRef } from "react";
import { Contacts } from "./Contacts/Contacts";
import { Phonebook } from "./Phonebook/Phonebook";
import { Filter } from "./Filter/Filter";
import { Box } from "./Box";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')

  const prevCount = usePrevious(contacts);

  useEffect(() => {
    if(localStorage.getItem("contacts") !== "[]") {
      const localContacts = localStorage.getItem("contacts")
      const parsedContacts = JSON.parse(localContacts)
      setContacts(() => 
        parsedContacts
      )
    }
  }, [])

  useEffect(() => {
    if(contacts !== prevCount) {
      localStorage.setItem("contacts", JSON.stringify(contacts))
    }
  }, [contacts, prevCount])

  function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    }, [value]);

    return ref.current;
  }
  
  const updateContacts = (id, name, number) => {
    setContacts(prevState => 
      [...prevState, {id: id, name: name, number: number}]
    )
  }

  const updateFilter = (filter) => {
    setFilter(() => {
      return filter
    })
  } 

  const deleteContact = (id) => {
    const newContacts = contacts.filter(element => element.id !== id);
    setContacts(() => {
      return newContacts
    })
  }

    return (
      <Box p="20px">
        <h2>Phonebook</h2>
        <Phonebook contacts={contacts} updateContacts={updateContacts} />

        <h2>Contacts</h2>
        <Filter filter={filter} updateFilter={updateFilter} />
        <Contacts contacts={contacts.filter(contact => contact.name.toLowerCase().includes(filter))} deleteContact={deleteContact} />
        <GlobalStyle />
      </Box>
    );
};
