import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import code from "../TextFields/demo-code/composed-text-fields.txt";

const ComposedTextFields = () => {
    const [name, setName] = React.useState('Composed TextField');

    const handleChange = (event) => {
        setName(event.target.value);
    };
    return (
        <JumboDemoCard title={"Composed Text Field"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1},
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" value={name} onChange={handleChange}/>
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-helper">Name</InputLabel>
                    <Input
                        id="component-helper"
                        value={name}
                        onChange={handleChange}
                        aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">
                        Some important helper text
                    </FormHelperText>
                </FormControl>
                <FormControl disabled variant="standard">
                    <InputLabel htmlFor="component-disabled">Name</InputLabel>
                    <Input id="component-disabled" value={name} onChange={handleChange}/>
                    <FormHelperText>Disabled</FormHelperText>
                </FormControl>
                <FormControl error variant="standard">
                    <InputLabel htmlFor="component-error">Name</InputLabel>
                    <Input
                        id="component-error"
                        value={name}
                        onChange={handleChange}
                        aria-describedby="component-error-text"
                    />
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={name}
                        onChange={handleChange}
                        label="Name"
                    />
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Name</InputLabel>
                    <FilledInput id="component-filled" value={name} onChange={handleChange}/>
                </FormControl>
            </Box>
        </JumboDemoCard>
    );
};

export default ComposedTextFields;
