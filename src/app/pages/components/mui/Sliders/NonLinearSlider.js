import React from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Sliders/demo-code/non-linear-slider.txt";

const valueLabelFormat = (value) => {
    const units = ['KB', 'MB', 'GB', 'TB'];

    let unitIndex = 0;
    let scaledValue = value;

    while (scaledValue >= 1024 && unitIndex < units.length - 1) {
        unitIndex += 1;
        scaledValue /= 1024;
    }

    return `${scaledValue} ${units[unitIndex]}`;
}

const calculateValue = (value) => {
    return 2 ** value;
}

const NonLinearSlider = () => {
    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    return (
        <JumboDemoCard title={"Non-linear scale"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: 250, maxWidth: '100%'}}>
                <Typography id="non-linear-slider" gutterBottom>
                    Storage: {valueLabelFormat(calculateValue(value))}
                </Typography>
                <Slider
                    value={value}
                    min={5}
                    step={1}
                    max={30}
                    scale={calculateValue}
                    getAriaValueText={valueLabelFormat}
                    valueLabelFormat={valueLabelFormat}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                />
            </Div>
        </JumboDemoCard>
    );
}
export default NonLinearSlider;
