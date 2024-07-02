import React, { createContext, useState, useContext } from 'react';

export const SessionContext = createContext();
export const SessionProvider = ({ children }) => {
    const userData = sessionStorage.getItem("user_session") ? JSON.parse(sessionStorage.getItem("user_session")) : null;
    const [isLoggedIn, setIsLoggedIn] = useState(userData ? true : false);
    const [userInfo, setInfoUser] = useState(userData);

    const setUser = (data) => {
        sessionStorage.setItem("user_session", JSON.stringify(data));
        setInfoUser(data)
    }

    const logout = () => {
        sessionStorage.removeItem("user_session");
        setInfoUser(null)
    }
    
    return (
        <SessionContext.Provider value={{ logout, isLoggedIn, setIsLoggedIn, userInfo, setUser }}>
            {children}
        </SessionContext.Provider>
    );
};



export const useSession = () => {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error('useSession debe ser usado dentro de un SessionProvider');
    }
    return context;
};