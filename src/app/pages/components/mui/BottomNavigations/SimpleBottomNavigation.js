import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import code from "../BottomNavigations/demo-code/simple-bottom-navigation";

const SimpleBottomNavigation = () => {
    const [value, setValue] = React.useState(0);
    return (
        <JumboDemoCard
            title={"Simple Bottom Navigation"}
            demoCode={code}
        >
            <Div sx={{ width: '500px', maxWidth: '100%'}}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
                </BottomNavigation>
            </Div>
        </JumboDemoCard>
    );
};

export default SimpleBottomNavigation;
