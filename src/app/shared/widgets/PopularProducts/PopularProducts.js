import React from 'react';
import {menuItems, productsData} from "./data";
import Product from "./Product";
import {CardActions, List} from "@mui/material";
import Button from "@mui/material/Button";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";
import {useTranslation} from "react-i18next";

const PopularProducts = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.popularProducts')}
            subheader={t('widgets.subheader.popularProducts')}
            action={<JumboDdMenu menuItems={menuItems}/>}
            noWrapper
        >
            <List
                disablePadding
                sx={{
                    display: 'flex',
                    minWidth: 0,
                    flexWrap: 'wrap'
                }}
            >
                {
                    productsData.map((item, key) => <Product key={key} product={item}/>)
                }
            </List>
            <CardActions sx={{pt: 0}}>
                <Button variant={"text"}>View all</Button>
            </CardActions>

        </JumboCardQuick>
    );
};

export default PopularProducts;
