import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Checkbox, FormControlLabel} from "@mui/material";
import code from "../Checkboxes/demo-code/indeterminate-checkboxes.txt";

const IndeterminateCheckboxes = () => {
    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChange2 = (event) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChange3 = (event) => {
        setChecked([checked[0], event.target.checked]);
    };
    const children = (
        <Div sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
            <FormControlLabel
                label="Child 1"
                control={<Checkbox checked={checked[0]} onChange={handleChange2}/>}
            />
            <FormControlLabel
                label="Child 2"
                control={<Checkbox checked={checked[1]} onChange={handleChange3}/>}
            />
        </Div>
    );
    return (
        <JumboDemoCard title={"Indeterminate"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <FormControlLabel
                    label="Parent"
                    control={
                        <Checkbox
                            checked={checked[0] && checked[1]}
                            indeterminate={checked[0] !== checked[1]}
                            onChange={handleChange1}
                        />
                    }
                />
                {children}
            </Div>
        </JumboDemoCard>
    );
};

export default IndeterminateCheckboxes;
