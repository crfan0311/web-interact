import React from 'react';
import ListDividers from "./ListDividers";
import InsetDividers from "./InsetDividers";
import SubheaderDividers from "./SubheaderDividers";
import MiddleDividers from "./MiddleDividers";
import VerticalDividers from "./VerticalDividers";
import Masonry from "@mui/lab/Masonry";

const Dividers = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{ xs: 1, lg: 2 }}
            sx={{minWidth: '100%', width: 'auto'}}
        >
               <ListDividers/>
               <InsetDividers/>
               <SubheaderDividers/>
               <MiddleDividers/>
               <VerticalDividers/>
       </Masonry>
    );
};

export default Dividers;
