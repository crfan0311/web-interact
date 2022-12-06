import React from 'react';
import moment from 'moment';
import {alpha, Avatar, Checkbox, ListItemIcon, ListItemText, Tooltip, Typography} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ListItemButton from "@mui/material/ListItemButton";
import Div from "@jumbo/shared/Div";

const TaskItem = ({item}) => {
    const [isCompleted, setIsCompleted] = React.useState(item.completed);
    return (
        <ListItemButton
            disableRipple
            sx={{
                transition: 'all 0.2s',

                '&:hover': {
                    boxShadow: `0 3px 10px 0 ${alpha('#000', 0.2)}`,
                    transform: 'translateY(-4px)',

                    '& .MuiTypography-description': {
                        color: 'text.primary',
                    }
                }
            }}
        >
            <ListItemIcon sx={{minWidth: 48}}>
                <Checkbox
                    color={'secondary'}
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                />
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography
                        className={'MuiTypography-description'}
                        variant={"body1"}
                        fontSize={15}
                        color={'text.secondary'}
                        sx={{mr: 2}}
                    >
                        {item.description}
                    </Typography>
                }
            />
            <Div
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    pr: 2,
                    whiteSpace: 'nowrap'
                }}
            >
                {
                    item?.tags.map((tag, index) => (
                        <Tooltip title={tag.name} key={index}>
                            <FiberManualRecordIcon fontSize='10px' color={tag.color}/>
                        </Tooltip>
                    ))
                }
                <Avatar alt={item.user.name} src={item.user.profilePic} sx={{ml: 2, width: '28px', height: '28px'}}/>
                <Typography variant={"body1"} ml={1.5}>{moment(item.dueDate).format("DD MMMM")}</Typography>
            </Div>
        </ListItemButton>
    );
};

export default TaskItem;
