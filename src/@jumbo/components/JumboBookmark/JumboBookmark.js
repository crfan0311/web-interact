import React from 'react';
import {IconButton} from "@mui/material";
import PropTypes from "prop-types";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const JumboBookmark = ({value, onChange, sx}) => {
    const [bookmark, setBookmark] = React.useState(value);

    React.useEffect(() => {
        onChange(bookmark);
    }, [bookmark, onChange]);

    const handleClick = () => {
        setBookmark(!bookmark);
    };

    return (
        <IconButton onClick={handleClick} sx={sx}>
            {
                bookmark ? (
                    <StarIcon fontSize={'small'} color={'warning'}/>
                ) : (
                    <StarBorderIcon fontSize={'small'}/>
                )
            }
        </IconButton>
    );
};
JumboBookmark.defaultProps = {
    onChange: () => {
    }
};

JumboBookmark.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func,
    sx: PropTypes.object,
}
export default JumboBookmark;
