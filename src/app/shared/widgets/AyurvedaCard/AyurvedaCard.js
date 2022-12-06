import React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import JumboCardFeatured from "@jumbo/components/JumboCardFeatured";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const AyurvedaCard = ({height}) => {
    return (
        <JumboCardFeatured
            showTick
            tickSx={{bgcolor: 'success.main'}}
            direction={"column"}
            textAlign={"center"}
            imgSrc={getAssetPath(`${ASSET_IMAGES}/dashboard/ayurveda.jpg`,"380x175")}
        >
            <Typography variant={"h4"} mb={2}>Ayurveda</Typography>
            <Typography mb={3}>Learn with experts from around the world. Some description about the card can be
                found below.</Typography>
            <Button variant={"contained"}>Learn More</Button>
        </JumboCardFeatured>
    );
};
/* Todo height prop define */
export default AyurvedaCard;
