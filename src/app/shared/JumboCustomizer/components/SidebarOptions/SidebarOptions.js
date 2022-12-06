import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Span from "@jumbo/shared/Span";
import Div from "@jumbo/shared/Div";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Button, IconButton, ImageListItemBar} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {useJumboLayoutSidebar, useJumboSidebarTheme} from "@jumbo/hooks";
import {sidebarTheme as defaultTheme} from "../../../../themes/sidebar/default";
import {sidebarTheme as theme1} from "../../../../themes/sidebar/theme1";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {ASSET_IMAGES} from "../../../../utils/constants/paths";

const bgColorOptions = [
    {
        name: "theme-1",
        type: "single",
        color: "#4f46ba",
    },
    {
        name: "theme-2",
        type: "single",
        color: "#b94343",
    },
    {
        name: "theme-3",
        type: "single",
        color: "#212121",
    },
    {
        name: "theme-4",
        type: "single",
        color: "#348f6c",
    },
    {
        name: "theme-5",
        type: "single",
        color: "#26324d",
    },
    {
        name: "theme-6",
        type: "gradient",
        colors: ["#7f5a83", "#0d324d"],
    },
    {
        name: "theme-7",
        type: "gradient",
        colors: ["#099", "#36096d"],
    },
    {
        name: "theme-8",
        type: "gradient",
        colors: ["#ee696b", "#523a78"],
    },
    {
        name: "theme-9",
        type: "gradient",
        colors: ["#03ce97", "#00619a"],
    },
    {
        name: "theme-10",
        type: "gradient",
        colors: ["#80ced7", "#04619f"],
    },
];

const bgImageOptions = [
    {
        name: "sidebar-1",
        thumb: `${ASSET_IMAGES}/customizer/sidebar/sidebar-1.png`,
        full: `${ASSET_IMAGES}/customizer/sidebar/full-images/sidebar-1.jpg`,
    },
    {
        name: "sidebar-2",
        thumb: `${ASSET_IMAGES}/customizer/sidebar/sidebar-2.png`,
        full: `${ASSET_IMAGES}/customizer/sidebar/full-images/sidebar-2.jpg`,
    },
    {
        name: "sidebar-3",
        thumb: `${ASSET_IMAGES}/customizer/sidebar/sidebar-3.png`,
        full: `${ASSET_IMAGES}/customizer/sidebar/full-images/sidebar-3.jpg`,
    },
    {
        name: "sidebar-4",
        thumb: `${ASSET_IMAGES}/customizer/sidebar/sidebar-5.png`,
        full: `${ASSET_IMAGES}/customizer/sidebar/full-images/sidebar-5.jpg`,
    },
    {
        name: "sidebar-5",
        thumb: `${ASSET_IMAGES}/customizer/sidebar/sidebar-6.png`,
        full: `${ASSET_IMAGES}/customizer/sidebar/full-images/sidebar-6.jpg`,
    }
];

const SidebarOptions = () => {
    const [activeBgColorOption, setActiveBgColorOption] = React.useState();
    const [activeBgImage, setActiveBgImage] = React.useState();
    const {sidebarOptions, setSidebarOptions} = useJumboLayoutSidebar();
    const {sidebarTheme, setSidebarTheme} = useJumboSidebarTheme();

    const handleBgColorSelection = (option) => {
        setActiveBgColorOption(option);
    };

    const handleBgImageSelection = (option) => {
        setActiveBgImage(option);
    };

    const handleSidebarPosition = (event) => {
        setSidebarOptions({scrollType: event.target.checked ? "fixed" : "static"});
    };

    React.useEffect(() => {
        if (activeBgColorOption) {
            if (activeBgImage) {
                if (activeBgColorOption?.type === "single") {
                    setSidebarTheme({
                        ...sidebarTheme,
                        ...theme1,
                        bgImage: activeBgImage?.full,
                        overlay: {
                            bgColor: activeBgColorOption?.color,
                            opacity: 0.85
                        }
                    })
                } else {
                    setSidebarTheme({
                        ...sidebarTheme,
                        ...theme1,
                        bgImage: activeBgImage?.full,
                        overlay: {
                            // backgroundImage: `linear-gradient(${activeBgColorOption?.colors[0]}, ${activeBgColorOption?.colors[1]})`,
                            bgColor: activeBgColorOption?.colors,
                            opacity: 0.85
                        }
                    })
                }
            } else if (activeBgColorOption?.type === "single") {
                setSidebarTheme({
                    ...sidebarTheme,
                    ...theme1,
                    // palette: {background: {paper: activeBgColorOption?.color}},
                    overlay: {
                        // backgroundImage: `linear-gradient(${activeBgColorOption?.colors[0]}, ${activeBgColorOption?.colors[1]})`,
                        bgColor: activeBgColorOption?.color,
                    }
                })
            } else {
                setSidebarTheme({
                    ...sidebarTheme,
                    ...theme1,
                    // palette: {background: {paper: activeBgColorOption?.colors[1]}},
                    overlay: {
                        // backgroundImage: `linear-gradient(${activeBgColorOption?.colors[0]}, ${activeBgColorOption?.colors[1]})`,
                        bgColor: activeBgColorOption?.colors,
                    }
                })
            }
        } else {
            setSidebarTheme({
                ...sidebarTheme,
                ...defaultTheme,
                bgImage: null,
                overlay: null,
            });
        }
    }, [activeBgColorOption, activeBgImage]);

    return (
        <JumboCardQuick
            title={<Typography variant={"h5"} mb={0}>Sidebar Options</Typography>}
            headerSx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}
        >
            <Typography variant={"h6"} mb={2}>Background Color</Typography>
            <Stack spacing={1.25} direction={"row"} mb={3}>
                {
                    bgColorOptions.map(option => {
                        if (option.type === "single")
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
                                    key={option.name}
                                    onClick={() => handleBgColorSelection(option)}
                                >
                                    <Span sx={{borderRadius: 1, bgcolor: option.color, width: 40, height: 80}}/>
                                    {
                                        activeBgColorOption?.name === option.name &&
                                        <IconButton>
                                            <CheckCircleIcon/>
                                        </IconButton>
                                    }
                                </Div>
                            )
                    })
                }
            </Stack>
            <Typography variant={"h6"} mb={2}>Background Gradient</Typography>
            <Stack spacing={1.25} direction={"row"} mb={3}>
                {
                    bgColorOptions.map(option => {
                        if (option.type === "gradient")
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
                                    key={option.name}
                                    onClick={() => handleBgColorSelection(option)}
                                >
                                    <Span
                                        sx={{
                                            borderRadius: 1,
                                            width: 40,
                                            height: 80,
                                            backgroundImage: `linear-gradient(${option.colors[0]}, ${option.colors[1]})`
                                        }}
                                    />
                                    {
                                        activeBgColorOption?.name === option.name &&
                                        <IconButton>
                                            <CheckCircleIcon/>
                                        </IconButton>
                                    }
                                </Div>
                            )
                    })
                }
            </Stack>
            {
                activeBgColorOption &&
                <React.Fragment>
                    <Typography variant={"h6"} mb={2}>Background Image</Typography>
                    <ImageList sx={{m: 0, mb: 3}} cols={5} gap={10}>
                        {
                            bgImageOptions.map(option => {
                                return (
                                    <ImageListItem
                                        sx={{
                                            cursor: 'pointer',
                                        }}
                                        key={option.name}
                                        onClick={() => handleBgImageSelection(option)}
                                    >
                                        <img
                                            src={`${option.thumb}?w=98&fit=crop&auto=format`}
                                            srcSet={`${option.thumb}?w=98fit=crop&auto=format&dpr=2 2x`}
                                            alt={option.name}
                                            loading="lazy"
                                        />
                                        {
                                            activeBgImage?.name === option.name &&
                                            <ImageListItemBar
                                                actionIcon={
                                                    <IconButton
                                                        sx={{
                                                            color: '#4caf50'
                                                        }}
                                                        aria-label={`info about ${option.name}`}
                                                    >
                                                        <CheckCircleIcon/>
                                                    </IconButton>
                                                }
                                                sx={{
                                                    top: 0,
                                                    justifyContent: 'center',
                                                    backgroundColor: 'transparent',
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                        display: 'none'
                                                    }
                                                }}
                                            />
                                        }
                                    </ImageListItem>
                                )
                            })
                        }
                    </ImageList>
                </React.Fragment>
            }

            <Button
                variant={"contained"}
                onClick={() => {
                    setActiveBgColorOption(null);
                    setActiveBgImage(null)
                }}
                disableElevation
                sx={{
                    py: .5,
                    fontSize: 13,
                    letterSpacing: 1,
                    textTransform: 'none'
                }}
            >
                Reset Background
            </Button>
            <Div
                sx={{
                    mt: 3
                }}
            >
                <FormControlLabel
                    control={
                        <Switch checked={sidebarOptions.fixed} onChange={handleSidebarPosition} name="sidebar-fixed"/>
                    }
                    label="Sidebar Fixed"
                />
            </Div>
        </JumboCardQuick>
    );
};

export default SidebarOptions;
