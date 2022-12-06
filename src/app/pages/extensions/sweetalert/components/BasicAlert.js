import React from 'react';
import Button from "@mui/material/Button";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/basic-alert.txt";

const BasicAlert = () => {
    const Swal = useSwalWrapper();
    const sweetAlerts = () => {
        Swal.fire({
            title: "You clicked the button",
        });
    };
    return (
        <JumboDemoCard title={"Basic"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
            <Button variant={"outlined"} onClick={sweetAlerts}>Click me</Button>
        </JumboDemoCard>
    );
};

export default BasicAlert;
