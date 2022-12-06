import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import FormControlLabel from '@mui/material/FormControlLabel';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Transitions/demo-code/simple-zoom.txt";

const icon = (
    <Paper sx={{m: 1}} elevation={4}>
        <Box component="svg" sx={{width: 100, height: 100}}>
            <Box
                component="polygon"
                sx={{
                    fill: (theme) => theme.palette.common.white,
                    stroke: (theme) => theme.palette.divider,
                    strokeWidth: 1,
                }}
                points="0,100 50,00, 100,100"
            />
        </Box>
    </Paper>
);

const SimpleZoom = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <JumboDemoCard title={"Zoom"} demoCode={code}>
                <Box sx={{height: 180}}>
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={handleChange}/>}
                        label="Show"
                    />
                    <Box sx={{display: 'flex'}}>
                        <Zoom in={checked}>{icon}</Zoom>
                        <Zoom in={checked} style={{transitionDelay: checked ? '500ms' : '0ms'}}>
                            {icon}
                        </Zoom>
                    </Box>
                </Box>
        </JumboDemoCard>
    );
};
export default SimpleZoom;
