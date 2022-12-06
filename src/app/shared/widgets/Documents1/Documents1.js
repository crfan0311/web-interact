import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Div from "@jumbo/shared/Div";

const Documents1 = () => {
    return (
        <Card sx={{height: 115, backgroundImage: 'linear-gradient(135deg, #38B8F2, #843CF6)'}}>
            <CardActions disableSpacing sx={{p: 0, alignItems: 'stretch', height: '100%'}}>
                <Div sx={{
                    display: 'flex',
                    width: 126,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'common.white',
                    borderRadius: '50%',
                    outline: 'solid 10px rgba(255, 255, 255, 0.2)',
                    margin: '0 10px 0 -60px'
                }}>
                    <Div sx={{
                        display: 'flex',
                        minWidth: 56,
                        height: 56,
                        mr: '6px',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <FolderOpenIcon sx={{fontSize: 36}}/>
                    </Div>

                </Div>
                <CardContent sx={{p: 2.5, flex: 1, alignSelf: 'center'}}>
                    <Typography variant={"h4"} color={"common.white"}>286</Typography>
                    <Typography variant={"h5"} color={"common.white"} mb={0}>Docs</Typography>
                </CardContent>
            </CardActions>
        </Card>
    );
};

export default Documents1;
