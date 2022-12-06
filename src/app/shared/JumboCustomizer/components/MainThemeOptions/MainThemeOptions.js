import React from 'react';
import {mainTheme as defaultTheme} from "../../../../themes/main/default";
import {mainTheme as theme1} from "../../../../themes/main/theme1";
import {mainTheme as theme2} from "../../../../themes/main/theme2";
import {mainTheme as theme3} from "../../../../themes/main/theme3";
import {mainTheme as theme4} from "../../../../themes/main/theme4";
import Stack from "@mui/material/Stack";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Span from "@jumbo/shared/Span";
import {IconButton, Typography} from "@mui/material";
import {useJumboTheme} from "@jumbo/hooks";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Div from "@jumbo/shared/Div";

const options = [
    {
        name: "theme-1",
        label: "Theme 1",
        colors: {
            primary: "#7352C7",
            secondary: "#E44A77",
        },
        themeObject: defaultTheme
    },
    {
        name: "theme-2",
        label: "Theme 2",
        colors: {
            primary: "#161e54",
            secondary: "#ff5151",
        },
        themeObject: theme1
    },
    {
        name: "theme-3",
        label: "Theme 3",
        colors: {
            primary: "#1db9c3",
            secondary: "#7027a0",
        },
        themeObject: theme2
    },
    {
        name: "theme-4",
        label: "Theme 4",
        colors: {
            primary: "#002366",
            secondary: "#0f52ba",
        },
        themeObject: theme3
    },
    {
        name: "theme-5",
        label: "Theme 5",
        colors: {
            primary: "#54436b",
            secondary: "#50cb93",
        },
        themeObject: theme4
    },
];

const MainThemeOptions = () => {
    const [activeTheme, setActiveTheme] = React.useState();
    const {setTheme} = useJumboTheme();

    const handleThemeChange = (themeOption) => {
        setActiveTheme(themeOption.name);
        setTheme(themeOption.themeObject);
    };

    return (<JumboCardQuick
        title={<Typography variant={"h5"} mb={0}>Main Theme</Typography>}
        headerSx={{
            borderBottom: 1, borderColor: 'divider',
        }}
    >
        <Stack spacing={1.25} direction={"row"}>
            {options.map(option => {
                return (
                    <Div
                        sx={{
                            display: 'flex',
                            minWidth: 0,
                            flex: 1,
                            cursor: "pointer",
                            position: 'relative',

                            '& .MuiIconButton-root': {
                                position: 'absolute',
                                color: '#4caf50',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                            }
                    }}
                    key={option.name}
                    onClick={() => handleThemeChange(option)}
                >
                    <Span sx={{bgcolor: option.colors.primary, width: 20, height: 32}}/>
                    <Span sx={{bgcolor: option.colors.secondary, width: 20, height: 32}}/>
                    {
                        activeTheme === option.name &&
                            <IconButton>
                                <CheckCircleIcon/>
                            </IconButton>
                    }
                </Div>)
            })}

        </Stack>
    </JumboCardQuick>);
};

export default MainThemeOptions;
