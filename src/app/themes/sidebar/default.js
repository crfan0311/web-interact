import {alpha} from "@mui/material/styles";

export const sidebarTheme = {
    type: "light",
    palette: {
        primary: {
            main: '#7352C7',
            light: '#A67FFB',
            dark: '#5E3BB7',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#E44A77',
            light: '#FF7EA6',
            dark: '#DF295E',
            contrastText: '#FFF'
        },
        error: {
            main: '#E73145',
            light: '#FF6A70',
            dark: '#AD001E',
            contrastText: '#FFF'
        },
        warning: {
            main: '#F39711',
            light: '#FFC84C',
            dark: '#BB6900',
            contrastText: '#FFF'
        },
        info: {
            main: '#2EB5C9',
            light: '#6FE7FC',
            dark: '#008598',
            contrastText: '#FFF'
        },
        success: {
            main: '#3BD2A2',
            light: '#78FFD3',
            dark: '#00A073',
            contrastText: '#FFF'
        },
        text: {
            primary: '#475259',
            secondary: '#8595A6',
            disabled: '#A2B2C3',
            title: '#37373C',
        },
        nav: {
            action: {
                active: '#7352C7',
                hover: '#7352C7',
            },
            background: {
                active: alpha('#7352C7', .15),
                hover: "#E9ECEF"
            },
            tick: {
                active: '#7352C7',
                hover: "#ADB5BD"
            }
        },
        divider : '#DEE2E6',
        background: {
            paper: '#FFFFFF',
            default: '#F5F7FA',
        },
        action: {
            active: '#475259',
            hover: '#F5F7FA',
        },
    }
};