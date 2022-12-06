import React from 'react';
import Button from "@mui/material/Button";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/custom-html-message.txt";

const CustomHtmlMessage = () => {
    const Swal = useSwalWrapper();
    const sweetAlerts = () => {
        Swal.fire({
            title: '<strong>HTML <u>example</u></strong>',
            icon: 'info',
            html: 'You can use <b>bold text</b>, <a href="//sweetalert2.github.io">links</a> and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Great!',
            confirmButtonAriaLabel: 'great!',
            cancelButtonText: 'Cancel',
            cancelButtonAriaLabel: 'cancel',
        });
    };
    return (
        <JumboDemoCard title={"Custom HTML Message"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
            <Button variant={"outlined"} onClick={sweetAlerts}>Click me</Button>
        </JumboDemoCard>
    );
};

export default CustomHtmlMessage;
