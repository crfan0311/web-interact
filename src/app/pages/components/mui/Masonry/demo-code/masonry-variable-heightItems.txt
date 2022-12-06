import * as React from 'react';
import {styled} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {Accordion, AccordionDetails, AccordionSummary, Typography,} from '@mui/material';
import Paper from '@mui/material/Paper';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Masonry/demo-code/masonry-variable-heightItems.txt";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const StyledAccordion = styled(Accordion)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
}));

const MasonryWithVariableHeightItems = () => {
    return (
        <JumboDemoCard title={"Masonry with Variable HeightItem"} demoCode={code}>
            <Div sx={{width: 500, minHeight: 377}}>
                <Masonry columns={3} spacing={2}>
                    {heights.map((height, index) => (
                        <Paper key={index}>
                            <StyledAccordion sx={{minHeight: height}}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography>Accordion {index + 1}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>Contents</AccordionDetails>
                            </StyledAccordion>
                        </Paper>
                    ))}
                </Masonry>
            </Div>
        </JumboDemoCard>
    );
};
export default MasonryWithVariableHeightItems;
