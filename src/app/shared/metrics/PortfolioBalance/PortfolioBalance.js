import React from 'react';
import CardHeader from "@mui/material/CardHeader";
import {Card, CardActions, CardContent, LinearProgress, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TrendingDownSharpIcon from "@mui/icons-material/TrendingDownSharp";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {useTranslation} from "react-i18next";

const PortfolioBalance = () => {
    const {t} = useTranslation();
    return (
        <Card>
            <CardHeader title={t('widgets.title.cryptoPortfolio')}/>
            <CardContent sx={{pt: 2}}>
                <Stack direction={"row"} spacing={3}>
                    <Grid item xs={6}>
                        <Typography variant={"h2"}>$179,626
                            <Typography component={"span"} color={"error"} sx={{
                                display: 'inline-flex',
                                ml: 1
                            }}>23% <TrendingDownSharpIcon fontSize={"small"} sx={{ml: '2px'}}/></Typography>
                        </Typography>
                        <Typography variant={"body1"} sx={{mb: 3}}>Overall balance</Typography>
                        <Stack direction={"row"} spacing={1}>
                            <Button variant={"contained"} color={"secondary"}>Deposit</Button>
                            <Button variant={"contained"} color={"inherit"} disableElevation>Withdraw</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant={"h5"} color={"text.secondary"} mb={2}>Portfolio distribution</Typography>
                        <Typography variant={"h6"} color={"text.primary"}>BTC
                            <Typography sx={{borderLeft: 1, ml: 1, pl: 1}} component={"span"}
                                        color={"text.secondary"}>8.75</Typography>
                        </Typography>
                        <LinearProgress variant={"determinate"} color={"success"} value={70}
                                        sx={{
                                            width: '75%',
                                            borderRadius: 4,
                                            height: 5,
                                            mb: 2,
                                            backgroundColor: '#E9EEEF'
                                        }}
                        />
                        <Typography variant={"h6"} color={"text.primary"}>RLP
                            <Typography sx={{borderLeft: 1, ml: 1, pl: 1}} component={"span"}
                                        color={"text.secondary"}>4.87</Typography>
                        </Typography>
                        <LinearProgress variant={"determinate"} color={"warning"} value={40}
                                        sx={{
                                            width: '50%',
                                            borderRadius: 4,
                                            height: 5,
                                            backgroundColor: '#E9EEEF'
                                        }}
                        />
                    </Grid>
                </Stack>
            </CardContent>
            <CardActions sx={{pt: .5, pb: 2}}>
                <Button startIcon={<AddIcon/>} size="small">Add More</Button>
            </CardActions>
        </Card>
    );
};

export default PortfolioBalance;
