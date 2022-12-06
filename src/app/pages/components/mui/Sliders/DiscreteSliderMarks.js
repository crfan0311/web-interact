import * as React from 'react';
import Slider from '@mui/material/Slider';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Sliders/demo-code/discrete-slider-marks.txt";

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
const DiscreteSliderMarks = () => {
    return (
        <JumboDemoCard title={"Custom marks"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: 300, maxWidth: '100%'}}>
                <Slider
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Div>
        </JumboDemoCard>
    );
};
export default DiscreteSliderMarks;
