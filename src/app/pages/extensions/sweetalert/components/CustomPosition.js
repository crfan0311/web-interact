import React from 'react';
import Button from "@mui/material/Button";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/custom-position.txt";

const CustomPosition = () => {
    const Swal = useSwalWrapper();
    const sweetAlerts = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            timer: 1500,
        });
    };
    return (
        <JumboDemoCard title={"Custom Position"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
            <Button variant={"outlined"} onClick={sweetAlerts}>Click me</Button>
        </JumboDemoCard>
    );
};

export default CustomPosition;
