import React from 'react';
import Div from "@jumbo/shared/Div";

const DndWrapper = ({children, sx}) => {
    return (
        <Div className="dropzone" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 1,
            mb: 3,
            padding: 8,
            minHeight: 120,
            borderRadius: 1,
            border: '2px dashed #BBB',
            bgcolor: theme => theme.palette.action.hover,
            ...sx,
        }}
        >
            {children}
        </Div>
    );
};

export default DndWrapper;
