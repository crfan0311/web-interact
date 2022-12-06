import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {IconButton} from "@mui/material";
import {styled} from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import code from "./demo-code/customized-badge.txt";

const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const CustomizedBadge = () => {
    return (

        <JumboDemoCard
            title={"Customized"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon/>
                </StyledBadge>
            </IconButton>
        </JumboDemoCard>
    );
};
export default CustomizedBadge;
