import React, {useState} from 'react';
import {Button, ButtonGroup, CardMedia} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import {Share} from "@mui/icons-material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const ProductImage = ({height}) => {
    const [isFavorite, setIsFavorite] = useState(true);
    const [inCart, setInCart] = useState(false);
    return (
        <JumboCardQuick noWrapper>
            <CardMedia
                component="img"
                height={height ? height : 310}
                image={getAssetPath(`${ASSET_IMAGES}/products/footwear.jpg`,"440x460")}
                alt="Footwear"
            />
            <ButtonGroup
                fullWidth
                size="large"
                variant={"text"}
                sx={{
                    height: 80,
                    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
                        border: "none"
                    }
                }}
            >
                <Button onClick={() => setIsFavorite(!isFavorite)}>
                    {
                        isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>
                    }
                </Button>
                <Button startIcon={<Share/>}/>
                <Button onClick={() => setInCart(!inCart)}>
                    {
                        inCart ? <DeleteSweepIcon/> : <ShoppingCartIcon/>
                    }
                </Button>
            </ButtonGroup>
        </JumboCardQuick>
    );
};
/* Todo height prop define */
export default ProductImage;
