


export const LOCALIZATION_ACTIONS = {
    SET_TIMEZONE: 'SET_TIMEZONE',

}



export const setTimezone = ({
    ISOTZ = 'UTC'
}) => {
    return dispatch => {
        dispatch({type: LOCALIZATION_ACTIONS.SET_TIMEZONE, payload: ISOTZ});
    }
}
