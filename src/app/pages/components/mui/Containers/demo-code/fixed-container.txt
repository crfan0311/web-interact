import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Containers/demo-code/fixed-container.txt";

const FixedContainer = () => {
    return (
        <JumboDemoCard title={"Fixed Container"} demoCode={code}>
            <CssBaseline/>
            <Container fixed>
                <Div sx={{bgcolor: '#cfe8fc', height: '100vh'}}/>
            </Container>
        </JumboDemoCard>
    );
};
export default FixedContainer;
