import React from 'react';
import Badge from "@mui/material/Badge";
import {Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import {ReactCountryFlag} from 'react-country-flag';
import styled from "@emotion/styled";
import Span from "@jumbo/shared/Span";

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '& .MuiTableCell-root': {
        borderBottom: "none",
        paddingTop: theme.spacing(1.5),
        paddingBottom: theme.spacing(1.5),
    },

    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    }
}));

const CountriesList = ({countries}) => {
    return (
        <React.Fragment>
            <Typography variant={"h6"} color={"text.secondary"} sx={{ml: '4px'}}>Countries</Typography>
            <Table sx={{ml: -1}}>
                <TableBody>
                    {
                        countries.map((country, index) => {
                            return (
                                <StyledTableRow key={index}>
                                    <TableCell>
                                        <Span
                                            sx={{
                                                display: 'inline-block',
                                                verticalAlign: 'middle',
                                                mr: 1
                                            }}
                                        >
                                            <ReactCountryFlag
                                                countryCode={country.flagCode}
                                                svg
                                                style={{width: '1.5em', height: '1.5em'}}
                                            />
                                        </Span>
                                        {country.name}
                                    </TableCell>
                                    <TableCell>{country.visitors}</TableCell>
                                    <TableCell align={"right"}>
                                        <Badge
                                            overlap={'circular'}
                                            sx={{
                                                p: "4px",
                                                borderRadius: '50%',
                                                bgcolor: country.badgeColor,
                                            }}
                                        />
                                    </TableCell>
                                </StyledTableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </React.Fragment>
    );
};
/* Todo  countries prop define */
export default CountriesList;
