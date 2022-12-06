import * as React from 'react';
import Slider from '@mui/material/Slider';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Sliders/demo-code/discrete-slider-values.txt";

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];
const valuetext = (value) => {
    return `${value}°C`;
};
const valueLabelFormat = (value) => {
    return marks.findIndex((mark) => mark.value === value) + 1;
}

const DiscreteSliderValues = () => {
    return (
        <JumboDemoCard title={"Restricted values"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: 300, maxWidth: '100%'}}>
                <Slider
                    aria-label="Restricted values"
                    defaultValue={20}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Div>
        </JumboDemoCard>
    );
}
export default DiscreteSliderValues;
