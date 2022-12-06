import * as React from 'react';
import Slider from '@mui/material/Slider';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Sliders/demo-code/discrete-slider-steps.txt";

const valuetext = (value) => {
    return `${value}°C`;
};

const DiscreteSliderSteps = () => {
    return (
        <JumboDemoCard title={"Small steps"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: 300, maxWidth: '100%'}}>
                <Slider
                    aria-label="Small steps"
                    defaultValue={0.00000005}
                    getAriaValueText={valuetext}
                    step={0.00000001}
                    marks
                    min={-0.00000005}
                    max={0.0000001}
                    valueLabelDisplay="auto"
                />
            </Div>
        </JumboDemoCard>
    );
}
export default DiscreteSliderSteps;
