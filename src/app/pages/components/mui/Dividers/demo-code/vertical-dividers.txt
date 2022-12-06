import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import Divider from "@mui/material/Divider";
import code from "../Dividers/demo-code/vertical-dividers.txt";

const VerticalDividers = () => {
    return (
        <JumboDemoCard title={"Vertical Dividers"} demoCode={code}>
            <Div
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    bgcolor: 'background.paper',
                    color: 'text.secondary',
                    '& svg': {
                        m: 1.5,
                    },
                    '& hr': {
                        mx: 0.5,
                    },
                }}
            >
                <FormatAlignLeftIcon/>
                <FormatAlignCenterIcon/>
                <FormatAlignRightIcon/>
                <Divider orientation="vertical" flexItem/>
                <FormatBoldIcon/>
                <FormatItalicIcon/>
            </Div>
        </JumboDemoCard>
    );
};

export default VerticalDividers;
