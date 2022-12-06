import React from 'react';
import Slider from '@mui/material/Slider';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Sliders/demo-code/range-slider.txt";

const valuetext = (value) => {
    return `${value}°C`;
};
const RangeSlider = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <JumboDemoCard title={"Range slider"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: 300, maxWidth: '100%'}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Div>
        </JumboDemoCard>
    );
}
export default RangeSlider;
