import React from 'react';
import Button from "@mui/material/Button";
import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../components/demo-code/image-with-message.txt";
import {ASSET_IMAGES} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

const ImageWithMessage = () => {
    const Swal = useSwalWrapper();
    const sweetAlerts = () => {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: getAssetPath(`${ASSET_IMAGES}/dashboard/crypto/crypto2.jpg`, "400x255"),
            imageWidth: 400,
            imageHeight: 255,
            imageAlt: 'Custom image',
        });
    };
    return (
        <JumboDemoCard title={"Image with message"} demoCode={code}
                       wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
            <Button variant={"outlined"} onClick={sweetAlerts}>Click me</Button>
        </JumboDemoCard>
    );
};

export default ImageWithMessage;
