import React from 'react';
import Button from "@mui/material/Button";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/alert-type.txt";
import Stack from "@mui/material/Stack";

const AlertsType = () => {
    const Swal = useSwalWrapper();
    const sweetAlerts = variant => {
        Swal.fire({
            icon: variant,
            title: variant,
            text: 'You clicked the button!',
        });
    };
    return (
        <JumboDemoCard title={"Alert Types"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
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

export default AlertsType;
