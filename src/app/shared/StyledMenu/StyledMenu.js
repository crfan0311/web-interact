import styled from "@mui/material/styles/styled";
import MenuList from "@mui/material/MenuList";

const StyledMenu = styled(MenuList)(({ theme }) => ({

    '& .MuiMenuItem-root': {
        minHeight: 20,

        '&::before, &.Mui-selected::before': {
            position: 'absolute',
            content: "''",
            width: 3,
            height: 0,
            backgroundColor: theme.palette.primary.main,
            left: '-1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'height 0.25s',
        },

        '&:hover': {
            color: theme.palette.primary.main,

            '&::before': {
                height: 22,
            }
        },

        '&.Mui-selected': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',

            '&::before': {
                height: 22,
            },
            '&:hover': {
                backgroundColor: 'transparent',
            }
        },

        '& .MuiLink-root': {
            whiteSpace: 'nowrap',
            color: 'inherit',
            display: 'flex',
            flex: 1,
            alignItems: 'center'
        }
    }
}));

export default StyledMenu;
