import React from 'react';
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import Typography from "@mui/material/Typography";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {useTranslation} from "react-i18next";
import code from './demo-code/simple-map.txt';

const SimpleMap = () => {
    const {t} = useTranslation();
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ",
    });
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.basicMap')}</Typography>
            <JumboDemoCard demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
                {
                    isLoaded &&
                    <GoogleMap
                        zoom={3}
                        center={{lat: 20.75056525, lng: 73.730039}}
                        mapContainerStyle={{width: '100%', height: "400px"}}
                    />
                }
            </JumboDemoCard>
        </React.Fragment>
    );
};

export default SimpleMap;
