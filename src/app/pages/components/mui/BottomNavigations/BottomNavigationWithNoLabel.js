import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import code from "../BottomNavigations/demo-code/bottom-navigation-label.txt";
import Div from "@jumbo/shared/Div";

const BottomNavigationWithNoLabel = () => {
    const [value, setValue] = React.useState(0);
    return (
        <JumboDemoCard title={"Bottom Navigation With No Label"} demoCode={code}>
            <Div sx={{width: '500px', maxWidth: '100%'}}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                >
                    <BottomNavigationAction icon={<RestoreIcon/>}/>
                    <BottomNavigationAction icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction icon={<LocationOnIcon/>}/>
                    <BottomNavigationAction icon={<FolderIcon/>}/>
                </BottomNavigation>
            </Div>
        </JumboDemoCard>
    );
};

export default BottomNavigationWithNoLabel;
