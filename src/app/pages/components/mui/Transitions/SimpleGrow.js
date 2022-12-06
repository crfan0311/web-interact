import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Transitions/demo-code/simple-grow.txt";

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

const SimpleGrow = () => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <JumboDemoCard title={"Grow"} demoCode={code}>
            <Box sx={{height: 180}}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange}/>}
                    label="Show"
                />
                <Box sx={{display: 'flex'}}>
                    <Grow in={checked}>{icon}</Grow>
                    <Grow
                        in={checked}
                        style={{transformOrigin: '0 0 0'}}
                        {...(checked ? {timeout: 1000} : {})}
                    >
                        {icon}
                    </Grow>
                </Box>
            </Box>
        </JumboDemoCard>
    );
};
export default SimpleGrow;
