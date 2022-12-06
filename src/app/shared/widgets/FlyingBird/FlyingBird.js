import React from 'react';
import {Avatar, Button, Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const FlyingBird = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.flyingBird')}
            subheader={t('widgets.subheader.flyingBird')}
            avatar={
                <Avatar
                    sx={{width: 72, height: 72}}
                    alt={"Flying bird"}
                    src={getAssetPath(`${ASSET_IMAGES}/dashboard/fling-bird.png`,"72x72")}
                />
            }
            wrapperSx={{pt: '5px'}}
        >
            <Typography mb={2}>
                Some description about the card. This widget could be used to describe a project,
                a product, user’s profile or may be more.
            </Typography>
            <Button
                variant={"outlined"}
                sx={{
                    '&:hover': {
                        color: 'common.white',
                        backgroundColor: 'primary.main',
                    }
                }}
            >View Profile
            </Button>
        </JumboCardQuick>
    );
};

export default FlyingBird;
