import React from "react";
import JumboContentLayout from "@jumbo/components/JumboContentLayout";
import ContactsAppSidebar from "./components/ContactsAppSidebar";
import ContactsList from "./components/ContactsList";
import ContactsAppProvider from "./ContactsAppProvider";
import PageHeader from "../../../layouts/shared/headers/PageHeader/PageHeader";
import { useJumboTheme } from "@jumbo/hooks";
import { Stack, useMediaQuery } from "@mui/material";
import ContactFab from "./components/ContactFab";
import FolderDropdown from "./components/FolderDropdown";
import LabelDropdown from "./components/LabelDropdown";

const ContactsApp = () => {
  const { theme } = useJumboTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const layoutOptions = React.useMemo(
    () => ({
      sidebar: {
        sx: {
          [theme.breakpoints.up("lg")]: {
            position: "sticky",
            zIndex: 5,
            top: 96,
            minHeight: "auto",
          },
          [theme.breakpoints.down("lg")]: {
            display: "none",
          },
        },
      },
      wrapper: {
        sx: {
          alignItems: "flex-start",
          px: 10,
        },
      },
    }),
    [theme]
  );
  return (
    <ContactsAppProvider>
      <JumboContentLayout
        sidebar={<ContactsAppSidebar />}
        header={
          <PageHeader
            title={"Contacts"}
            subheader={"A ready to integrate ui to build a contacts module."}
          />
        }
        layoutOptions={layoutOptions}
      >
        {lg && (
          <Stack spacing={2} direction={"row"} sx={{ mb: 3, mt: -2 }}>
            <FolderDropdown />
            <LabelDropdown />
            <ContactFab />
          </Stack>
        )}
        <ContactsList />
      </JumboContentLayout>
    </ContactsAppProvider>
  );
};
export default ContactsApp;
