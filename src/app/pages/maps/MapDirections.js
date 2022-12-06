import React from 'react';
import Typography from "@mui/material/Typography";
import {DirectionsRenderer, GoogleMap, useLoadScript} from "@react-google-maps/api";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {useTranslation} from "react-i18next";
import code from './demo-code/map-direction.txt';

const MapDirectionsExample = () => {
    const {t} = useTranslation();
    const [directions, setDirections] = React.useState(null);

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ",
    });
    const origin = new window.google.maps.LatLng(41.85073, -87.65126);
    const destination = new window.google.maps.LatLng(41.85258, -87.65141);
    const DirectionsService = new window.google.maps.DirectionsService();

    React.useEffect(() => {
        DirectionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            },
        );
    });

    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.mapDirection')}</Typography>
            <JumboDemoCard demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
                {
                    isLoaded &&
                    <GoogleMap
                        mapContainerStyle={{width: '100%', height: "400px"}}
                        center={origin}
                        zoom={7}
                    >
                        {
                            directions && (
                                <DirectionsRenderer directions={directions}/>
                            )
                        }
                    </GoogleMap>
                }
            </JumboDemoCard>
        </React.Fragment>
    );
};

export default MapDirectionsExample;
