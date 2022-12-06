import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Tabs/demo-code/disabled-tabs.txt";

const DisabledTabs = () => {
    const [value, setValue] = React.useState(2);

    return (
        <JumboDemoCard title={"Disabled Tabs"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tabs value={value} onChange={(event, newValue) => setValue(newValue)}>
                <Tab label="Active"/>
                <Tab label="Disabled" disabled/>
                <Tab label="Active"/>
            </Tabs>
        </JumboDemoCard>
    );
};
export default DisabledTabs;
