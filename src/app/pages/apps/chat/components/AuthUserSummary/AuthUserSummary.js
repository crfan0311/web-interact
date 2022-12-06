import React from 'react';
import Div from "@jumbo/shared/Div";
import Badge from "@mui/material/Badge";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Link, ListItem, ListItemIcon, ListItemText, Popover, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Divider from "@mui/material/Divider";
import FlagIcon from "@mui/icons-material/Flag";
import DialpadIcon from "@mui/icons-material/Dialpad";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import {ASSET_AVATARS} from "../../../../../utils/constants/paths";
import {getAssetPath} from "../../../../../utils/appHelpers";

const AuthUserSummary = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'user-popover' : undefined;
    return (
        <React.Fragment>
            <Div
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                }}
            >
                <Badge
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    badgeContent={
                        <React.Fragment>
                            <ArrowDropDownIcon
                                sx={{color: 'inherit', fontSize: '1.25rem'}}
                                aria-describedby={id}
                                onClick={handleClick}
                            />
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'center',
                                    horizontal: 'right',
                                }}
                                sx={{
                                    '& .MuiPaper-root': {
                                        border: 1,
                                        borderColor: 'divider'

                                    },
                                }}
                            >
                                <Div sx={{p: 3, pb: 2, minWidth: 276}}>
                                    <Div
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2,
                                        }}
                                    >
                                        <Avatar
                                            sx={{width: 60, height: 60, mr: 2}}
                                            alt={"Cory Smith"}
                                            src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`,"60x60")}
                                        />
                                        <Div sx={{flex: '1 1 auto'}}>
                                            <Typography variant={"h5"} mb={.35}>Cory Smith</Typography>
                                            <Typography
                                                variant={"body1"}
                                                color={"text.secondary"}
                                            >Life must be big</Typography>
                                        </Div>
                                    </Div>
                                    <List disablePadding>
                                        <ListItem sx={{px: 0}}>
                                            <ListItemIcon sx={{minWidth: 36}}>
                                                <FiberManualRecordIcon fontSize={"small"} color={"success"}/>
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography
                                                    variant={"h5"}
                                                    color={"text.primary"}
                                                    mb={0}
                                                >Online</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider component="li"/>
                                        <ListItem sx={{px: 0}}>
                                            <ListItemIcon sx={{minWidth: 36}}>
                                                <FlagIcon fontSize={"small"}/>
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography
                                                    variant={"h5"}
                                                    color={"text.primary"}
                                                    mb={0}
                                                >Life is short,enjoy it well</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider component="li"/>
                                        <ListItem sx={{px: 0}}>
                                            <ListItemIcon sx={{minWidth: 36}}>
                                                <DialpadIcon fontSize={"small"}/>
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography
                                                    variant={"h5"}
                                                    color={"text.primary"}
                                                    mb={0}
                                                >My Account</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider component="li"/>
                                        <ListItem sx={{px: 0}}>
                                            <ListItemIcon sx={{minWidth: 36}}>
                                                <SettingsIcon fontSize={"small"}/>
                                            </ListItemIcon>
                                            <ListItemText>
                                                <Typography
                                                    variant={"h5"}
                                                    color={"text.primary"}
                                                    mb={0}
                                                >Settings</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider component="li"/>
                                        <ListItem sx={{px: 0}}>
                                            <ListItemText>
                                                <Typography
                                                    variant={"h6"}
                                                    color={"text.primary"}
                                                    mb={0}
                                                    sx={{
                                                        letterSpacing: 1.5,
                                                        textTransform: 'uppercase',
                                                        fontSize: '12px'
                                                    }}
                                                >Personal Detail</Typography>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem sx={{px: 0}}>
                                            <ListItemIcon sx={{minWidth: 36, alignSelf: 'flex-end', mb: 1}}>
                                                <PersonOutlineIcon fontSize={"small"}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        variant={"h6"}
                                                        color={"text.secondary"}
                                                        mb={0}
                                                    ><small>Name</small></Typography>
                                                }
                                                secondary={
                                                    <Typography variant={"h5"}
                                                                color={"text.primary"}
                                                                mb={0}
                                                    >Savannah Nguyen</Typography>
                                                }
                                            />
                                        </ListItem>
                                        <Divider component="li"/>
                                        <ListItem sx={{px: 0}}>
                                            <ListItemIcon sx={{minWidth: 36, alignSelf: 'flex-end', mb: 1}}>
                                                <PersonIcon fontSize={"small"}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        variant={"h6"}
                                                        color={"text.secondary"}
                                                        mb={0}
                                                    ><small>Username</small></Typography>
                                                }
                                                secondary={
                                                    <Typography
                                                        variant={"h5"}
                                                        color={"text.primary"}
                                                        mb={0}
                                                    >savanah.naguyen21</Typography>
                                                }
                                            />
                                        </ListItem>
                                        <Divider component="li"/>
                                        <ListItem sx={{px: 0}}>
                                            <ListItemIcon sx={{minWidth: 36, alignSelf: 'flex-end', mb: 1}}>
                                                <EmailIcon fontSize={"small"}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        variant={"h6"}
                                                        color={"text.secondary"}
                                                        mb={0}
                                                    ><small>Email Address</small></Typography>
                                                }
                                                secondary={
                                                    <Typography
                                                        variant={"h5"}
                                                        color={"text.primary"}
                                                        mb={0}
                                                    >savanah.mail@gmail.com</Typography>
                                                }
                                            />
                                        </ListItem>
                                        <Divider component="li"/>
                                        <ListItem sx={{px: 0}}>
                                            <ListItemIcon sx={{minWidth: 36, alignSelf: 'flex-end', mb: 1}}>
                                                <DialpadIcon fontSize={"small"}/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        variant={"h6"}
                                                        color={"text.secondary"}
                                                        mb={0}
                                                    ><small>Phone Number</small></Typography>
                                                }
                                                secondary={
                                                    <Typography
                                                        variant={"h5"}
                                                        color={"text.primary"}
                                                        mb={0}
                                                    >(022) 245 877 7896</Typography>
                                                }
                                            />
                                        </ListItem>
                                        <Divider component="li"/>
                                        <ListItem sx={{px: 0, pb: 0}}>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        variant={"h5"}
                                                        color={"text.primary"}
                                                        mb={0}
                                                        sx={{textTransform: 'uppercase'}}
                                                    >
                                                        <Link
                                                            underline="hover"
                                                            color={"inherit"}
                                                            href="#">Sign Out</Link>
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </Div>
                            </Popover>
                        </React.Fragment>
                    }
                    sx={{
                        mr: 2,
                        '& .MuiBadge-badge': {
                            height: 16,
                            width: 16,
                            minWidth: 16,
                            overflow: 'hidden',
                            border: 1,
                            borderColor: 'common.white',
                            color: 'common.white',
                            bgcolor: '#8dcd03',
                            cursor: 'pointer',
                            right: 9,
                            bottom: 9,
                        }
                    }}
                >
                    <Avatar sx={{width: 50, height: 50}} alt="Cory Smith" src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`,"50x50")}/>
                </Badge>
                <Div sx={{flex: '1 1 auto'}}>
                    <Typography variant={"h5"}>Christy Lin</Typography>
                    <Typography variant={"body1"} color={"text.secondary"}>Life must be big</Typography>
                </Div>
            </Div>
        </React.Fragment>
    );
};

export default AuthUserSummary;
