import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import code from "../Lists/demo-code/alignment-list.txt";
import {ASSET_AVATARS} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

const AlignItemList = () => {
    return (
        <JumboDemoCard title={"AlignItem List"} demoCode={code}>
            <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`)}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src={getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`)}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li"/>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src={getAssetPath(`${ASSET_AVATARS}/avatar13.jpg`)}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
        </JumboDemoCard>
    );
};

export default AlignItemList;
