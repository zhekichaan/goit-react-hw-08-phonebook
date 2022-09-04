import { Box } from "components/Box";
import PropTypes from 'prop-types';
import { FilterInput } from "./Filter.styled";

export const Filter = ({filter, updateFilter}) => {
    return (
        <Box mt="20px">
            <p>Find contacts by name</p>
            <FilterInput 
                type="text"
                name="filter"
                value={filter}
                onChange={(e) => {updateFilter(e.target.value)}}
            />
        </Box>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    updateFilter: PropTypes.func.isRequired,
}