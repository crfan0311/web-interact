import {ASSET_LOGOS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const productsList = [
    {
        id: 1,
        name: 'Jumbo',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-1.png`, "40x40"),
        colorCode: '#03DAC5',
        sales_data: {
            income: 182640,
            sold_qty: 250,
            sales_inflation: 100,
        },
    },
    {
        id: 2,
        name: 'React',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-2.png`, "40x40"),
        colorCode: '#FF9F1C',
        sales_data: {
            income: 89070,
            sold_qty: 100,
            sales_inflation: 20,
        },
    },
    {
        id: 3,
        name: 'Flexile',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-3.png`, "40x40"),
        colorCode: '#55DDE0',
        sales_data: {
            income: 35682,
            sold_qty: 450,
            sales_inflation: 120,
        },
    },
    {
        id: 4,
        name: 'Drift',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-7.png`, "40x40"),
        colorCode: '#2BA444',
        sales_data: {
            income: 233807,
            sold_qty: 135,
            sales_inflation: -25,
        },
    },
    {
        id: 5,
        name: 'Wield',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-8.png`, "40x40"),
        colorCode: '#EF8354',
        sales_data: {
            income: 398280,
            sold_qty: 1250,
            sales_inflation: 125,
        },
    },
    {
        id: 6,
        name: 'Apple',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-6.png`, "40x40"),
        colorCode: '#ce93d8',
        sales_data: {
            income: 33782,
            sold_qty: 250,
            sales_inflation: 100,
        },
    },
    {
        id: 7,
        name: 'Oracle',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-10.png`, "40x40"),
        colorCode: '#dce775',
        sales_data: {
            income: 956783,
            sold_qty: 100,
            sales_inflation: 20,
        },
    },
    {
        id: 8,
        name: 'eBook',
        logo: getAssetPath(`${ASSET_LOGOS}/project-logo-5.png`, "40x40"),
        colorCode: '#bdbdbd',
        sales_data: {
            income: 659874,
            sold_qty: 450,
            sales_inflation: 120,
        },
    },
];
