import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Checkbox} from "@mui/material";
import {pink} from "@mui/material/colors";
import Div from "@jumbo/shared/Div";
import code from "../Checkboxes/demo-code/color-checkboxes.txt";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

const ColorCheckboxes = () => {
    return (
        <JumboDemoCard title={"Color"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <Checkbox {...label} defaultChecked/>
                <Checkbox {...label} defaultChecked color="secondary"/>
                <Checkbox {...label} defaultChecked color="success"/>
                <Checkbox {...label} defaultChecked color="default"/>
                <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                    }}
                />
            </Div>
        </JumboDemoCard>
    );
};

export default ColorCheckboxes;
