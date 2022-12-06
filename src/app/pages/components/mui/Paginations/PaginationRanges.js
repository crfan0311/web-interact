import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Pagination, Stack} from "@mui/material";
import code from "../Paginations/demo-code/pagination-ranges.txt";

const PaginationRanges = () => {
    return (
        <JumboDemoCard title={"Pagination Range"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>

            <Stack spacing={2}>
                <Pagination count={11} defaultPage={6} siblingCount={0}/>
                <Pagination count={11} defaultPage={6}/> {/* Default ranges */}
                <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2}/>
                <Pagination count={11} defaultPage={6} boundaryCount={2}/>
            </Stack>
        </JumboDemoCard>
    );
};

export default PaginationRanges;
