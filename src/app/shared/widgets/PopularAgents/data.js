import {ASSET_AVATARS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";
export const agents = [
    {
        id: 1,
        avatar: getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`, `60x60`),
        title: "Albert Hall",
        rating: 3.5,
        desc: "23 deals"
    },
    {
        id: 2,
        avatar: getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, `60x60`),
        title: "John Hall",
        rating: 3.5,
        desc: "23 deals"
    },
    {
        id: 3,
        avatar: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `60x60`),
        title: "Jackson Hall",
        rating: 3.5,
        desc: "23 deals"
    },
    {
        id: 4,
        avatar: getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, `60x60`),
        title: "Jonty Hall",
        rating: 3.5,
        desc: "23 deals"
    }
];
