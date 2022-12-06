import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Typography from "@mui/material/Typography";
import {useJumboTheme} from "@jumbo/hooks";
import {footerTheme as defaultTheme} from "../../../../themes/footer/default";
import {footerTheme as theme1} from "../../../../themes/footer/theme1";
import Stack from "@mui/material/Stack";
import Span from "@jumbo/shared/Span";
import useJumboFooterTheme from "@jumbo/hooks/useJumboFooterTheme";
import {IconButton} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Div from "@jumbo/shared/Div";

const options = [
    {
        name: "theme-1",
        label: "Theme 1",
        color: "#FFFFFF",
        themeObject: defaultTheme
    },
    {
        name: "theme-2",
        label: "Theme 2",
        color: "#222D45",
        themeObject: theme1
    },
];

const FooterOptions = () => {
    const [activeTheme, setActiveTheme] = React.useState();
    const {setFooterTheme} = useJumboFooterTheme();
    const {theme} = useJumboTheme();

    const handleThemeChange = (themeOption) => {
        setActiveTheme(themeOption.name);
        setFooterTheme({...theme, ...themeOption.themeObject});
    };

    return (
        <JumboCardQuick
            title={<Typography variant={"h6"} mb={0}>Footer Options</Typography>}
            headerSx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}
        >
            <Typography variant={"h6"} mb={2}>Select theme</Typography>
            <Stack spacing={1.25} direction={"row"}>
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
                                        boxShadow: 26
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
        </JumboCardQuick>
    );
};

export default FooterOptions;