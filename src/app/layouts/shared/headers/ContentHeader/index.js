import React from 'react';
import {CardHeader} from "@mui/material";
import Typography from "@mui/material/Typography";
import Div from "@jumbo/shared/Div";

const ContentHeader = ({avatar, title, subheader, body, back, action, tabs, children, elevation, sx}) => {
    return (
        <Div sx={{...sx}}>
            {
                back &&
                <Div sx={{mb: 2}}>{back}</Div>
            }
            <CardHeader sx={{p: 0, mb: 4}} avatar={avatar} title={title} subheader={subheader} action={children} />
            {
                body &&
                <Typography variant={"body1"} mb={2}>{body}</Typography>
            }
            {
                (!!tabs || !!action) &&
                <Div sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    {
                        tabs &&
                        <Div sx={{flex: '1 1 auto'}}>{tabs}</Div>
                    }
                    {
                        action &&
                        <Div sx={{flex: '0 0 auto',}}>{action}</Div>
                    }
                </Div>
            }
            {elevation}
        </Div>
    );
};

export default ContentHeader;
