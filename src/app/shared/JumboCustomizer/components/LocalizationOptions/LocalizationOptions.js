import React from 'react';
import {enUS, frFR, arEG, zhCN, esES, itIT} from '@mui/material/locale';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useTranslation} from "react-i18next";
import {useJumboTheme} from "@jumbo/hooks";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Div from "@jumbo/shared/Div";
import {Typography} from "@mui/material";

const languages = [
    {
        label: "English",
        locale: "en-US",
        muiLocale: enUS
    },
    {
        label: "French",
        locale: "fr-FR",
        muiLocale: frFR
    },
    {
        label: "Arabic",
        locale: "ar-EG",
        muiLocale: arEG
    },
    {
        label: "Chinese",
        locale: "zh-CN",
        muiLocale: zhCN
    },
    {
        label: "Spanish",
        locale: "es-ES",
        muiLocale: esES
    },
    {
        label: "Italian",
        locale: "it-IT",
        muiLocale: itIT
    }
];

const LocalizationOptions = () => {
    const {i18n} = useTranslation();
    const {theme, setMuiLocale, setTheme} = useJumboTheme();
    const [activeLocale, setActiveLocale] = React.useState(languages[0]);

    const handleChange = (event) => {
        const localeIndex = languages.findIndex(language => language.locale === event.target.value);
        if (localeIndex !== -1) {
            i18n.changeLanguage(languages[localeIndex].locale).then(() => {
                setActiveLocale(languages[localeIndex]);
                setMuiLocale(languages[localeIndex].muiLocale);
            });
        }
    };

    const changeDirection = (event) => {
        setTheme({direction: event.target.checked ? "rtl" : "ltr"});
        document.querySelector("body").setAttribute("dir", event.target.checked ? "rtl" : "ltr")
    };

    return (
        <JumboCardQuick
            title={<Typography variant={"h5"} mb={0}>Localization</Typography>}
            headerSx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}
        >
            <FormControl fullWidth>
                <InputLabel id="customizer-select-locale-label">Select Locale</InputLabel>
                <Select
                    size={"small"}
                    labelId="select-locale"
                    id="customizer-select-locale"
                    value={activeLocale.locale}
                    label="Language"
                    onChange={handleChange}
                >
                    {
                        languages.map(language => (
                            <MenuItem key={language.locale}
                                      value={language.locale}>{language.label}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <Div sx={{mt: 2}}>
                <FormControlLabel
                    control={
                        <Switch checked={theme.direction === "rtl"} onChange={changeDirection}
                                name="localization-change-direction"/>
                    }
                    label="Switch to RTL"
                />
            </Div>
        </JumboCardQuick>
    );
};

export default LocalizationOptions;
