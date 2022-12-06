import React from 'react';
import {Chip, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const NewPhotos = () => {
    return (
        <JumboCardQuick
            action={<Chip label={"$20/month"} size={"small"} color={"secondary"}/>}
            bgColor={"primary.main"}
            sx={{
                color: "common.white",
                '& .MuiCardHeader-root': {
                    border: 'none',
                    position: 'absolute',
                    right: '-5px',
                    top: '-5px'
                }
            }}
        >
            <Stack direction={"row"} spacing={1} alignItems={"center"} mb={2}>
                <img alt={''} src={getAssetPath(`${ASSET_IMAGES}/dashboard/new-photo.png`,"60x54")}/>
                <Typography variant={"h1"} color={"common.white"}>248</Typography>
            </Stack>

            <Typography variant={"h2"} color={"common.white"}>New photos added this week</Typography>
            <Typography variant={"body1"} mb={2}>Now kick-start with your next design. Subscribe today and save
                $20/month</Typography>
            <Button variant={"contained"} color={"warning"} className={"mb-1"}>Subscribe</Button>
        </JumboCardQuick>
    );
};

export default NewPhotos;
