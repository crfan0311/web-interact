import React from 'react';
import {useAuthUser} from "@react-query-firebase/auth";
import {auth} from "@jumbo/services/auth/firebase/firebase";

export const Auth = React.createContext(null);

const AuthProvider = ({children}) => {
    const user = useAuthUser(["user"], auth);

    const authValues = React.useMemo(() => {
        return {
            authUser: user,
            auth: auth,
        };
    }, [user]);

    return (
        <Auth.Provider value={authValues}>
            {children}
        </Auth.Provider>
    );
};

export const useAuth = () => {
    return React.useContext(Auth);
};

export default AuthProvider;
