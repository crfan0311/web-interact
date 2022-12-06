import React from 'react';
import {Card, CardContent, Checkbox, FormControlLabel, IconButton, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import {Facebook, Google, Twitter} from "@mui/icons-material";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import shadows from "@mui/material/styles/shadows";
import {alpha} from "@mui/material/styles";
import {auth} from "@jumbo/services/auth/firebase/firebase";
import * as yup from 'yup';
import {Form, Formik} from "formik";
import {useAuthSignInWithEmailAndPassword} from "@react-query-firebase/auth";
import LoadingButton from "@mui/lab/LoadingButton";
import {useNavigate} from "react-router-dom";
import Div from "@jumbo/shared/Div";
import JumboTextField from "@jumbo/components/JumboFormik/JumboTextField";
import {useJumboApp} from "@jumbo/hooks";
import {LAYOUT_NAMES} from "../../../layouts/layouts";
import {ASSET_AVATARS, ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
});

const Login1 = () => {
    const navigate = useNavigate();
    const {setActiveLayout} = useJumboApp();

    React.useEffect(() => {
        setActiveLayout(LAYOUT_NAMES.SOLO_PAGE);
    }, []);


    const mutation = useAuthSignInWithEmailAndPassword(auth, {
        onError(error) {
            console.log(error);
        },
        onSuccess(data) {
            navigate("/", {replace: true});
        }
    });

    const onSignIn = (email, password) => {
        mutation.mutate({email, password});
    };

    return (
        <Div sx={{
            flex: 1,
            flexWrap: 'wrap',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: theme => theme.spacing(4),
        }}>
            <Div sx={{mb: 3, display: 'inline-flex'}}>
                <Link
                    href="#"
                    underline="none"
                    sx={{display: 'inline-flex'}}
                >
                    <img src={`${ASSET_IMAGES}/logo.png`} alt="Jumbo React"/>
                </Link>
            </Div>
            <Card sx={{maxWidth: '100%', width: 360, mb: 4}}>
                <Div sx={{position: 'relative', height: '200px'}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={`${ASSET_IMAGES}/colin-watts.jpg`}
                    />
                    <Div
                        sx={{
                            flex: 1,
                            inset: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: theme => alpha(theme.palette.common.black, .5),
                            p: theme => theme.spacing(3),
                        }}
                    >
                        <Typography
                            variant={"h2"}
                            sx={{
                                color: 'common.white',
                                fontSize: '1.5rem',
                                mb: 0
                            }}
                        >
                            Sign In
                        </Typography>
                    </Div>
                </Div>
                <CardContent sx={{pt: 0}}>

                    <Formik
                        validateOnChange={true}
                        initialValues={{
                            email: 'demo@example.com',
                            password: '123456',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(data, {setSubmitting}) => {
                            setSubmitting(true);
                            onSignIn(data.email, data.password);
                            setSubmitting(false);
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form style={{textAlign: 'left'}} noValidate autoComplete='off'>
                                <Avatar
                                    alt="Remy Sharp" src={getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`)}
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        marginLeft: 'auto',
                                        boxShadow: shadows[3],
                                        transform: 'translateY(-50%)',
                                    }}
                                />
                                {mutation.isError && <p>{mutation.error.message}</p>}
                                <Div sx={{mb: 3, mt: 1}}>
                                    <JumboTextField
                                        fullWidth
                                        name="email"
                                        label="Email"
                                    />
                                </Div>
                                <Div sx={{mb: 2, mt: 1}}>
                                    <JumboTextField
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                    />
                                </Div>
                                <Typography
                                    textAlign={"right"}
                                    variant={"body1"}
                                >
                                    <Link underline="none" href="#">Forgot your password?</Link>
                                </Typography>
                                <Div sx={{mb: 1}}>
                                    <FormControlLabel control={<Checkbox/>} label="Remember me"/>
                                </Div>
                                <LoadingButton
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    sx={{mb: 3}}
                                    loading={isSubmitting || mutation.isLoading}
                                >Login</LoadingButton>
                                <Typography textAlign={"center"} variant={"body1"} mb={1}>Don't have an account?
                                    <Link underline="none" href="#">Sign up now</Link>
                                </Typography>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
            <Typography variant={"body1"} mb={2}>Or sign up with</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                    sx={{
                        bgcolor: '#385196',
                        color: 'common.white',
                        p: theme => theme.spacing(1.25),

                        '&:hover': {
                            backgroundColor: '#385196',
                        }
                    }}
                    aria-label="Facebook"
                >
                    <Facebook fontSize={"small"}/>
                </IconButton>
                <IconButton
                    sx={{
                        bgcolor: '#00a8ff',
                        color: 'common.white',
                        p: theme => theme.spacing(1.25),

                        '&:hover': {
                            backgroundColor: '#00a8ff',
                        }
                    }}
                    aria-label="Twitter"
                >
                    <Twitter fontSize={"small"}/>
                </IconButton>
                <IconButton
                    sx={{
                        bgcolor: '#23272b',
                        color: 'common.white',
                        p: theme => theme.spacing(1.25),

                        '&:hover': {
                            backgroundColor: '#23272b',
                        }
                    }}
                    aria-label="Twitter"
                >
                    <Google fontSize="small"/>
                </IconButton>
            </Stack>
        </Div>
    );
};

export default Login1;
