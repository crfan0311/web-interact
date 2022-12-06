import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const Summary = () => {
    return (
        <Card>
            <CardContent sx={{textAlign: 'center', color: 'common.white', bgcolor: 'warning.main'}}>
                <CardMedia
                    component="img"
                    height="132"
                    image={getAssetPath(`${ASSET_IMAGES}/widgets/cat_friends.svg`, "140x132")}
                    alt="Cat"
                    sx={{
                        maxWidth: '140px',
                        margin: '8px auto 16px',
                    }}
                />
                <Typography variant={"h5"} color={"inherit"}>Orange cat playground</Typography>
            </CardContent>
            <CardContent sx={{textAlign: 'center'}}>
                <Typography variant={"h4"}>Cats love this</Typography>
                <Typography
                    variant={"body1"}
                    color={"text.secondary"}
                    fontSize={"12px"} mb={2}
                >Your meao deserves the playground and thats the best care you can give.</Typography>
                <Button size={"small"} disableElevation variant={"contained"}
                        sx={{textTransform: 'none', px: 2, borderRadius: 24}}>Get started</Button>
            </CardContent>
        </Card>
    );
};

export default Summary;
