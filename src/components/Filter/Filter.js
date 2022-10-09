import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";
import styled from "styled-components";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(store => store.filter)

    const updateFilter = (filter) => {
        dispatch(setFilter(filter))
    } 

    return (
        <FilterForm >
            <Input 
                type="text"
                name="filter"
                value={filter}
                onChange={(e) => {updateFilter(e.target.value)}}
            />
            <Label>Find contacts by name</Label>
        </FilterForm>
    )
}

export const FilterForm = styled.form`
position: relative;

& input:focus ~ label {
    top: -20px;
    font-size: 14px;
    color: #e84a5f;
}
`

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
