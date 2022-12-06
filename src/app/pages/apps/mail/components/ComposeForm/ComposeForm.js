import React from 'react';
import {Box, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useMutation} from "react-query";
import {mailServices} from "../../../../../services/mail-services";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";

const ComposeForm = ({mailItem, onSave}) => {
    const Swal = useSwalWrapper();
    const [to, setTo] = React.useState();
    const [subject, setSubject] = React.useState();
    const [message, setMessage] = React.useState(mailItem ? mailItem?.message : "");

    const addMailMutation = useMutation(mailServices.addMail, {
        onSuccess: () => {
            onSave();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Mail has been sent successfully.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
    const onSendMessage = () => {
        addMailMutation.mutate({to, subject, message});
    }
    return (
        <Box component={'form'}
            sx={{
                '& > .MuiFormControl-root': {
                    marginBottom: 2
                }
            }}
        >
            <TextField
                fullWidth
                size={"small"}
                type={"email"}
                placeholder={"To"}
                value={to}
                onChange={(e) => setTo(e.target.value)}
            />
            <TextField
                fullWidth
                size={"small"}
                placeholder={"Subject"}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
                fullWidth
                multiline
                rows={3}
                maxRows={4}
                placeholder={"Message"}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant={"contained"} onClick={onSendMessage}>Send</Button>
        </Box>
    );
};
/* Todo mailItem, onSave prop define */
export default ComposeForm;
