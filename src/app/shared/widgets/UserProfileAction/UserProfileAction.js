import React from 'react';
import ButtonGroup from "@mui/material/ButtonGroup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import {CardMedia} from "@mui/material";
import Stack from "@mui/material/Stack";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {ASSET_AVATARS, ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const UserProfileAction = ({height}) => {
    return (
        <JumboCardQuick noWrapper>
            <CardMedia
                component="img"
                height={height ? height : 242}
                image={getAssetPath(`${ASSET_IMAGES}/wall/ethan-robertson.jpg`, "640x420")}
                alt=""
            />
            <Stack direction={"row"} spacing={1}>
                <Avatar
                    sx={{
                        width: 60,
                        height: 60,
                        m: theme => theme.spacing(-3, 0, 0, 3)
                    }}
                    src={getAssetPath(`${ASSET_AVATARS}/jonathan.jpg`, "60x60")}
                    alt=""
                />
                <ButtonGroup
                    fullWidth
                    size="large"
                    variant={"text"}
                    sx={{
                        height: 50,
                        '& .MuiButtonGroup-grouped:not(:last-of-type)': {
                            border: "none"
                        }
                    }}
                >
                    <Button><FavoriteBorderOutlinedIcon/></Button>
                    <Button><ChatBubbleOutlineOutlinedIcon/></Button>
                    <Button><InsertLinkOutlinedIcon/></Button>
                </ButtonGroup>
            </Stack>
        </JumboCardQuick>
    );
};
/* Todo height prop define */
export default UserProfileAction;
