/**
 * Check if the given url can be found
 * in one of the given parent's children
 *
 * @param parent
 * @param url
 * @returns {boolean}
 */
export const isUrlInChildren = (parent, url) => {

    if (!parent.children) {
        return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
        if (parent.children[i].children) {
            if (isUrlInChildren(parent.children[i], url)) {
                return true;
            }
        }

        if (parent.children[i].uri === url || url.includes(parent.children[i].uri)) {
            return true;
        }
    }
    return false;
};