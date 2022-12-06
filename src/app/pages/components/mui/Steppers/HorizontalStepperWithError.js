import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Step, StepLabel, Stepper, Typography} from "@mui/material";
import code from "../Steppers/demo-code/horizontal-stepper-error.txt";

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const HorizontalStepperWithError = () => {
    const isStepFailed = (step) => {
        return step === 1;
    };
    return (
        <JumboDemoCard title={"Horizontal Stepper With Error"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: '100%'}}>
                <Stepper activeStep={1}>
                    {steps.map((label, index) => {
                        const labelProps = {};
                        if (isStepFailed(index)) {
                            labelProps.optional = (
                                <Typography variant="caption" color="error">
                                    Alert message
                                </Typography>
                            );

                            labelProps.error = true;
                        }

                        return (
                            <Step key={label}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Div>
        </JumboDemoCard>
    );
};

export default HorizontalStepperWithError;
