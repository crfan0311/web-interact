import React from 'react';
import {Collapse, ListItemAvatar, ListItemIcon, ListItemText, Tooltip, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Span from "@jumbo/shared/Span";
import MailDetail from "../MailDetail";
import JumboListItem from "@jumbo/components/JumboList/components/JumboListItem";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import JumboChipsGroup from "@jumbo/components/JumboChipsGroup";
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplyIcon from '@mui/icons-material/Reply';
import {Archive} from "@mui/icons-material";
import {mailServices} from "../../../../../services/mail-services";
import {useMutation} from "react-query";
import Div from "@jumbo/shared/Div";
import moment from 'moment';
import useMailsApp from "../../hooks/useMailsApp";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import ComposeForm from "../ComposeForm";
import {useJumboTheme} from "@jumbo/hooks";

const MailItem = ({mailItem}) => {
    const {theme} = useJumboTheme();
    const {setMailsListRefresh} = useMailsApp();
    const {hideDialog, showDialog} = useJumboDialog();
    const navigate = useNavigate();
    const [favoriteMail, setFavoriteMail] = React.useState(mailItem.favorite);
    const [showMessage, setShowMessage] = React.useState(false);

    const handleConversationClick = () => {
        setShowMessage(!showMessage);
        navigate(`message/${mailItem.id}`);
    };
    const deleteMailMutation = useMutation(mailServices.deleteMail);

    const mailMoveToTrash = React.useCallback((mailID) => {
        deleteMailMutation.mutate(mailID);
        setMailsListRefresh(true);
    }, [setMailsListRefresh]);

    const moveArchiveMailMutation = useMutation(mailServices.removeArchivedMail);

    const mailMoveToArchived = React.useCallback((mailID) => {
        moveArchiveMailMutation.mutate(mailID);
        setMailsListRefresh(true);
    }, [setMailsListRefresh]);

    const moveFavoriteMailMutation = useMutation(mailServices.removeFavoriteMail);

    const handleRemoveFavoriteMail = React.useCallback((mailID) => {
        moveFavoriteMailMutation.mutate(mailID);
        setMailsListRefresh(true);
    }, [setMailsListRefresh]);

    const handleUpdatedMail = React.useCallback(() => {
        hideDialog();
        setMailsListRefresh(true);
    }, [hideDialog]);

    const handleComposeForm = (mailItem) => {
        showDialog({
            title: "Compose Message",
            content: <ComposeForm mailItem={mailItem} onSave={handleUpdatedMail}/>
        })
    };
    return (
        <React.Fragment>
            {
                showMessage && (
                    <Collapse in={showMessage}>
                        <MailDetail/>
                    </Collapse>
                )
            }
            {
                <React.Fragment>
                    <JumboListItem
                        componentElement={"div"}
                        itemData={mailItem}
                        sx={{
                            cursor: 'pointer',
                            borderTop: 1,
                            borderTopColor: 'divider',

                            '&:hover': {
                                bgcolor: 'action.hover',

                                '& .ListAction': {
                                    width: {sm: '100%'},
                                    opacity: {sm: 1}
                                },

                                '& .ListTextExtra': {
                                    visibility: {sm: 'hidden'},
                                    opacity: {sm: 0},
                                }
                            },

                            '& .MuiListItemIcon-root': {
                                 minWidth: 48
                            },

                            [theme.breakpoints.down('sm')]: {
                                flexWrap: 'wrap'
                            }
                        }}
                    >
                        <ListItemIcon sx={{ display: { xs: 'none', md: 'block' }}}>
                            <IconButton onClick={() => handleRemoveFavoriteMail(mailItem?.id)}>
                                {
                                    favoriteMail ? (
                                        <Tooltip title={"Starred"}>
                                            <StarIcon
                                                fontSize={"small"}
                                                sx={{color: 'warning.main'}}
                                                onClick={() => setFavoriteMail(!favoriteMail)}
                                            />
                                        </Tooltip>
                                    ) : (
                                        <Tooltip title={"Not starred"}>
                                            <StarBorderIcon
                                                fontSize={"small"}
                                                sx={{color: 'text.secondary'}}
                                                onClick={() => setFavoriteMail(!favoriteMail)}
                                            />
                                        </Tooltip>
                                    )
                                }
                            </IconButton>
                        </ListItemIcon>
                        <ListItemAvatar onClick={handleConversationClick} sx={{ display: { xs: 'none', md: 'block' }}}>
                            <Avatar alt={mailItem?.from?.name} src={mailItem?.from?.profile_pic}/>
                        </ListItemAvatar>
                        <ListItemText
                            onClick={handleConversationClick}
                            primary={
                                <Typography variant={"body1"} component={"div"}>
                                    <Typography variant={"h6"}>{mailItem?.from?.name}</Typography>
                                    <Typography
                                        variant={"body1"}
                                        color={'text.secondary'}
                                        noWrap
                                    >
                                        {mailItem?.subject}
                                    </Typography>
                                </Typography>
                            }
                            sx={{flex: 1}}
                        />
                        <Div
                            sx={{
                                width: 160,
                                display: 'flex',
                                flexShrink: '0',
                                position: 'relative',
                                justifyContent: 'flex-end',

                                [theme.breakpoints.down('sm')]: {
                                    width: '100%',
                                    justifyContent: 'space-between'
                                }
                            }}
                        >
                            <Div
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    flex: 1,
                                    transition: 'all 0.5s ease',

                                    [theme.breakpoints.down('sm')]: {
                                        justifyContent: 'flex-start',
                                        ml: 6
                                    }
                                }}
                                className={'ListTextExtra'}
                            >
                                <JumboChipsGroup
                                    chips={mailItem?.labels}
                                    mapKeys={{label: "name"}}
                                    spacing={1}
                                    size={"small"}
                                    max={1}
                                />
                                <Typography
                                    variant={'body1'}
                                    color={'text.secondary'}
                                    ml={1}
                                >
                                    {moment(mailItem?.date).format("MMMM DD")}
                                </Typography>
                            </Div>
                            <Div
                                className='ListAction'
                                sx={{
                                    display: 'flex',

                                    [theme.breakpoints.up('sm')]: {
                                        position: 'absolute',
                                        top: '50%',
                                        width: 0,
                                        opacity: 0,
                                        overflow: 'hidden',
                                        transition: 'all 0.5s ease',
                                        justifyContent: 'flex-end',
                                        transform: 'translateY(-50%)',
                                    }
                                }}
                            >
                                <Span sx={{height: 36, overflow: 'hidden'}}>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() => mailMoveToTrash(mailItem?.id)}>
                                            <DeleteIcon fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title={"Archive"}>
                                        <IconButton onClick={() => mailMoveToArchived(mailItem?.id)}>
                                            <Archive fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title={"Forward"}>
                                        <IconButton onClick={() => handleComposeForm(mailItem)}>
                                            <ReplyIcon fontSize={"small"}/>
                                        </IconButton>
                                    </Tooltip>

                                </Span>
                            </Div>
                        </Div>

                    </JumboListItem>
                </React.Fragment>
            }
        </React.Fragment>
    );
};

export default MailItem;
