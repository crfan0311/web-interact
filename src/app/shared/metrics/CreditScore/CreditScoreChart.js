import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const CreditScoreChart = ({score}) => {
    return (
        <ReactSpeedometer
            value={score}
            maxSegmentLabels={0}
            segments={4}
            ringWidth={20}
            needleColor={"#555"}
            needleHeightRatio={0.5}
            needleTransitionDuration={4000}
            needleTransition="easeElastic"
            segmentColors={['#E00930', '#FF8C00', '#FFCA41', '#8DCD03']}
            currentValueText={`${score}`}
            valueTextFontSize={'18px'}
            valueTextFontWeight={"normal"}
            textColor={"#6200EE"}
            width={250}
            height={150}
        />
    );
};

export default CreditScoreChart;
