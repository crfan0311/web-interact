import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import RecentTicketsList from "./RecentTicketsList";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {useTranslation} from "react-i18next";

const RecentTickets = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick title={t("widgets.title.recentTicket")} wrapperSx={{p: 0}}s>
            <JumboScrollbar
                autoHeight
                autoHeightMin={284}
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <RecentTicketsList/>
            </JumboScrollbar>
        </JumboCardQuick>
    );
};

export default RecentTickets;
