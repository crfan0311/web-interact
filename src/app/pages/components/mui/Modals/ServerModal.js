import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Modals/demo-code/server-modal.txt";

const ServerModal = () => {
    const rootRef = React.useRef(null);

    return (
        <JumboDemoCard title={"Server Modal"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box
                sx={{
                    height: 300,
                    flexGrow: 1,
                    minWidth: 300,
                    transform: 'translateZ(0)',
                    '@media all and (-ms-high-contrast: none)': {
                        display: 'none',
                    },
                }}
                ref={rootRef}
            >
                <Modal
                    disablePortal
                    disableEnforceFocus
                    disableAutoFocus
                    open
                    aria-labelledby="server-modal-title"
                    aria-describedby="server-modal-description"
                    sx={{
                        display: 'flex',
                        p: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    container={() => rootRef.current}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: (theme) => theme.shadows[5],
                            p: 4,
                        }}
                    >
                        <Typography id="server-modal-title" variant="h4" component="h2">
                            Server-side modal
                        </Typography>
                        <Typography id="server-modal-description" sx={{pt: 2}}>
                            If you disable JavaScript, you will still see me.
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </JumboDemoCard>
    );
};
export default ServerModal;
