import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LayersIcon from '@mui/icons-material/Layers';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import MovieIcon from '@mui/icons-material/Movie';
import ExtensionIcon from '@mui/icons-material/Extension';
import FacebookIcon from "@mui/icons-material/Facebook";
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import {ASSET_AVATARS} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

export const userDetails = [
    {
        labelId: 1,
        email: "johnsmith@example.com",
        profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`),
        date: "Nov 27, 2021",
        label: "Agent"
    },
    {
        labelId: 1,
        email: "marry@example.com",
        profilePic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`),
        date: "Dec 28, 2021",
        label: "Agent"
    },
    {
        labelId: 1,
        email: "jonny-jo@gmail.com",
        profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`),
        date: "Dec 31, 2021",
        label: "Agent"
    },
    {
        labelId: 1,
        email: "johnny@example.com",
        profilePic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`),
        date: "Feb 04, 2022",
        label: "Agent"
    }
];

export const items = [
    {
        id: 1,
        label: "Label",
        icon: <LocalOfferIcon/>,
        color: "primary"
    },
    {
        id: 2,
        label: "Layer",
        icon: <LayersIcon/>,
        color: "info"
    },
    {
        id: 3,
        label: "Lamp",
        icon: <WbIncandescentIcon/>,
        color: "secondary"
    },
    {
        id: 4,
        label: "Movie",
        icon: <MovieIcon/>,
        color: "warning"
    },
    {
        id: 5,
        label: "Puzzle",
        icon: <ExtensionIcon/>,
        color: "error"
    }
]

export const pinnedData = [
    {
        id: 101,
        label: "Components",
        items: [
            {
                id: 1,
                label: "Label",
                icon: <LocalOfferIcon/>,
                color: "primary"
            },
            {
                id: 2,
                label: "Layer",
                icon: <LayersIcon/>,
                color: "info"
            },
            {
                id: 3,
                label: "Lamp",
                icon: <WbIncandescentIcon/>,
                color: "secondary"
            },
        ]
    },
    {
        id: 102,
        label: "Movie",
        items: [
            {
                id: 4,
                label: "Movie",
                icon: <MovieIcon/>,
                color: "warning"
            },
            {
                id: 5,
                label: "Puzzle",
                icon: <ExtensionIcon/>,
                color: "error"
            }
        ]
    },
    {
        id: 103,
        label: "Social",
        items: [
            {
                id: 6,
                label: "Facebook",
                icon: <FacebookIcon/>,
                color: "primary"
            },
            {
                id: 7,
                label: "Google Earth",
                icon: <PublicIcon/>,
                color: "error"
            },
            {
                id: 8,
                label: "Twitter",
                icon: <TwitterIcon/>,
                color: "primary"
            }
        ]
    },
];
