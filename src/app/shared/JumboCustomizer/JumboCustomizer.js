import React from 'react';
import Drawer from "@mui/material/Drawer";
import LayoutOptions from "./components/LayoutOptions";
import Div from "@jumbo/shared/Div";
import {useApp} from "../../hooks";
import MainThemeOptions from "./components/MainThemeOptions";
import Stack from "@mui/material/Stack";
import HeaderOptions from "./components/HeaderOptions";
import SidebarOptions from "./components/SidebarOptions";
import FooterOptions from "./components/FooterOptions";
import LocalizationOptions from "./components/LocalizationOptions";
import Typography from "@mui/material/Typography";
import {IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import JumboScrollbar from "@jumbo/components/JumboScrollbar";

const JumboCustomizer = () => {
    // const theme = useJumboTheme();
    const {customizerVisibility, setCustomizerVisibility} = useApp();
    return (
        <Drawer
            anchor={"right"}
            open={customizerVisibility}
            onClose={() => setCustomizerVisibility(false)}
            sx={{
                zIndex: 1205,

                '& .MuiDrawer-paper': {
                    width: 336
                }
            }}
        >
            <Div
                sx={{
                    display: 'flex',
                    minWidth: 0,
                    position: 'relative',
                    zIndex: 2,
                    p: theme => theme.spacing(1.5, 3),
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: 25,
                }}
            >
                <Typography variant={"h3"} mb={0}>Theme Settings</Typography>
                <IconButton aria-label="close" onClick={() => setCustomizerVisibility(false)}>
                    <CloseIcon/>
                </IconButton>
            </Div>
            <JumboScrollbar autoHide autoHideDuration={200} autoHideTimeout={500}>
                <Stack spacing={3} sx={{px: 3, py: 2.5}}>
                    <LayoutOptions/>
                    <MainThemeOptions/>
                    <HeaderOptions/>
                    <SidebarOptions/>
                    <FooterOptions/>
                    <LocalizationOptions/>
                </Stack>
            </JumboScrollbar>
        </Drawer>
    );
};

export default JumboCustomizer;
