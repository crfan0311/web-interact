import React from 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import JumboCardFeatured from "@jumbo/components/JumboCardFeatured";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const EarnRewardCard = () => {
    return (
        <JumboCardFeatured
            showTick
            tickSx={{bgcolor: 'warning.main'}}
            bgColor={["#38B8F2", "#843CF6"]}
            direction={"column"}
            textAlign={"center"}
            imgSrc={getAssetPath(`${ASSET_IMAGES}/widgets/undraw_digital_currency_qpak.svg`, `460x218`)}
            imgSx={{height: 218}}
        >
            <Typography variant={"h3"} color={"common.white"} mb={2}>
                earn from $10 to $200 from your friend's payment
            </Typography>
            <Button variant={"contained"} color={"warning"} sx={{mb: .5}}>Learn More</Button>
        </JumboCardFeatured>
    );
};

export default EarnRewardCard;
