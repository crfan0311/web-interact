import * as React from 'react';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Progress/demo-code/delaying-appearance.txt";

const DelayingAppearance = () => {
    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState('idle');
    const timerRef = React.useRef();

    React.useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );

    const handleClickLoading = () => {
        setLoading((prevLoading) => !prevLoading);
    };

    const handleClickQuery = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (query !== 'idle') {
            setQuery('idle');
            return;
        }

        setQuery('progress');
        timerRef.current = window.setTimeout(() => {
            setQuery('success');
        }, 2000);
    };

    return (
        <JumboDemoCard
            title={"Delaying appearance"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div sx={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Div sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Div sx={{height: 40}}>
                        <Fade
                            in={loading}
                            style={{
                                transitionDelay: loading ? '800ms' : '0ms',
                            }}
                            unmountOnExit
                        >
                            <CircularProgress/>
                        </Fade>
                    </Div>
                    <Button onClick={handleClickLoading} sx={{m: 2}}>
                        {loading ? 'Stop loading' : 'Loading'}
                    </Button>
                </Div>
                <Div sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Div sx={{height: 40}}>
                        {query === 'success' ? (
                            <Typography>Success!</Typography>
                        ) : (
                            <Fade
                                in={query === 'progress'}
                                style={{
                                    transitionDelay: query === 'progress' ? '800ms' : '0ms',
                                }}
                                unmountOnExit
                            >
                                <CircularProgress/>
                            </Fade>
                        )}
                    </Div>
                    <Button onClick={handleClickQuery} sx={{m: 2}}>
                        {query !== 'idle' ? 'Reset' : 'Simulate a load'}
                    </Button>
                </Div>
            </Div>
        </JumboDemoCard>
    );
};
export default DelayingAppearance;
