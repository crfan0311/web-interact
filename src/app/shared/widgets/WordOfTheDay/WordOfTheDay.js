import React from 'react';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const WordOfTheDay = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            sx={{
                '& .MuiCardHeader-action': {
                    my: '-4px',
                    mr: -1,
                }
            }}
            title={t('widgets.title.wordOfTheDay')}
            action={
                <IconButton>
                    <SyncOutlinedIcon/>
                </IconButton>
            }
            wrapperSx={{
                pt: 0
            }}
        >
            <Typography variant={"h3"}>be-nev-o-lent</Typography>
            <Typography variant={"body1"} color={"text.secondary"} mb={2}>adjective</Typography>
            <Typography variant={"body1"} color={"text.secondary"} mb={4}>
                The definition of benevolent is enjoying helping others or someone whose
                characteristic is being friendly.
            </Typography>
            <Button
                variant={"contained"}
                sx={{minWidth: 24, p: theme => theme.spacing(.75, 1.25)}}
            >
                <VolumeUpOutlinedIcon sx={{fontSize: 22}}/>
            </Button>
        </JumboCardQuick>
    );
};

export default WordOfTheDay;
