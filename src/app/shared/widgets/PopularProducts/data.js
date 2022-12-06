import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const menuItems = [
    {
        icon:null,
        title: "View all",
        slug: "all",
    },
    {
        icon:null,
        title: "Bookmark",
        slug: "bookmark"
    }
];
export const productsData = [
    {
        id: 1001,
        name: "The future of LED bulbs",
        thumb: getAssetPath(`${ASSET_IMAGES}/products/maria-fatima.jpg`,"264x264"),
        description: "Lorem ipsum is not simply random text",
        price: 250,
        salePrice: 200,
    },
    {
        id: 1002,
        name: "The fitness watch",
        thumb: getAssetPath(`${ASSET_IMAGES}/products/ivan-shilov.jpg`,"264x264"),
        description: "Lorem ipsum is not simply random text",
        price: 299,
        salePrice: 275,
    },
    {
        id: 1003,
        name: "Speakers - party time",
        thumb: getAssetPath(`${ASSET_IMAGES}/products/omar-flores.jpg`,"264x264"),
        description: "Lorem ipsum is not simply random text",
        price: 980,
        salePrice: 499,
    },
    {
        id: 1004,
        name: "Study lamp",
        thumb: getAssetPath(`${ASSET_IMAGES}/products/marcus-urbenz.jpg`,"264x264"),
        description: "Lorem ipsum is not simply random text",
        price: 500,
        salePrice: 430,
    }
];
