import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Grids/demo-code/columns-grid.txt";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ColumnsGrid = () => {
    return (
        <JumboDemoCard title={"Column"} demoCode={code}>
            <Div sx={{flexGrow: 1}}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Div>
        </JumboDemoCard>
    );
};
export default ColumnsGrid;
