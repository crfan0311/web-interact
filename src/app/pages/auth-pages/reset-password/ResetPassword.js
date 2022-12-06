import React from 'react';
import {Card, CardContent, TextField, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Div from "@jumbo/shared/Div";
import {useJumboApp} from "@jumbo/hooks";
import {alpha} from "@mui/material/styles";
import {LAYOUT_NAMES} from "../../../layouts/layouts";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const ResetPassword = () => {

    const {setActiveLayout} = useJumboApp();

    React.useEffect(() => {
        setActiveLayout(LAYOUT_NAMES.SOLO_PAGE);
    }, []);

    return (
        <Div sx={{width: 720, maxWidth: '100%', margin: 'auto', p: 4}}>
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
                        background: `#0267a0 url(${getAssetPath(`${ASSET_IMAGES}/widgets/keith-luke.jpg`)}) no-repeat center`,
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
                            height: '100%',
                            minHeight: {md: 320}
                        }}
                    >
                        <Div sx={{mb: 2}}>
                            <Typography variant={"h3"} color={"inherit"} fontWeight={500} mb={3}>Reset
                                Password</Typography>
                            <Typography variant={"body1"} mb={1} sx={{maxWidth: 270}}>
                                By entering your registered email address you will receive reset password link, Kindly
                                follow instruction.
                            </Typography>
                        </Div>
                        <Div sx={{mt: 'auto'}}>
                            <Link href="#" underline="none" sx={{display: 'inline-flex'}}>
                                <img src={`${ASSET_IMAGES}/logo-white.png`} alt="Jumbo React"/>
                            </Link>
                        </Div>
                    </Div>
                </CardContent>
                <CardContent sx={{flex: 1, p: 4}}>
                    <Div
                        sx={{
                            display: 'flex',
                            minWidth: 0,
                            flex: 1,
                            flexDirection: 'column',
                            height: '100%'
                        }}
                    >
                        <Div sx={{mb: 2}}>
                            <Div sx={{mt: 1, mb: 3}}>
                                <TextField
                                    fullWidth
                                    id="email-address"
                                    label="Enter Registered Email Address"
                                />
                            </Div>
                            <Button variant="contained">Send</Button>
                        </Div>
                        <Typography variant={"body1"} mt={'auto'}>
                            Already have an account? <Link href={"#/"} underline={'none'}>Login Now</Link> Or <Link
                            href={"#/"} underline={'none'}>Create New</Link>
                        </Typography>
                    </Div>
                </CardContent>
            </Card>

        </Div>
    );
};

export default ResetPassword;
