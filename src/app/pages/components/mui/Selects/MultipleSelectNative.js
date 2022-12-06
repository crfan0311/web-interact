import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormControl, InputLabel, Select} from "@mui/material";
import code from "../Selects/demo-code/multiple-select-native.txt";

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

const MultipleSelectNative = () => {
    const [personName, setPersonName] = React.useState([]);
    const handleChangeMultiple = (event) => {
        const {options} = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };

    return (
        <JumboDemoCard title={"Multiple Select Native"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <FormControl sx={{m: 1, minWidth: 120, maxWidth: 300}}>
                <InputLabel shrink htmlFor="select-multiple-native">
                    Native
                </InputLabel>
                <Select
                    multiple
                    native
                    value={personName}
                    // @ts-ignore Typings are not considering `native`
                    onChange={handleChangeMultiple}
                    label="Native"
                    inputProps={{
                        id: 'select-multiple-native',
                    }}
                >
                    {names.map((name) => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </Select>
            </FormControl>
        </JumboDemoCard>
    );
};

export default MultipleSelectNative;
