import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Stacks/demo-code/basic-stack.txt";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const BasicStack = () => {
    return (
        <JumboDemoCard title={"Simple Stack"} demoCode={code}>
            <Div sx={{width: '100%'}}>
                <Stack spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </Div>
        </JumboDemoCard>
    );
};
export default BasicStack;
