import React from 'react';
import {Card, CardContent, CardHeader, Typography} from "@mui/material";
import PropTypes from 'prop-types';

const PricePlan = ({title, subheader, children, headerSx, sx,}) => {
    return (
        <Card
            sx={{
                transform: 'scale(.95)',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                    transform: 'scale(1)',
                },
                ...sx
            }}
        >
            <CardHeader
                title={
                    <Typography
                        variant={"h2"}
                        fontSize={36}
                        fontWeight={500}
                        color="inherit"
                    >
                        {title}
                    </Typography>
                }
                subheader={
                    <Typography
                        variant={"h5"}
                        color="inherit"
                        sx={{
                            textTransform: 'uppercase',
                            letterSpacing: 3,
                            mb: 0
                        }}
                    >
                        {subheader}
                    </Typography>
                }
                sx={{
                    py: 5,
                    color: 'common.white',
                    ...headerSx
                }}
            />
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: 5,
                }}
            >
                {children}
            </CardContent>
        </Card>
    );
};
/* Todo prop define */
PricePlan.propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
}

export default PricePlan;
