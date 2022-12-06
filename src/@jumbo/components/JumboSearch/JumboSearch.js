import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Div from "@jumbo/shared/Div";
import {useDebouncedCallback} from "beautiful-react-hooks";

const JumboSearch = ({onChange, value,sx}) => {
    const [searchKeywords, setSearchKeywords] = React.useState();
    const handleChange = useDebouncedCallback((event) => {
        setSearchKeywords(event.target.value);
    });

    React.useEffect(() => {
        onChange(searchKeywords);
    }, [searchKeywords]);

    React.useEffect(() => {
        return () => handleChange.cancel();
    });

    return (
        <Div sx={{
            position: 'relative',
            width: '100%',
            ...sx
        }}>
            <Div sx={{
                padding: theme => theme.spacing(0, 2),
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
            }}>
                <SearchIcon/>
            </Div>
            <InputBase
                sx={{
                    color: 'inherit',
                    display: 'flex',
                    borderRadius: 24,
                    backgroundColor: theme => theme.jumboComponents.JumboSearch.background,

                    '& .MuiInputBase-input': {
                        padding: theme => theme.spacing(1, 1, 1, 0),
                        // vertical padding + font size from searchIcon
                        paddingLeft: theme => `calc(1em + ${theme.spacing(4)})`,
                        transition: theme => theme.transitions.create('width'),
                        width: '100%',
                        height: 24
                    },
                }}
                placeholder="Search anything"
                inputProps={{'aria-label': 'search'}}
                onChange={handleChange}
                value={value}
            />
        </Div>
    );
};

export default React.memo(JumboSearch);
