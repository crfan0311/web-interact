import React from 'react';
import {Avatar, AvatarGroup, LinearProgress, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {projectMenu, projectUsers} from "./data";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";
import {useTranslation} from "react-i18next";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const ProjectCard = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.projectSummary')}
            action={<JumboDdMenu menuItems={projectMenu}/>}
            sx={{
                '& .MuiCardHeader-action': {
                    my: '-4px'
                }
            }}
        >
            <Div sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center'
            }}
            >
                <Div sx={{display: 'flex', mb: 2}}>
                    <img src={getAssetPath(`${ASSET_IMAGES}/dashboard/icon-german.png`, "68x68")} alt={''}/>
                </Div>
                <Typography variant={"h3"} mb={2}>Cling Eagle App</Typography>
                <Div sx={{mb: 2}}>
                    <AvatarGroup max={5}>
                        {
                            projectUsers.map((item, index) => (
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
                    alignSelf: 'stretch'
                }}
                >
                    <LinearProgress
                        variant={"determinate"}
                        color={"success"}
                        value={70}
                        sx={{
                            width: '85%',
                            borderRadius: 4,
                            height: 5,
                            mb: 1,
                            backgroundColor: '#E9EEEF'
                        }}
                    />
                    <Typography variant={"body1"} color={"text.secondary"} mb={3}>26/30 tasks completed</Typography>
                </Div>
                <Button variant={"contained"} sx={{mb: 1}}>Access dashboard</Button>
            </Div>
        </JumboCardQuick>
    );
};

export default ProjectCard;
