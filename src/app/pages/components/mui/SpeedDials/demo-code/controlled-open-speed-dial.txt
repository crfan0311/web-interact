import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import code from "../SpeedDials/demo-code/controlled-open-speed-dial.txt";

const actions = [
    {icon: <FileCopyIcon/>, name: 'Copy'},
    {icon: <SaveIcon/>, name: 'Save'},
    {icon: <PrintIcon/>, name: 'Print'},
    {icon: <ShareIcon/>, name: 'Share'},
];
const ControlledOpenSpeedDial = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <JumboDemoCard title={"Controlled Open Speed Dial"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{height: 320, transform: 'translateZ(0px)', flexGrow: 1}}>
                <SpeedDial
                    ariaLabel="SpeedDial controlled open example"
                    sx={{position: 'absolute', bottom: 16, right: 16}}
                    icon={<SpeedDialIcon/>}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
            </Div>
        </JumboDemoCard>
    );
};

export default ControlledOpenSpeedDial;
