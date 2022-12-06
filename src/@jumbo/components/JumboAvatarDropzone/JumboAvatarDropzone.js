import React from 'react';
import PropTypes from "prop-types";

import {useDropzone} from "react-dropzone";
import Avatar from "@mui/material/Avatar";

const JumboAvatarDropzone = ({src, alt, onFileSelection, sx}) => {
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            onFileSelection(URL.createObjectURL(acceptedFiles[0]));
        },
    });

    return (
        <div {...getRootProps({className: 'dropzone pointer'})} >
            <input {...getInputProps()} />
            <Avatar alt={alt} src={src} sx={sx}/>
        </div>
    );
};

JumboAvatarDropzone.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    onFileSelection: PropTypes.func,
    sx: PropTypes.object,
};

export default JumboAvatarDropzone;
