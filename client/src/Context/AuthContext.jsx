import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [AuthUser, setAuthUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    // console.log('Auth Context : ')
    // console.log(AuthUser)

    return (
        <AuthContext.Provider value={{ AuthUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};