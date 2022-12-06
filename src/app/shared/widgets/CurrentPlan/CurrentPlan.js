import React from 'react';
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import {Card, CardContent, ListItem, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Div from "@jumbo/shared/Div";
import {useTranslation} from "react-i18next";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const CurrentPlan = () => {
    const {t} = useTranslation();
    return (
        <Card>
            <CardHeader title={t('widgets.title.currentPlan')}/>
            <Divider/>
            <CardContent>
                <Stack direction={"row"} spacing={2}>
                    <Grid item xs={7}>
                        <Typography
                            component={"div"}
                            variant={"body1"}
                            mb={1}
                        >
                            <Typography component={"span"} variant={"h1"}>$19</Typography>/month
                        </Typography>
                        <Typography
                            variant={"h6"}
                            color={"text.secondary"}
                            mb={2}
                        >
                            Team Plan (4/5 Members)
                        </Typography>
                        <List>
                            <ListItem disablePadding sx={{mb: '5px'}}><ArrowForwardIosIcon
                                sx={{fontSize: 14, mr: 1}}/> 2k daily calls</ListItem>
                            <ListItem disablePadding sx={{mb: '5px'}}><ArrowForwardIosIcon
                                sx={{fontSize: 14, mr: 1}}/> 5k monthly SMS</ListItem>
                            <ListItem disablePadding sx={{mb: '5px'}}><ArrowForwardIosIcon
                                sx={{fontSize: 14, mr: 1}}/> 500 connects</ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={5}>
                        <Div sx={{textAlign: 'center'}}>
                            <img src={getAssetPath(`${ASSET_IMAGES}/icons/membership.png`, '82x82')}  alt={''} width={"82"}/>
                            <Typography variant={"h6"} color={"error"} my={1.5}>Expiring soon</Typography>
                            <Button variant={"contained"}>Renew Now</Button>
                        </Div>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CurrentPlan;
