import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import Backdrop from "@mui/material/Backdrop";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import code from "../SpeedDials/demo-code/speed-dial-tooltip.txt";

const actions = [
    {icon: <FileCopyIcon/>, name: 'Copy'},
    {icon: <SaveIcon/>, name: 'Save'},
    {icon: <PrintIcon/>, name: 'Print'},
    {icon: <ShareIcon/>, name: 'Share'},
];
const SpeedDialTooltipOpen = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <JumboDemoCard title={"Speed dial Tooltip Open"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{height: 330, transform: 'translateZ(0px)', flexGrow: 1}}>
                <Backdrop open={open}/>
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    sx={{position: 'absolute', bottom: 16, right: 16}}
                    icon={<SpeedDialIcon/>}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={() => setOpen(false)}
                        />
                    ))}
                </SpeedDial>
            </Div>
        </JumboDemoCard>
    );
};

export default SpeedDialTooltipOpen;
