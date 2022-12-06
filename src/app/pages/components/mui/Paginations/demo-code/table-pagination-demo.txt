import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import TablePagination from "@mui/material/TablePagination";
import code from "../Paginations/demo-code/table-pagination-demo.txt";

const TablePaginationDemo = () => {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0)
    }
    return (
        <JumboDemoCard title={"Table Pagination"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={(event, newPage) => setPage(newPage)}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </JumboDemoCard>
    );
};

export default TablePaginationDemo;
