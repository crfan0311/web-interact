import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Pagination, Stack} from "@mui/material";
import code from "../Paginations/demo-code/pagination-outlined.txt";

const PaginationOutlined = () => {
    return (
        <JumboDemoCard title={"Pagination Outlined"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined"/>
                <Pagination count={10} variant="outlined" color="primary"/>
                <Pagination count={10} variant="outlined" color="secondary"/>
                <Pagination count={10} variant="outlined" disabled/>
            </Stack>
        </JumboDemoCard>
    );
};

export default PaginationOutlined;
