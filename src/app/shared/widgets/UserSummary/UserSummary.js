import React from 'react';
import {Avatar, Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import {ASSET_AVATARS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const UserSummary = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            noWrapper
            avatar={
                <Avatar
                    sx={{
                        width: 60,
                        height: 60,
                        boxShadow: 2,
                        position: 'relative',
                    }}
                    src={getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, "60x60")}
                    alt={""}
                />
            }
            sx={{
                height: 116,
                '& .MuiCardHeader-root': {
                    height: '100%',
                },
                '& .MuiCardHeader-avatar': {
                    marginRight: '50px',
                    marginLeft: '10px',

                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-35px',
                        left: '-55px',
                        width: 185,
                        height: 185,
                        backgroundColor: '#00C4B4',
                        borderRadius: '50%'
                    }
                },
            }}
            title={<Typography variant={"h4"} mb={0}>{t('widgets.title.userSummary')}</Typography>}
            subheader={t('widgets.subheader.userSummary')}
        >
        </JumboCardQuick>
    );
};

export default UserSummary;
