import React from "react";
import Stack from "@mui/material/Stack";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import AuthUserDropdown from "../../../../shared/widgets/AuthUserDropdown";
import NotificationsDropdown from "../../../../shared/NotificationsDropdown";
import MessagesDropdown from "../../../../shared/MessagesDropdown";
import SearchGlobal from "../../../../shared/SearchGlobal";
import { IconButton, Slide, useMediaQuery } from "@mui/material";
import Div from "@jumbo/shared/Div";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import JumboIconButton from "@jumbo/components/JumboIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { SIDEBAR_STYLES } from "@jumbo/utils/constants";
import { useJumboHeaderTheme } from "@jumbo/hooks";
import { Link,useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import {auth } from "@jumbo/services/auth/firebase/firebase";
import {useState,useEffect} from 'react'
import InteractFlashyButton from "@interact/Components/Button/InteractFlashyButton";
import InteractLogo from "@interact/Components/TopBar/tempLogo.png";
// import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { sidebarOptions, setSidebarOptions } = useJumboLayoutSidebar();
  const [dropdownSearchVisibility, setDropdownSearchVisibility] = React.useState(false);
  const { headerTheme } = useJumboHeaderTheme();
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  auth.onAuthStateChanged(user=>{
    setIsLoggedIn(!!user);
  });

  return (
    <React.Fragment>
      {(sidebarOptions.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER ||
        (sidebarOptions.style !== SIDEBAR_STYLES.CLIPPED_UNDER_HEADER &&
          !sidebarOptions?.open)) && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              ml:
                sidebarOptions.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER
                  ? -2
                  : 0,
              mr: 3,
            }}
            onClick={() => setSidebarOptions({ open: !sidebarOptions.open })}
          >
            {sidebarOptions?.open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        )}

      <Slide in={dropdownSearchVisibility}>
        <Div
          sx={{
            zIndex: 5,
            left: 0,
            right: 0,
            position: "absolute",
            height: "100%",
            width:"100%"
          }}
        >
          <SearchGlobal
            sx={{
              maxWidth: "none",
              height: "100%",
              display: "flex",
              width:"100%",

              "& .MuiInputBase-root": {
                flex: 1,
                borderRadius: 0,
                background: (theme) => theme.palette.background.default,
              },
              "& .MuiInputBase-input": {
                pr: 6,
              },
            }}
          />
        </Div>
      </Slide>
      <Link to="/"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <img src={InteractLogo} width={120} />
      </Link>

      <Stack
        direction="row"
        alignItems="center"
        spacing={1.25}
        sx={{ ml: "auto" }}
      >
        <JumboIconButton
          elevation={25}
          onClick={() => setDropdownSearchVisibility(true)}
        >
          <SearchIcon fontSize={"small"} />
        </JumboIconButton>

        {isLoggedIn &&
        <>
        <NotificationsDropdown />
        <AuthUserDropdown />
        </>}
        {!isLoggedIn &&
        <Link to="/a/signin" style={{textDecoration: 'none'}}>
          <Button
            sx={{
              ":hover": {
                 background:
                  "linear-gradient(180deg, #782FEE -8.69%, #DD00FF 109.93%)", // theme.palette.primary.main
                   color: "white",
                },
                background:
                "linear-gradient(90deg, #782FEE -8.69%, #DD00FF 109.93%)",
                  borderColor: "primary.main",
                  fontWeight: 500,
                  fontSize: 15.21,
                  textTransform: "none",
                  borderRadius: "3px 11px",
                  borderWidth: 1,
                  px: 3,
                  py: 0.69,
              }} 
              //disableElevation
              variant={"contained"}
              type="submit"
          > Sign in
          </Button> </Link>
        }
      </Stack>
    </React.Fragment>
  );
};
export default Header;