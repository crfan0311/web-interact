import React from 'react';
import Div from "@jumbo/shared/Div";
import {Typography} from "@mui/material";
import {useJumboApp} from "@jumbo/hooks";
import {LAYOUT_NAMES} from "../../../layouts/layouts";
import { useNavigate } from 'react-router-dom';
import InteractFlashyButton from '@interact/Components/Button/InteractFlashyButton';

const Error500 = () => {
    const {setActiveLayout} = useJumboApp();
    const navigate = useNavigate();

    React.useEffect(() => {
        setActiveLayout(LAYOUT_NAMES.VERTICAL_DEFAULT);
    }, []);

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
            <Typography
                variant={"h1"}
                fontWeight="500"
                sx={{fontSize: 150, textShadow: '1rem 0.6rem 1rem rgba(0, 0, 0, 0.35)', mb: 1}}
            >500</Typography>
            <Typography
                component={"h2"}
                variant={"h1"}
                color={"text.secondary"}
                mb={4}
            >Sorry, the server has crashed <br></br> 
            <br></br>
            (┬┬﹏┬┬)</Typography>
        </Div>
    );
};

export default Error500;
