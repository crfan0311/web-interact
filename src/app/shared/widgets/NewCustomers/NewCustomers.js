import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import Div from "@jumbo/shared/Div";
import Customer from "./Customer";

const NewCustomers = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t("widgets.title.newCustomer")}
            wrapperSx={{pt: 2}}
        >
            <Div sx={{display: 'flex', pb: '2px'}}>
                <Customer/>
            </Div>
        </JumboCardQuick>
    );
};

export default NewCustomers;
