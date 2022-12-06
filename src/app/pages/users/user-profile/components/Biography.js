import React from 'react';
import {Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";

const Biography = () => {
    return (
        <JumboCardQuick
            title={"Biography"}
            subheader={"A little flash back of Kiley Brown"}
            headerSx={{pb: 0}}
            sx={{mb: 3.75}}
        >
            <Typography variant="h3" fontWeight="300" mb={2}>Donec dignissim gravida sem, ut cursus dolor hendrerit
                et. Morbi volutpat.</Typography>
            <Typography variant="body1" mb={2}>Augue mauris dignissim arcu, ut venenatis metus ante eu orci. Donec
                non maximus neque, ut finibus ex. Quisque semper ornare magna, sed ullamcorper risus luctus quis.
                Etiam tristique dui vitae diam rutrum sodales. Mauris feugiat lectus felis, nec ullamcorper risus
                elementum at. Aliquam erat volutpat. Nullam et est eget metus gravida tincidunt. Phasellus sed odio
                eu lacus venenatis.</Typography>
            <Typography variant="body1" mb={2}>Suspendisse vel bibendum ex. Interdum et malesuada fames ac ante
                ipsum primis in faucibus. Sed a felis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In molestie ultricies urna non volutpat. Nam fermentum cursus elit, et tempus metus scelerisque
                imperdiet. Sed tincidunt molestie justo, a vulputate velit sagittis at. Pellentesque consequat leo
                tortor.</Typography>
        </JumboCardQuick>
    );
};

export default Biography;
