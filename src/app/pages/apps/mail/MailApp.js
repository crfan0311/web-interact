import React from 'react';
import MailAppProvider from "./MailAppProvider";
import JumboContentLayout from "@jumbo/components/JumboContentLayout";
import PageHeader from "../../../layouts/shared/headers/PageHeader/PageHeader";
import MailAppSidebar from "./components/MailAppSidebar";
import MailsList from "./components/MailsList";
import {useParams} from "react-router-dom";
import MailDetail from "./components/MailDetail";
import {useJumboTheme} from "@jumbo/hooks";
import {useMediaQuery} from "@mui/material";
import MailFab from "./components/MailFab";
import FolderDropdown from "./components/FolderDropdown";
import FilterDropdown from "./components/FilterDropdown";
import Stack from "@mui/material/Stack";
import LabelDropdown from "./components/LabelDropdown";

const MailApp = () => {
    const {theme} = useJumboTheme();
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    const layoutOptions = React.useMemo(() => ({
        sidebar: {
            sx: {
                [theme.breakpoints.up('lg')]: {
                    position: 'sticky',
                    zIndex: 5,
                    top: 96,
                    minHeight: 'auto',
                },
                [theme.breakpoints.down('lg')]: {
                    display: 'none',
                },
            }
        },
        wrapper: {
            sx: {
                alignItems: 'flex-start',
            }
        }
    }), [theme]);

    const {messageID} = useParams();
    return (
        <MailAppProvider>
            <JumboContentLayout
                sidebar={<MailAppSidebar/>}
                header={
                    <PageHeader
                        title={"Mail App"}
                        subheader={"A ready to integrate ui to build a mails module."}/>
                }
                layoutOptions={layoutOptions}
            >
                {
                    lg && (
                        <Stack spacing={2} direction={"row"} sx={{mb: 3, mt: -2}}>
                            <FolderDropdown/>
                            <FilterDropdown/>
                            <LabelDropdown/>
                            <MailFab/>
                        </Stack>
                    )
                }
                {
                    messageID ? <MailDetail mailID={messageID}/> : <MailsList/>
                }
            </JumboContentLayout>
        </MailAppProvider>
    );
};
export default MailApp;
