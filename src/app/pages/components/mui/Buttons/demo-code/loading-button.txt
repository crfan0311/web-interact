import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import code from "./demo-code/loading-button.txt";

const LoadingButtons = () => {
    return (
        <JumboDemoCard
            title={"Loading Buttons"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" spacing={2}>
                <LoadingButton loading variant="outlined">
                    Submit
                </LoadingButton>
                <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                    Fetch data
                </LoadingButton>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    startIcon={<SaveIcon/>}
                    variant="outlined"
                >
                    Save
                </LoadingButton>
            </Stack>
        </JumboDemoCard>
    );
};

export default LoadingButtons;
