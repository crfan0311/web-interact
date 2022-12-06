import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Snackbars/demo-code/long-text-snackbar.txt";

const action = (
    <Button variant={"contained"} color="secondary" size="small">Click</Button>
);

const LongTextSnackbar = () => {
    return (
        <JumboDemoCard title={"Message With Button"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={2} sx={{maxWidth: 600}}>
                <SnackbarContent message="I love snacks." action={action}/>
                <SnackbarContent
                    message={
                        'I love candy. I love cookies. I love cupcakes. \
                        I love cheesecake. I love chocolate.'
                    }
                />
                <SnackbarContent
                    message="I love candy. I love cookies. I love cupcakes."
                    action={action}
                />
                <SnackbarContent
                    message={
                        'I love candy. I love cookies. I love cupcakes. \
                        I love cheesecake. I love chocolate.'
                    }
                    action={action}
                />
            </Stack>
        </JumboDemoCard>
    );
};
export default LongTextSnackbar;
