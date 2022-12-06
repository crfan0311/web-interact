import React from 'react';
import ContinuousSlider from "./ContinuousSlider";
import SliderSizes from "./SliderSizes";
import DiscreteSlider from "./DiscreteSlider";
import DiscreteSliderSteps from "./DiscreteSliderSteps";
import DiscreteSliderMarks from "./DiscreteSliderMarks";
import DiscreteSliderValues from "./DiscreteSliderValues";
import DiscreteSliderLabel from "./DiscreteSliderLabel";
import RangeSlider from "./RangeSlider";
import MinimumDistanceSlider from "./MinimumDistanceSlider";
import InputSlider from "./InputSlider";
import ColorSlider from "./ColorSlider";
import VerticalSlider from "./VerticalSlider";
import TrackFalseSlider from "./TrackFalseSlider";
import TrackInvertedSlider from "./TrackInvertedSlider";
import NonLinearSlider from "./NonLinearSlider";
import Masonry from "@mui/lab/Masonry";

const Sliders = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <ContinuousSlider/>
            <SliderSizes/>
            <DiscreteSlider/>
            <DiscreteSliderSteps/>
            <DiscreteSliderMarks/>
            <DiscreteSliderValues/>
            <DiscreteSliderLabel/>
            <RangeSlider/>
            <MinimumDistanceSlider/>
            <InputSlider/>
            <ColorSlider/>
            <VerticalSlider/>
            <TrackFalseSlider/>
            <TrackInvertedSlider/>
            <NonLinearSlider/>
        </Masonry>
    );
}
export default Sliders;

