


/**
 * Clears the localStorage
 * Keys passed as parameters won't be cleared
 */
export const clearStorage = (...ignoreKeys) => {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
        if (!ignoreKeys.includes(key)) {
        localStorage.removeItem(key);
        }
    });
}