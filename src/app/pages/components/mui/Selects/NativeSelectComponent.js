import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {FormControl, InputLabel, NativeSelect} from "@mui/material";
import code from "../Selects/demo-code/native-select-component.txt";
import Div from "@jumbo/shared/Div";

const NativeSelectComponent = () => {
    return (
        <JumboDemoCard title={"Native Select"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <FormControl sx={{minWidth: 120}}>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Age
                    </InputLabel>
                    <NativeSelect
                        defaultValue={30}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </Div>
        </JumboDemoCard>
    );
};

export default NativeSelectComponent;
