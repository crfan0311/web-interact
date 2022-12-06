import React from 'react';
import {Card, CardContent, Checkbox, FormControlLabel, IconButton, TextField, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {Facebook, Google, Twitter} from "@mui/icons-material";
import Div from "@jumbo/shared/Div";
import {alpha} from "@mui/material/styles";
import {useJumboApp} from "@jumbo/hooks";
import {LAYOUT_NAMES} from "../../../layouts/layouts";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const Login2 = () => {
    const {setActiveLayout} = useJumboApp();

    React.useEffect(() => {
        setActiveLayout(LAYOUT_NAMES.SOLO_PAGE);
    }, []);

    return (
        <Div sx={{
            width: 720,
            maxWidth: '100%',
            margin: 'auto',
            p: 4
        }}>
            <Card
                sx={{
                    display: 'flex',
                    minWidth: 0,
                    flexDirection: {xs: 'column', md: 'row'}
                }}
            >
                <CardContent
                    sx={{
                        flex: '0 1 300px',
                        position: 'relative',
                        background: `#0267a0 url(${getAssetPath(`${ASSET_IMAGES}/widgets/keith-luke.jpg`, "640x428")}) no-repeat center`,
                        backgroundSize: 'cover',

                        '&::after': {
                            display: 'inline-block',
                            position: 'absolute',
                            content: `''`,
                            inset: 0,
                            backgroundColor: alpha('#0267a0', .65)
                        }
                    }}
                >
                    <Div
                        sx={{
                            display: 'flex',
                            minWidth: 0,
                            flex: 1,
                            flexDirection: 'column',
                            color: 'common.white',
                            position: 'relative',
                            zIndex: 1,
                            height: '100%'
                        }}
                    >
                        <Div sx={{mb: 2}}>
                            <Typography variant={"h3"} color={"inherit"} fontWeight={500} mb={3}>Sign in</Typography>
                            <Typography variant={"body1"}>
                                <Link
                                    href={"#"}
                                    color={"inherit"}
                                    underline={'none'}
                                >Forgot your password? Recover Now
                                </Link>
                            </Typography>
                        </Div>

                        <Div sx={{mt: 'auto'}}>
                            <Link href="#" underline="none" sx={{display: 'inline-flex'}}>
                                <img src={`${ASSET_IMAGES}/logo-white.png`} alt="Jumbo React"/>
                            </Link>
                        </Div>
                    </Div>
                </CardContent>
                <CardContent sx={{flex: 1, p: 4}}
                >
                    <Div sx={{mt: 1, mb: 3}}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            defaultValue="demo@example.com"
                        />
                    </Div>
                    <Div sx={{mt: 1, mb: 2}}>
                        <TextField
                            fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            defaultValue="123456"
                        />
                    </Div>
                    <Div sx={{mb: 2}}>
                        <FormControlLabel control={<Checkbox/>} label="Remember me"/>
                    </Div>
                    <Button variant="contained" sx={{mb: 2}}>Sign in</Button>

                    <Typography variant={"body1"} mb={2}>Or sign up with</Typography>
                    <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                        <IconButton sx={{
                            bgcolor: '#385196',
                            color: 'common.white',
                            p: theme => theme.spacing(1.25),

                            '&:hover': {
                                backgroundColor: '#385196',
                            }
                        }} aria-label="Facebook">
                            <Facebook fontSize="small"/>
                        </IconButton>
                        <IconButton sx={{
                            bgcolor: '#00a8ff',
                            color: 'common.white',
                            p: theme => theme.spacing(1.25),

                            '&:hover': {
                                backgroundColor: '#00a8ff',
                            }
                        }} aria-label="Twitter">
                            <Twitter fontSize="small"/>
                        </IconButton>
                        <IconButton sx={{
                            bgcolor: '#23272b',
                            color: 'common.white',
                            p: theme => theme.spacing(1.25),

                            '&:hover': {
                                backgroundColor: '#23272b',
                            }
                        }} aria-label="Twitter">
                            <Google fontSize="small"/>
                        </IconButton>
                    </Stack>
                </CardContent>
            </Card>
        </Div>
    );
};

export default Login2;
