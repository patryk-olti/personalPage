import React , { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);
    const [isPolish, setIsPolish] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const [adminMode, setAdminMode] = useState(false);

    const toggleIsDark = () => setIsDark( prevValue => !prevValue );
    const toggleLanguage = () => setIsPolish( prevValue => !prevValue );
    const toggleIsLogged = () => setIsLogged( prev => !prev);
    const toggleAdminMode = () => setAdminMode( prev => !prev);

    return(
        <AppContext.Provider value={{
            isDark, isPolish, isLogged, adminMode,
            toggleIsDark, toggleLanguage,
            toggleIsLogged, toggleAdminMode
        }} >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;