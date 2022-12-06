import React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Sliders/demo-code/continuous-slider.txt";
import Div from "@jumbo/shared/Div";

const ContinuousSlider = () => {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <JumboDemoCard
            title={"Continuous sliders"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div sx={{width: 200, maxWidth: '100%'}}>
                <Stack spacing={2} direction="row" sx={{mb: 1}} alignItems="center">
                    <VolumeDown/>
                    <Slider aria-label="Volume" value={value} onChange={handleChange}/>
                    <VolumeUp/>
                </Stack>
                <Slider disabled defaultValue={30} aria-label="Disabled slider"/>
            </Div>
        </JumboDemoCard>
    );
}
export default ContinuousSlider;
