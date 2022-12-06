import React from 'react';
import FileSystemNavigator from "./FileSystemNavigator";
import MultiSelectTreeView from "./MultiSelectTreeView";
import ControlledTreeView from "./ControlledTreeView";
import RichObjectTreeView from "./RichObjectTreeView";
import IconExpansionTreeView from "./IconExpansionTreeView";
import BarTreeView from "./BarTreeView";
import GmailTreeView from "./GmailTreeView";
import DisabledTreeItems from "./DisabledTreeItems";
import Masonry from "@mui/lab/Masonry";

const Treeviews = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <FileSystemNavigator/>
            <MultiSelectTreeView/>
            <ControlledTreeView/>
            <RichObjectTreeView/>
            <IconExpansionTreeView/>
            <BarTreeView/>
            <GmailTreeView/>
            <DisabledTreeItems/>
        </Masonry>
    );
};

export default Treeviews;
