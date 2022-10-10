import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";
import { FilterForm, Input, Label } from "./Filter.styled";

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
