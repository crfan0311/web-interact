import React from 'react';
import {useMutation} from "react-query";
import {mailServices} from "../../../../../services/mail-services";
import {Form, Formik} from "formik";
import * as yup from "yup";
import Div from "@jumbo/shared/Div";
import JumboTextField from "@jumbo/components/JumboFormik/JumboTextField";
import JumboColorPickerField from "@jumbo/components/JumboFormik/JumboColorPickerField";
import LoadingButton from "@mui/lab/LoadingButton";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";

const validationSchema = yup.object({
    name: yup
        .string("Enter your name")
        .required("Name is Required")
});
const initialValues = {
    name: '',
    color: "#999999"
};
const LabelForm = ({label, onSave}) => {
    const Swal = useSwalWrapper();
    const addLabelMutation = useMutation(mailServices.addLabel, {
        onSuccess: () => {
            onSave();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Label is added successfully.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });

    const updateLabelMutation = useMutation(mailServices.updateLabel, {
        onSuccess: () => {
            onSave(true);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Label is updated successfully.',
                showConfirmButton: false,
                timer: 1500
            })
        }
    });
    const saveMutation = label?.id ? updateLabelMutation : addLabelMutation;

    const onLabelSave = (data, {setSubmitting}) => {
        setSubmitting(true);
        saveMutation.mutate(data);
        setSubmitting(false);
    }
    return (
        <Formik
            validateOnChange={true}
            enableReinitialize={true}
            initialValues={label?.id ? label : initialValues}
            onSubmit={onLabelSave}
            validationSchema={validationSchema}
        >
            {({isSubmitting, setFieldValue}) => (
                <Form noValidate autoComplete="off">
                    <Div
                        sx={{
                            display: 'flex',
                            flex: 1,
                            minWidth: 0,
                            alignItems: 'flex-start',
                            mb: 2
                        }}
                    >
                        <JumboTextField
                            fullWidth
                            size={"small"}
                            variant={"outlined"}
                            name='name'
                            label="Name"
                            sx={{
                                mr: 1
                            }}
                        />
                        <JumboColorPickerField
                            name="color"
                            onChange={color => {
                                setFieldValue("color", color)
                            }}
                        />
                    </Div>
                    <LoadingButton
                        type='submit'
                        variant={'contained'}
                        size={'large'}
                        loading={isSubmitting || saveMutation.isLoading}
                        disableElevation
                        sx={{
                            mb: 1
                        }}
                    >
                        Save
                    </LoadingButton>

                </Form>
            )}
        </Formik>
    );
};
/* Todo label, onSave prop define */
export default LabelForm;
