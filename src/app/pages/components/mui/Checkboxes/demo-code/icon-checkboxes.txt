import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import code from "../Checkboxes/demo-code/icon-checkboxes.txt";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};
const IconCheckboxes = () => {
    return (
        <JumboDemoCard title={"Icon"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <Checkbox {...label} icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
                <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon/>}
                    checkedIcon={<BookmarkIcon/>}
                />
            </Div>
        </JumboDemoCard>
    );
};

export default IconCheckboxes;
