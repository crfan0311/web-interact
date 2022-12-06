import React from 'react';
import EarningExpensesChart from "./EarningExpensesChart";
import {Card, CardContent, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Div from "@jumbo/shared/Div";

const EarningExpenses = () => {
    const [activeChart, setActiveChart] = React.useState("expense");
    return (
        <Card>
            <CardContent sx={{
                display: 'flex',
                minWidth: 0,
                alignItems: 'flex-start',
                justifyContent: 'space-between'
            }}
            >
                <Stack direction={"row"} spacing={3}>
                    <Div>
                        <Typography variant={"h3"} fontWeight={"500"} mb={.5}>$2,95,437</Typography>
                        <Typography variant={"body1"} mb={2}>Earning</Typography>
                    </Div>
                    <Div>
                        <Typography variant={"h3"} fontWeight={"500"} mb={.5}>$58,786</Typography>
                        <Typography variant={"body1"} mb={2}>Expenses</Typography>
                    </Div>
                </Stack>
                <Stack direction={"row"} spacing={1}>
                    <Button variant={activeChart === "earning" ? "contained" : "outlined"}
                            size={"small"}
                            onClick={() => setActiveChart("earning")}
                    >Earning</Button>
                    <Button variant={activeChart === "expense" ? "contained" : "outlined"}
                            disableElevation
                            color={"secondary"}
                            size={"small"}
                            onClick={() => setActiveChart("expense")}
                    >Expenses</Button>
                </Stack>
            </CardContent>
            <EarningExpensesChart activeChart={activeChart}/>
        </Card>
    );
};

export default EarningExpenses;
