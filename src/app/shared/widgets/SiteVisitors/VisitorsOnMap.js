import React, {useRef} from 'react';
import {VectorMap} from "react-jvectormap";
import {countriesMarkers} from "./data";
import Div from "@jumbo/shared/Div";

const VisitorsOnMap = () => {
    const vectorRef = useRef(null);
    return (
        <Div sx={{
            width: '100%',
            height: '100%',
            minHeight: '200px',
            overflow: 'hidden',

            '& .jvectormap-container': {
                height: '100%',
                width: '100%'
            },
        }}>
            <VectorMap
                ref={vectorRef}
                backgroundColor={"common.white"}
                map={'world_mill'}
                containerStyle={{
                    width: '100%',
                    height: '100%',
                }}
                regionStyle={{
                    initial: {
                        fill: '#DEE4E8',
                    },
                }}
                markerStyle={{
                    initial: {
                        fill: '#FFC542',
                        stroke: 'rgba(50, 88, 239, 0.2)',
                    },
                }}
                zoomButtons={false}
                zoomOnScroll={false}
                containerClassName={"map"}
                markers={countriesMarkers}
            />
        </Div>
    );
};

export default VisitorsOnMap;
