import React from 'react';
import {useField} from "formik";
import FormHelperText from "@mui/material/FormHelperText";
import useJumboTheme from "@jumbo/hooks/useJumboTheme";
import Select from "@mui/material/Select";

const JumboSelectField = (props) => {
    const {theme} = useJumboTheme();
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        <React.Fragment>
            <Select {...props} {...field} error={!!errorText} />
            {!props.disabled && (
                <FormHelperText style={{color: theme.palette.error.main}}>{errorText}</FormHelperText>
            )}
        </React.Fragment>
    );
};

export default JumboSelectField;