


/**
 * Takes a dictionary as parameters and returns a query string
 * @param {Object} obj 
 */
export const urlencode = (obj) => {
    return Object.keys(obj).map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
    }).join("&");
}



export const parseURIParams = (query) => {   
    query = query.split('?')[1];
    let parameters = {};
    for ( const [ name, value ] of new URLSearchParams( query ) ) parameters[name] = value;
    return parameters;
}


export const getYoutubeThumbnailURI = (URI) => {
    const id = getYoutubeIDFromURL(URI);
    const link = `http://i3.ytimg.com/vi/${id}/hqdefault.jpg`;
    return link;
}


export function getYoutubeIDFromURL(url) {
    var ID = "";
    url = url
        .replace(/(>|<)/gi, "")
        .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    } else {
        ID = url;
    }
    return ID;
}

export function isValidHttpUrl(string) {
    try {
        const url = new URL(string);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (err) {
        return false;
    }
}


export function isValidYoutubeURL(string) {
    const validHostnames = ["www.youtube.com", "youtube.com"];
    try {
        const url = new URL(string);
        return validHostnames.includes(url.hostname);
    } catch (err) {
        return false;
    }
}