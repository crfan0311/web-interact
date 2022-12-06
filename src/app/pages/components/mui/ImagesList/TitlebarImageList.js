import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {titleBarImageDataItem} from "./data";
import {ImageListItemBar, ListSubheader} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import code from "../ImagesList/demo-code/titlebar-image-list.txt";

const TitlebarImageList = () => {
    return (
        <JumboDemoCard title={"Title bar Image List"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <ImageList sx={{width: 500, height: 450}}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">December</ListSubheader>
                </ImageListItem>
                {titleBarImageDataItem.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon/>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </JumboDemoCard>
    );
};

export default TitlebarImageList;
