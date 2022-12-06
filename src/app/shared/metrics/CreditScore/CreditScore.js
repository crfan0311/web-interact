import React from 'react';
import CreditScoreChart from "./CreditScoreChart";
import {Button, Typography} from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import {useTranslation} from "react-i18next";

const CreditScore = () => {
    const {t} = useTranslation();
    const [score, setScore] = React.useState(500);
    const [isLoading, setLoading] = React.useState(false);

    const simulateNetworkRequest = () => {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    const updateScore = () => {
        setLoading(!isLoading);
        simulateNetworkRequest().then(() => {
            setScore((Math.floor(Math.random() * 9) + 2) * 98);
            setLoading(!isLoading);
        });
    };

    return (
        <JumboCardQuick
            title={t('widgets.title.creditScore')}
            subheader={t('widgets.subheader.creditScore')}
            sx={{
                textAlign: 'center'
            }}
            wrapperSx={{pt: 0}}
        >
            <CreditScoreChart score={score}/>
            <Div sx={{my: 3}}>
                <Typography variant={"body1"} mb={2.25}>New score available</Typography>
                <Button
                    variant={"contained"}
                    size={"small"}
                    onClick={updateScore}
                    startIcon={<RefreshIcon/>}
                >
                    Refresh
                </Button>
            </Div>
        </JumboCardQuick>
    );
};

export default CreditScore;
