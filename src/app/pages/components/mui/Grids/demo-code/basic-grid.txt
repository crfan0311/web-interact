import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Grids/demo-code/basic-grid.txt";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const BasicGrid = () => {
    return (
        <JumboDemoCard title={"Basic Grid"} demoCode={code}>
            <Div sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Div>
        </JumboDemoCard>
    );
};
export default BasicGrid;
