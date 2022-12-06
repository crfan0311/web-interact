import React from 'react';
import {ListItemIcon, ListItemText, Typography} from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import {generalInfo} from "../data";

const GeneralInfo = () => {
    return (
        <React.Fragment>
            <Typography variant={"h5"}>You Have</Typography>
            <List>
                {
                    generalInfo.map((item, index) => (
                        <ListItemButton
                            key={index}
                            sx={{
                                px: 0,
                                py: .25,

                                '&:hover': {
                                    backgroundColor: 'transparent'
                                }
                            }}
                        >
                            <ListItemIcon sx={{minWidth: 32}}>{item.icon}</ListItemIcon>
                            <ListItemText primary={<Typography>{item.title}</Typography>}/>
                        </ListItemButton>
                    ))
                }
            </List>
        </React.Fragment>
    );
};

export default GeneralInfo;
