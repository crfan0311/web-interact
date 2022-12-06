import * as React from 'react';
import Slider from '@mui/material/Slider';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Sliders/demo-code/slider-sizes.txt";

const SliderSizes = () => {
    return (
        <JumboDemoCard title={"Sizes"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: 300, maxWidth: '100%'}}>
                <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>
            </Div>
        </JumboDemoCard>
    );
}
export default SliderSizes;
