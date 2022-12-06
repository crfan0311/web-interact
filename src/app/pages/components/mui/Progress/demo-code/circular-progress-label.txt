import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Progress/demo-code/circular-progress-label.txt";

const CircularProgressWithLabel = () => {
    const [progress, setProgress] = React.useState(10);

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
            title={"Circular Progress With Label"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <CircularStatic value={progress}/>
        </JumboDemoCard>
    );
};
const CircularStatic = (props) => {
    return (
        <Div sx={{position: 'relative', display: 'inline-flex'}}>
            <CircularProgress variant="determinate" {...props} />
            <Div
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.secondary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Div>
        </Div>
    );
};
export default CircularProgressWithLabel;
