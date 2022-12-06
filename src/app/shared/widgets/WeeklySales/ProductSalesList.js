import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import ProductSaleItem from "./ProductSaleItem";
import styled from "@emotion/styled";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    borderBottom: "none",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
}));

const ProductSalesList = ({products}) => {

    return (
        <JumboScrollbar
            autoHeight={true}
            autoHideTimeout={4000}
            autoHeightMin={274}
            autoHide={true}
            hideTracksWhenNotNeeded
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell sx={{pl: 3}}>Product</StyledTableCell>
                        <StyledTableCell align={"right"}>Sales</StyledTableCell>
                        <StyledTableCell/>
                        <StyledTableCell sx={{pr: 3}} align={"right"}>Revenue</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map((product, index) => (
                            <ProductSaleItem item={product} key={index}/>
                        ))
                    }
                </TableBody>
            </Table>
        </JumboScrollbar>
    );
};
/* Todo products prop define */
export default ProductSalesList;
