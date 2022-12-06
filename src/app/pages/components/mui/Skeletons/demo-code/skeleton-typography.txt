import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Skeleton} from "@mui/material";
import code from "../Skeletons/demo-code/skeleton-typography.txt";

const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'body1', 'caption'];

function TypographyDemo(props) {
    const {loading = false} = props;

    return (
        <div>
            {variants.map((variant) => (
                <Typography component="div" key={variant} variant={variant}>
                    {loading ? <Skeleton/> : variant}
                </Typography>
            ))}
        </div>
    );
}

const SkeletonTypography = () => {
    return (
        <JumboDemoCard title={"Inferring Dimensions"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Grid container spacing={8}>
                <Grid item xs>
                    <TypographyDemo loading/>
                </Grid>
                <Grid item xs>
                    <TypographyDemo/>
                </Grid>
            </Grid>
        </JumboDemoCard>
    );
};

export default SkeletonTypography;
