import React from 'react';
import {Typography} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from "@mui/material/Button";
import {products} from "./data";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const GoogleNest = () => {

    const [currentSlide, setCurrentSlide] = React.useState(0);
    const updateCurrentSlide = (index) => {
        if (currentSlide !== index) {
            setCurrentSlide({currentSlide: index});
        }
    };
    return (
        <JumboCardQuick sx={{textAlign: 'center'}}>
            <Typography variant={"h3"}>Google Nest</Typography>
            <Typography variant={"body1"} mb={2}>
                Get a powerful speaker and voice assistant. Some description about the card.
            </Typography>
            <Carousel
                showArrows={false}
                showStatus={false}
                onChange={updateCurrentSlide}
                selectedItem={currentSlide}
                showThumbs={false}
                verticalSwipe={'natural'}
            >
                {
                    products.map((item, index) => (
                        <img
                            src={item}
                            alt={""}
                            style={{
                                margin: '0 auto',
                                width: '75%'
                            }}
                            height={230}
                            key={index}
                        />
                    ))
                }
            </Carousel>
            <Div sx={{mt: 6}}>
                <Typography variant={"h5"} mb={2}>$2699.00</Typography>
                <Button
                    startIcon={
                        <ShoppingCartOutlinedIcon/>
                    }
                    variant={"contained"}
                >Buy Now
                </Button>
            </Div>
        </JumboCardQuick>
    );
};

export default GoogleNest;
