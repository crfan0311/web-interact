import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {useTheme} from "@mui/material/styles";
import Div from "@jumbo/shared/Div";
import Paper from "@mui/material/Paper";
import {Button, MobileStepper, Typography} from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";
import {Carousel} from "react-responsive-carousel";
import Box from "@mui/material/Box";
import code from "../Steppers/demo-code/swipeable-text-mobile.txt";
import {ASSET_IMAGES} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath: getAssetPath(`${ASSET_IMAGES}/properties/bedroom-4.jpeg`),
    },
    {
        label: 'Bird',
        imgPath: getAssetPath(`${ASSET_IMAGES}/properties/bedroom-1.jpeg`),
    },
    {
        label: 'Bali, Indonesia',
        imgPath: getAssetPath(`${ASSET_IMAGES}/properties/bedroom-2.jpeg`),
    },
    {
        label: 'Goč, Serbia',
        imgPath: getAssetPath(`${ASSET_IMAGES}/properties/bedroom-3.jpeg`),
    },
];
const SwipeableTextMobileStepper = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        if (activeStep !== step) {
            setActiveStep({activeStep: step});
        }
    };
    return (
        <JumboDemoCard title={"Swipeable Text Mobile Stepper"} demoCode={code}>
            <Div sx={{maxWidth: 400, flexGrow: 1}}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.paper',
                    }}
                >
                    <Typography>{images[activeStep].label}</Typography>
                </Paper>
                <Carousel
                    showArrows={false}
                    showIndicators={false}
                    interval={2000}
                    showStatus={false}
                    onChange={handleStepChange}
                    selectedItem={activeStep}
                    showThumbs={false}
                >
                    {
                        images.map((item, index) => (
                            <div key={item.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            height: 255,
                                            display: 'block',
                                            maxWidth: 400,
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}
                                        src={item.imgPath}
                                        alt={item.label}
                                    />
                                ) : null}
                            </div>
                        ))
                    }
                </Carousel>

                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    sx={{bgcolor: 'background.paper'}}
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft/>
                            ) : (
                                <KeyboardArrowRight/>
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight/>
                            ) : (
                                <KeyboardArrowLeft/>
                            )}
                            Back
                        </Button>
                    }
                />
            </Div>
        </JumboDemoCard>
    );
};

export default SwipeableTextMobileStepper;
