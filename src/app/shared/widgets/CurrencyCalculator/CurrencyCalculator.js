import React from 'react';
import {currencies, currencyRates} from "./data";
import {InputLabel, Select, TextField, Typography} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import {getCustomDateTime} from "@jumbo/utils";

const CurrencyCalculator = () => {
    const {t} = useTranslation();
    const [fromCurrency, setFromCurrency] = React.useState(currencies[0]);
    const [toCurrency, setToCurrency] = React.useState(currencies[1]);
    const [conversionRate, setConversionRate] = React.useState(currencyRates[`${fromCurrency}-${toCurrency}`]);
    const [amount, setAmount] = React.useState(0);
    const [convertedValue, setConvertedValue] = React.useState(0);

    React.useEffect(() => {
        setConversionRate(currencyRates[`${fromCurrency.code}-${toCurrency.code}`]);
    }, [fromCurrency, toCurrency]);

    React.useEffect(() => {
        const convertedAmount = amount * conversionRate;
        setConvertedValue(convertedAmount.toFixed(2));
    }, [conversionRate, amount]);

    const changeFromCurrency = (e) => {
        for (let count = 0; count < currencies.length; count++) {
            if (currencies[count].code === e.target.value)
                setFromCurrency(currencies[count]);
        }
    };
    const changeToCurrency = (e) => {
        for (let count = 0; count < currencies.length; count++) {
            if (currencies[count].code === e.target.value)
                setToCurrency(currencies[count]);
        }
    };
    return (
        <JumboCardQuick
            title={t('widgets.title.currencyCal')}
            subheader={getCustomDateTime()}
        >
            <Typography variant={"h6"} color={"text.primary"}>{`${amount} ${fromCurrency.name} equals`}</Typography>
            <Typography component={"div"} variant={"h1"}>{`${convertedValue} ${toCurrency.name}`}</Typography>
            <Typography
                variant={"body1"}
                color={"text.secondary"}
                mb={4}
            >
                {`1 ${fromCurrency.name} @${conversionRate} ${toCurrency.name}`}
            </Typography>
            <Grid container spacing={2} mb={1}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="from">From</InputLabel>
                        <Select
                            label={"USD"}
                            defaultValue={"usd"}
                            small={"large"}
                            fullWidth
                            onChange={changeFromCurrency}
                        >
                            {
                                currencies.map((currency, key) => {
                                    return <MenuItem key={key} value={currency.code}>{currency.name}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="to">To</InputLabel>
                        <Select
                            label={"INR"}
                            defaultValue={"inr"}
                            small={"large"}
                            onChange={changeToCurrency}
                        >
                            {
                                currencies.map((currency, key) => {
                                    return <MenuItem key={key} value={currency.code}>{currency.name}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            size={"large"}
                            label="Amount"
                            placeholder={"Amount"}
                            value={amount}
                            margin={"dense"}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </JumboCardQuick>
    );
};

export default CurrencyCalculator;
