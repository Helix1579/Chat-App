import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [User, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    return (
        <AuthContext.Provider value={{ User, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
