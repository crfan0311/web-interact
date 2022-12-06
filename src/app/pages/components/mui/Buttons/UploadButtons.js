import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {IconButton} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import code from "./demo-code/upload-button.txt";

const UploadButtons = () => {
    return (
        <JumboDemoCard
            title={"Upload button"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                    Upload
                    <input hidden accept="image/*" multiple type="file"/>
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file"/>
                    <PhotoCamera/>
                </IconButton>
            </Stack>
        </JumboDemoCard>
    );
};

export default UploadButtons;
