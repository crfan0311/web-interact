import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Link from "@mui/material/Link";
import code from "../Links/demo-code/button-link.txt";

const ButtonLink = () => {
    return (
        <JumboDemoCard title={"Button Link"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Link
                component="button"
                variant="body2"
                onClick={() => {
                    console.info("I'm a button.");
                }}
            >
                Button Link
            </Link>
        </JumboDemoCard>
    );
};

export default ButtonLink;
