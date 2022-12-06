import React from 'react';
import Div from "@jumbo/shared/Div";
import {Card, CardContent, TextField, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import {alpha} from "@mui/material/styles";
import {useJumboApp} from "@jumbo/hooks";
import {LAYOUT_NAMES} from "../../../layouts/layouts";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const Signup2 = () => {
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
                            <Typography variant={"h3"} color={"inherit"} fontWeight={500} mb={3}>Sign Up</Typography>
                            <Typography variant={"body1"} mb={2}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the.
                            </Typography>
                            <Typography variant={"body1"}>
                                Already have an account? <Link href={"#/"} color={"inherit"} underline={'none'}>Sign
                                in</Link>
                            </Typography>
                        </Div>

                        <Div sx={{mt: 'auto'}}>
                            <Link href="#" underline="none" sx={{display: 'inline-flex'}}>
                                <img src={`${ASSET_IMAGES}/logo-white.png`} alt="Jumbo React"/>
                            </Link>
                        </Div>
                    </Div>
                </CardContent>
                <CardContent
                    sx={{
                        flex: 1,
                        p: 4
                    }}
                >
                    <Div sx={{mt: 1, mb: 3}}>
                        <TextField
                            fullWidth
                            id="name"
                            label="Name"
                        />
                    </Div>
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
                    <Button variant="contained" sx={{mb: 2}}>Signup</Button>
                </CardContent>
            </Card>

        </Div>
    );
};

export default Signup2;
