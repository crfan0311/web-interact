import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Pagination, Stack} from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import code from "../Paginations/demo-code/custom-icons.txt";

const CustomIcons = () => {
    return (
        <JumboDemoCard title={"Custom Icon"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={2}>
                <Pagination
                    count={10}
                    renderItem={(item) => (
                        <PaginationItem
                            components={{previous: ArrowBackIcon, next: ArrowForwardIcon}}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </JumboDemoCard>
    );
};

export default CustomIcons;
