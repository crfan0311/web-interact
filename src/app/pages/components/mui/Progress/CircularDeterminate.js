import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Progress/demo-code/circular-determinate.txt";

const CircularDeterminate = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <JumboDemoCard
            title={"Circular Determinate"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack spacing={2} direction="row">
                <CircularProgress variant="determinate" value={25}/>
                <CircularProgress variant="determinate" value={50}/>
                <CircularProgress variant="determinate" value={75}/>
                <CircularProgress variant="determinate" value={100}/>
                <CircularProgress variant="determinate" value={progress}/>
            </Stack>
        </JumboDemoCard>
    );
};
export default CircularDeterminate;
