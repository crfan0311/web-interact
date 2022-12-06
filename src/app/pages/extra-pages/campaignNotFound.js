import React from 'react';
import {IconButton, OutlinedInput, Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import {useJumboApp} from "@jumbo/hooks";
import { useNavigate } from 'react-router-dom';
import InfoTooltip from '@interact/Components/InfoTooltip';


const CampaignNotFound = () => {
    const navigate = useNavigate();
    const {setActiveLayout} = useJumboApp();

    return (
        <Div sx={{
            flex: 1,
            flexWrap: 'wrap',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: theme => theme.spacing(4),
        }}>
            <Typography align={"center"} component={"h2"} variant={"h2"} color={"text.secondary"} mb={3}>
                This campaign does not exist...
                <br></br><br></br>
                (┬┬﹏┬┬)<br></br>
                <br></br>Try searching for the creator's username or campaign name!&nbsp;&nbsp;
                <InfoTooltip title="(search bar at the top right)" />
                <br></br>

            </Typography>
            <br></br>
        </Div>
    );
};

export default CampaignNotFound;
