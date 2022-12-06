import React from 'react';
import {Typography} from "@mui/material";
import JumboRqList from "@jumbo/components/JumboReactQuery/JumboRqList";
import {contactService} from "../../../../../services/contact-services";
import LabelItem from "./LabelItem";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import StyledMenu from "../../../../../shared/StyledMenu";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import LabelForm from "../LabelForm";
import useContactsApp from "../../hooks/useContactsApp";

const LabelsList = () => {
    const rqListRef = React.useRef();
    const {showDialog, hideDialog} = useJumboDialog();
    const {refreshLabelsList, setLabelsListRefresh, setContactsListRefresh} = useContactsApp();

    React.useEffect(() => {
        if(rqListRef?.current && refreshLabelsList)
            rqListRef.current.refresh();

        if(refreshLabelsList)
            setLabelsListRefresh(false);
    }, [refreshLabelsList]);

    const refreshListAndCloseDialog = React.useCallback(() => {
        setLabelsListRefresh(true);
        setContactsListRefresh(true);
        hideDialog();
    }, []);

    const showAddLabelDialog = React.useCallback(() => {
        showDialog({
            title: "Add new label",
            content: <LabelForm onSave={refreshListAndCloseDialog} />,
        });
    }, []);

    const renderLabelItem = React.useCallback((label) => (
        <LabelItem label={label} onLabelSave={refreshListAndCloseDialog}/>
    ), []);

    return (
        <React.Fragment>
            <Typography
                variant={"h6"}
                color={"text.secondary"}
                sx={{
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '11px'
                }}
            >Labels</Typography>
            <JumboRqList
                service={contactService.getLabels}
                component={StyledMenu}
                componentElement={"div"}
                primaryKey={"id"}
                queryOptions={{
                    dataKey: "labels",
                    queryKey: "contact-labels-list"
                }}
                renderItem={renderLabelItem}
                sx={{
                    mb: 3
                }}
                ref={rqListRef}
            />
            <Button
                variant="outlined"
                color={"inherit"}
                startIcon={<AddIcon/>}
                sx={{
                    alignSelf: 'flex-start',
                    borderColor: 'transparent',
                    bgcolor: 'common.white',

                    '&:hover': {
                        borderColor: 'divider',
                        bgcolor: 'common.white'
                    },
                    '& .MuiSvgIcon-root': {
                        fontSize: '1.5rem'
                    }
                }}
                onClick={showAddLabelDialog}
            >Add Label</Button>
        </React.Fragment>
    );
};

export default LabelsList;
