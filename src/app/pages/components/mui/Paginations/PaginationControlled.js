import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Pagination, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import code from "../Paginations/demo-code/pagination-controlled.txt";

const PaginationControlled = () => {
    const [page, setPage] = React.useState(1);

    return (
        <JumboDemoCard title={"Pagination Controlled"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination
                    count={10}
                    page={page}
                    onChange={(event, value) => setPage(value)}
                />
            </Stack>
        </JumboDemoCard>
    );
};

export default PaginationControlled;
