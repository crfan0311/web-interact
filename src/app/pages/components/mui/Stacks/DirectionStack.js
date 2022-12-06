import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Stacks/demo-code/direction-stack.txt";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DirectionStack = () => {
    return (
        <JumboDemoCard title={"Direction"} demoCode={code}>
            <Stack direction="row" spacing={2} sx={{py: {lg: 6.5}}}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
        </JumboDemoCard>
    );
};
export default DirectionStack;
