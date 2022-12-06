import React from 'react';
import Masonry from "@mui/lab/Masonry";
import BasicButtonGroup from "./BasicButtonGroup";
import VariantButtonGroup from "./VariantButtonGroup";
import GroupSizesColors from "./GroupSizesColors";
import GroupOrientation from "./GroupOrientation";
import SplitButton from "./SplitButton";
import DisableElevation from "./DisableElevation";

const ButtonsGroup = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <BasicButtonGroup/>
            <VariantButtonGroup/>
            <GroupSizesColors/>
            <GroupOrientation/>
            <SplitButton/>
            <DisableElevation/>
        </Masonry>
    );
};

export default ButtonsGroup;
