import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import Div from "@jumbo/shared/Div";
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import code from "../SpeedDials/demo-code/open-icon-speed-dial.txt";

const actions = [
    {icon: <FileCopyIcon/>, name: 'Copy'},
    {icon: <SaveIcon/>, name: 'Save'},
    {icon: <PrintIcon/>, name: 'Print'},
    {icon: <ShareIcon/>, name: 'Share'},
];
const OpenIconSpeedDial = () => {
    return (
        <JumboDemoCard title={"Open Icon Speed dial"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{height: 320, transform: 'translateZ(0px)', flexGrow: 1}}>
                <SpeedDial
                    ariaLabel="SpeedDial openIcon example"
                    sx={{position: 'absolute', bottom: 16, right: 16}}
                    icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Div>
        </JumboDemoCard>
    );
};

export default OpenIconSpeedDial;
