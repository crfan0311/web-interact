import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem, {useTreeItem} from '@mui/lab/TreeItem';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Treeviews/demo-code/icon-expansion-tree-view.txt";

const CustomContent = React.forwardRef(function CustomContent(props, ref) {
    const {
        classes,
        className,
        label,
        nodeId,
        icon: iconProp,
        expansionIcon,
        displayIcon,
    } = props;

    const {
        disabled,
        expanded,
        selected,
        focused,
        handleExpansion,
        handleSelection,
        preventSelection,
    } = useTreeItem(nodeId);

    const icon = iconProp || expansionIcon || displayIcon;

    return (
        <div
            className={clsx(className, classes.root, {
                [classes.expanded]: expanded,
                [classes.selected]: selected,
                [classes.focused]: focused,
                [classes.disabled]: disabled,
            })}
            onMouseDown={(event) => preventSelection(event)}
            ref={ref}
        >
            <div
                onClick={(event) => handleExpansion(event)}
                className={classes.iconContainer}
            >
                {icon}
            </div>
            <Typography
                onClick={(event) => handleSelection(event)}
                component="div"
                className={classes.label}
            >
                {label}
            </Typography>
        </div>
    );
});
const CustomTreeItem = (props) => (
    <TreeItem ContentComponent={CustomContent} {...props} />
);

const IconExpansionTreeView = () => {
    return (
        <JumboDemoCard
            title={"Icon Expansion"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <TreeView
                aria-label="icon expansion"
                defaultCollapseIcon={<ExpandMoreIcon/>}
                defaultExpandIcon={<ChevronRightIcon/>}
                sx={{height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}
            >
                <CustomTreeItem nodeId="1" label="Applications">
                    <CustomTreeItem nodeId="2" label="Calendar"/>
                    <CustomTreeItem nodeId="3" label="Chrome"/>
                    <CustomTreeItem nodeId="4" label="Webstorm"/>
                </CustomTreeItem>
                <CustomTreeItem nodeId="5" label="Documents">
                    <CustomTreeItem nodeId="10" label="OSS"/>
                    <CustomTreeItem nodeId="6" label="MUI">
                        <CustomTreeItem nodeId="7" label="src">
                            <CustomTreeItem nodeId="8" label="index.js"/>
                            <CustomTreeItem nodeId="9" label="tree-view.js"/>
                        </CustomTreeItem>
                    </CustomTreeItem>
                </CustomTreeItem>
            </TreeView>
        </JumboDemoCard>
    );
};
export default IconExpansionTreeView;
