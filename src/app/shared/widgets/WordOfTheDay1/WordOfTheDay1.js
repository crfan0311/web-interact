import React from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const WordOfTheDay1 = () => {
    return (
        <Card sx={{textAlign: 'center'}}>
            <CardContent sx={{
                backgroundImage: "linear-gradient(#38B8F2, #843CF6)",
                backgroundRepeat: 'repeat-x',
                py: 6,
            }}
            >
                <Typography variant={"h6"} color={"#F5F7FA"}>Word of the day</Typography>
                <Typography variant={"h1"} fontWeight={"300"}
                            sx={{fontSize: '3rem', color: 'common.white', mb: 0}}>waa·luht</Typography>
                <Typography variant={"h5"} color={"common.white"}>Crypto currency</Typography>
            </CardContent>
            <CardContent sx={{position: 'relative'}}>
                <Fab aria-label="volume" color="secondary"
                     sx={{
                         position: 'absolute',
                         left: '50%',
                         top: '0',
                         height: 60,
                         width: 60,
                         transform: 'translate(-50%, -50%)',
                     }}
                >
                    <VolumeUpIcon fontSize="medium"/>
                </Fab>
                <Typography my={2.25}>A cryptocurrency wallet is an app that allows cryptocurrency users to store
                    and
                    retrieve their digital assets.</Typography>
                <Button variant={"contained"} color={"inherit"} disableElevation>Learn More</Button>
            </CardContent>
        </Card>
    );
};

export default WordOfTheDay1;
