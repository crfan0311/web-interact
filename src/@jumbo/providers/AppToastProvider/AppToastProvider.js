import React from 'react';

export const AppToast = React.createContext(null);
export const AppToastActions = React.createContext(null);

const initState = {open: false, anchorOrigin: {vertical: "top", horizontal: "right"}};

const AppToastProvider = ({children}) => {
    const [toast, setToast] = React.useState(initState);

    const showToast = React.useCallback((toastData) => {
        setToast(state => ({...state, ...toastData, open: true}));
    }, []);

    const hideToast = React.useCallback(() => {
        setToast(initState);
    }, []);

    const actions = {
        showToast: showToast,
        hideToast: hideToast
    };

    return (
        <AppToast.Provider value={toast}>
            <AppToastActions.Provider value={actions}>
                {children}
            </AppToastActions.Provider>
        </AppToast.Provider>
    );
};

const useAppToast = () => {
    return {
        toast: React.useContext(AppToast),
        ...React.useContext(AppToastActions)
    }
};

export {useAppToast};
export default AppToastProvider;
