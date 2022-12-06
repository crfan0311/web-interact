import React, {useState} from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import NewRequestsList from "./NewRequestsList";
import IconButton from "@mui/material/IconButton";
import {requests} from "./data";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const NewRequests = () => {
    const {t} = useTranslation();
    const [refreshRequests, setRefreshRequests] = useState(false);

    return (
        <JumboCardQuick
            title={t('widgets.title.newRequests')}
            subheader={t('widgets.subheader.newRequests')}
            action={
                <IconButton onClick={() => setRefreshRequests(true)}>
                    <AutorenewIcon/>
                </IconButton>
            }
            wrapperSx={{p: 0}}
        >
            <NewRequestsList refresh={refreshRequests} requests={requests} onRefreshCallback={setRefreshRequests}/>
        </JumboCardQuick>
    );
};

export default NewRequests;
