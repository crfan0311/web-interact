import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Breadcrumbs, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import code from "../Breadcrumbs/demo-code/collapse-breadcrumbs.txt";

const CollapsedBreadcrumbs = () => {
    const handleClick = (event) => {
        event.preventDefault();
    };
    return (
        <JumboDemoCard
            title={"Collapsed Breadcrumbs"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="#">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Catalog
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        Accessories
                    </Link>
                    <Link underline="hover" color="inherit" href="#">
                        New Collection
                    </Link>
                    <Typography color="text.primary">Belts</Typography>
                </Breadcrumbs>
            </div>
        </JumboDemoCard>
    );
};

export default CollapsedBreadcrumbs;
