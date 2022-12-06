import React from 'react';
import {Form, Formik} from "formik";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Div from "@jumbo/shared/Div";
import * as yup from "yup";
import JumboAppTextField from "@jumbo/components/JumboAppTextField";
import LoadingButton from "@mui/lab/LoadingButton";
import {useAuthCreateUserWithEmailAndPassword} from "@react-query-firebase/auth";
import {auth} from "@jumbo/services/auth/firebase/firebase";
import {useNavigate} from "react-router-dom";

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
    name: yup
        .string("Enter your name")
        .required("Name is required"),
});

const SignupForm = () => {
    const navigate = useNavigate();
    const mutation = useAuthCreateUserWithEmailAndPassword(auth, {
        onError(error) {
            console.log(error);
        },
        onSuccess(data) {
            navigate("/auth-pages/login-1", {replace: true});
        }
    });

    const onSignup = (name, email, password) => {
        mutation.mutate({
            email: email,
            password: password,
        });
    };

    return (
        <Formik
            validateOnChange={true}
            initialValues={{
                name: '',
                email: '',
                password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, {setSubmitting}) => {
                setSubmitting(true);
                onSignup(data.name, data.email, data.password);
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Form noValidate autoComplete="off">
                    <Fab color="secondary" aria-label="add"
                         sx={{
                             display: 'flex',
                             marginLeft: 'auto',
                             transform: 'translateY(-50%)',
                         }}
                    >
                        <AddIcon/>
                    </Fab>
                    <Div sx={{mb: 3, mt: 1}}>
                        <JumboAppTextField
                            fullWidth
                            name="name"
                            label="Name"
                        />
                    </Div>
                    <Div sx={{mb: 3, mt: 1}}>
                        <JumboAppTextField
                            fullWidth
                            name="email"
                            label="Email"
                        />
                    </Div>
                    <Div sx={{mb: 2, mt: 1}}>
                        <JumboAppTextField
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                        />
                    </Div>
                    <LoadingButton
                        fullWidth
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{mb: 3}}
                        loading={isSubmitting || mutation.isLoading}
                    >Signup</LoadingButton>
                </Form>
            )}
        </Formik>
    );
};

export default SignupForm;
