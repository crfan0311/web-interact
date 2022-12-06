import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import {styled} from "@mui/material/styles";
import {FormControlLabel, Radio, RadioGroup, SpeedDial, SpeedDialAction, SpeedDialIcon, Switch} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import code from "../SpeedDials/demo-code/playground-speed-dial.txt";

const StyledSpeedDial = styled(SpeedDial)(({theme}) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

const actions = [
    {icon: <FileCopyIcon/>, name: 'Copy'},
    {icon: <SaveIcon/>, name: 'Save'},
    {icon: <PrintIcon/>, name: 'Print'},
    {icon: <ShareIcon/>, name: 'Share'},
];
const PlaygroundSpeedDial = () => {
    const [direction, setDirection] = React.useState('up');
    const [hidden, setHidden] = React.useState(false);

    const handleDirectionChange = (event) => {
        setDirection(event.target.value);
    };

    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };

    return (
        <JumboDemoCard title={"Playground Speed dial"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{transform: 'translateZ(0px)', flexGrow: 1}}>
                <FormControlLabel
                    control={
                        <Switch checked={hidden} onChange={handleHiddenChange} color="primary"/>
                    }
                    label="Hidden"
                />
                <FormControl component="fieldset" sx={{mt: 1, display: 'flex'}}>
                    <FormLabel component="legend">Direction</FormLabel>
                    <RadioGroup
                        aria-label="direction"
                        name="direction"
                        value={direction}
                        onChange={handleDirectionChange}
                        row
                    >
                        <FormControlLabel value="up" control={<Radio/>} label="Up"/>
                        <FormControlLabel value="right" control={<Radio/>} label="Right"/>
                        <FormControlLabel value="down" control={<Radio/>} label="Down"/>
                        <FormControlLabel value="left" control={<Radio/>} label="Left"/>
                    </RadioGroup>
                </FormControl>
                <Div sx={{position: 'relative', mt: 3, height: 320}}>
                    <StyledSpeedDial
                        ariaLabel="SpeedDial playground example"
                        hidden={hidden}
                        icon={<SpeedDialIcon/>}
                        direction={direction}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                        ))}
                    </StyledSpeedDial>
                </Div>
            </Div>
        </JumboDemoCard>
    );
};

export default PlaygroundSpeedDial;
