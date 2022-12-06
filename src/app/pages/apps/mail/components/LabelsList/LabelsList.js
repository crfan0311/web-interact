import React from 'react';
import JumboRqList from "@jumbo/components/JumboReactQuery/JumboRqList";
import {mailServices} from "../../../../../services/mail-services";
import LabelItem from "./LabelItem";
import {Typography} from "@mui/material";
import StyledMenu from "../../../../../shared/StyledMenu";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import LabelForm from "../LabelForm";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import useMailsApp from "../../hooks/useMailsApp";

const LabelsList = () => {
    const rqListRef = React.useRef();
    const {showDialog, hideDialog} = useJumboDialog();
    const {refreshLabelsList, setLabelsListRefresh, setMailsListRefresh} = useMailsApp();

    React.useEffect(() => {
        if (rqListRef?.current && refreshLabelsList) {
            rqListRef.current.refresh();
        }
        if (refreshLabelsList)
            setLabelsListRefresh(false);
    }, [refreshLabelsList]);
    const refreshListAndCloseDialog = () => {
        setLabelsListRefresh(true);
        setMailsListRefresh(true);
        hideDialog();
    };
    const renderLabelItems = React.useCallback((label) => {
        return <LabelItem label={label} onLabelSave={refreshListAndCloseDialog}/>
    }, []);
    const showAddLabelDialog = React.useCallback(() => {
        showDialog({
            title: "Add New Label",
            content: <LabelForm onSave={refreshListAndCloseDialog}/>
        })
    }, []);
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
            >
                Label
            </Typography>
            <JumboRqList
                ref={rqListRef}
                component={StyledMenu}
                componentElement={"div"}
                service={mailServices.getLabels}
                queryOptions={{
                    queryKey: "mail-labels-list",
                    dataKey: "labels"
                }}
                primaryKey={"id"}
                renderItem={renderLabelItems}
                sx={{
                    mb: 3
                }}
            />
            <Button
                variant={"outlined"}
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
            >
                ADD LABEL
            </Button>
        </React.Fragment>

    );
};

export default LabelsList;
