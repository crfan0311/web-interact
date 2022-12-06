import React from 'react';
import {CardContent, CardMedia, Collapse, Typography} from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SentimentDissatisfiedSharpIcon from '@mui/icons-material/SentimentDissatisfiedSharp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EventIcon from '@mui/icons-material/Event';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import {useTranslation} from "react-i18next";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const EventInviteConfirmCard = () => {
    const {t} = useTranslation();
    const [action, setAction] = React.useState({
        message: "",
        type: ""
    });
    const [confirmation, setConfirmation] = React.useState("none");
    React.useEffect(() => {
        switch (confirmation) {
            case "yes":
                setAction({
                    type: "success.main",
                    message: "Great! see you there at event.",
                    icon: <CheckCircleOutlineIcon/>
                });
                break;
            case "no":
                setAction({
                    type: "text.primary",
                    message: "Thanks for checking this out.",
                    icon: <SentimentDissatisfiedSharpIcon/>
                });
                break;
            case "maybe":
                setAction({
                    type: "warning.main",
                    message: "Setup a reminder.",
                    icon: <EventIcon/>
                });
                break;
            default:
                setAction({type: "", message: ""});
        }
    }, [confirmation]);

    return (
        <JumboCardQuick
            title={<Typography variant={"h3"}>{t('widgets.title.eventInvite')}</Typography>}
            subheader={t('widgets.subheader.eventInvite')}
            noWrapper
        >
            <CardMedia
                component="img"
                height="212"
                image={getAssetPath(`${ASSET_IMAGES}/widgets/conference-poster.webp`, "400x212")}
                alt={""}
            />
            <CardContent>
                <Div sx={{pb: 2}}>
                    <Typography variant={"body1"} mb={2}>
                        Join the event to either explore the area of digital media marketing or learn more here.
                    </Typography>
                    <div>
                        {
                            <Collapse in={!!action.type}>
                                <Typography
                                    color={`${action.type}`}
                                    sx={{
                                        '& svg': {
                                            verticalAlign: "middle",
                                            mr: 1,
                                            mt: '-2px',
                                        }
                                    }}
                                >
                                    {action.icon}{action.message}
                                </Typography>
                            </Collapse>
                        }
                    </div>
                </Div>
                <ButtonGroup>
                    <Button onClick={() => setConfirmation("yes")}>Yes</Button>
                    <Button onClick={() => setConfirmation("maybe")}>Maybe</Button>
                    <Button onClick={() => setConfirmation("no")}>No</Button>
                </ButtonGroup>
            </CardContent>
        </JumboCardQuick>
    );
};

export default EventInviteConfirmCard;
