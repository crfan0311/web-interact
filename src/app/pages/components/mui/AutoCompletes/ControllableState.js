import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Autocomplete, TextField} from "@mui/material";
import code from "../../mui/AutoCompletes/demo-code/controllable-state.txt";

const options = ["Option 1", "Option 2"];

const ControllableState = () => {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    return (
        <JumboDemoCard
            title={"Controllable State"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0, flexDirection: 'column'}}
        >
            <Div sx={{flex: 1}}>
                <div>{`value: ${value !== null ? `'${value}'` : 'Select Option'}`}</div>
                <div>{`inputValue: '${inputValue}'`}</div>
                <br />
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={options}
                    sx={{width: 300}}
                    renderInput={(params) => (
                        <TextField {...params} label="Controllable"/>
                    )}
                />
            </Div>
        </JumboDemoCard>
    );
};

export default ControllableState;
