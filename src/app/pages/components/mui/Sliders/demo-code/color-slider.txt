import * as React from 'react';
import Slider from '@mui/material/Slider';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Sliders/demo-code/color-slider.txt";

const valuetext = (value) => {
    return `${value}°C`;
};
const ColorSlider = () => {
    return (
        <JumboDemoCard title={"Color"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: 300, maxWidth: '100%'}}>
                <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    color="secondary"
                />
            </Div>
        </JumboDemoCard>
    );
}
export default ColorSlider;
