import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Pagination, Stack} from "@mui/material";
import code from "../Paginations/demo-code/basic-pagination.txt";

const BasicPagination = () => {
    return (
        <JumboDemoCard title={"Simple Pagination"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={2}>
                <Pagination count={10}/>
                <Pagination count={10} color="primary"/>
                <Pagination count={10} color="secondary"/>
                <Pagination count={10} disabled/>
            </Stack>
        </JumboDemoCard>
    );
};

export default BasicPagination;
