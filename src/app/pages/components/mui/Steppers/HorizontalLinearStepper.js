import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Button, Step, StepLabel, Stepper, Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import code from "../Steppers/demo-code/horizontal-linear-stepper.txt";

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const HorizontalLinearStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <JumboDemoCard title={"Horizontal Linear Stepper"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: '100%'}}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <Div>
                        <Typography sx={{mt: 2, mb: 1}}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Div sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                            <Div sx={{flex: '1 1 auto'}}/>
                            <Button onClick={handleReset}>Reset</Button>
                        </Div>
                    </Div>
                ) : (
                    <Div>
                        <Typography sx={{mt: 2, mb: 1}}>Step {activeStep + 1}</Typography>
                        <Div sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{mr: 1}}
                            >
                                Back
                            </Button>
                            <Div sx={{flex: '1 1 auto'}}/>
                            {isStepOptional(activeStep) && (
                                <Button variant={"contained"} onClick={handleSkip} sx={{mr: 1}}>
                                    Skip
                                </Button>
                            )}

                            <Button variant={"contained"} onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Div>
                    </Div>
                )}
            </Div>
        </JumboDemoCard>
    );
};

export default HorizontalLinearStepper;
