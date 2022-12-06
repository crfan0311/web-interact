import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import Grid from "@mui/material/Grid";
import {Skeleton} from "@mui/material";
import {data} from './data';
import Typography from "@mui/material/Typography";
import code from "../Skeletons/demo-code/skeleton-pulstate-example.txt";

const Media = (props) => {
    const {loading = false} = props;

    return (
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                <Div sx={{width: 210, marginRight: 0.5, my: 5}}>
                    {item ? (
                        <img
                            style={{width: 210, height: 118}}
                            alt={item.title}
                            src={item.src}
                        />
                    ) : (
                        <Skeleton variant="rectangular" width={210} height={118}/>
                    )}

                    {item ? (
                        <Div sx={{pr: 2}}>
                            <Typography gutterBottom variant="body2">
                                {item.title}
                            </Typography>
                            <Typography display="block" variant="caption" color="text.secondary">
                                {item.channel}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {`${item.views} • ${item.createdAt}`}
                            </Typography>
                        </Div>
                    ) : (
                        <Div sx={{pt: 0.5}}>
                            <Skeleton/>
                            <Skeleton width="60%"/>
                        </Div>
                    )}
                </Div>
            ))}
        </Grid>
    );
};
const SkeletonPulStateExample = () => {
    return (
        <JumboDemoCard title={"Pulstate Example"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{overflow: 'hidden'}}>
                <Media loading/>
                <Media/>
            </Div>
        </JumboDemoCard>
    );
};

export default SkeletonPulStateExample;
