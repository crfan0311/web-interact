import * as React from 'react';
import {pink} from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../RadioButtons/demo-code/color-radio-button.txt";

const ColorRadioButtons = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: {'aria-label': item},
    });

    return (
        <JumboDemoCard title={"Color"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <Radio {...controlProps('a')} />
                <Radio {...controlProps('b')} color="secondary"/>
                <Radio {...controlProps('c')} color="success"/>
                <Radio {...controlProps('d')} color="default"/>
                <Radio
                    {...controlProps('e')}
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
export default ColorRadioButtons;
