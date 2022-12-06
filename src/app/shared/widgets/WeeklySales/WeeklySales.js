import React, {useReducer, useState} from 'react';
import ProductSalesList from "./ProductSalesList";
import {productsList} from "./data";
import ProductSelectionControl from "./ProductSelectionControl";
import {reducer} from "./reducer";
import ChartReport from "./components/ChartReport";
import {IconButton, Tooltip, Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import Div from "@jumbo/shared/Div";
import {ASSET_IMAGES} from "../../../utils/constants/paths";

const init = (products) => {
    return [products[0], products[1], products[2], products[3], products[4]];
}
const WeeklySales = () => {
    const {t} = useTranslation();
    const [selectedProducts, dispatch] = useReducer(reducer, productsList, init);
    const [showChart, setShowChart] = useState(false);

    const onSelectionChanged = (checked, value) => {
        const item = productsList.find(item => item.id.toString() === value);
        dispatch({type: checked ? "ADD_PRODUCT" : "REMOVE_PRODUCT", payload: item});
    };

    return (
        <JumboCardQuick
            title={t('widgets.title.weeklySales')}
            subheader={t('widgets.subheader.weeklySales')}
            action={
                <Tooltip
                    title={
                        selectedProducts.length > 0 ? "Chart view" : "No data available"
                    }
                    arrow
                    placement={"top"}
                    sx={{
                        '& .MuiTooltip-arrow': {
                            marginTop: '-0.65em'
                        }
                    }}
                >
                    <IconButton onClick={() => setShowChart(!showChart)}>
                        <InsertChartOutlinedIcon/>
                    </IconButton>
                </Tooltip>

            }
            wrapperSx={{p: 0}}
        >
            {
                showChart ?
                    <JumboScrollbar
                        autoHeight={true}
                        autoHideTimeout={4000}
                        autoHeightMin={334}
                        autoHide={true}
                        hideTracksWhenNotNeeded
                    >
                        <ChartReport data={selectedProducts}/>
                    </JumboScrollbar>
                    :
                    <React.Fragment>
                        <ProductSelectionControl
                            items={productsList}
                            selectedItems={selectedProducts}
                            onSelectedChanged={onSelectionChanged}
                        />
                        {
                            selectedProducts.length > 0
                                ?
                                <ProductSalesList products={selectedProducts}/>
                                :
                                <Div
                                    sx={{
                                        p: 3,
                                    }}
                                >
                                    <img alt={'Chart'} src={`${ASSET_IMAGES}/pie-chart.svg`} width={150}/>
                                    <Typography variant={"h5"} color={'text.secondary'}>No products added to report</Typography>
                                </Div>
                        }
                    </React.Fragment>
            }
        </JumboCardQuick>);
};

export default WeeklySales;
