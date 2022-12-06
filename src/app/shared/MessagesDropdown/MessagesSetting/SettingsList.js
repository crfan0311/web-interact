import React, {useState} from 'react';
import List from "@mui/material/List";
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import SettingItem from "./SettingItem";
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Divider from "@mui/material/Divider";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const SettingsList = () => {
    const [selectedSettings, setSelectedSettings] = useState(["sound"]);

    const handleToggle = (value) => {
        const newSettings = [...selectedSettings];
        const currentIndex = newSettings.indexOf(value);
        if (currentIndex === -1) {
            newSettings.push(value);
        } else {
            newSettings.splice(currentIndex, 1)
        }
        setSelectedSettings(newSettings);
    };

    return (
        <List disablePadding sx={{pb: 1}}>
            <SettingItem
                icon={<VolumeUpOutlinedIcon/>}
                title={"Message sound"}
                onChangeCallback={handleToggle}
                value={'sound'}
                isChecked={selectedSettings.indexOf('sound') !== -1}
            />
            <SettingItem
                icon={<NotificationImportantOutlinedIcon/>}
                title={"Popup new messages"}
                subheader={"Auto open new messages"}
                onChangeCallback={handleToggle}
                value={'allow-popup'}
                isChecked={selectedSettings.indexOf('allow-popup') !== -1}
            />
            <SettingItem
                icon={<PersonOutlinedIcon/>}
                title={"Turn-off active status"}
                onChangeCallback={handleToggle}
                value={'show-active-status'}
                isChecked={selectedSettings.indexOf('show-active-status') !== -1}
            />
            <Divider component={"li"} sx={{my: 1.5}}/>
            <SettingItem
                icon={<ChatBubbleOutlineOutlinedIcon />}
                title={"Message requests"}
            />
            <SettingItem
                icon={<SendOutlinedIcon/>}
                title={"Message delivery setting"}
            />
        </List>
    );
};

export default SettingsList;
