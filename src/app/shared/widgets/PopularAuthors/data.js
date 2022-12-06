import {ASSET_AVATARS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const popularAuthors = [
    {
        id: 1,
        name: 'Haylie Dorwart',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`,"52x52"),
        readers: '500k+',
        articles: 45,
    },
    {
        id: 2,
        name: 'Rayna Schleifer',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`,"52x52"),
        readers: '800k+',
        articles: 75,
    },
    {
        id: 3,
        name: 'Cristofer Herwitz',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`,"52x52"),
        readers: '600k+',
        articles: 67,
    },
    {
        id: 4,
        name: 'Jenny Lee',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`,"52x52"),
        readers: '500k+',
        articles: 87,
    },
    {
        id: 5,
        name: 'Jemas Dorwart',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`,"52x52"),
        readers: '500k+',
        articles: 45,
    },
    {
        id: 6,
        name: 'Rayna Schleifer',
        profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar13.jpg`,"52x52"),
        readers: '800k+',
        articles: 75,
    },
];
