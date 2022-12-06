import React from 'react';
import Typography from "@mui/material/Typography";
import {DrawingManager, GoogleMap, useLoadScript} from "@react-google-maps/api";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {useTranslation} from "react-i18next";
import code from './demo-code/drawing-view.txt';

const DrawingView = () => {
    const {t} = useTranslation();
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ",
        libraries: ["drawing"]
    });
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.mapDrawingView')}</Typography>
            <JumboDemoCard demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
                {
                    isLoaded &&
                    <GoogleMap
                        mapContainerStyle={{width: '100%', height: "400px"}}
                        center={new window.google.maps.LatLng(47.646935, -122.303763)}
                        zoom={15}
                    >
                        <DrawingManager
                            drawingMode={window.google.maps.drawing.OverlayType.CIRCLE}
                            options={{
                                drawingControl: true,
                                drawingControlOptions: {
                                    position: window.google.maps.ControlPosition.TOP_LEFT,
                                    drawingModes: [
                                        window.google.maps.drawing.OverlayType.CIRCLE,
                                        window.google.maps.drawing.OverlayType.POLYGON,
                                        window.google.maps.drawing.OverlayType.POLYLINE,
                                        window.google.maps.drawing.OverlayType.RECTANGLE,
                                    ],
                                },
                                circleOptions: {
                                    fillColor: '#ff0000',
                                    fillOpacity: 0.2,
                                    strokeWeight: 3,
                                    clickable: false,
                                    editable: true,
                                    zIndex: 1,
                                },
                                rectangleOptions: {
                                    fillColor: '#ff0000',
                                    fillOpacity: 0.2,
                                    strokeWeight: 3,
                                    clickable: false,
                                    editable: true,
                                    zIndex: 1,
                                },
                            }}
                        />
                    </GoogleMap>
                }
            </JumboDemoCard>
        </React.Fragment>
    );
};

export default DrawingView;
