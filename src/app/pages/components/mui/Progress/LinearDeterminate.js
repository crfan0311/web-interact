import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Progress/demo-code/linear-determinate.txt";

const LinearDeterminate = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <JumboDemoCard
            title={"Linear Determinate"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div sx={{width: '100%'}}>
                <LinearProgress variant="determinate" value={progress}/>
            </Div>
        </JumboDemoCard>
    );
};
export default LinearDeterminate;
