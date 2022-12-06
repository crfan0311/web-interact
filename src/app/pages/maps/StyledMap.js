import React from 'react';
import Typography from "@mui/material/Typography";
import {GoogleMap, InfoBox, useLoadScript} from "@react-google-maps/api";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {useTranslation} from "react-i18next";
import code from './demo-code/styled-map.txt';

const StyledMapExample = () => {
    const {t} = useTranslation();
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ",
    });
    const options = {closeBoxURL: '', enableEventPropagation: true};
    const onLoad = infoBox => {
        //console.log('infoBox: ', infoBox)
    };
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.mapStyled')}</Typography>
            <JumboDemoCard demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
                {
                    isLoaded &&
                    <GoogleMap
                        zoom={11}
                        mapContainerStyle={{width: '100%', height: "400px"}}
                        center={{
                            lat: 44.8799929,
                            lng: 21.3190073
                        }}
                    >
                        <InfoBox
                            options={options}
                            position={{
                                lat: 44.8799929,
                                lng: 21.3190073
                            }}
                            onLoad={onLoad}
                        >
                            <div style={{backgroundColor: 'yellow', opacity: 0.75, padding: 20}}>
                                <div style={{fontSize: 16, fontColor: `#08233B`}}>
                                    Taipei
                                </div>
                            </div>
                        </InfoBox>
                    </GoogleMap>
                }
            </JumboDemoCard>
        </React.Fragment>
    );
};

export default StyledMapExample;
