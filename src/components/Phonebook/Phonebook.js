import { useState } from "react";
import { nanoid } from "nanoid";
import { PhonebookForm } from "./Phonebook.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { selectContacts } from 'redux/contacts/selectors';
import styled from "styled-components";

export const Phonebook = () => {

    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        if(contacts.filter(e => e.name === name).length === 0) {
            let id = nanoid();
            dispatch(addContact( { id, name, number } ));
            setName('')
            setNumber('')
          } else {
            alert(`${name} is already in contacts`)
          }
      };

    const handleChange = e => {
        const { name, value } = e.target;
        if(name === 'name') {
            setName(() => {
                return value
            })
        } else {
            setNumber(() => {
                return value
            })
        }
    };

    return (
        <PhonebookForm action="" onSubmit={handleSubmit}>
            <FormImage>
                <h2>
				    Phonebook
				    <small>Let's add new contact</small>
			    </h2>
            </FormImage>
            <Group>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name} 
                    onChange={handleChange}
                    id={nanoid()}
                    required
                />
                <Label>Name</Label>
            </Group>
            <Group>
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number} 
                    onChange={handleChange}
                    id={nanoid()}
                    required
                />
                <Label>Number</Label>
            </Group>
            <button type="submit">Add contact</button>
        </PhonebookForm>
    )
}

export const Label = styled.label`
    color:#999; 
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
`

export const Input = styled.input`
    font-size:18px;
    padding:10px 10px 10px 5px;
    display:block;
    width:300px;
    border:none;
    border-bottom:1px solid #757575;

    &:focus {
        outline:none;
        border-color: #e84a5f;
    }
`

export const Group = styled.div`
    position:relative; 
    margin: 20px auto;
`

export const FormImage = styled.div`
    margin-bottom: 10px;
    border-radius: 8px;
    overflow: hidden;
    padding-bottom: 65%;
    background-image: url('https://img3.goodfon.com/wallpaper/nbig/5/7e/old-phone-red-wall-peeling.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 5%;
    position: relative;

    & h2 {
        position: absolute;
	    left: 6%;
	    bottom: 8%;
	    right: 10%;
	    font-size: 1.75rem;
	    font-weight: 700;
	    color: white;
	    line-height: 1.222;
	& small {
		display: block;
		font-size: .75em;
		font-weight: 400;
		margin-top: .25em;
	}
    }
`