import React from 'react';
import {useField} from "formik";
import JumboAvatarDropzone from "@jumbo/components/JumboAvatarDropzone";

const JumboAvatarField = (props) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';

    return (
        <JumboAvatarDropzone
            src={field.value}
            {...props}
            {...field}
            helperText={errorText}
            error={!!errorText}
        />
    );
};

export default JumboAvatarField;