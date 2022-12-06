import {TableCell, TableRow} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import React from "react";
import styled from "@emotion/styled";
import Span from "@jumbo/shared/Span";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '& .MuiTableCell-root': {
        borderBottom: "none",
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
    },

    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },

    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    }
}));

const ProductSaleItem = ({item}) => {

    return (
        <StyledTableRow key={item.name}>
            <TableCell sx={{pl: theme => theme.spacing(3)}}>
                {item.name}
            </TableCell>
            <TableCell align="right">{item.sales_data.sold_qty}</TableCell>
            <TableCell align="left">
                <Span sx={{whiteSpace: 'nowrap'}}>
                    {item.sales_data.sales_inflation}%
                    {item.sales_data.sales_inflation > 0 ? <TrendingUpIcon sx={{ml: 1, verticalAlign: 'middle'}} fontSize={"small"} color='success'/> :
                        <TrendingDownIcon sx={{ml: 1, verticalAlign: 'middle'}} fontSize={"small"} color='error'/>
                    }
                </Span>
            </TableCell>
            <TableCell align="right" sx={{pr: theme => theme.spacing(3)}}>${item.sales_data.income}</TableCell>
        </StyledTableRow>

    );
};
/* Todo item prop define */
export default ProductSaleItem;
