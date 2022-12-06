import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import {Avatar} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {deepOrange, green} from "@mui/material/colors";
import code from "../Avatars/demo-code/variant-avatars.txt";

const VariantAvatars = () => {
    return (
        <JumboDemoCard
            title={"Variant Avatars"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" spacing={2}>
                <Avatar sx={{bgcolor: deepOrange[500]}} variant="square">
                    P
                </Avatar>
                <Avatar sx={{bgcolor: green[500]}} variant="rounded">
                    <AssignmentIcon/>
                </Avatar>
            </Stack>
        </JumboDemoCard>
    );
};

export default VariantAvatars;
