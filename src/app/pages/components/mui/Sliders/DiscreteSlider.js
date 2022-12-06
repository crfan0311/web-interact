import * as React from 'react';
import Slider from '@mui/material/Slider';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Sliders/demo-code/discrete-slider.txt";

const valuetext = (value) => {
    return `${value}°C`;
};
const DiscreteSlider = () => {
    return (
        <JumboDemoCard title={"Discrete sliders"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: 300, maxWidth: '100%'}}>
                <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={10}
                    max={110}
                />
                <Slider defaultValue={30} step={10} marks min={10} max={110} disabled/>
            </Div>
        </JumboDemoCard>
    );
}
export default DiscreteSlider;
