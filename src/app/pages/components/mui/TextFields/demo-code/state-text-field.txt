import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {TextField} from "@mui/material";
import code from "../TextFields/demo-code/state-text-field.txt";

const StateTextFields = () => {
    const [name, setName] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <JumboDemoCard title={"State Text Field"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-name"
                    label="Name"
                    value={name}
                    onChange={handleChange}
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                />
            </Div>
        </JumboDemoCard>
    );
};

export default StateTextFields;
