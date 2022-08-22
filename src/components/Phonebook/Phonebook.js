import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { PhonebookForm } from "./Phonebook.styled";

export class Phonebook extends Component  {
    state = {
        name: '',
        number: ''
    }

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        updateContacts: PropTypes.func.isRequired
    }

    handleSubmit = (e) => {
        e.preventDefault()
          if(this.props.contacts.filter(e => e.name === this.state.name).length === 0) {
            this.props.updateContacts(nanoid(), this.state.name, this.state.number)
            this.setState({
                name: '',
                number: ''
            })
          } else {
            alert(`${this.state.name} is already in contacts`)
          }
        
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <PhonebookForm action="" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={this.state.name} 
                    onChange={this.handleChange}
                    id={nanoid()}
                    required
                />
                <label>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={this.state.number} 
                    onChange={this.handleChange}
                    id={nanoid()}
                    required
                />
                <button type="submit">Add contact</button>
            </PhonebookForm>
        )
    }
}