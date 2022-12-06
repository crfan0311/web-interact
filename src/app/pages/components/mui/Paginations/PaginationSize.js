import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Pagination, Stack} from "@mui/material";
import code from "../Paginations/demo-code/pagination-size.txt";

const PaginationSize = () => {
    return (
        <JumboDemoCard title={"Pagination Size"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={2}>
                <Pagination count={10} size="small"/>
                <Pagination count={10}/>
                <Pagination count={10} size="large"/>
            </Stack>
        </JumboDemoCard>
    );
};

export default PaginationSize;
