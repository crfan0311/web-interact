import {ASSET_AVATARS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const tickets = [
    {
        id: 1,
        user: {
            id: 1,
            name: 'Joy parish',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "48x48"),
        },
        title: 'Need a quick support on setting',
        createdDate: '1 day ago ',
        priority: {id: 1, label: 'High', slug: 'high', color: 'error'},
    },
    {
        id: 2,
        user: {
            id: 1,
            name: 'John Smith',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "48x48"),
        },
        title: 'How can replace stepper controle with default',
        createdDate: '5 day ago ',
        priority: {id: 1, label: 'Low', slug: 'high', color: 'success'},
    },
    {
        id: 3,
        user: {
            id: 1,
            name: 'Mukesh k',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`, "48x48"),
        },
        title: 'Pre-sale query about the product',
        createdDate: '2 day ago ',
        priority: {id: 1, label: 'Low', slug: 'high', color: 'success'},
    },
    {
        id: 4,
        user: {
            id: 1,
            name: 'sonu siram',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, "48x48"),
        },
        title: 'Regarding customization service',
        createdDate: '1 day ago ',
        priority: {id: 1, label: 'Low', slug: 'high', color: 'success'},
    },
    {
        id: 5,
        user: {
            id: 1,
            name: 'Dennis Roy',
            profilePic: getAssetPath(`${ASSET_AVATARS}/avatar13.jpg`, "48x48"),
        },
        title: 'How can replace stepper controle with default',
        createdDate: '1 day ago ',
        priority: {id: 1, label: 'High', slug: 'high', color: 'error'},
    },
];
