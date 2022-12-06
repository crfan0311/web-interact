import React from 'react';
import JumboRqList from "@jumbo/components/JumboReactQuery/JumboRqList";
import {mailServices} from "../../../../../services/mail-services";
import MailItem from "./MailItem";
import {Card} from "@mui/material";
import JumboListToolbar from "@jumbo/components/JumboList/components/JumboListToolbar";
import {useParams} from "react-router-dom";
import JumboSearch from "@jumbo/components/JumboSearch";
import useMailsApp from "../../hooks/useMailsApp";
import BulkActions from "./BulkActions";

const MailsList = () => {
    const params = useParams();
    const listRef = React.useRef();
    const {refreshMailsList, setMailsListRefresh, setSelectedMails} = useMailsApp();

    const renderMailItem = React.useCallback((mailItem) => {
        return <MailItem mailItem={mailItem}/>
    });
    const [queryOptions, setQueryOptions] = React.useState({
        queryKey: "mails-list",
        queryParams: {category: params.category, id: params.id},
        countKey: "count",
        dataKey: "mailsList"
    });

    const handleOnChange = React.useCallback((keywords) => {
        setQueryOptions(state => ({
            ...state,
            queryParams: {
                ...state.queryParams
            }
        }))
    }, []);

    React.useEffect(() => {
        if (listRef?.current && refreshMailsList) {
            listRef.current.refresh();
            setMailsListRefresh(false);
        }
    }, [refreshMailsList])

    React.useEffect(() => {
        setQueryOptions(state => ({
            ...state,
            queryParams: {category: params.category, id: params.id},
        }))
    }, [params]);

    return (
        <JumboRqList
            ref={listRef}
            wrapperComponent={Card}
            queryOptions={queryOptions}
            primaryKey={"id"}
            service={mailServices.getMails}
            renderItem={renderMailItem}
            itemsPerPage={8}
            itemsPerPageOptions={[8, 12, 15]}
            componentElement={'div'}
            wrapperSx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
            }}
            toolbar={
                <JumboListToolbar
                    hideItemsPerPage={true}
                    bulkActions={<BulkActions/>}
                >
                    <JumboSearch
                        onChange={handleOnChange}
                        sx={{
                            display: {xs: 'none', md: 'block'}
                        }}
                    />
                </JumboListToolbar>
            }
            onSelectionChange={setSelectedMails}
        />
    );
};

export default MailsList;
