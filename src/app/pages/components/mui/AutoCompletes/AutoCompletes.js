import React from 'react';
import CountrySelect from "./CountrySelect";
import MultipleCountrySelect from "./MultipleCountrySelect";
import CheckboxesTags from "./CheckboxesTags";
import FreeSolo from "./FreeSolo";
import ControllableState from "./ControllableState";
import Grouped from "./Grouped";
import ComboBox from "./ComboBox";
import LimitsTag from "./LimitsTag";
import Masonry from "@mui/lab/Masonry";

const AutoCompletes = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{ xs: 1, lg: 2 }}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <ComboBox/>
            <CountrySelect/>
            <MultipleCountrySelect/>
            <CheckboxesTags/>
            <FreeSolo/>
            <ControllableState/>
            <Grouped/>
            <LimitsTag/>
        </Masonry>
    );
};

export default AutoCompletes;
