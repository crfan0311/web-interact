import Span from "@jumbo/shared/Span";
import {getCustomDateTime} from "@jumbo/utils";
import {ASSET_AVATARS, ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const recentActivities = [
    {
        date: getCustomDateTime(0, 'days', 'MMM DD, YYYY'),
        data: [
            {
                id: 1,
                user: {
                    id: 12,
                    name: 'Alex Dolgove',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `44x44`),
                },
                mediaList: [
                    {
                        id: 123,
                        name: 'Media1',
                        mediaUrl: getAssetPath(`${ASSET_IMAGES}/properties/bedroom-1.jpeg`, `44x44`),
                    },
                    {
                        id: 124,
                        name: 'Media2',
                        mediaUrl: getAssetPath(`${ASSET_IMAGES}/properties/bedroom-2.jpeg`, `44x44`),
                    },
                    {
                        id: 125,
                        name: 'Media3',
                        mediaUrl: getAssetPath(`${ASSET_IMAGES}/properties/bedroom-3.jpeg`, `44x44`),
                    },
                ],
                content: [
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Alex Dolgove
                    </Span>,
                    'left a 5 star review on Albama’s House',
                ],
            },
            {
                id: 2,
                user: {
                    id: 12,
                    name: 'Kailasha',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, `44x44`),
                },
                mediaList: [],
                content: [
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Kailasha
                    </Span>,
                    'is looking for a house in New Jersey, USA',
                ],
            },
            {
                id: 3,
                user: {
                    id: 12,
                    name: 'Chelsea Johns',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, `44x44`),
                },
                mediaList: [],
                content: [
                    'Agent ',
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Chelsea Johns
                    </Span>,
                    'has added 7 new photos to the property ',
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Albama's house
                    </Span>,
                ],
            },
        ]
    },
    {
        date: getCustomDateTime(-1, 'days', 'MMM DD, YYYY'),
        data: [
            {
                id: 4,
                user: {
                    id: 12,
                    name: 'Domnic Brown',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, `44x44`),
                },
                mediaList: [
                    {
                        id: 123,
                        name: 'Media1',
                        mediaUrl: getAssetPath(`${ASSET_IMAGES}/wall/community1.png`, `44x44`),
                    },
                    {
                        id: 124,
                        name: 'Media1',
                        mediaUrl: getAssetPath(`${ASSET_IMAGES}/wall/community2.png`, `44x44`),
                    },
                    {
                        id: 125,
                        name: 'Media1',
                        mediaUrl: getAssetPath(`${ASSET_IMAGES}/wall/community3.png`, `44x44`),
                    },
                ],
                content: [
                    'Welcome to a new agent ',
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Domnic Brown
                    </Span>,
                    'in the company.',
                ],
            },
            {
                id: 5,
                user: {
                    id: 12,
                    name: 'Michael Dogov',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`, `44x44`),
                },
                mediaList: [],
                content: [
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Michael Dogov
                    </Span>,
                    'is looking for an office space in Colarado, USA.',
                ],
            },
        ]
    },

    {
        date: getCustomDateTime(-2, 'days', 'MMM DD, YYYY'),
        data: [
            {
                id: 6,
                user: {
                    id: 12,
                    name: 'Domnic Harris',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`, `44x44`),
                },
                mediaList: [],
                content: [
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Domnic Harris
                    </Span>,
                    "left a 5 star rating on Albama's property.",
                ],
            },
            {
                id: 7,
                user: {
                    id: 12,
                    name: 'Garry Sobars',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar12.jpg`, `44x44`),
                },
                mediaList: [],
                content: [
                    ' Callback request from ',
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Garry Sobars
                    </Span>,
                    'for the property ',
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Dmitri house
                    </Span>,
                ],
            },
            {
                id: 8,
                user: {
                    id: 12,
                    name: 'Guptil Sharma',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar13.jpg`, `44x44`),
                },
                mediaList: [
                    {
                        id: 123,
                        name: 'Media1',
                        mediaUrl: getAssetPath(`${ASSET_IMAGES}/products/marcus-urbenz.jpg`, `44x44`),
                    },
                    {
                        id: 124,
                        name: 'Media2',
                        mediaUrl: getAssetPath(`${ASSET_IMAGES}/products/maria-fatima.jpg`, `44x44`),
                    },
                    {
                        id: 125,
                        name: 'Media3',
                        mediaUrl: getAssetPath(`${ASSET_IMAGES}/products/iPhone.jpeg`, `44x44`),
                    },
                ],
                content: [
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Guptil Sharma
                    </Span>,
                    "left a 5 star rating on Aloboma's house",
                ],
            },
        ]
    },
    {
        date: getCustomDateTime(-5, 'days', 'MMM DD, YYYY'),
        data: [
            {
                id: 9,
                user: {
                    id: 12,
                    name: 'Jeson Born',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`, `44x44`),
                },
                mediaList: [],
                content: [
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Jeson Born
                    </Span>,
                    'is looking for a house in New jersey, USA.',
                ],
            },
            {
                id: 10,
                user: {
                    id: 12,
                    name: 'Jimmy Jo',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`, `44x44`),
                },
                mediaList: [],
                content: [
                    'Agent ',
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Jimmy Jo
                    </Span>,
                    'has added 7 new photos to the property ',
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Albama's house
                    </Span>,
                ],
            },
            {
                id: 11,
                user: {
                    id: 12,
                    name: 'Jonathan Lee',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, `44x44`),
                },
                mediaList: [
                    {
                        id: 123,
                        name: 'Media1',
                        mediaUrl: getAssetPath(`${ASSET_AVATARS}/martin-j.jpg`, `44x44`),
                    },
                    {
                        id: 124,
                        name: 'Media1',
                        mediaUrl: getAssetPath(`${ASSET_AVATARS}/jeson-born.jpg`, `44x44`),
                    },
                    {
                        id: 125,
                        name: 'Media1',
                        mediaUrl: getAssetPath(`${ASSET_AVATARS}/jonathan.jpg`, `44x44`),
                    },
                ],
                content: [
                    'Welcome to a new agent ',
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Jonathan Lee
                    </Span>,
                    'in the company.',
                ],
            },
            {
                id: 12,
                user: {
                    id: 12,
                    name: 'Joshua',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `44x44`),
                },
                mediaList: [],
                content: [
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Joshua
                    </Span>,
                    'is looking for an office space in Colarado, USA.',
                ],
            },
            {
                id: 13,
                user: {
                    id: 12,
                    name: 'Stella Johnson',
                    profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, `44x44`),
                },
                mediaList: [],
                content: [
                    <Span sx={{color: "#7352C7", mr: 1}}>
                        Stella Johnson
                    </Span>,
                    "left a 5 star rating on Albama's property.",
                ],
            },
        ]
    }
];
