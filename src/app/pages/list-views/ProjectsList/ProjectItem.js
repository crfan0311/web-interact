import React from 'react';
import AccordionSummary from "@mui/material/AccordionSummary";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import {Accordion, AccordionDetails, AvatarGroup, Card, LinearProgress, Typography} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Chip from "@mui/material/Chip";
import Div from "@jumbo/shared/Div";
import {projects} from "./data";

const ProjectItem = ({item}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleClick = () => {
        if (projects.find((product) => product.id === item.id))
            setExpanded(!expanded);
    }
    return (
        <Card sx={{mb: 1}}>
            <Accordion expanded={expanded} onChange={handleClick} square sx={{borderRadius: 2}}>
                <AccordionSummary
                    expandIcon={expanded ? <RemoveIcon/> : <AddIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{
                        px: 3,
                        flexDirection: 'row-reverse',

                        '& .MuiAccordionSummary-content': {
                            alignItems: 'center',

                            '&.Mui-expanded': {
                               margin: '12px 0',
                            }
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
                            mr: 1,

                            '&.Mui-expanded': {
                                transform: 'none',
                                color: 'primary.main',
                                borderColor: 'primary.main',
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
                    <Div
                        sx={{
                            width: {xs: 'auto', lg: '26%'},
                            flexShrink: 0,
                            px: 1,
                            flex: {xs: '1', lg: '0 1 auto'},
                        }}
                    >
                        <Typography variant={"h5"} mb={.5} fontSize={14}>{item.name}</Typography>
                        <Typography fontSize={"12px"} variant={"body1"} color={"text.secondary"}>
                            <CalendarTodayOutlinedIcon
                                sx={{
                                    verticalAlign: 'middle',
                                    fontSize: '1rem',
                                    mt: -.25,
                                    mr: 1
                                }}
                            />
                            {item.date}
                        </Typography>
                    </Div>
                    <Div sx={{display: {xs: 'none', lg: 'block'}, width: '20%', flexShrink: 0, px: 2}}>
                        <LinearProgress
                            variant={"determinate"}
                            color={item?.status?.linear_color}
                            value={item.progress}
                            sx={{
                                height: 6,
                                borderRadius: 2,
                                backgroundColor: '#E9EEEF'
                            }}
                        />
                    </Div>
                    <Div sx={{display: {xs: 'none', lg: 'block'}, width: '16%', flexShrink: 0, px: 1}}>
                        <Typography
                            fontSize={"12px"}
                            variant={"h6"}
                            color={"text.secondary"}
                            mb={.25}
                        >
                            Deadline
                        </Typography>
                        <Typography variant={"body1"}>{item.deadline}</Typography>
                    </Div>
                    <Div sx={{ flex: {xs: '0 1 auto', lg: 1}, flexShrink: 0, px: 1}}>
                        <Typography
                            fontSize={"12px"}
                            variant={"h6"}
                            color={"text.secondary"}
                            mb={.25}
                            sx={{
                                display: {xs: 'none', lg: 'block'}
                            }}
                        >
                            Status
                        </Typography>
                        <Chip color={item?.status?.chip_color} size={"small"} label={item.status.label}/>
                    </Div>
                    <AvatarGroup max={3} sx={{display: {xs: 'none', lg: 'flex'}}}>
                        {
                            item.team.map((teamMember, index) => (
                                <Avatar key={index} alt={teamMember.name} src={teamMember.profilePic}/>
                            ))
                        }
                    </AvatarGroup>
                </AccordionSummary>
                <AccordionDetails sx={{borderTop: 1, borderColor: 'divider', p: theme => theme.spacing(2, 2, 2, 8.25)}}>
                    <Typography variant={"h5"}>Description</Typography>
                    <Div
                        sx={{
                            display: {xs: 'flex', lg: 'none'},
                            minWidth: 0,
                            flexDirection: 'column'
                        }}
                    >
                        <Div
                            sx={{
                                display: 'flex',
                                minWidth: 0,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mt: 1,
                                mb: 2,
                            }}
                        >
                            <Div>
                                <Typography
                                    fontSize={"12px"}
                                    variant={"h6"}
                                    color={"text.secondary"}
                                    mb={.25}
                                >
                                    Deadline
                                </Typography>
                                <Typography variant={"body1"}>{item.deadline}</Typography>
                            </Div>

                            <AvatarGroup max={3}>
                                {
                                    item.team.map((teamMember, index) => (
                                        <Avatar key={index} alt={teamMember.name} src={teamMember.profilePic}/>
                                    ))
                                }
                            </AvatarGroup>

                        </Div>
                        <Div sx={{mb: 3, maxWidth: 280}}>
                            <Typography
                                fontSize={"12px"}
                                variant={"h6"}
                                color={"text.secondary"}
                                mb={1}
                            >
                                Progress
                            </Typography>
                            <LinearProgress
                                variant={"determinate"}
                                color={item?.status?.linear_color}
                                value={item.progress}
                                sx={{
                                    height: 6,
                                    borderRadius: 2,
                                    backgroundColor: '#E9EEEF'
                                }}
                            />
                        </Div>
                    </Div>
                    <Typography variant={"body1"} color={"text.secondary"}>
                        {item.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Card>
    );
};
/* Todo item prop define */
export default ProjectItem;
