import {InputBase, styled} from "@mui/material";

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '100%',
    paddingLeft:'10px',
    paddingTop:'0px',
    '& .MuiFormLabel-root':{
        paddingLeft:'30px',
        paddingTop:'10px'
    },
    '& .MuiInputBase-input':{
        marginLeft:'30px'
    },
    '& .Mui-focused label, .MuiAutocomplete-hasClearIcon label':{
        paddingLeft:'0px'
    }
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    display: 'flex',
    borderRadius: 24,
    boxShadow: theme.shadows[25],
    height:30,
    paddingLeft:'60px',

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        paddingLeft: `100px`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: 30,
        marginLeft:'30px'
    },
}));
