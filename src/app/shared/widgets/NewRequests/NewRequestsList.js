import React from 'react';
import {List, Snackbar} from "@mui/material";
import NewRequestItem from "./NewRequestItem";
import {reducer} from "./reducer";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";

const init = (data) => {
    return [...data];
};

const NewRequestsList = ({requests, refresh, onRefreshCallback}) => {
    const [newRequests, dispatch] = React.useReducer(reducer, requests, init);
    const [showToast, setShowToast] = React.useState(false);
    const [toastMessage, setToastMessage] = React.useState("");

    React.useEffect(() => {
        if (refresh && typeof onRefreshCallback === "function") {
            dispatch({type: 'RELOAD', payload: requests});
            onRefreshCallback(false);
        }
    }, [refresh]);

    const onAction = (action, item) => {
        dispatch({type: action.value, payload: item});
        switch (action.value) {
            case 'ACCEPTED':
                setToastMessage("Request accepted");
                break;
            case 'DENIED':
                setToastMessage("Request denied");
                break;
            case 'IGNORED':
                setToastMessage("Request ignored");
                break;
            default:
        }
        setShowToast(true);
    };

    return (
        <JumboScrollbar autoHeight autoHeightMin={304} autoHide autoHideDuration={200} autoHideTimeout={500}>
            <Snackbar
                onClose={() => setShowToast(false)}
                open={showToast}
                message={toastMessage}
                autoHideDuration={1000}
            />
            <List disablePadding>
                {
                    newRequests.map((item, index) => (
                        <NewRequestItem item={item} key={index} onAction={onAction}/>
                    ))
                }
            </List>
        </JumboScrollbar>
    );
};
/* Todo prop define */
export default NewRequestsList;
