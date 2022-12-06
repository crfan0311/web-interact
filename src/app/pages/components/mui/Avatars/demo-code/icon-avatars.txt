import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import {Avatar} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {green, pink} from "@mui/material/colors";
import code from "../Avatars/demo-code/icon-avatars.txt";

const IconAvatars = () => {
    return (
        <JumboDemoCard title={"Icon Avatars"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack direction="row" spacing={2}>
                <Avatar>
                    <FolderIcon/>
                </Avatar>
                <Avatar sx={{bgcolor: pink[500]}}>
                    <PageviewIcon/>
                </Avatar>
                <Avatar sx={{bgcolor: green[500]}}>
                    <AssignmentIcon/>
                </Avatar>
            </Stack>
        </JumboDemoCard>
    );
};

export default IconAvatars;
