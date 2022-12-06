import * as React from 'react';
import Slider from '@mui/material/Slider';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Sliders/demo-code/discrete-slider-label.txt";

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
const DiscreteSliderLabel = () => {
    return (
        <JumboDemoCard title={"Label always visible"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: 300, maxWidth: '100%'}}>
                <Slider
                    aria-label="Always visible"
                    defaultValue={80}
                    getAriaValueText={valuetext}
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                />
            </Div>
        </JumboDemoCard>
    );
}
export default DiscreteSliderLabel;
