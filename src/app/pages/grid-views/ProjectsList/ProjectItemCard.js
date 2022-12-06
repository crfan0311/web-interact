import React from 'react';
import Div from "@jumbo/shared/Div";
import Button from "@mui/material/Button";
import {AvatarGroup, Card, CardContent, IconButton, LinearProgress, Typography} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

const ProjectItemCard = ({item}) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Chip color={item?.status?.chip_color} size={"small"} label={item.status.label}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon/>
                    </IconButton>
                }
            >
            </CardHeader>
            <CardContent sx={{
                pt: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Div sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center'
                }}
                >
                    <Div sx={{display: 'flex', mb: 2}}>
                        <Avatar sx={{width: 72, height: 72}} src={item.logo}/>
                    </Div>
                    <Typography variant={"h4"} mb={2}>{item.title}</Typography>
                    <Div sx={{mb: 2}}>
                        <AvatarGroup max={3}>
                            {
                                item?.team.map((item, index) => (
                                    <Avatar src={item.profilePic} key={index}/>
                                ))
                            }
                        </AvatarGroup>
                    </Div>
                    <Div sx={{
                        display: 'flex',
                        minWidth: 0,
                        flexDirection: 'column',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        width: '240px',
                        maxWidth: '100%',
                    }}
                    >
                        <LinearProgress
                            variant={"determinate"}
                            color={item?.status?.linear_color}
                            value={70}
                            sx={{
                                width: '85%',
                                borderRadius: 4,
                                height: 5,
                                mb: 1,
                                backgroundColor: '#E9EEEF'
                            }}
                        />
                        <Typography
                            variant={"body1"}
                            color={"text.secondary"}
                            mb={3}
                        >{`26/30 tasks ${item?.status?.label}`}
                        </Typography>
                    </Div>
                    <Button variant={'contained'} size={"small"}>Access Dashboard</Button>
                </Div>
            </CardContent>
        </Card>
    );
};

export default ProjectItemCard;
