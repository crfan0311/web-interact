import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Treeviews/demo-code/rich-object-tree-view.txt";

const data = {
    id: 'root',
    name: 'Parent',
    children: [
        {
            id: '1',
            name: 'Child - 1',
        },
        {
            id: '3',
            name: 'Child - 3',
            children: [
                {
                    id: '4',
                    name: 'Child - 4',
                },
            ],
        },
    ],
};

const RichObjectTreeView = () => {
    const renderTree = (nodes) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
            {Array.isArray(nodes.children)
                ? nodes.children.map((node) => renderTree(node))
                : null}
        </TreeItem>
    );

    return (
        <JumboDemoCard title={"Rich Object"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
                <TreeView
                    aria-label="rich object"
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpanded={['root']}
                    defaultExpandIcon={<ChevronRightIcon/>}
                    sx={{height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}
                >
                    {renderTree(data)}
                </TreeView>
        </JumboDemoCard>
    );
};
export default RichObjectTreeView;
