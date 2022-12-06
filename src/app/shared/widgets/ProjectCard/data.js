import LockOpenIcon from "@mui/icons-material/LockOpen";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import {Dashboard} from "@mui/icons-material";
import React from "react";
import {ASSET_AVATARS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const projectMenu = [
    {
        icon: <LockOpenIcon size={20}/>,
        title: "Manage Access"
    },
    {
        icon: <SettingsApplicationsSharpIcon size={20}/>,
        title: "Setting"
    },
    {
        icon: <Dashboard size={20}/>,
        title: "Dashboard"
    }
];
const fakeUsers = [
    {
        id: 1,
        firstName: "Joy",
        lastName: "Parrish",
        displayName: "P. Joy",
        profilePic: getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`,"40x40")
    },
    {
        id: 2,
        firstName: "Rob",
        lastName: "Williamson",
        displayName: "W. Rob",
        profilePic: getAssetPath(`${ASSET_AVATARS}/avatar12.jpg`,"40x40")
    },
    {
        id: 3,
        firstName: "Ram",
        lastName: "Malhotra",
        displayName: "M. Ram",
        profilePic: getAssetPath(`${ASSET_AVATARS}/jonathan.jpg`,"40x40")
    },
    {
        id: 4,
        firstName: "Chelsea",
        lastName: "Brown",
        displayName: "B. Chelsea",
        profilePic: getAssetPath(`${ASSET_AVATARS}/jeson-born.jpg`,"40x40")
    },
    {
        id: 5,
        firstName: "Nicolas",
        lastName: "Cage",
        displayName: "C. Nicolas",
        profilePic: getAssetPath(`${ASSET_AVATARS}/martin-j.jpg`,"40x40")
    },
    {
        id: 6,
        firstName: "Amily",
        lastName: "Jackson",
        displayName: "B. Bob",
        profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`,"40x40")
    },
    {
        id: 7,
        firstName: "Ken",
        lastName: "Ramirez",
        displayName: "R. Ken",
        profilePic: getAssetPath(`${ASSET_AVATARS}/ron-doe.jpg`,"40x40")
    },
    {
        id: 8,
        firstName: "Domenic",
        lastName: "Harris",
        displayName: "H. Domenic",
        profilePic: getAssetPath(`${ASSET_AVATARS}/jimmy-jo.jpg`,"40x40")
    },
    {
        id: 9,
        firstName: "Shawn",
        lastName: "Michael",
        displayName: "M. Shawn",
        profilePic: getAssetPath(`${ASSET_AVATARS}/domnic-brown.jpg`,"40x40")
    },
    {
        id: 10,
        firstName: "Ron",
        lastName: "Brown",
        displayName: "B. Ron",
        profilePic: getAssetPath(`${ASSET_AVATARS}/ron-doe.jpg`,"40x40")
    },
    {
        id: 11,
        firstName: "Nicol",
        lastName: "Shorter",
        displayName: "S. Nicol",
        profilePic: getAssetPath(`${ASSET_AVATARS}/avatar13.jpg`,"40x40")
    },
    {
        id: 12,
        firstName: "Dinesh",
        lastName: "Kamat",
        displayName: "K. Dinesh",
        profilePic: getAssetPath(`${ASSET_AVATARS}/john-smith.jpg`,"40x40")
    },
    {
        id: 13,
        firstName: "Vikram",
        lastName: "Kumar",
        displayName: "K. Vikram",
        profilePic: getAssetPath(`${ASSET_AVATARS}/steve-smith.jpg`,"40x40")
    },
    {
        id: 14,
        firstName: "Stuart",
        lastName: "Parrish",
        displayName: "P. Stuart",
        profilePic: getAssetPath(`${ASSET_AVATARS}/ken-ramirez.jpg`,"40x40")
    }
];

export const projectUsers = [fakeUsers[0], fakeUsers[1], fakeUsers[2], fakeUsers[3], fakeUsers[4], fakeUsers[5]];
