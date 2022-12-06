import * as React from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Typography} from "@mui/material";
import code from "../Modals/demo-code/nested-modal.txt";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Open Child Modal</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Div sx={{...style, width: 260}}>
                    <Typography variant={"h4"} component={"h2"} id="child-modal-title">Text in a child
                        modal</Typography>
                    <p id="child-modal-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Close Child Modal</Button>
                </Div>
            </Modal>
        </React.Fragment>
    );
}

const NestedModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <JumboDemoCard title={"Nested"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div
                s>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Div sx={{...style, width: 400}}>
                        <Typography
                            variant={"h4"}
                            component={"h2"}
                            id="parent-modal-title"
                        >
                            Text in a modal
                        </Typography>
                        <p id="parent-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                        <ChildModal/>
                    </Div>
                </Modal>
            </Div>
        </JumboDemoCard>
    );
};
export default NestedModal;
