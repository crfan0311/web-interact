import lightTheme from "../../themes/default/light";

const themeConfig = {
    main: lightTheme,
    header: {
        background: {
            paper: 'black',
            default: 'green',
        }
    },
    sidebar: {
        background: {
            paper: '#999999',
            default: 'red',
        },
    },
    footer: {
        background: {
            paper: 'red',
            default: 'blue',
        },
    }
};

export default themeConfig;