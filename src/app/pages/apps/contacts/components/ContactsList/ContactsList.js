import React from 'react';
import {useParams} from "react-router-dom";
import JumboRqList from "@jumbo/components/JumboReactQuery/JumboRqList";
import {contactService} from "../../../../../services/contact-services";
import ContactItem from "./ContactItem";
import JumboListToolbar from "@jumbo/components/JumboList/components/JumboListToolbar";
import BulkActions from "./BulkActions";
import {Card} from "@mui/material";
import JumboSearch from "@jumbo/components/JumboSearch";
import useContactsApp from "../../hooks/useContactsApp";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ListIcon from '@mui/icons-material/List';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

const ContactsList = () => {
    const params = useParams();
    const listRef = React.useRef();
    const {refreshContactsList, setContactsListRefresh, setSelectedContacts} = useContactsApp();
    const [view, setView] = React.useState("list");

    const [queryOptions, setQueryOptions] = React.useState({
        queryKey: "contacts",
        queryParams: {category: params.category, id: params.id},
        countKey: "count",
        dataKey: "contacts",
    });

    React.useEffect(() => {
        setQueryOptions(state => ({
            ...state,
            queryParams: {...state.queryParams, category: params.category, id: params.id}
        }))
    }, [params]);

    const renderContact = React.useCallback((contact) => {
        return (<ContactItem contact={contact} view={view}/>)
    }, [view]);

    React.useEffect(() => {
        if (refreshContactsList) {
            listRef.current.refresh();
            setContactsListRefresh(false);
        }
    }, [refreshContactsList]);

    const handleOnChange = React.useCallback((keywords) => {
        setQueryOptions(state => ({
            ...state,
            queryParams: {
                ...state.queryParams,
                keywords: keywords,
            }
        }))
    }, []);
    return (
        <JumboRqList
            ref={listRef}
            wrapperComponent={Card}
            service={contactService.getContacts}
            primaryKey={"id"}
            queryOptions={queryOptions}
            itemsPerPage={8}
            itemsPerPageOptions={[8, 15, 20]}
            renderItem={renderContact}
            componentElement={"div"}
            sx={view === 'grid' && {p: theme => theme.spacing(1, 3, 3)}}
            wrapperSx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
            }}
            toolbar={
                <JumboListToolbar
                    hideItemsPerPage={true}
                    bulkActions={
                        <BulkActions/>
                    }
                    actionTail={
                        <ButtonGroup
                            variant="outlined"
                            disableElevation
                            sx={{
                                '& .MuiButton-root': {
                                    px: 1,
                                }
                            }}
                        >
                            <Button variant={view === "list" ? "contained" : "outlined"}
                                    onClick={() => setView("list")}><ListIcon/></Button>
                            <Button variant={view === "grid" ? "contained" : "outlined"}
                                    onClick={() => setView("grid")}><ViewComfyIcon/></Button>
                        </ButtonGroup>
                    }
                >
                    <JumboSearch
                        onChange={handleOnChange}
                        sx={{
                            display: {xs: 'none', md: 'block'}
                        }}
                    />
                </JumboListToolbar>
            }
            onSelectionChange={setSelectedContacts}
            view={view}
        />
    );
};

export default ContactsList;
