import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Progress/demo-code/linear-buffer.txt";

const LinearBuffer = () => {
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => {
    });
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0);
                setBuffer(10);
            } else {
                const diff = Math.random() * 10;
                const diff2 = Math.random() * 10;
                setProgress(progress + diff);
                setBuffer(progress + diff + diff2);
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <JumboDemoCard
            title={"Linear Buffer"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div sx={{width: '100%'}}>
                <LinearProgress variant="buffer" value={progress} valueBuffer={buffer}/>
            </Div>
        </JumboDemoCard>
    );
};
export default LinearBuffer;
