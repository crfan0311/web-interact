import React from 'react';
import {IconButton, ImageListItemBar, Typography} from "@mui/material";

import {useJumboLayoutSidebar} from "@jumbo/hooks";
import {SIDEBAR_STYLES, SIDEBAR_VARIANTS, SIDEBAR_VIEWS} from "@jumbo/utils/constants/layout";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {ASSET_IMAGES} from "../../../../utils/constants/paths";

const layouts = [
    {
        name: "Layout 1",
        slug: "layout-1",
        variant: SIDEBAR_VARIANTS.PERSISTENT,
        style: SIDEBAR_STYLES.FULL_HEIGHT,
        view: SIDEBAR_VIEWS.FULL,
        open: true,
    },
    {
        name: "Layout 2",
        slug: "layout-2",
        variant: SIDEBAR_VARIANTS.PERSISTENT,
        style: SIDEBAR_STYLES.CLIPPED_UNDER_HEADER,
        view: SIDEBAR_VIEWS.FULL,
        open: true,
    },
    {
        name: "Layout 3",
        slug: "layout-3",
        variant: SIDEBAR_VARIANTS.TEMPORARY,
        style: SIDEBAR_STYLES.FULL_HEIGHT,
        view: SIDEBAR_VIEWS.FULL,
        open: false,
    },
    {
        name: "Layout 4",
        slug: "layout-4",
        variant: SIDEBAR_VARIANTS.PERMANENT,
        view: SIDEBAR_VIEWS.MINI,
        style: SIDEBAR_STYLES.FULL_HEIGHT,
        open: false
    }
];

const LayoutOptions = () => {
    const {sidebarOptions, setSidebarOptions} = useJumboLayoutSidebar();

    const handleSidebarChanges = React.useCallback((layout) => {
        setSidebarOptions({
            variant: layout.variant,
            style: layout?.style,
            view: layout?.view,
            open: layout?.open
        })
    }, [sidebarOptions, setSidebarOptions]);

    return (
        <JumboCardQuick
            title={<Typography variant={"h5"} mb={0}>Layout Options</Typography>}
            headerSx={{
                borderBottom: 1,
                borderColor: 'divider',
            }}
        >
            <ImageList sx={{m: 0}} cols={2} gap={16}>
                {
                    layouts.map((layout, index) => {
                        const selected = (layout.variant === sidebarOptions.variant && layout.style === sidebarOptions.style)
                        const imageSrc = `${ASSET_IMAGES}/jumbo-customizer/layouts/${layout.slug}.png`;

                        return (
                            <ImageListItem
                                key={`${index}-${layout.name}`}
                                onClick={() => handleSidebarChanges(layout)}
                                sx={{cursor: 'pointer',}}
                            >
                                <img
                                    src={`${imageSrc}?w=98&fit=crop&auto=format`}
                                    srcSet={`${imageSrc}?w=98fit=crop&auto=format&dpr=2 2x`}
                                    alt={layout.slug}
                                    loading="lazy"
                                />
                                {
                                    selected &&
                                    <ImageListItemBar
                                        actionIcon={
                                            <IconButton
                                                sx={{
                                                    color: '#4caf50'
                                                }}
                                                aria-label={`info about ${layout.label}`}
                                            >
                                                <CheckCircleIcon/>
                                            </IconButton>
                                        }
                                        sx={{
                                            top: 0,
                                            justifyContent: 'center',
                                            backgroundColor: 'transparent',
                                            '& .MuiImageListItemBar-titleWrap': {
                                                display: 'none'
                                            }
                                        }}
                                    />
                                }
                            </ImageListItem>
                        )
                    })
                }
            </ImageList>
        </JumboCardQuick>
    );
};

export default LayoutOptions;
