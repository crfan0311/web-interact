import React from 'react';
import ListSubheader from "@mui/material/ListSubheader";
import JumboNavIdentifier from "@jumbo/components/JumboVerticalNavbar/JumboNavIdentifier";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import {SIDEBAR_VIEWS} from "@jumbo/utils/constants/layout";
import {useTranslation} from "react-i18next";

const JumboNavSection = ({item, translate}) => {
    const {sidebarOptions} = useJumboLayoutSidebar();
    const {t} = useTranslation();

    const isMiniAndClosed = React.useMemo(() => {
        return sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions?.open;
    }, [sidebarOptions.view, sidebarOptions.open]);

    const label = React.useMemo(() => {
        return translate ? t(item.label) : item.label;
    }, [item, translate, t]);

    if (!item || !item.label) return null;

    const subMenus = (item && item.children && item.children.length > 0) ? item.children : null;

    return (
        <>
            {
                !isMiniAndClosed &&
                <ListSubheader
                    component="li"
                    disableSticky
                    sx={{
                        fontSize: '80%',
                        fontWeight: '400',
                        lineHeight: 'normal',
                        textTransform: 'uppercase',
                        bgcolor: 'transparent',
                        p: theme => theme.spacing(3.75, 3.75, 1.875)
                    }}
                >
                    {label}
                </ListSubheader>
            }
            {
                subMenus &&
                subMenus.map((child, index) => {
                    return (<JumboNavIdentifier item={child} key={index}/>)
                })
            }
        </>
    )
};

//todo: put an equal deep check for the props
export default React.memo(JumboNavSection);
