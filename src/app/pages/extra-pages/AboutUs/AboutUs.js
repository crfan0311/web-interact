import React from 'react';
import {Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const AboutUs = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant="h1" mb={3}>{t('pages.title.abouts')}</Typography>
            <JumboCardQuick
                title={<Typography variant="h6" color={"text.secondary"}>About Us</Typography>}
                subheader={
                    <Typography component={"h2"} variant="h1">
                        A biggest digital marketing agency in the world
                    </Typography>
                }
                wrapperSx={{pt: 0}}
            >
                <Grid container spacing={3.75}>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            sx={{borderRadius: 2}}
                            image={getAssetPath(`${ASSET_IMAGES}/pages/cherrydeck.jpg`, "640x820")}
                            alt="About Us"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            disableRipple
                            variant="text"
                            sx={{
                                px: 0,
                                ml: '-5px',
                                mt: {md: 2},
                                mb: 2,
                                textTransform: 'none',
                                color: 'text.primary',

                                '&:hover': {
                                    bgcolor: 'transparent'
                                }

                            }}
                        >
                            <PlayCircleIcon sx={{fontSize: '3rem', mr: 1}}/> Watch Intro
                        </Button>
                        <Typography variant="h2" color="text.primary">Our Mission</Typography>
                        <Typography variant="body1" color="text.secondary" mb={3}>Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem
                            Ipsum.</Typography>
                        <Typography variant="h2" color="text.primary">Our Vision</Typography>
                        <Typography variant="body1" color="text.secondary">Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem
                            Ipsum.</Typography>
                    </Grid>
                </Grid>
            </JumboCardQuick>
        </React.Fragment>
    );
};

export default AboutUs;
