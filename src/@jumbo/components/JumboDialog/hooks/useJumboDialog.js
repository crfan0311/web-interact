import React from 'react';
import JumboDialogContext from "../JumboDialogContext";

export const useJumboDialog = () => {
    return React.useContext(JumboDialogContext);
};