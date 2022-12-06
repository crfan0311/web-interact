export const idGenerator = () => {
    return Math.floor(Math.random() * 100000);
};

export const getArrayElementFromKey = (variable, keyString) => {
    if(variable && keyString) {
        const levels = keyString.split(".");
        let value = null;
        levels.forEach(level => {
            if(value === null)
                value = variable[level];
            else
                value = value[level];
        });
        return value;
    }
    return null;
};

export const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};

export const createJumboTheme = (mainTheme, headerTheme, sidebarTheme, footerTheme) => {
    return {
        main: mainTheme,
        header: {
            ...mainTheme,
            ...(headerTheme ?? {})
        },
        sidebar: {
            ...mainTheme,
            ...(sidebarTheme ?? {})
        },
        footer: {
            ...mainTheme,
            ...(footerTheme ?? {})
        }
    }
};