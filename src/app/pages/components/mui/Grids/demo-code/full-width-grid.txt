import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Grids/demo-code/full-width-grid.txt";
import Div from "@jumbo/shared/Div";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FullWidthGrid = () => {
    return (
        <JumboDemoCard title={"Full Width"} demoCode={code}>
            <Div sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Div>
        </JumboDemoCard>
    );
};
export default FullWidthGrid;
