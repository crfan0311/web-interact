import React, {useEffect, useState} from "react";
import Avatar from "@mui/material/Avatar";
import {ListItemIcon, ListItemText, ThemeProvider, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import JumboDdPopover from "@jumbo/components/JumboDdPopover";
import Div from "@jumbo/shared/Div";
import { useJumboTheme } from "@jumbo/hooks";
import { auth, db, logout } from "@jumbo/services/auth/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, where, getDocs, onSnapshot, doc } from 'firebase/firestore'


const AuthUserDropdown = () => {
  // const mutation = useAuthSignOut(auth);
  const navigate = useNavigate();
  const { theme } = useJumboTheme();
  const [user, loading, error] = useAuthState(auth);
  const [completeUser, setCompleteUser] = useState({})

  const fetchCompleteUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const colledoc = await getDocs(q);
      const data = colledoc.docs[0].data();
      setCompleteUser(data);

      const unsub = onSnapshot(doc(db, "users", colledoc.docs[0].id), (doc) => {
        setCompleteUser(doc.data());
      });
      
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    fetchCompleteUser();
  }, [user]);


  const onLogout = () => {
    //mutation.mutate();
    logout();
    navigate("/u/");
  };

  return (
    <ThemeProvider theme={theme}>
      <JumboDdPopover
        triggerButton={
          <Avatar
            src={completeUser.photoURL}
            sizes={"small"}
            sx={{ boxShadow: 25, cursor: "pointer" }}
          />
        }
      >
        <Div
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            p: (theme) => theme.spacing(2.5),
          }}
        >
          <Avatar
            src={completeUser.photoURL}
            alt={completeUser.name}
            sx={{ width: 60, height: 60, mb: 2 }}
          />
          <Typography variant={"h5"}>{completeUser.name}</Typography>
          <Typography variant={"body1"} color="text.secondary">
            {completeUser.email}
          </Typography>
        </Div>
        <Divider />
        <nav>
          <List disablePadding sx={{ pb: 1 }}>
            <ListItemButton onClick={()=>navigate(`/u/`+completeUser.name)}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PersonOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" sx={{ my: 0 }} />
            </ListItemButton>
            {/* <ListItemButton>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText
                onClick={() => navigate("/a/settings")}
                primary="Settings"
                sx={{ my: 0 }}
              />
            </ListItemButton> */}
            <ListItemButton onClick={onLogout}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ my: 0 }} />
            </ListItemButton>
          </List>
        </nav>
      </JumboDdPopover>
    </ThemeProvider>
  );
};

export default AuthUserDropdown;
