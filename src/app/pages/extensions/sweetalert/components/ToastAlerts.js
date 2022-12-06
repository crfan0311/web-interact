import React from 'react';
import Button from "@mui/material/Button";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import {useTheme} from "@mui/material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/toast-alert.txt";
import Stack from "@mui/material/Stack";

const ToastAlerts = () => {
    const Swal = useSwalWrapper();
    const theme = useTheme();
    const sweetAlerts = variant => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: toast => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
        });
        Toast.fire({
            icon: variant,
            title: 'You clicked the button!',
            background: theme.palette.background.paper,
        });
    };
    return (
        <JumboDemoCard title={"Toast alerts"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
            <Stack direction={'row'} flexWrap={'wrap'} sx={{'& .MuiButton-root': {mb: 1, mr: 2}}}>
            <Button
                color={"success"}
                variant={"outlined"}
                onClick={() => sweetAlerts('success')}
            >Success</Button>

            <Button
                color={"error"}
                variant={"outlined"}
                onClick={() => sweetAlerts('error')}
            >Error</Button>

            <Button
                color={"warning"}
                variant={"outlined"}
                onClick={() => sweetAlerts('warning')}
            >Warning</Button>

            <Button
                color={"info"}
                variant={"outlined"}
                onClick={() => sweetAlerts('info')}
            >Information</Button>

            <Button
                color={"error"}
                variant={"outlined"}
                onClick={() => sweetAlerts('question')}
            >Question</Button>
            </Stack>
        </JumboDemoCard>
    );
};

export default ToastAlerts;
