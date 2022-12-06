import React from 'react';
import TrafficAnalysisChart from "./TrafficAnalysisChart";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const TrafficAnalysis = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.trafficAnalysis')}
            subheader={t('widgets.subheader.trafficAnalysis')}
            sx={{
                textAlign: 'center'
            }}
        >
            <TrafficAnalysisChart/>
        </JumboCardQuick>
    );
};

export default TrafficAnalysis;
