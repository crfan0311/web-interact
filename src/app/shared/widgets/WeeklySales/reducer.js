export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        case 'REMOVE_PRODUCT':
            const newList = state.filter(item => item.id !== action.payload.id);
            return newList;
        default:
            throw new Error();
    }
}
