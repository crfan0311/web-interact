import React from 'react';
import Button from "@mui/material/Button";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/auto-close-alert.txt";

const AutoCloseAlert = () => {
    const Swal = useSwalWrapper();
    const sweetAlerts = () => {
        let timerInterval;
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b>&nbsp;</b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getContent();
                    if (content) {
                        const b = content.querySelector('b');
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            onClose: () => {
                clearInterval(timerInterval);
            },
        }).then(result => {
            if (result.dismiss === Swal.DismissReason.timer) {
            }
        });
    };
    return (
        <JumboDemoCard title={"Auto close alert"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
            <Button variant={"outlined"} onClick={sweetAlerts}>Click me</Button>
        </JumboDemoCard>
    );
};

export default AutoCloseAlert;
