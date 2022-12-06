import React from 'react';
import Grid from "@mui/material/Grid";

const JumboGridItem = ({children, component, componentProps, ...props}) => {
    const ItemComponent = React.useMemo(() => component, [component]);

    return (

        <Grid item {...props}>
            {
                !ItemComponent && children

            }
            {
                ItemComponent &&
                <ItemComponent {...componentProps}>
                    {children}
                </ItemComponent>
            }
        </Grid>
    );
};

export default JumboGridItem;