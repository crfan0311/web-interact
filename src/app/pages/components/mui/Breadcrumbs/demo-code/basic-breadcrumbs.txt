import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Breadcrumbs, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import code from "../Breadcrumbs/demo-code/basic-breadcrumbs.txt";

const BasicBreadcrumbs = () => {

    const handleClick = (event) => {
        event.preventDefault();
    };
    return (
        <JumboDemoCard
            title={"Simple Breadcrumbs"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        MUI
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        Core
                    </Link>
                    <Typography color="text.primary">Breadcrumbs</Typography>
                </Breadcrumbs>
            </div>
        </JumboDemoCard>
    );
};

export default BasicBreadcrumbs;
