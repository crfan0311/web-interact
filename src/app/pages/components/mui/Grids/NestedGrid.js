import * as React from 'react';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Grids/demo-code/nested-grid.txt";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FormRow() {
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Item>Item</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>Item</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>Item</Item>
            </Grid>
        </React.Fragment>
    );
}

const NestedGrid = () => {
    return (
        <JumboDemoCard title={"Nested"} demoCode={code}>
            <Div sx={{flexGrow: 1}}>
                <Grid container spacing={1}>
                    <Grid container item spacing={3}>
                        <FormRow/>
                    </Grid>
                    <Grid container item spacing={3}>
                        <FormRow/>
                    </Grid>
                    <Grid container item spacing={3}>
                        <FormRow/>
                    </Grid>
                </Grid>
            </Div>
        </JumboDemoCard>
    );
};
export default NestedGrid;
