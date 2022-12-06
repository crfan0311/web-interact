import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Papers/demo-code/elevation.txt";

const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({palette: {mode: 'dark'}});
const lightTheme = createTheme({palette: {mode: 'light'}});

const Elevation = () => {
    return (
        <JumboDemoCard title={"Elevation"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Grid container spacing={2}>
                {[lightTheme, darkTheme].map((theme, index) => (
                    <Grid item xs={6} key={index}>
                        <ThemeProvider theme={theme}>
                            <Div
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    gridTemplateColumns: {md: '1fr 1fr'},
                                    gap: 2,
                                }}
                            >
                                {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                                    <Item key={elevation} elevation={elevation}>
                                        {`elevation=${elevation}`}
                                    </Item>
                                ))}
                            </Div>
                        </ThemeProvider>
                    </Grid>
                ))}
            </Grid>
        </JumboDemoCard>
    );
};
export default Elevation;
