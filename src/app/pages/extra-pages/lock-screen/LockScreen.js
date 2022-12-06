import React from 'react';
import Div from "@jumbo/shared/Div";
import {IconButton, OutlinedInput, Typography} from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import shadows from "@mui/material/styles/shadows";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {alpha} from "@mui/material/styles";
import {useJumboApp} from "@jumbo/hooks";
import {LAYOUT_NAMES} from "../../../layouts/layouts";
import {ASSET_AVATARS, ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const LockScreen = () => {
    const {setActiveLayout} = useJumboApp();

    React.useEffect(() => {
        setActiveLayout(LAYOUT_NAMES.SOLO_PAGE);
    }, []);
    
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Div sx={{
            flex: 1,
            flexWrap: 'wrap',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            p: theme => theme.spacing(4),
            background: `url(${getAssetPath(`${ASSET_IMAGES}/elizeu-dias.jpg`, "2400x1600")}) no-repeat center`,
            backgroundSize: 'cover',

            '&::after': {
                display: 'inline-block',
                position: 'absolute',
                content: `''`,
                inset: 0,
                backgroundColor: theme => alpha(theme.palette.common.black, .75),
            }
        }}>
                <Div sx={{maxWidth: '100%', position: 'relative', zIndex: 1, width: 360, textAlign: 'center', mt: 'auto'}}>
                    <Avatar alt="Remy Sharp" src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "90x90")}
                            sx={{
                                width: 90,
                                height: 90,
                                mx: 'auto',
                                mb: 2,
                                boxShadow: shadows[3],
                            }}
                    />
                    <Typography variant={"h2"} mb={.5} color={"common.white"}>Nnenna Jioke</Typography>
                    <Typography
                        variant={"body1"}
                        mb={3}
                        color={"common.white"}
                    >Enter your password to unlock the screen!</Typography>
                    <FormControl fullWidth sx={{mb: 2}} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            placeholder="Password"
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            sx={{bgcolor: theme => theme.palette.background.paper}}
                        />
                    </FormControl>
                    <Button fullWidth variant="contained" size="large" sx={{mb: 3}}>Unlock</Button>
                    <Typography variant={"body1"} mb={1}>
                        <Link underline="none" href="#" color={"common.white"}>Sign in using different account</Link>
                    </Typography>
                </Div>
                <Div sx={{mt: "auto", position: 'relative', zIndex: 1}}>
                    <Link href="#" underline="none" sx={{display: 'inline-flex'}}>
                        <img src={`${ASSET_IMAGES}/logo-white.png`} alt="Jumbo React"/>
                    </Link>
               </Div>
        </Div>
    );
};

export default LockScreen;
