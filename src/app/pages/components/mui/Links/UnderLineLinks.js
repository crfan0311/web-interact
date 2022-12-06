import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import Link from "@mui/material/Link";
import code from "../Links/demo-code/underline-links.txt";

const preventDefault = (event) => event.preventDefault();
const UnderLineLinks = () => {
    return (
        <JumboDemoCard title={"Underline Links"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    typography: 'body1',
                    '& > :not(style) + :not(style)': {
                        ml: 2,
                    },
                }}
                onClick={preventDefault}
            >
                <Link href="#" underline="none">
                    {'underline="none"'}
                </Link>
                <Link href="#" underline="hover">
                    {'underline="hover"'}
                </Link>
                <Link href="#" underline="always">
                    {'underline="always"'}
                </Link>
            </Div>
        </JumboDemoCard>
    );
};

export default UnderLineLinks;
