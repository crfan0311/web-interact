import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Tabs/demo-code/icon-tabs.txt";

const IconTabs = () => {
    const [value, setValue] = React.useState(0);

    return (
        <JumboDemoCard title={"Icon Tabs"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tabs value={value} onChange={(event, newValue) => setValue(newValue)}>
                <Tab icon={<PhoneIcon/>} aria-label="phone"/>
                <Tab icon={<FavoriteIcon/>} aria-label="favorite"/>
                <Tab icon={<PersonPinIcon/>} aria-label="person"/>
            </Tabs>
        </JumboDemoCard>
    );
};
export default IconTabs;
