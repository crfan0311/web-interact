import React from 'react';
import {Card, Grid, Typography} from "@mui/material";
import LineChartSales from "./LineChartSales";
import ChartOrderRevenue from "./ChartOrderRevenue";
import renderSalesData from "./renderSalesData";
import {dataItems, menuItems} from "./data";
import JumboContent from "@jumbo/components/JumboContent";
import Div from "@jumbo/shared/Div";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";
import {useTheme} from "@mui/material/styles";
import {useTranslation} from "react-i18next";

const SalesStatistics = () => {
    const {t} = useTranslation();
    const theme = useTheme();
    return (
        <Card>
            <JumboContent
                title={
                    <Typography
                        variant={"h5"}
                        color={"common.white"}
                    >{t('widgets.title.salesStatistics')}</Typography>
                }
                action={<JumboDdMenu menuItems={menuItems}/>}
                bgColor={theme => theme.palette.primary.main}
                sx={{color: 'common.white'}}
            >
                {
                    renderSalesData()
                }
            </JumboContent>
            <JumboContent>
                <Grid container>
                    <Grid item xs={12} lg={6}>
                        <Div sx={{
                            p: theme => theme.spacing(3, 2, 3, 0)
                        }}>
                            <LineChartSales/>
                        </Div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Div sx={{
                            p: theme => theme.spacing(3, 0, 3, 2),
                            [theme.breakpoints.up('lg')]: {
                                borderLeft: theme => `solid 2px ${theme.palette.divider}`
                            },
                            [theme.breakpoints.down('lg')]: {
                                borderTop: theme => `solid 2px ${theme.palette.divider}`
                            }
                        }}
                        >
                            <ChartOrderRevenue data={dataItems}/>
                        </Div>
                    </Grid>
                </Grid>
            </JumboContent>
        </Card>
    );
};

export default SalesStatistics;
