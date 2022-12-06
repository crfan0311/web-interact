import * as React from 'react';
import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Button} from "@mui/material";
import code from "../Portals/demo-code/simple-portal.txt";
import Div from "@jumbo/shared/Div";

const SimplePortal = () => {
    const [show, setShow] = React.useState(false);
    const container = React.useRef(null);

    return (
        <JumboDemoCard
            title={"Simple"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0, flexDirection: 'column'}}
        >
            <Div>
                <Button variant={"contained"} onClick={() => setShow(!show)}>
                    {show ? 'Unmount children' : 'Mount children'}
                </Button>
                <Box sx={{p: 1, my: 1, border: '1px solid'}}>
                    It looks like I will render here.
                    {show ? (
                        <Portal container={container.current}>
                            <span>But I actually render here!</span>
                        </Portal>
                    ) : null}
                </Box>
                <Box sx={{p: 1, my: 1, border: '1px solid'}} ref={container}/>
            </Div>
        </JumboDemoCard>
    );
};
export default SimplePortal;
