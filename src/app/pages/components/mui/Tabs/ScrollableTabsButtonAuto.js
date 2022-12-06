import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from "../Tabs/demo-code/scrollable-tabs-button.txt";

const ScrollableTabsButtonAuto = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <JumboDemoCard title={"Automatic Scroll Buttons"} demoCode={code}>
            <Div sx={{maxWidth: {xs: 320, sm: 480}, bgcolor: 'background.paper'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label="Item One"/>
                    <Tab label="Item Two"/>
                    <Tab label="Item Three"/>
                    <Tab label="Item Four"/>
                    <Tab label="Item Five"/>
                    <Tab label="Item Six"/>
                    <Tab label="Item Seven"/>
                </Tabs>
            </Div>
        </JumboDemoCard>
    );
};
export default ScrollableTabsButtonAuto;
