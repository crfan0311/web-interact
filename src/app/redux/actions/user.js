


export const USER_ACTIONS = {
    AUTH_DATA_RECEIVED: 'AUTH_DATA_RECEIVED',

}



export const onAuthDataReceived = ({
    authData
}) => {
    return dispatch => {
        dispatch({type: USER_ACTIONS.AUTH_DATA_RECEIVED, payload: authData});
    }
}
