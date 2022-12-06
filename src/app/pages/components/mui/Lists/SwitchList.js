import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import {ListItem, ListItemIcon, ListItemText, Switch} from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import MicIcon from "@mui/icons-material/Mic";
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import code from "../Lists/demo-code/switched-list.txt";

const SwitchList = () => {
    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <JumboDemoCard title={"Switch List"} demoCode={code}>
            <List
                sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                subheader={<ListSubheader>Settings</ListSubheader>}
            >
                <ListItem>
                    <ListItemIcon>
                        <WifiIcon/>
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Wi-Fi"/>
                    <Switch
                        edge="end"
                        onChange={handleToggle('wifi')}
                        checked={checked.indexOf('wifi') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-wifi',
                        }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <BluetoothIcon/>
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth"/>
                    <Switch
                        edge="end"
                        onChange={handleToggle('bluetooth')}
                        checked={checked.indexOf('bluetooth') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-bluetooth',
                        }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <MicIcon/>
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-mic" primary="Mic"/>
                    <Switch
                        edge="end"
                        onChange={handleToggle('mic')}
                        checked={checked.indexOf('mic') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-mic',
                        }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <SettingsRemoteIcon/>
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-remote-control" primary="Remote Control"/>
                    <Switch
                        edge="end"
                        onChange={handleToggle('remote-control')}
                        checked={checked.indexOf('remote-control') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-remote-control',
                        }}
                    />
                </ListItem>
            </List>
        </JumboDemoCard>
    );
};

export default SwitchList;
