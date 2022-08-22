import { Component } from "react";
import { Contacts } from "./Contacts/Contacts";
import { Phonebook } from "./Phonebook/Phonebook";
import { Filter } from "./Filter/Filter";
import { Box } from "./Box";
import { GlobalStyle } from "./GlobalStyles";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated")
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount() {
    console.log("Component Mounted")
    const contacts = localStorage.getItem("contacts")
    const parsedContacts = JSON.parse(contacts)
    if(parsedContacts) {
      this.setState({ contacts: parsedContacts})
    }
  }

  updateContacts = (id, name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, {id: id, name: name, number: number}]
    }))
  }

  updateFilter = (filter) => {
    this.setState({
      filter: filter
    })
  } 

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(element => element.id !== id);
    this.setState({ contacts: newContacts });
  }

  render() {
    return (
      <Box p="20px">
        <h2>Phonebook</h2>
        <Phonebook contacts={this.state.contacts} updateContacts={this.updateContacts} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} updateFilter={this.updateFilter} />
        <Contacts contacts={this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter))} deleteContact={this.deleteContact} />
        <GlobalStyle />
      </Box>
    );
  }
};
