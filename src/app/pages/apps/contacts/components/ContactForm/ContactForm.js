import React from 'react';
import * as yup from "yup";
import {useMutation} from "react-query";
import {contactService} from "../../../../../services/contact-services";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import {Form, Formik} from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import JumboTextField from "@jumbo/components/JumboFormik/JumboTextField";
import JumboAvatarField from "@jumbo/components/JumboFormik/JumboAvatarField";
import Div from "@jumbo/shared/Div";

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});
const initialValues = {
    name: "",
    phone: "",
    email: "",
    profile_pic: "",
};

const ContactForm = ({contact, onSave}) => {
    const Swal = useSwalWrapper();

    const addContactMutation = useMutation(contactService.add, {
        onSuccess: () => {
            onSave();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Contact has been added successfully.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });

    const updateContactMutation = useMutation(contactService.update, {
        onSuccess: () => {
            onSave();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Contact has been updated successfully.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });

    const saveMutation = React.useMemo(() => {
        return contact?.id ? updateContactMutation : addContactMutation;
    }, [contact, updateContactMutation, addContactMutation]);

    const onContactSave = (data, {setSubmitting}) => {
        setSubmitting(true);
        saveMutation.mutate(data);
        setSubmitting(false);
    };
    return (
        <Formik
            validateOnChange={true}
            initialValues={contact?.id ? contact : initialValues}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={onContactSave}
        >
            {({isSubmitting, setFieldValue}) => (
                <Form noValidate autoComplete="off">
                    <Div
                        sx={{
                            '& .MuiTextField-root': {
                                mb: 3
                            },
                        }}
                    >
                        <JumboAvatarField
                            name={"profile_pic"}
                            alt={"user profile pic"}
                            onFileSelection={(file) => setFieldValue("profile_pic", file)}
                            sx={{width: 60, height: 60, margin: '0 auto 24px'}}
                        />
                        <JumboTextField fullWidth size="small" variant="outlined" name="name" label="Name"/>
                        <JumboTextField fullWidth size="small" variant="outlined" name="email" label="Email"/>
                        <JumboTextField fullWidth size="small" variant="outlined" name="designation" label="Job Title"/>
                        <JumboTextField fullWidthZ size="small" variant="outlined" name="company" label="Company"/>
                        <JumboTextField fullWidth size="small" variant="outlined" name="phone" label="Phone Number"/>
                        <LoadingButton
                            fullWidth
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{mb: 3}}
                            loading={isSubmitting || saveMutation.isLoading}
                        >Save</LoadingButton>
                    </Div>
                </Form>
            )}
        </Formik>
    );
};
ContactForm.defaultProps = {
    onSave: () => {
    }
};
export default ContactForm;
