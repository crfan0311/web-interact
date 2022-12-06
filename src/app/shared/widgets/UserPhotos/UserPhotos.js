import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import PictureItem from "./PictureItem";
import {userPhotos} from "./data";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {useTranslation} from "react-i18next";
import ImageList from "@mui/material/ImageList";
import Div from "@jumbo/shared/Div";

const UserPhotos = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t("widgets.title.pictures")}
            wrapperSx={{p: 0}}
        >
            <JumboScrollbar autoHeight autoHideTimeout={200} autoHeightMin={358} autoHide>
                <Div sx={{px: 3}}>
                    <ImageList cols={3} gap={16} sx={{width: '100%', height: 'auto', my: 0}}>
                        {
                            userPhotos.map((item, index) => (
                                <PictureItem item={item} key={index} />
                            ))
                        }
                    </ImageList>
                </Div>
            </JumboScrollbar>
        </JumboCardQuick>
    );
};

export default UserPhotos;
