import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Treeviews/demo-code/disabled-tree-item.txt";

const DisabledTreeItems = () => {
    const [focusDisabledItems, setFocusDisabledItems] = React.useState(false);
    const handleToggle = (event) => {
        setFocusDisabledItems(event.target.checked);
    };

    return (
        <JumboDemoCard title={"Disabled"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}>
                <Div sx={{mb: 1}}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={focusDisabledItems}
                                onChange={handleToggle}
                                name="focusDisabledItems"
                            />
                        }
                        label="Focus disabled items"
                    />
                </Div>
                <TreeView
                    aria-label="disabled items"
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpandIcon={<ChevronRightIcon/>}
                    disabledItemsFocusable={focusDisabledItems}
                    multiSelect
                >
                    <TreeItem nodeId="1" label="One">
                        <TreeItem nodeId="2" label="Two"/>
                        <TreeItem nodeId="3" label="Three"/>
                        <TreeItem nodeId="4" label="Four"/>
                    </TreeItem>
                    <TreeItem nodeId="5" label="Five" disabled>
                        <TreeItem nodeId="6" label="Six"/>
                    </TreeItem>
                    <TreeItem nodeId="7" label="Seven">
                        <TreeItem nodeId="8" label="Eight"/>
                        <TreeItem nodeId="9" label="Nine">
                            <TreeItem nodeId="10" label="Ten">
                                <TreeItem nodeId="11" label="Eleven"/>
                                <TreeItem nodeId="12" label="Twelve"/>
                            </TreeItem>
                        </TreeItem>
                    </TreeItem>
                </TreeView>
            </Div>
        </JumboDemoCard>
    );
};
export default DisabledTreeItems;
