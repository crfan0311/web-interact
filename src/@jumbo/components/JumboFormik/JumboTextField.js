import React from 'react';
import {useField} from "formik";
import TextField from "@mui/material/TextField";

//todo: to see how to define prop-types for this component

const JumboTextField = (props) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <TextField
            {...props}
            {...field}
            helperText={errorText}
            error={!!errorText}
        />
    );
};

export default JumboTextField;