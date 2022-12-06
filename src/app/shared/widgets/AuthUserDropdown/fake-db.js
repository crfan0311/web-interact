import {ASSET_AVATARS} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

export const authUser = {
    email: "harmaynicroft@example.com",
    name: "Harmayni Croft",
    profile_pic: getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, `60x60`),
    handle: "harmaynicroft@example.com",
    job_title: "Creative Head"
};
