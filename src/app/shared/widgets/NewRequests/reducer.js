export function reducer(state, action) {
    switch (action.type) {
        case 'RELOAD' :
            return action.payload;
        case 'ACCEPTED' :
            return state.filter(item => item.id !== action.payload.id);
        case 'DENIED' :
            return state.filter(item => item.id !== action.payload.id);
        case 'IGNORED' :
            return state.filter(item => item.id !== action.payload.id);
        default :
            throw new Error();
    }
}
