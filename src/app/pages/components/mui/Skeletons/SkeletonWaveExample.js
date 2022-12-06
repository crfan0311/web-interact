import React from 'react';
import {Avatar, CardContent, CardHeader, CardMedia, IconButton, Skeleton} from "@mui/material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import code from "../Skeletons/demo-code/skeleton-waves-example.txt";
import {ASSET_AVATARS, ASSET_IMAGES} from "../../../../utils/constants/paths";
import Div from "@jumbo/shared/Div";
import {getAssetPath} from "../../../../utils/appHelpers";

const Media = (props) => {

    const {loading = false} = props;
    return (
        <Card sx={{maxWidth: 345, m: 2}}>
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40}/>
                    ) : (
                        <Avatar
                            alt="Ted talk"
                            src={getAssetPath(`${ASSET_AVATARS}/alex-dolgove.png`)}
                        />
                    )
                }
                action={
                    loading ? null : (
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    )
                }
                title={
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{marginBottom: 6}}
                        />
                    ) : (
                        'Ted'
                    )
                }
                subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%"/>
                    ) : (
                        '5 hours ago'
                    )
                }
            />
            {loading ? (
                <Skeleton sx={{height: 190}} animation="wave" variant="rectangular" width={"345px"}/>
            ) : (
                <CardMedia
                    component="img"
                    height="140"
                    image={getAssetPath(`${ASSET_IMAGES}/cover_pic.png`, "348x332")}
                    alt="Nicola Sturgeon on a TED talk stage"
                />
            )}

            <CardContent>
                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                        <Skeleton animation="wave" height={10} width="80%"/>
                    </React.Fragment>
                ) : (
                    <Typography variant="body2" color="text.secondary" component="p">
                        {
                            "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                        }
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};
const SkeletonWaveExample = () => {
    return (
        <JumboDemoCard title={"Wave Example"} demoCode={code}>
            <Div>
                <Media loading/>
                <Media/>
            </Div>
        </JumboDemoCard>
    );
};

export default SkeletonWaveExample;
