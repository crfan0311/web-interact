import {getCustomDateTime} from "@jumbo/utils";
import {ASSET_AVATARS, ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";


export const latestNotifications = [
    {
        type: 'INVITATIONS',
        total: 5,
        records: [
            {
                id: 1,
                user: {
                    id: 100,
                    name: 'Garry Sobars',
                    profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`,"52x52"),
                },
                type: 'PROJECT_INVITATION',
                metaData: {
                    sender: {
                        id: 123,
                        name: 'John Smith',
                        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`,"52x52"),
                    },
                    project: {id: 12, name: 'Mouldify'},
                },
                timeRange: getCustomDateTime(-5),
                createdAt: getCustomDateTime(-5, 'minutes'),
            },
            {
                id: 2,
                user: {
                    id: 676,
                    name: 'Williams Blake',
                    profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`,"52x52"),
                },
                type: 'PROJECT_INVITATION',
                metaData: {
                    sender: {
                        id: 544,
                        name: 'Janifer decibel',
                        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar14.jpg`,"52x52"),
                    },
                    project: {id: 16, name: 'Wieldy'},
                },
                timeRange: getCustomDateTime(5),
                createdAt: getCustomDateTime(-3, 'hours'),
            },
        ],
    },
    {
        type: 'MESSAGES',
        total: 2,
        records: [
            {
                id: 1,
                name: 'Remy Sharp',
                content: 'You have a new friend suggestion: ',
                avatar: getAssetPath(`${ASSET_AVATARS}/alex-dolgove.png`,"52x52"),
                icon: 'all-inclusive',
                time: getCustomDateTime(-5, 'minutes'),
                media: '',
                status: 'unread',
            },
            {
                id: 2,
                name: 'Travis Howard',
                content: 'You have a new friend suggestion: ',
                avatar: getAssetPath(`${ASSET_AVATARS}/steve-smith.jpg`,"52x52"),
                icon: 'info',
                time: getCustomDateTime(-10),
                media: '',
                status: 'unread',
            },
        ],
    },
    {
        type: 'FEEDS',
        total: 25,
        records: [
            {
                id: 1,
                user: {
                    id: 100,
                    name: 'Garry Sobars',
                    profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`,"52x52"),
                },
                type: 'PROJECT_INVITATION',
                metaData: {
                    sender: {
                        id: 123,
                        name: 'Harmayni Croft',
                        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar13.jpg`,"52x52"),
                    },
                    project: {id: 12, name: 'Mouldify'},
                },
                likes: 123,
                shares: 25,
                timeRange: getCustomDateTime(-15),
                createdAt: getCustomDateTime(-7, 'minutes'),
            },
            {
                id: 2,
                user: {
                    id: 101,
                    name: 'Kadir M',
                    profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`,"52x52"),
                },
                type: 'PHOTOS_UPLOADED',
                metaData: {
                    user: {
                        id: 1234,
                        name: 'Jimmy Jo',
                        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar12.jpg`,"52x52"),
                    },
                    group: 'Art Lovers',
                    count: 5,
                    photos: [
                        {
                            id: 1,
                            photo_url: getAssetPath(`${ASSET_IMAGES}/products/speaker.jpeg`, "44x44"),
                            caption: 'Beauty with Beast',
                        },
                        {
                            id: 2,
                            photo_url: getAssetPath(`${ASSET_IMAGES}/products/laptop.jpeg`, "44x44"),
                            caption: 'Nature Love',
                        },
                        {
                            id: 3,
                            photo_url: getAssetPath(`${ASSET_IMAGES}/products/trimmer.jpg`, "44x44"),
                            caption: 'Forest',
                        },
                        {
                            id: 4,
                            photo_url: getAssetPath(`${ASSET_IMAGES}/products/travel-bag.jpg`, "44x44"),
                            caption: 'Nature at its best',
                        },
                        {
                            id: 5,
                            photo_url: getAssetPath(`${ASSET_IMAGES}/products/microphone.jpeg`, "44x44"),
                            caption: 'Sea House',
                        },
                    ],
                },
                timeRange: getCustomDateTime(15, 'minutes'),
                createdAt: getCustomDateTime(-7, 'minutes'),
            },
            {
                id: 3,
                user: {
                    id: 102,
                    name: 'John Doe',
                    profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`,"52x52"),
                },
                type: 'SHARED_POST',
                metaData: {
                    user: {
                        id: 124,
                        name: 'Jacky Roy',
                        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar14.jpg`,"52x52"),
                    },
                    post: {title: 'This is Beginning'},
                },
                likes: 5677,
                shares: 345,
                timeRange: getCustomDateTime(-40, 'minutes'),
                createdAt: getCustomDateTime(-8, 'minutes'),
            },
        ],
    },
];
