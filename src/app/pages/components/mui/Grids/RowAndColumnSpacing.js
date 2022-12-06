import * as React from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Grids/demo-code/row-column-spacing.txt";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const RowAndColumnSpacing = () => {
    return (
        <JumboDemoCard title={"Row & Column Spacing"} demoCode={code}>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={6}>
                    <Item>1</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>2</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>3</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>4</Item>
                </Grid>
            </Grid>
        </JumboDemoCard>
    );
};
export default RowAndColumnSpacing;
