import React from 'react';
import {Accordion, AccordionDetails, LinearProgress, Typography} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {AvatarGroup} from "@mui/lab";
import Avatar from "@mui/material/Avatar";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Chip from "@mui/material/Chip";
import Div from "@jumbo/shared/Div";
import {projects} from "./data";

const ProjectsList = () => {
    return (
        <React.Fragment>
            {
                projects.map((item, index) => <ProjectListItemCard item={item} key={index}/>)
            }
        </React.Fragment>
    );
};
export default ProjectsList;
const ProjectListItemCard = ({item, expanded, handleChange}) => {
    return (

        <React.Fragment>
            <Accordion expanded={expanded} onChange={handleChange} square sx={{borderRadius: 2}}>
                <AccordionSummary
                    expandIcon={expanded ? <RemoveIcon/> : <AddIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{
                        flexDirection: 'row-reverse',

                        '& .MuiAccordionSummary-content': {
                            alignItems: 'center',
                        },
                        '.MuiAccordionSummary-expandIconWrapper': {
                            borderRadius: 1,
                            border: 1,
                            color: 'text.secondary',
                            borderColor: 'divider',
                            transform: 'none',
                            height: 28,
                            width: 28,
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,

                            '&.Mui-expanded': {
                                transform: 'none',
                                color: 'error.main',
                                borderColor: 'error.main',
                            },

                            '& svg': {
                                fontSize: '1.25rem',
                            }
                        }
                    }}
                >
                    <Div sx={{flexShrink: 0, px: 1}}>
                        <Avatar sx={{width: 52, height: 52}} alt={item.name} src={item.logo} variant="rounded"/>
                    </Div>

                    <Div sx={{width: '25%', flexShrink: 0, px: 1}}>
                        <Typography variant={"h5"} mb={.5}>{item.name}</Typography>
                        <Typography fontSize={"12px"} variant={"body1"} color={"text.secondary"}>
                            <CalendarTodayOutlinedIcon
                                sx={{verticalAlign: 'middle', fontSize: '1rem', mt: -.25}}/> {item.date}
                        </Typography>
                    </Div>
                    <Div sx={{width: '18%', flexShrink: 0, px: 1}}>
                        <LinearProgress
                            variant={"determinate"}
                            color={"primary"}
                            value={item.progress}
                            sx={{
                                height: 8,
                                borderRadius: 2,
                                backgroundColor: '#E9EEEF'
                            }}
                        />
                    </Div>
                    <Div sx={{width: '16%', flexShrink: 0, px: 1}}>
                        <Typography fontSize={"12px"} variant={"h6"} color={"text.secondary"}
                                    mb={.25}>Deadline</Typography>
                        <Typography variant={"body1"}>{item.deadline}</Typography>
                    </Div>
                    <Div sx={{width: '15%', flexShrink: 0, px: 1}}>
                        <Typography fontSize={"12px"} variant={"h6"} color={"text.secondary"}
                                    mb={.25}>Status</Typography>
                        <Chip color="primary" size={"small"} label={item.status.label}/>
                    </Div>
                    <AvatarGroup max={3}>
                        {
                            item.team.map((teamMember, index) => (
                                <Avatar key={index} alt={teamMember.name} src={teamMember.profilePic}/>
                            ))
                        }
                    </AvatarGroup>
                </AccordionSummary>
                <AccordionDetails sx={{borderTop: 1, borderColor: 'divider', p: theme => theme.spacing(2, 2, 2, 7.5)}}>
                    <Typography variant={"h4"}>Description</Typography>
                    <Typography variant={"body1"} color={"text.secondary"}>
                        {item.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </React.Fragment>
    );

};
