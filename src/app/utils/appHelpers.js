import {config} from "../config/main";

export const getAssetPath = (url, size) => {
    if(config.useImagePlaceHolder) {
        return `https://via.placeholder.com/${size}.png`;
    }

    return url;
};