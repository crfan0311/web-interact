import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {styled} from "@mui/material/styles";
import code from "../Typography/demo-code/typography-theme.txt";

const Div = styled('div')(({theme}) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));
const TypographyTheme = () => {
    return (
        <JumboDemoCard title={"Theme"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>{"This div's text looks like that of a button."}</Div>
        </JumboDemoCard>
    );
};

export default TypographyTheme;
