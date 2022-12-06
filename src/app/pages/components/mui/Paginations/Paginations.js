import React from 'react';
import BasicPagination from "./BasicPagination";
import PaginationOutlined from "./PaginationOutlined";
import PaginationRounded from "./PaginationRounded";
import PaginationSize from "./PaginationSize";
import PaginationButtons from "./PaginationButtons";
import CustomIcons from "./CustomIcons";
import PaginationRanges from "./PaginationRanges";
import PaginationControlled from "./PaginationControlled";
import TablePaginationDemo from "./TablePaginationDemo";
import Masonry from "@mui/lab/Masonry";

const Paginations = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{ xs: 1, lg: 2 }}
            sx={{minWidth: '100%', width: 'auto'}}
        >
                <BasicPagination/>
                <PaginationOutlined/>
                <PaginationRounded/>
                <PaginationButtons/>
                <PaginationSize/>
                <PaginationRanges/>
                <TablePaginationDemo/>
                <PaginationControlled/>
                <CustomIcons/>
                {/*<PaginationLink/>*/}
        </Masonry>
    );
};

export default Paginations;
