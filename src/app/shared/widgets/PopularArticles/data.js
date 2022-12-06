import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const popularArticles = [
    {
        id: 1,
        thumb: getAssetPath(`${ASSET_IMAGES}/wall/agitalizr-unsplash.jpg`, "420x315"),
        category: 'Currency',
        title: '10 things you must know before trading in Cryptocurrency',
        date: '25th July, 2020',
        views: 400,
    },
    {
        id: 2,
        thumb: getAssetPath(`${ASSET_IMAGES}/wall/dan-gold.jpg`, "420x315"),
        category: 'Health',
        title: '10 Ways you can fight Covid-19',
        date: '20th July, 2020',
        views: 657,
    },
    {
        id: 3,
        thumb: getAssetPath(`${ASSET_IMAGES}/wall/yarenci-hdz.jpg`, "420x315"),
        category: 'Sports',
        title: 'Sports session amid Corona outbreak.',
        date: '20th August, 2020',
        views: 875,
    },
    {
        id: 1,
        thumb: getAssetPath(`${ASSET_IMAGES}/wall/severin-candrian.jpg`, "420x315"),
        category: 'Politics',
        title: 'World leaders shared platform over Covid 19.',
        date: '10th August, 2020',
        views: 231,
    },
];
export const menuItems = [
    {
        id: 1,
        title: "More Detail",
        slug: "more-detail"
    },
    {
        id: 2,
        title: "Close",
        slug: "close",
    }
];
