import React from 'react';
import BasicButton from "./BasicButton";
import TextButton from "./TextButton";
import ContainedButtons from "./ContainedButtons";
import OutlinedButtons from "./OutlinedButtons";
import ColorButtons from "./ColorButtons";
import ButtonSizes from "./ButtonSizes";
import UploadButtons from "./UploadButtons";
import Masonry from "@mui/lab/Masonry";
import IconLabelButtons from "./IconLabelButtons";
import IconButtons from "./IconButtons";
import IconButtonSizes from "./IconButtonSizes";
import IconButtonColors from "./IconButtonColors";
import LoadingButtons from "./LoadingButtons";
import LoadingButtonsTransition from "./LoadingButtonsTransition";
import ButtonBases from "./ButtonBases";


const Buttons = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <BasicButton/>
            <TextButton/>
            <ContainedButtons/>
            <OutlinedButtons/>
            <ColorButtons/>
            <ButtonSizes/>
            <UploadButtons/>
            <IconLabelButtons/>
            <IconButtons/>
            <IconButtonSizes/>
            <IconButtonColors/>
            <LoadingButtons/>
            <LoadingButtonsTransition/>
            <ButtonBases/>
        </Masonry>

    );
};

export default Buttons;
