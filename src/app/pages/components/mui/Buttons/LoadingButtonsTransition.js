import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import code from "./demo-code/loading-button-transition.txt";

const LoadingButtonsTransition = () => {
    const [loading, setLoading] = React.useState(true);

    function handleClick() {
        setLoading(true);
    }

    return (
        <JumboDemoCard
            title={"Loading"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div>
                <FormControlLabel
                    sx={{
                        display: 'block',
                    }}
                    control={
                        <Switch
                            checked={loading}
                            onChange={() => setLoading(!loading)}
                            name="loading"
                            color="primary"
                        />
                    }
                    label="Loading"
                />
                <Div sx={{'& > button': {m: 1}}}>
                    <LoadingButton
                        size="small"
                        onClick={handleClick}
                        loading={loading}
                        variant="outlined"
                        disabled
                    >
                        disabled
                    </LoadingButton>
                    <LoadingButton
                        size="small"
                        onClick={handleClick}
                        loading={loading}
                        loadingIndicator="Loading…"
                        variant="outlined"
                    >
                        Fetch data
                    </LoadingButton>
                    <LoadingButton
                        size="small"
                        onClick={handleClick}
                        endIcon={<SendIcon/>}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Send
                    </LoadingButton>
                    <LoadingButton
                        size="small"
                        color="secondary"
                        onClick={handleClick}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon/>}
                        variant="contained"
                    >
                        Save
                    </LoadingButton>
                </Div>

                <Div sx={{'& > button': {m: 1}}}>
                    <LoadingButton
                        onClick={handleClick}
                        loading={loading}
                        variant="outlined"
                        disabled
                    >
                        disabled
                    </LoadingButton>
                    <LoadingButton
                        onClick={handleClick}
                        loading={loading}
                        loadingIndicator="Loading…"
                        variant="outlined"
                    >
                        Fetch data
                    </LoadingButton>
                    <LoadingButton
                        onClick={handleClick}
                        endIcon={<SendIcon/>}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Send
                    </LoadingButton>
                    <LoadingButton
                        color="secondary"
                        onClick={handleClick}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon/>}
                        variant="contained"
                    >
                        Save
                    </LoadingButton>
                </Div>
            </Div>
        </JumboDemoCard>
    );
};

export default LoadingButtonsTransition;
