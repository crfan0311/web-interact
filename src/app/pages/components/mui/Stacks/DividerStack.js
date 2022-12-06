import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Stacks/demo-code/divider-stack.txt";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DividerStack = () => {
    return (
        <JumboDemoCard title={"Divider"} demoCode={code}>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem/>}
                spacing={2}
            >
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
        </JumboDemoCard>
    );
};
export default DividerStack;
