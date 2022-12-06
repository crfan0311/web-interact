import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Step, StepLabel, Stepper} from "@mui/material";
import code from "../Steppers/demo-code/horizontal-label.txt";

const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
];
const HorizontalLabelPositionBelowStepper = () => {
    return (
        <JumboDemoCard title={"Horizontal Label Position Below Stepper"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: '100%'}}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Div>
        </JumboDemoCard>
    );
};

export default HorizontalLabelPositionBelowStepper;
