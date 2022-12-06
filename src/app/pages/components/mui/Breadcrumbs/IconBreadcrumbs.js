import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Breadcrumbs, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import code from "../Breadcrumbs/demo-code/icon-breadcurmbs.txt";

const IconBreadcrumbs = () => {
    const handleClick = (event) => {
        event.preventDefault();
    };
    return (
        <JumboDemoCard
            title={"Icon Breadcrumbs"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{display: 'flex', alignItems: 'center'}}
                        color="inherit"
                        href="/"
                    >
                        <HomeIcon sx={{mr: 0.5}} fontSize="inherit"/>
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        sx={{display: 'flex', alignItems: 'center'}}
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        <WhatshotIcon sx={{mr: 0.5}} fontSize="inherit"/>
                        Core
                    </Link>
                    <Typography
                        sx={{display: 'flex', alignItems: 'center'}}
                        color="text.primary"
                    >
                        <GrainIcon sx={{mr: 0.5}} fontSize="inherit"/>
                        Breadcrumb
                    </Typography>
                </Breadcrumbs>
            </div>
        </JumboDemoCard>
    );
};

export default IconBreadcrumbs;
