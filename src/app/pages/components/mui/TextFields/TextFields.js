import React from 'react';
import {Grid} from "@mui/material";
import BasicTextFields from "./BasicTextFields";
import FormPropsTextFields from "./FormPropsTextFields";
import ValidationTextFields from "./ValidationTextFields";
import MultilineTextFields from "./MultilineTextFields";
import SelectTextFields from "./SelectTextFields";
import InputWithIcon from "./InputWithIcon";
import InputAdornments from "./InputAdornments";
import TextFieldSizes from "./TextFieldSizes";
import LayoutTextFields from "./LayoutTextFields";
import FullWidthTextFields from "./FullWidthTextFields";
import InputTextFields from "./InputTextFields";
import StateTextFields from "./StateTextFields";
import ComposedTextFields from "./ComposedTextFields";
import ColorTextFields from "./ColorTextFields";
import Masonry from "@mui/lab/Masonry";

const TextFields = () => {
    return (
        <React.Fragment>
            <Grid container spacing={3.75}>
                <Grid item xs={12} lg={6}>
                    <BasicTextFields/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <ColorTextFields/>
                </Grid>
                <Grid item xs={12}>
                    <FormPropsTextFields/>
                </Grid>
                <Grid item xs={12}>
                    <MultilineTextFields/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <ValidationTextFields/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <SelectTextFields/>
                </Grid>
                <Grid item xs={12}>
                    <InputAdornments/>
                </Grid>
            </Grid>

            <Masonry
                spacing={3.75}
                columns={{xs: 1, lg: 2}}
                sx={{minWidth: '100%', width: 'auto', mt: 2}}
            >

                <TextFieldSizes/>
                <LayoutTextFields/>
                <InputWithIcon/>
                <FullWidthTextFields/>
                <StateTextFields/>
                <ComposedTextFields/>
                <InputTextFields/>
            </Masonry>
        </React.Fragment>
    );
};

export default TextFields;
