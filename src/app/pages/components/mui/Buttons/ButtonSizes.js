import React from 'react';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import code from "./demo-code/size-button.txt";

const ButtonSizes = () => {
    return (
        <JumboDemoCard
            title={"Sizes"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Box sx={{'& button': {m: 1}}}>
                <Div>
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </Div>
                <Div>
                    <Button variant="outlined" size="small">
                        Small
                    </Button>
                    <Button variant="outlined" size="medium">
                        Medium
                    </Button>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>
                </Div>
                <Div>
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                    <Button variant="contained" size="medium">
                        Medium
                    </Button>
                    <Button variant="contained" size="large">
                        Large
                    </Button>
                </Div>
            </Box>
        </JumboDemoCard>
    );
};

export default ButtonSizes;
