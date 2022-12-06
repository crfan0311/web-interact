import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Breadcrumbs} from "@mui/material";
import Link from "@mui/material/Link";
import code from "../Breadcrumbs/demo-code/active-breadcrumbs.txt";

const ActiveLastBreadcrumbs = () => {
    const handleClick = (event) => {
        event.preventDefault();
    };
    return (
        <JumboDemoCard
            title={"Active Last Breadcrumbs"}
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
                    <Link
                        underline="hover"
                        color="text.primary"
                        href="/material-ui/react-breadcrumbs/"
                        aria-current="page"
                    >
                        Breadcrumbs
                    </Link>
                </Breadcrumbs>
            </div>
        </JumboDemoCard>
    );
};

export default ActiveLastBreadcrumbs;
