import * as React from 'react';
import Radio from '@mui/material/Radio';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../RadioButtons/demo-code/size-radio-buttons.txt";

const SizeRadioButtons = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: {'aria-label': item},
    });

    return (
        <JumboDemoCard title={"Size"} demoCode={code}  wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <Radio {...controlProps('a')} size="small"/>
                <Radio {...controlProps('b')} />
                <Radio
                    {...controlProps('c')}
                    sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: 28,
                        },
                    }}
                />
            </Div>
        </JumboDemoCard>
    );
};
export default SizeRadioButtons;
