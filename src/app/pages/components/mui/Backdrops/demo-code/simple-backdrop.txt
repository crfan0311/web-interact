import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Backdrops/demo-code/simple-backdrop.txt";

const SimpleBackdrop = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <JumboDemoCard
            title={"Basic Backdrop"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div sx={{textAlign: 'center'}}>
                <Button onClick={() => setOpen(!open)}>Show backdrop</Button>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={open}
                    onClick={() => setOpen(false)}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </Div>
        </JumboDemoCard>
    );
};
export default SimpleBackdrop;
