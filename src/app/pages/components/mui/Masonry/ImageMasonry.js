import * as React from 'react';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import {styled} from '@mui/material/styles';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Masonry/demo-code/image-masonry.txt";
import {itemData} from "./data";

const Label = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));

const ImageMasonry = () => {
    return (
        <JumboDemoCard title={"Image"} demoCode={code}>
            <Div sx={{width: 500, minHeight: 829}}>
                <Masonry columns={3} spacing={2}>
                    {itemData.map((item, index) => (
                        <div key={index}>
                            <Label>{index + 1}</Label>
                            <img
                                src={`${item.img}?w=162&auto=format`}
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    display: 'block',
                                    width: '100%',
                                }}
                            />
                        </div>
                    ))}
                </Masonry>
            </Div>
        </JumboDemoCard>
    );
};
export default ImageMasonry;
