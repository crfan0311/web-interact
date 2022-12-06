import React from 'react';
import {Grid} from "@mui/material";
import BasicList from "./BasicList";
import SelectedList from "./SelectedList";
import NestedList from "./NestedList";
import FolderList from "./FolderList";
import InteractiveList from "./InteractiveList";
import AlignItemList from "./AlignItemList";
import CheckboxList from "./CheckboxList";
import CheckboxListSecondary from "./CheckboxListSecondary";
import SwitchList from "./SwitchList";
import GutterList from "./GutterList";
import VirtualizedList from "./VirtualizedList";
import PinnedSubheaderList from "./PinnedSubheaderList";
import InsetList from "./InsetList";
import CheckboxList1 from "./CheckboxList1";
import Masonry from "@mui/lab/Masonry";

const Lists = () => {
    return (
        <React.Fragment>
            <Grid container spacing={3.75} mb={3.75}>
                <Grid item xs={12} lg={6}>
                    <BasicList/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <SelectedList/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <NestedList/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <FolderList/>
                </Grid>
                <Grid item xs={12}>
                    <InteractiveList/>
                </Grid>
            </Grid>

            <Masonry
                spacing={3.75}
                columns={{xs: 1, lg: 2}}
                sx={{minWidth: '100%', width: 'auto'}}
            >
                <AlignItemList/>
                <CheckboxList/>
                <CheckboxList1/>
                <CheckboxListSecondary/>
                <SwitchList/>
                <PinnedSubheaderList/>
                <InsetList/>
                <GutterList/>
                <VirtualizedList/>
            </Masonry>
        </React.Fragment>
    );
};

export default Lists;
