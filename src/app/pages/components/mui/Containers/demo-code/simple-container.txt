import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Containers/demo-code/simple-container.txt";

const SimpleContainer = () => {
    return (
        <JumboDemoCard title={"Simple Container"} demoCode={code}>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Div sx={{bgcolor: '#cfe8fc', height: '100vh'}}/>
            </Container>
        </JumboDemoCard>
    );
};
export default SimpleContainer;
