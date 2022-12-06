import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Button from "@mui/material/Button";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import code from "../Selects/demo-code/controlled-open-select.txt";
import Div from "@jumbo/shared/Div";

const ControlledOpenSelect = () => {
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <JumboDemoCard title={"Controlled Open Select"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <Button sx={{display: 'block', mt: 2}} onClick={handleOpen}>
                    Open the select
                </Button>
                <FormControl sx={{m: 1, minWidth: 130}}>
                    <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Div>
        </JumboDemoCard>
    );
};

export default ControlledOpenSelect;
