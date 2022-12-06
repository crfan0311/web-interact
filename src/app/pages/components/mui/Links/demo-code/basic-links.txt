import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import Link from "@mui/material/Link";
import code from "../Links/demo-code/basic-links.txt";

const preventDefault = (event) => event.preventDefault();

const BasicLinks = () => {
    return (
        <JumboDemoCard title={"Basic Links"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div
                sx={{
                    typography: 'body1',
                    '& > :not(style) + :not(style)': {
                        ml: 2,
                    },
                }}
                onClick={preventDefault}
            >
                <Link href="#">Link</Link>
                <Link href="#" color="inherit">
                    {'color="inherit"'}
                </Link>
                <Link href="#" variant="body2">
                    {'variant="body2"'}
                </Link>
            </Div>
        </JumboDemoCard>
    );
};

export default BasicLinks;
