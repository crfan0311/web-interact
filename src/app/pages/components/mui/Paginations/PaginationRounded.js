import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Pagination, Stack} from "@mui/material";
import code from "../Paginations/demo-code/pagination-rounded.txt";

const PaginationRounded = () => {
    return (
        <JumboDemoCard title={"Pagination Rounded"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={2}>
                <Pagination count={10} shape="rounded"/>
                <Pagination count={10} variant="outlined" shape="rounded"/>
            </Stack>
        </JumboDemoCard>
    );
};

export default PaginationRounded;
