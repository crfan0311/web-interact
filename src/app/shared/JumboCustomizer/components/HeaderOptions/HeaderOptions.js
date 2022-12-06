import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Typography from "@mui/material/Typography";
import {useJumboHeaderTheme, useJumboLayoutHeader, useJumboTheme} from "@jumbo/hooks";
import {headerTheme as defaultTheme} from "../../../../themes/header/default";
import {headerTheme as theme1} from "../../../../themes/header/theme1";
import {headerTheme as theme2} from "../../../../themes/header/theme2";
import {headerTheme as theme3} from "../../../../themes/header/theme3";
import {headerTheme as theme4} from "../../../../themes/header/theme4";
import Stack from "@mui/material/Stack";
import Span from "@jumbo/shared/Span";
import Div from "@jumbo/shared/Div";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import {IconButton} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const options = [
    {
        name: "theme-1",
        label: "Theme 1",
        color: "#f5f7fa",
        themeObject: defaultTheme
    },
    {
        name: "theme-2",
        label: "Theme 2",
        color: "#5f254c",
        themeObject: theme1
    },
    {
        name: "theme-3",
        label: "Theme 3",
        color: "#848773",
        themeObject: theme2
    },
    {
        name: "theme-4",
        label: "Theme 4",
        color: "#5c6bc0",
        themeObject: theme3
    },
    {
        name: "theme-5",
        label: "Theme 5",
        color: "#222d45",
        themeObject: theme4
    },
];

const HeaderOptions = () => {
    const [activeTheme, setActiveTheme] = React.useState();
    const {setHeaderTheme} = useJumboHeaderTheme();
    const {headerOptions, setHeaderOptions} = useJumboLayoutHeader();
    const {theme} = useJumboTheme();

    const handleThemeChange = (themeOption) => {
        setActiveTheme(themeOption.name);
        setHeaderTheme({...theme, ...themeOption.themeObject});
    };

    const handleHeaderPosition = (event) => {
        setHeaderOptions({fixed: event.target.checked});
    };

    return (
        <JumboCardQuick
            title={<Typography variant={"h5"} mb={0}>Header Options</Typography>}
            headerSx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}
        >
            <Typography variant={"h6"} mb={2}>Select theme</Typography>
            <Stack spacing={1.25} direction={"row"} mb={2}>
                {
                    options.map(option => {
                        return (
                            <Div
                                sx={{
                                    display: 'flex',
                                    minWidth: 0,
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
                                direction={"row"}
                                key={option.name}
                                onClick={() => handleThemeChange(option)}
                            >
                                <Span
                                    sx={{
                                        bgcolor: option.color,
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        boxShadow: 26,
                                    }}
                                />
                                {
                                    activeTheme === option.name &&
                                    <IconButton>
                                        <CheckCircleIcon/>
                                    </IconButton>
                                }
                            </Div>
                        )
                    })
                }
            </Stack>
            <Div>
                <FormControlLabel
                    control={
                        <Switch checked={headerOptions.fixed} onChange={handleHeaderPosition} name="header-fixed" />
                    }
                    label="Header Fixed"
                />
            </Div>
        </JumboCardQuick>
    );
};

export default HeaderOptions;