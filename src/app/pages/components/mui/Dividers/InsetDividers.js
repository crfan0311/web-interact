import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Stack} from "@mui/material";
import Divider from "@mui/material/Divider";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import WorkIcon from "@mui/icons-material/Work";
import ImageIcon from "@mui/icons-material/Image";
import Chip from "@mui/material/Chip";
import code from "../Dividers/demo-code/inset-dividers.txt";
import {ASSET_AVATARS} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

const InsetDividers = () => {
    return (
        <JumboDemoCard title={"Inset Dividers"} demoCode={code}>
            <Stack direction={"row"} flexWrap={'wrap'} justifyContent={"center"}>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        mb: 2,
                        bgcolor: 'background.paper'
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Work" secondary="Jan 7, 2014"/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Vacation" secondary="July 20, 2014"/>
                    </ListItem>
                </List>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper'
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt={"John Smith"} src={getAssetPath(`${ASSET_AVATARS}/domnic-harris.jpg`, "40x40")}/>
                        </ListItemAvatar>
                        <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
                        <ListItemText primary={<Chip size={'small'} label={"Admin"} color={"primary"}/>}/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt={"Jimmy Jo"} src={getAssetPath(`${ASSET_AVATARS}/jimmy-jo.jpg`, "40x40")}/>
                        </ListItemAvatar>
                        <ListItemText primary="Work" secondary="Jan 7, 2014"/>
                        <ListItemText primary={<Chip size={'small'} label={"Guest"} color={"warning"}/>}/>
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt={"Avatar 9"} src={getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, "40x40")}/>
                        </ListItemAvatar>
                        <ListItemText primary="Vacation" secondary="July 20, 2014"/>
                        <ListItemText primary={<Chip size={'small'} label={"Agent"} color={"success"}/>}/>
                    </ListItem>
                </List>
            </Stack>
        </JumboDemoCard>
    );
};

export default InsetDividers;
