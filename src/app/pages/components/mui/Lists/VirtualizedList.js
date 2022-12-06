import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {FixedSizeList} from "react-window";
import {ListItem, ListItemText} from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import code from "../Lists/demo-code/virtualized-list.txt";

function renderRow(props) {
    const {index, style} = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Item ${index + 1}`}/>
            </ListItemButton>
        </ListItem>
    );
}

const VirtualizedList = () => {
    return (
        <JumboDemoCard title={"Virtualized List"} demoCode={code}>
            <Div sx={{width: '100%', height: 280, maxWidth: 360, bgcolor: 'background.paper'}}>
                <FixedSizeList
                    height={280}
                    width={360}
                    itemSize={46}
                    itemCount={200}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Div>
        </JumboDemoCard>
    );
};

export default VirtualizedList;
