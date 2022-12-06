import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Progress/demo-code/linear-progress-label.txt";

const LinearProgressWithLabel = () => {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <JumboDemoCard
            title={"Linear Progress With Label"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div sx={{width: '100%'}}>
                <LinearWithValueLabel value={progress}/>
            </Div>
        </JumboDemoCard>
    );
}

const LinearWithValueLabel = (props) => {
    return (
        <Div sx={{display: 'flex', alignItems: 'center'}}>
            <Div sx={{width: '100%', mr: 1}}>
                <LinearProgress variant="determinate" {...props} />
            </Div>
            <Div sx={{minWidth: 35}}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Div>
        </Div>
    );

};
export default LinearProgressWithLabel;
