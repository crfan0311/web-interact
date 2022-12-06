import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {Stack, Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const UpgradePlan = () => {
    const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);
    return (
        <JumboCardQuick
            sx={{textAlign: 'center', color: 'common.white'}}
            bgColor={["#E44A77", "#7352C7"]}
            bgGradientDir={"-135deg"}
        >
            <Stack direction={"row"} spacing={1} sx={{justifyContent: 'center', mb: 3}}>
                <Button
                    disableElevation
                    variant={"contained"}
                    size={"small"}
                    onClick={() => setIsMonthlyPlan(true)}
                    sx={isMonthlyPlan ? {
                        bgcolor: '#F5F7FA',
                        color: 'primary.main',

                        '&:hover': {
                            bgcolor: '#F5F5F5'
                        },

                    } : {color: 'common.white', bgcolor: 'transparent'}}
                >Monthly</Button>
                <Button
                    disableElevation
                    color={"primary"}
                    variant={"contained"}
                    size={"small"}
                    sx={!isMonthlyPlan ? {
                        bgcolor: '#F5F7FA',
                        color: 'primary.main',

                        '&:hover': {
                            bgcolor: '#F5F5F5',
                        }
                    } : {color: 'common.white', bgcolor: 'transparent'}}
                    onClick={() => setIsMonthlyPlan(false)}
                >Yearly</Button>
            </Stack>
            <Div sx={{display: "flex", minWidth: 0, justifyContent: 'center', mb: 3}}>
                <img src={getAssetPath(`${ASSET_IMAGES}/pet-insurance.png`, "102x102")} alt={"Pet Insurance"}
                     width={102}/>
            </Div>
            <Typography
                variant={"h4"}
                color={"common.white"}
                sx={{mb: '2px'}}
            >{isMonthlyPlan ? "$25/Month" : "$250/Year"}</Typography>
            <Typography variant={"body1"} mb={2}>Upgrade today</Typography>
        </JumboCardQuick>
    );
};

export default UpgradePlan;
