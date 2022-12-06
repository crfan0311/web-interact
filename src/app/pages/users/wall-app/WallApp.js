import React from 'react';
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "@mui/material/Link";
import Div from "@jumbo/shared/Div";
import Typography from "@mui/material/Typography";
import {
    Avatar, AvatarGroup,
    Card,
    CardContent,
    CardMedia,
    Chip,
    ImageListItemBar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField, useMediaQuery
} from "@mui/material";
import List from "@mui/material/List";
import Span from "@jumbo/shared/Span";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Divider from "@mui/material/Divider";
import CardHeader from "@mui/material/CardHeader";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {useJumboTheme} from "@jumbo/hooks";
import {ASSET_AVATARS, ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const itemData = [
    {
        profilePic: getAssetPath('https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', "180x180"),
        title: 'Breakfast',
    },
    {
        profilePic: getAssetPath('https://images.unsplash.com/photo-1551782450-a2132b4ba21d', "180x180"),
        title: 'Burger',
    },
    {
        profilePic: getAssetPath('https://images.unsplash.com/photo-1522770179533-24471fcdba45', "180x180"),
        title: 'Camera',
    },
    {
        profilePic: getAssetPath('https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', "180x180"),
        title: 'Coffee',
    },
    {
        profilePic: getAssetPath('https://images.unsplash.com/photo-1533827432537-70133748f5c8', "180x180"),
        title: 'Hats',
    },
    {
        profilePic: getAssetPath('https://images.unsplash.com/photo-1558642452-9d2a7deb7f62', "180x180"),
        title: 'Honey',
    },
];

const WallApp = () => {
    const {theme} = useJumboTheme();
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    return (
        <Div
            sx={{
                mx: -.75
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3}
                      sx={{
                          order: {xs: 2, lg: 1},
                          minHeight: {lg: 400},
                          height: {lg: 'calc(100vh - 200px)'}
                      }}
                >

                    <JumboScrollbar autoHide autoHideDuration={200} autoHideTimeout={500} disable={lg}>
                        <Div sx={{px: 1}}>
                            <Card sx={{mb: 4}}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={getAssetPath(`${ASSET_IMAGES}/wall/tamara-bellis.jpg`, "240x180")}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Div
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            position: 'relative',
                                            zIndex: 1,
                                            mt: -7.5,
                                            mb: 2,
                                        }}
                                    >
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "72x72")}
                                            sx={{
                                                width: 72,
                                                height: 72,
                                                border: 3,
                                                mr: 2,
                                                borderColor: 'common.white',
                                                boxShadow: theme => theme.shadows[3]
                                            }}
                                        />
                                        <Div sx={{flex: 1,}}>
                                            <Typography
                                                variant={"h6"}
                                                color={"common.white"}
                                                mb={2}
                                            >Chelsea Jones</Typography>
                                            <Typography
                                                variant={"body1"}
                                                color={"text.secondary"}
                                            >Florida,USA</Typography>
                                        </Div>
                                    </Div>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-evenly"}
                                        divider={<Divider orientation="vertical" flexItem/>}
                                        mb={2}
                                    >
                                        <Div sx={{textAlign: 'center', p: 1,}}>
                                            <Typography variant={"h6"}>2k+</Typography>
                                            <Typography
                                                variant={"body1"}
                                                fontSize={"12px"}
                                                color={"text.secondary"}
                                            >Followers</Typography>
                                        </Div>
                                        <Div sx={{textAlign: 'center', p: 1,}}>
                                            <Typography variant={"h6"}>689</Typography>
                                            <Typography
                                                variant={"body1"}
                                                fontSize={"12px"}
                                                color={"text.secondary"}
                                            >Friends</Typography>
                                        </Div>
                                        <Div sx={{textAlign: 'center', p: 1,}}>
                                            <Typography variant={"h6"}>283</Typography>
                                            <Typography
                                                variant={"body1"}
                                                fontSize={"12px"}
                                                color={"text.secondary"}
                                            >Following</Typography>
                                        </Div>
                                    </Stack>
                                    <Button
                                        size={"small"}
                                        variant={"contained"}
                                        sx={{px: 2}}
                                        disableElevation
                                    >Follow</Button>
                                </CardContent>
                            </Card>
                            <Div sx={{mb: 4}}>
                                <Typography variant={"h4"} mb={2}>Interest</Typography>
                                <Stack
                                    direction={"row"}
                                    flexWrap={"wrap"}
                                    sx={{
                                        mx: '-4px',
                                        '& > :not(style)': {
                                            margin: '0 4px 8px'
                                        }
                                    }}
                                >
                                    <Chip label="Logo design" variant="outlined"/>
                                    <Chip label="UI design" variant="outlined"/>
                                    <Chip label="HTML" variant="outlined"/>
                                    <Chip label="JavaScript" variant="outlined"/>
                                    <Chip label="React" variant="outlined"/>
                                    <Chip label="Branding" variant="outlined"/>
                                </Stack>
                            </Div>
                            <Div sx={{mb: 4}}>
                                <Typography variant={"h4"} mb={2}>Friends</Typography>
                                <Stack
                                    direction={"row"}
                                    flexWrap={"wrap"}
                                    sx={{
                                        mx: -.5,
                                        mb: 2,
                                    }}
                                >
                                    <Div
                                        sx={{
                                            textAlign: 'center',
                                            width: '33.33%',
                                            px: .5,
                                            mb: 2,

                                            '& .MuiBadge-badge': {
                                                height: 12,
                                                width: 12,
                                                borderRadius: '50%',
                                                border: 2,
                                                borderColor: 'common.white',
                                            }
                                        }}
                                    >
                                        <Badge
                                            overlap="circular"
                                            anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                                            variant="dot"
                                            color={"success"}
                                        >
                                            <Avatar sx={{height: 64, width: 64}} alt="Remy Sharp"
                                                    src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "64x64")}/>
                                        </Badge>
                                        <Typography variant={"body1"} color={"text.secondary"} fontSize={"12px"} mt={1}>Bryan
                                            Sherman</Typography>
                                    </Div>
                                    <Div
                                        sx={{
                                            textAlign: 'center',
                                            width: '33.33%',
                                            px: .5,
                                            mb: 2,

                                            '& .MuiBadge-badge': {
                                                height: 12,
                                                width: 12,
                                                borderRadius: '50%',
                                                border: 2,
                                                borderColor: 'common.white',
                                            }
                                        }}
                                    >
                                        <Badge
                                            overlap="circular"
                                            anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                                            variant="dot"
                                            color={"success"}
                                        >
                                            <Avatar
                                                sx={{height: 64, width: 64}}
                                                alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`, "64x64")}
                                            />
                                        </Badge>
                                        <Typography variant={"body1"} color={"text.secondary"} fontSize={"12px"} mt={1}>Jared
                                            Morton</Typography>
                                    </Div>
                                    <Div
                                        sx={{
                                            textAlign: 'center',
                                            width: '33.33%',
                                            px: .5,
                                            mb: 2,

                                            '& .MuiBadge-badge': {
                                                height: 12,
                                                width: 12,
                                                borderRadius: '50%',
                                                border: 2,
                                                borderColor: 'common.white',
                                            }
                                        }}
                                    >
                                        <Badge
                                            overlap="circular"
                                            anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                                            variant="dot"
                                            color={"success"}
                                        >
                                            <Avatar
                                                sx={{height: 64, width: 64}}
                                                alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "64x64")}
                                            />
                                        </Badge>
                                        <Typography variant={"body1"} color={"text.secondary"} fontSize={"12px"} mt={1}>Edwin
                                            Blair</Typography>
                                    </Div>
                                    <Div
                                        sx={{
                                            textAlign: 'center',
                                            width: '33.33%',
                                            px: .5,
                                            mb: 2,

                                            '& .MuiBadge-badge': {
                                                height: 12,
                                                width: 12,
                                                borderRadius: '50%',
                                                border: 2,
                                                borderColor: 'common.white',
                                            }
                                        }}
                                    >
                                        <Badge
                                            overlap="circular"
                                            anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                                            variant="dot"
                                            color={"success"}
                                        >
                                            <Avatar
                                                sx={{height: 64, width: 64}}
                                                alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "64x64")}
                                            />
                                        </Badge>
                                        <Typography variant={"body1"} color={"text.secondary"} fontSize={"12px"} mt={1}>Abbie
                                            Roy</Typography>
                                    </Div>
                                    <Div
                                        sx={{
                                            textAlign: 'center',
                                            width: '33.33%',
                                            px: .5,
                                            mb: 2,

                                            '& .MuiBadge-badge': {
                                                height: 12,
                                                width: 12,
                                                borderRadius: '50%',
                                                border: 2,
                                                borderColor: 'common.white',
                                            }
                                        }}
                                    >
                                        <Badge
                                            overlap="circular"
                                            anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                                            variant="dot"
                                            color={"success"}
                                        >
                                            <Avatar
                                                sx={{height: 64, width: 64}}
                                                alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, "64x64")}
                                            />
                                        </Badge>
                                        <Typography variant={"body1"} color={"text.secondary"} fontSize={"12px"} mt={1}>Leah
                                            Massey</Typography>
                                    </Div>
                                    <Div
                                        sx={{
                                            textAlign: 'center',
                                            width: '33.33%',
                                            px: .5,
                                            mb: 2,

                                            '& .MuiBadge-badge': {
                                                height: 12,
                                                width: 12,
                                                borderRadius: '50%',
                                                border: 2,
                                                borderColor: 'common.white',
                                            }
                                        }}
                                    >
                                        <Badge
                                            overlap="circular"
                                            anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                                            variant="dot"
                                            color={"success"}
                                        >
                                            <Avatar
                                                sx={{height: 64, width: 64}}
                                                alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar8.jpg`, "64x64")}
                                            />
                                        </Badge>
                                        <Typography variant={"body1"} color={"text.secondary"} fontSize={"12px"} mt={1}>Jane
                                            Bryan</Typography>
                                    </Div>
                                </Stack>
                                <Button variant={"outlined"} fullWidth>View All</Button>
                            </Div>
                            <Div sx={{mb: 1}}>
                                <Typography variant={"h4"} mb={2}>Photos</Typography>
                                <ImageList
                                    cols={3}
                                    rowHeight={"auto"}
                                    sx={{
                                        m: 0,
                                        mb: 2,
                                        width: '100%',
                                        borderRadius: 3,
                                    }}
                                >
                                    {
                                        itemData.map((item, index) => (
                                            <ImageListItem key={index}>
                                                <img
                                                    src={item.profilePic}
                                                    alt={item.title}
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        ))
                                    }
                                </ImageList>
                                <Div>
                                    <Link href="#" underline="none">Go to gallery <ArrowForwardIcon
                                        sx={{verticalAlign: 'middle'}}/></Link>
                                </Div>
                            </Div>
                        </Div>
                    </JumboScrollbar>
                </Grid>
                <Grid item xs={12} lg={6}
                      sx={{
                          order: {xs: 1, lg: 2},
                          minHeight: {lg: 400},
                          height: {lg: 'calc(100vh - 200px)'}
                      }}
                >
                    <JumboScrollbar autoHide autoHideDuration={200} autoHideTimeout={500} disable={lg}>
                        <Div sx={{px: 1}}>
                            <Card sx={{mb: 3.75}}>
                                <CardContent>
                                    <Div
                                        sx={{
                                            display: 'flex',
                                            minWidth: 0,
                                            borderBottom: 1,
                                            borderColor: 'divider',
                                        }}
                                    >
                                        <Avatar
                                            sx={{height: 50, width: 50}}
                                            alt="Remy Sharp"
                                            src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "50x50")}
                                        />
                                        <Div sx={{flex: 1,}}>
                                            <TextField
                                                id="your-mind"
                                                multiline
                                                fullWidth
                                                rows={2}
                                                variant={"outlined"}
                                                placeholder="What is in your mind?"
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& > fieldset': {
                                                            border: 'none'
                                                        }
                                                    }
                                                }}
                                            />
                                        </Div>
                                    </Div>
                                </CardContent>
                            </Card>
                            <Card sx={{mb: 3.5}}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            sx={{height: 50, width: 50}}
                                            alt="Remy Sharp"
                                            src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "50x50")}
                                        />
                                    }
                                    title={<Typography variant={"h6"} mb={.25}>Kenery Thomson</Typography>}
                                    subheader={
                                        <Typography variant={"body1"} color={"text.secondary"} fontSize={"12px"}>
                                            22 Jul, 2018
                                        </Typography>
                                    }
                                />
                                <CardContent sx={{pt: 0}}>
                                    <ImageList sx={{m: '0 0 12px'}} cols={2} gap={16}>
                                        <ImageListItem
                                            sx={{
                                                overflow: 'hidden',
                                                borderRadius: 2
                                            }}
                                        >
                                            <img
                                                src={getAssetPath(`${ASSET_IMAGES}/wall/yarenci-hdz.jpg`, "640x420")}
                                                srcSet={getAssetPath(`${ASSET_IMAGES}/wall/yarenci-hdz.jpg`, "640x420")}
                                                alt="Image Title"
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                        <ImageListItem
                                            sx={{
                                                overflow: 'hidden',
                                                borderRadius: 2
                                            }}
                                        >
                                            <img
                                                src={getAssetPath(`${ASSET_IMAGES}/wall/severin-candrian.jpg`, "640x420")}
                                                srcSet={getAssetPath(`${ASSET_IMAGES}/wall/severin-candrian.jpg`, "640x420")}
                                                alt="Image Title"
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    </ImageList>
                                    <Stack
                                        direction={"row"}
                                        spacing={2}
                                        sx={{
                                            color: 'text.secondary',
                                            fontSize: '12px',
                                            mb: 3,

                                            '& > span': {
                                                cursor: 'pointer',
                                            },
                                            '& .MuiSvgIcon-root': {
                                                fontSize: '1rem',
                                                mt: '-2px',
                                                verticalAlign: 'middle',
                                            }
                                        }}
                                    >
                                        <span>
                                            <VisibilityIcon/> 350 views
                                        </span>
                                        <span>
                                            <FavoriteBorderIcon/> 150 Likes
                                        </span>
                                        <span>
                                            <ChatBubbleOutlineIcon/> 1 Comments
                                        </span>
                                        <span style={{marginLeft: 'auto'}}>
                                            <VisibilityIcon/> 124 Shares
                                        </span>
                                    </Stack>
                                    <Div sx={{display: 'flex',}}>
                                        <Avatar sx={{mr: 2}} alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "40x40")}/>
                                        <Div>
                                            <Typography variant={"h6"} mb={.25}>Kenery Thomson</Typography>
                                            <Typography
                                                variant={"body1"}
                                                color={"text.secondary"}
                                                fontSize={"12px"}
                                                mb={2}
                                            >
                                                22 Jul, 2018
                                            </Typography>
                                            <Typography
                                                variant={"body1"}
                                                color={"text.secondary"}
                                                fontSize={"12px"}
                                                mb={2}
                                            >
                                                Wow! Excellent, these images are so beautiful.
                                            </Typography>
                                        </Div>
                                    </Div>
                                    <Div sx={{display: 'flex', minWidth: 0,}}>
                                        <Avatar sx={{mr: 2}} alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "40x40")}/>
                                        <Div sx={{flex: 1,}}>
                                            <TextField
                                                id="comment"
                                                multiline
                                                fullWidth
                                                rows={2}
                                                variant={"outlined"}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        py: 1,
                                                        '& > fieldset': {
                                                            borderRadius: 0
                                                        }
                                                    }
                                                }}
                                            />
                                        </Div>
                                    </Div>
                                </CardContent>
                            </Card>
                            <Card sx={{mb: 4}}>
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            sx={{height: 50, width: 50}}
                                            alt="Remy Sharp"
                                            src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "50x50")}
                                        />
                                    }
                                    title={<Typography variant={"h6"} mb={.25}>Kenery Thomson</Typography>}
                                    subheader={
                                        <Typography variant={"body1"} color={"text.secondary"} fontSize={"12px"}>
                                            22 Jul, 2018
                                        </Typography>
                                    }
                                />
                                <CardContent sx={{pt: 0}}>
                                    <ImageList sx={{m: '0 0 12px'}} cols={1} gap={16}>
                                        <ImageListItem
                                            sx={{
                                                overflow: 'hidden',
                                                borderRadius: 2
                                            }}
                                        >
                                            <img
                                                src={getAssetPath(`${ASSET_IMAGES}/wall/agitalizr-unsplash.jpg`, "640x424")}
                                                srcSet={getAssetPath(`${ASSET_IMAGES}/wall/agitalizr-unsplash.jpg`, "640x424")}
                                                alt="Image Title"
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    </ImageList>
                                    <Stack
                                        direction={"row"}
                                        spacing={2}
                                        sx={{
                                            color: 'text.secondary',
                                            fontSize: '12px',
                                            mb: 3,

                                            '& > span': {
                                                cursor: 'pointer',
                                            },
                                            '& .MuiSvgIcon-root': {
                                                fontSize: '1rem',
                                                mt: '-2px',
                                                verticalAlign: 'middle',
                                            }
                                        }}
                                    >
                                        <span>
                                            <VisibilityIcon/> 350 views
                                        </span>
                                        <span>
                                            <FavoriteBorderIcon/> 150 Likes
                                        </span>
                                        <span>
                                            <ChatBubbleOutlineIcon/> 1 Comments
                                        </span>
                                        <span style={{marginLeft: 'auto'}}>
                                            <VisibilityIcon/> 124 Shares
                                        </span>
                                    </Stack>
                                    <Div sx={{display: 'flex',}}>
                                        <Avatar sx={{mr: 2}} alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "40x40")}/>
                                        <Div>
                                            <Typography variant={"h6"} mb={.25}>Kenery Thomson</Typography>
                                            <Typography
                                                variant={"body1"}
                                                color={"text.secondary"}
                                                fontSize={"12px"}
                                                mb={2}
                                            >
                                                22 Jul, 2018
                                            </Typography>
                                            <Typography
                                                variant={"body1"}
                                                color={"text.secondary"}
                                                fontSize={"12px"}
                                                mb={2}
                                            >
                                                Wow! Excellent, these images are so beautiful.
                                            </Typography>
                                        </Div>
                                    </Div>
                                    <Div sx={{display: 'flex', minWidth: 0,}}>
                                        <Avatar sx={{mr: 2}} alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "40x40")}/>
                                        <Div sx={{flex: 1,}}>
                                            <TextField
                                                id="comment"
                                                multiline
                                                fullWidth
                                                rows={2}
                                                variant={"outlined"}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        py: 1,
                                                        '& > fieldset': {
                                                            borderRadius: 0
                                                        }
                                                    }
                                                }}
                                            />
                                        </Div>
                                    </Div>
                                </CardContent>
                            </Card>
                            <Button
                                sx={{
                                    mb: 2,
                                    borderColor: 'divider',
                                    '&:hover': {
                                        borderColor: 'text.primary'
                                    }
                                }}
                                size={"large"}
                                variant={"outlined"}
                                color={"inherit"}
                                fullWidth
                            >
                                Load more
                            </Button>
                        </Div>
                    </JumboScrollbar>
                </Grid>
                <Grid item xs={12} md={6} lg={3}
                      sx={{
                          order: 3,
                          minHeight: {lg: 400},
                          height: {lg: 'calc(100vh - 200px)'}
                      }}
                >
                    <JumboScrollbar autoHide autoHideDuration={200} autoHideTimeout={500} disable={lg}>
                        <Div sx={{px: 1}}>
                            <Div sx={{mb: 4}}>
                                <Typography variant={"h4"} mb={2}>Community</Typography>
                                <ImageList
                                    cols={3}
                                    rowHeight={"auto"}
                                    sx={{
                                        m: 0,
                                        mb: 2,
                                        width: '100%',
                                        borderRadius: 3,
                                    }}
                                >
                                    {itemData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=120&h=120&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=120&h=120&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                            <ImageListItemBar
                                                title={item.title}
                                                sx={{
                                                    '& .MuiImageListItemBar-titleWrap': {
                                                        p: theme => theme.spacing(.5, 1.5),
                                                    },

                                                    '& .MuiImageListItemBar-title': {
                                                        fontSize: '0.875rem',
                                                        lineHeight: 1.5
                                                    }
                                                }}
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                                <Div>
                                    <Link href="#" underline="none">See all communities
                                        <ArrowForwardIcon sx={{verticalAlign: 'middle'}}/>
                                    </Link>
                                </Div>
                            </Div>

                            <Div sx={{mb: 2}}>
                                <Typography variant={"h4"} mb={2}>Recent Activity</Typography>
                                <Typography variant={"body1"} color={"text.secondary"} mb={.5}>Today</Typography>
                                <List disablePadding sx={{mb: 3}}>
                                    <ListItem alignItems={"flex-start"} sx={{px: 0}}>
                                        <ListItemAvatar sx={{minWidth: 60}}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "44x44")}
                                                sx={{
                                                    width: 44,
                                                    height: 44,
                                                }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography component={"div"}>
                                                    <Typography color={"text.primary"}>
                                                        <Span sx={{color: 'primary.main'}}>Guptil </Span>
                                                        {"has sent you an invitation to join project"}
                                                        <Span sx={{color: 'primary.main'}}> Mouldifi</Span>
                                                    </Typography>
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem alignItems={"flex-start"} sx={{px: 0}}>
                                        <ListItemAvatar sx={{minWidth: 60}}>
                                            <Avatar
                                                alt="Mich Sharp"
                                                src="Mich Sharp"
                                                sx={{
                                                    width: 44,
                                                    height: 44,
                                                    bgcolor: 'success.main'
                                                }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography component={"div"}>
                                                    <Typography color={"text.primary"}>
                                                        {"Mich uploaded 6 new photos in"}
                                                        <Span sx={{color: 'primary.main'}}> Art Lovers group</Span>
                                                    </Typography>
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem alignItems={"flex-start"} sx={{px: 0}}>
                                        <ListItemAvatar sx={{minWidth: 60}}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "44x44")}
                                                sx={{
                                                    width: 44,
                                                    height: 44,
                                                }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography component={"div"}>
                                                    <Typography color={"text.primary"}>
                                                        <Span sx={{color: 'primary.main'}}>Joshua </Span>
                                                        {"Joshua has shared a post asaying this is bigening."}
                                                    </Typography>
                                                    <Stack direction={"row"} spacing={1} mt={2}>
                                                        <Button size={"small"} variant={"contained"}
                                                                disableElevation>Like</Button>
                                                        <Button size={"small"} variant={"contained"} color={"inherit"}
                                                                disableElevation>Share</Button>
                                                    </Stack>
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem alignItems={"flex-start"} sx={{px: 0}}>
                                        <ListItemAvatar sx={{minWidth: 60}}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "44x44")}
                                                sx={{
                                                    width: 44,
                                                    height: 44,
                                                }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography component={"div"}>
                                                    <Typography color={"text.primary"}>
                                                        <Span sx={{color: 'primary.main'}}>Stella </Span>
                                                        {"has send you an invitation."}
                                                    </Typography>
                                                    <Stack direction={"row"} spacing={1} mt={2}>
                                                        <Button size={"small"} variant={"contained"} color={"success"}
                                                                disableElevation>Accept</Button>
                                                        <Button size={"small"} variant={"contained"} color={"inherit"}
                                                                disableElevation>Reject</Button>
                                                    </Stack>
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                </List>

                                <Typography variant={"body1"} color={"text.secondary"} mb={.5}>Yesterday</Typography>
                                <List disablePadding sx={{mb: 3}}>
                                    <ListItem alignItems={"flex-start"} sx={{px: 0}}>
                                        <ListItemAvatar sx={{minWidth: 60}}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "44x44")}
                                                sx={{
                                                    width: 44,
                                                    height: 44,
                                                }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography component={"div"}>
                                                    <Typography color={"text.primary"}>
                                                        {"Agent "}
                                                        <Span sx={{color: 'primary.main'}}>Kily </Span>
                                                        {"Agent Kily Johns has added 7 new photos to the property Albama's House"}
                                                    </Typography>
                                                    <Div sx={{display: 'flex', flex: 1, mt: 2}}>
                                                        <AvatarGroup variant={"square"} max={3}>
                                                            <Avatar
                                                                alt="Remy Sharp"
                                                                src={getAssetPath(`${ASSET_IMAGES}/products/speaker.jpeg`, "44x44")}
                                                            />
                                                            <Avatar
                                                                alt="Travis Howard"
                                                                src={getAssetPath(`${ASSET_IMAGES}/products/laptop.jpeg`, "44x44")}
                                                            />
                                                            <Avatar
                                                                alt="Cindy Baker"
                                                                src={getAssetPath(`${ASSET_IMAGES}/products/trimmer.jpg`, "44x44")}
                                                            />
                                                            <Avatar
                                                                alt="Agnes Walker"
                                                                src={getAssetPath(`${ASSET_IMAGES}/products/travel-bag.jpg`, "44x44")}
                                                            />
                                                        </AvatarGroup>
                                                    </Div>
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem alignItems={"flex-start"} sx={{px: 0}}>
                                        <ListItemAvatar sx={{minWidth: 60}}>
                                            <Avatar
                                                alt="Mich Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`, "44x44")}
                                                sx={{
                                                    width: 44,
                                                    height: 44,
                                                    bgcolor: 'success.main'
                                                }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography component={"div"}>
                                                    <Typography color={"text.primary"}>
                                                        {"Mich uploaded 6 new photos in"}
                                                        <Span sx={{color: 'primary.main'}}> Art Lovers group</Span>
                                                    </Typography>
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <ListItem alignItems={"flex-start"} sx={{px: 0}}>
                                        <ListItemAvatar sx={{minWidth: 60}}>
                                            <Avatar
                                                alt="Remy Sharp"
                                                src={getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "44x44")}
                                                sx={{
                                                    width: 44,
                                                    height: 44,
                                                }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Typography component={"div"}>
                                                    <Typography color={"text.primary"}>
                                                        <Span sx={{color: 'primary.main'}}>Joshua </Span>
                                                        {"Joshua has shared a post asaying this is bigening."}
                                                    </Typography>
                                                    <Stack direction={"row"} spacing={1} mt={2}>
                                                        <Button
                                                            size={"small"}
                                                            variant={"contained"}
                                                            disableElevation
                                                        >Like</Button>
                                                        <Button
                                                            size={"small"}
                                                            variant={"contained"}
                                                            color={"inherit"}
                                                            disableElevation
                                                        >Share</Button>
                                                    </Stack>
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                </List>
                                <Div>
                                    <Link href="#" underline="none">Load more</Link>
                                </Div>
                            </Div>
                        </Div>
                    </JumboScrollbar>
                </Grid>
            </Grid>
        </Div>
    );
};

export default WallApp;
