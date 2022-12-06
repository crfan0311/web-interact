import React from 'react';
import CircularIndeterminate from "./CircularIndeterminate";
import CircularColor from "./CircularColor";
import CircularDeterminate from "./CircularDeterminate";
import CircularIntegration from "./CircularIntegration";
import LinearIndeterminate from "./LinearIndeterminate";
import LinearDeterminate from "./LinearDeterminate";
import LinearColor from "./LinearColor";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import LinearBuffer from "./LinearBuffer";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import DelayingAppearance from "./DelayingAppearance";
import Masonry from "@mui/lab/Masonry";

const Progress = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <CircularIndeterminate/>
            <CircularColor/>
            <CircularDeterminate/>
            <CircularIntegration/>
            <CircularProgressWithLabel/>
            <LinearIndeterminate/>
            <LinearColor/>
            <LinearDeterminate/>
            <LinearIndeterminate/>
            <LinearBuffer/>
            <LinearProgressWithLabel/>
            <DelayingAppearance/>
        </Masonry>
    );
};

export default Progress;
