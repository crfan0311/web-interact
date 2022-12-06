import React from 'react';
import Button from "@mui/material/Button";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/title-with-text.txt";

const TitleWithText = () => {
    const Swal = useSwalWrapper();
    const sweetAlerts = () => {
        Swal.fire({
            title: 'Good job!',
            text: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        });
    };
    return (
        <JumboDemoCard title={"Title with text"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
            <Button variant={"outlined"} onClick={sweetAlerts}>Click me</Button>
        </JumboDemoCard>
    );
};

export default TitleWithText;
