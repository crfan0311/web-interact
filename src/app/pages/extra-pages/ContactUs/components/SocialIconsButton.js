import React from 'react';
import {IconButton, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Div from "@jumbo/shared/Div";

const SocialIconsButton = () => {
    return (
        <Div sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5}}>
            <Typography variant="h1" mb={2}>Follow Us</Typography>
            <Stack direction={"row"} spacing={1} mb={1}>
                <IconButton
                    sx={{
                        borderRadius: 1,
                        color: 'common.white',
                        background: 'linear-gradient(135deg, #91a9f1, #575fd8)',

                        '&:hover': {
                            background: 'linear-gradient(135deg, #575fd8, #91a9f1)',
                        }
                    }}
                    aria-label="facebook"
                >
                    <FacebookIcon/>
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: 1,
                        color: 'common.white',
                        background: 'linear-gradient(135deg, #36bae0, #5a80e8)',

                        '&:hover': {
                            background: 'linear-gradient(135deg, #5a80e8, #36bae0)',
                        }
                    }}
                    aria-label="Twitter"
                >
                    <TwitterIcon/>
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: 1,
                        color: 'common.white',
                        background: 'linear-gradient(135deg, #a436af, #cc4d82)',

                        '&:hover': {
                            background: 'linear-gradient(135deg, #cc4d82, #a436af)',
                        }
                    }}
                    aria-label="Instagram"
                >
                    <InstagramIcon/>
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: 1,
                        color: 'common.white',
                        background: 'linear-gradient(135deg, #485596, #24B4CF)',

                        '&:hover': {
                            background: 'linear-gradient(135deg, #24B4CF, #485596)',
                        }
                    }}
                    aria-label="LinkedIn"
                >
                    <LinkedInIcon/>
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: 1,
                        color: 'common.white',
                        background: 'linear-gradient(135deg, #D66060, #AF0707)',

                        '&:hover': {
                            background: 'linear-gradient(135deg, #AF0707, #D66060)',
                        }
                    }}
                    aria-label="Pinterest"
                >
                    <PinterestIcon/>
                </IconButton>
                <IconButton
                    sx={{
                        borderRadius: 1,
                        color: 'common.white',
                        background: 'linear-gradient(135deg, #F187E5, #E843D6)',

                        '&:hover': {
                            background: 'linear-gradient(135deg, #E843D6, #F187E5)',
                        }
                    }}
                    aria-label="YouTube"
                >
                    <YouTubeIcon/>
                </IconButton>
            </Stack>
        </Div>
    );
};

export default SocialIconsButton;
