import React from 'react';
import BasicCheckboxes from "./BasicCheckboxes";
import CheckboxLabels from "./CheckboxLabels";
import SizeCheckboxes from "./SizeCheckboxes";
import ColorCheckboxes from "./ColorCheckboxes";
import IconCheckboxes from "./IconCheckboxes";
import IndeterminateCheckboxes from "./IndeterminateCheckboxes";
import CheckboxesGroup from "./CheckboxesGroup";
import FormControlledPosition from "./FormControlledPosition";
import Masonry from "@mui/lab/Masonry";

const Checkboxes = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{ xs: 1, lg: 2 }}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <BasicCheckboxes/>
            <CheckboxLabels/>
            <SizeCheckboxes/>
            <ColorCheckboxes/>
            <IconCheckboxes/>
            <IndeterminateCheckboxes/>
            <CheckboxesGroup/>
            <FormControlledPosition/>
        </Masonry>
    );
};

export default Checkboxes;
