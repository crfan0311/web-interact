import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemAvatar,
    Card,
    CardHeader,
    CardContent,
    Checkbox,
    Divider,
    Tooltip,
    Typography,
    Avatar,
    Stack,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import IconButton from "@mui/material/IconButton";
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import styled from "@emotion/styled";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";
import Span from "@jumbo/shared/Span";
import Div from "@jumbo/shared/Div";
import {contactService} from "../../../../../services/contact-services";
import JumboListItem from "@jumbo/components/JumboList/components/JumboListItem";
import JumboChipsGroup from "@jumbo/components/JumboChipsGroup";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import ContactForm from "../ContactForm";
import useContactsApp from "../../hooks/useContactsApp";
import {useMutation} from "react-query";
import ContactDetail from "../ContactDetail";
import JumboGridItem from "@jumbo/components/JumboList/components/JumboGridItem";

const Item = styled(Span)(({theme}) => ({
    minWidth: 0,
    flexGrow: 0,
    padding: theme.spacing(0, 1),
}));

const ContactItem = ({contact, view}) => {
    const {showDialog, hideDialog} = useJumboDialog();
    const {setContactsListRefresh} = useContactsApp();
    const [favorite, setFavorite] = React.useState(contact?.starred);
    const deleteContactMutation = useMutation(contactService.delete, {
        onSuccess: () => {
            hideDialogAndRefreshContactsList();
        }
    });

    const hideDialogAndRefreshContactsList = React.useCallback(() => {
        hideDialog();
        setContactsListRefresh(true);
    }, [hideDialog, setContactsListRefresh]);


    const showContactDetail = React.useCallback(() => {
        showDialog({
            content: <ContactDetail contact={contact} onClose={hideDialog}/>
        })
    }, [showDialog, contact]);


    const handleItemAction = (menuItem) => {
        switch (menuItem.action) {
            case 'edit':
                showDialog({
                    title: 'Update contact detail',
                    content: <ContactForm contact={contact} onSave={hideDialogAndRefreshContactsList}/>
                });
                break;
            case 'delete':
                showDialog({
                    variant: 'confirm',
                    title: 'Are you sure about deleting this contact?',
                    content: "You won't be able to recover this contact later",
                    onYes: () => deleteContactMutation.mutate(contact),
                    onNo: hideDialog
                })
        }
    };

    if (view === "grid") {
        return (
            <JumboGridItem xs={12} lg={6}>
                <Card variant="outlined" elevation={0}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{width: 48, height: 48}} alt={contact.name} src={contact.profile_pic}/>
                        }
                        action={
                            <React.Fragment>
                                <StarIcon sx={{color: 'warning.main', verticalAlign: 'middle', mr: 1}}/>
                                <IconButton>
                                    <MoreHorizIcon/>
                                </IconButton>
                            </React.Fragment>
                        }
                        title={
                            <Typography
                                variant={"h6"}
                                color={"text.primary"}
                                mb={.25}
                            >
                                {contact.name}
                            </Typography>}
                        subheader={
                            <Typography
                                variant={"body1"}
                                color={"text.secondary"}
                            >
                                {contact.designation}
                            </Typography>}
                    />
                    <CardContent sx={{pt: 0}}>
                        <Divider sx={{mb: 2}}/>
                        <List disablePadding>
                            <ListItem sx={{p: theme => theme.spacing(.75, 1.5)}}>
                                <ListItemIcon sx={{minWidth: 50}}>
                                    <BusinessIcon/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={contact.company}
                                />
                            </ListItem>
                            <ListItem sx={{px: 1.5}}>
                                <ListItemIcon sx={{minWidth: 50}}>
                                    <AlternateEmailIcon/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={contact.email}
                                />
                            </ListItem>
                            <ListItem sx={{px: 1.5}}>
                                <ListItemIcon sx={{minWidth: 50}}>
                                    <PhoneIcon/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={contact.phone}
                                />
                            </ListItem>
                        </List>
                        <Divider sx={{my: 2}}/>
                        <Div
                            sx={{
                                display: 'flex',
                                minWidth: 0,
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Checkbox sx={{my: -.5}}/>
                            {
                                contact.labels.length == 0 ? null : (
                                    <JumboChipsGroup
                                        chips={contact.labels}
                                        mapKeys={{label: "name"}}
                                        spacing={1}
                                        size={"small"}
                                        max={3}
                                    />
                                )
                            }
                        </Div>
                    </CardContent>
                </Card>
            </JumboGridItem>
        )
    }
    return (
        <React.Fragment>
            <JumboListItem
                componentElement={"div"}
                itemData={contact}
                secondaryAction={
                    <JumboDdMenu
                        icon={<MoreHorizIcon/>}
                        menuItems={[
                            {icon: <EditIcon/>, title: "Edit", action: "edit"},
                            {icon: <DeleteIcon/>, title: "Delete", action: "delete"}
                        ]}
                        onClickCallback={handleItemAction}
                    />
                }
                sx={{
                    cursor: 'pointer',
                    borderTop: 1,
                    borderColor: 'divider',
                    '&:hover': {
                        bgcolor: 'action.hover',
                    }
                }}
            >
                <ListItemIcon sx={{minWidth: 40}}>
                    {
                        favorite ?
                            (
                                <Tooltip title={"Starred"}>
                                    <StarIcon
                                        fontSize={"small"}
                                        sx={{color: 'warning.main'}}
                                        onClick={() => setFavorite(!favorite)}
                                    />
                                </Tooltip>
                            ) : (
                                <Tooltip title={"Not starred"}>
                                    <StarBorderIcon
                                        fontSize={"small"}
                                        sx={{color: 'text.secondary'}}
                                        onClick={() => setFavorite(!favorite)}
                                    />
                                </Tooltip>
                            )
                    }
                </ListItemIcon>
                <ListItemAvatar onClick={showContactDetail}>
                    <Avatar alt={contact.name} src={contact.profile_pic}/>
                </ListItemAvatar>
                <ListItemText
                    onClick={showContactDetail}
                    primary={
                        <Typography variant={"body1"} component={"div"}>
                            <Stack direction={"row"} alignItems={"center"} sx={{minWidth: 0}}>
                                <Item
                                    sx={{
                                        flexBasis: {xs: '100%', sm: '50%', md: '25%'}
                                    }}
                                >
                                    <Typography variant={"h5"} fontSize={14} lineHeight={1.25} mb={0}
                                                noWrap>{contact.name}</Typography>
                                    <Typography
                                        variant={"body1"}
                                        noWrap
                                        color={'text.secondary'}
                                        sx={{
                                            display: {sm: 'none'}
                                        }}
                                    >
                                        {contact.email}
                                    </Typography>
                                </Item>
                                <Item
                                    sx={{
                                        flexBasis: {sm: '50%', md: '28%'},
                                        display: {xs: 'none', sm: 'block'}
                                    }}
                                >
                                    <Typography variant={"body1"} noWrap>{contact.email}</Typography>
                                </Item>
                                <Item
                                    sx={{
                                        flexBasis: {md: '25%'},
                                        display: {xs: 'none', md: 'block'}
                                    }}
                                >
                                    <Typography variant={"body1"} noWrap>{contact.phone}</Typography>
                                </Item>
                                <Item
                                    sx={{
                                        flexBasis: {md: '22%'},
                                        display: {xs: 'none', md: 'block'}
                                    }}
                                >
                                    <JumboChipsGroup
                                        chips={contact.labels}
                                        mapKeys={{label: "name"}}
                                        spacing={1}
                                        size={"small"}
                                        max={1}
                                    />
                                </Item>
                            </Stack>
                        </Typography>
                    }
                />
            </JumboListItem>
        </React.Fragment>
    );
};
/* Todo contact, view prop define */
export default ContactItem;
