import {timeSince} from "@jumbo/utils";
import {ASSET_AVATARS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const connections = [
    {
        id: 32,
        user: {
            id: 21,
            name: 'Julia Robert',
            username: 'julia.robert',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`,"40x40"),
        },
        follow: true,
        created_at: timeSince(.6),
    },
    {
        id: 33,
        user: {
            id: 22,
            name: 'Joe Lee',
            username: 'joe.lee',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`,"40x40"),
        },
        follow: false,
        created_at: timeSince(.9),
    },
    {
        id: 34,
        user: {
            id: 23,
            name: 'Chang Lee',
            username: 'chang.lee',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`,"40x40"),
        },
        follow: false,
        created_at: timeSince(1.3),
    },
    {
        id: 35,
        user: {
            id: 24,
            name: 'Mickey Arthur',
            username: 'mickey.arthur',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`,"40x40"),
        },
        follow: true,
        created_at: timeSince(12),
    },
    {
        id: 36,
        user: {
            id: 25,
            name: 'Shane Watson',
            username: 'shane.watson',
            profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar8.jpg`,"40x40"),
        },
        follow: true,
        created_at: timeSince(34),
    },
];
