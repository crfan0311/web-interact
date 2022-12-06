import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Pagination, Stack} from "@mui/material";
import code from "../Paginations/demo-code/pagination-buttons.txt";

const PaginationButtons = () => {
    return (
        <JumboDemoCard title={"Pagination Button"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={2}>
                <Pagination count={10} showFirstButton showLastButton/>
                <Pagination count={10} hidePrevButton hideNextButton/>
            </Stack>
        </JumboDemoCard>
    );
};

export default PaginationButtons;
