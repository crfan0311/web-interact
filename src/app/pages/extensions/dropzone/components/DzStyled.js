import React from 'react';
import {useDropzone} from "react-dropzone";
import DndWrapper from "./DndWrapper";
import {Typography} from "@mui/material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/dz-styled.txt";
import Div from "@jumbo/shared/Div";

const baseStyle = {
    borderColor: '#eeeeee',
    color: '#bdbdbd',
};
const activeStyle = {
    borderColor: '#2196f3',
};
const acceptStyle = {
    borderColor: '#00e676',
};
const rejectStyle = {
    borderColor: '#ff1744',
};

const DzStyled = () => {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({accept: 'image/*'});

    const style = React.useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragReject, isDragAccept],
    );

    return (
        <JumboDemoCard
            title={"Styling dropzone"}
            demoCode={code}
            wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}
        >
            <Div sx={{flex: 1}}>
                <DndWrapper sx={{borderColor: theme => theme.palette.action.hover}}>
                    <div {...getRootProps({style})}>
                        <input {...getInputProps()} />
                        <Typography variant={"body1"}>Drag 'n' drop some files here, or click to select
                            files</Typography>
                    </div>
                </DndWrapper>
            </Div>
        </JumboDemoCard>
    );
};

export default DzStyled;
