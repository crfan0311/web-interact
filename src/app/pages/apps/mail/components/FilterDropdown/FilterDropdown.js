import React from 'react';
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {filtersOptions} from "../../../../../services/mock-data/mails";
import {useNavigate} from "react-router-dom";

const FilterDropdown = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = React.useState("");
    return (
        <FormControl size="small" sx={{width: 120}}>
            <InputLabel>Filter</InputLabel>
            <Select
                value={filter}
                label="Filter"
                onChange={(event) => setFilter(event.target.value)}
            >
                <MenuItem value="">
                    <em>Select Filter</em>
                </MenuItem>
                {
                    filtersOptions.map((filter, index) => (
                        <MenuItem
                            value={filter}
                            onClick={() => {
                                navigate(`/app/mails/${filter.slug}`)
                            }}
                        >
                            {filter.name}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
};

export default FilterDropdown;
