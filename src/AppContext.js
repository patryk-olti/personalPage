import React , { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [isDark, setIsDark] = useState(false);
    const [isPolish, setIsPolish] = useState(true);

    const toggleIsDark = () => setIsDark( prevValue => !prevValue );
    const toggleLanguage = () => setIsPolish( prevValue => !prevValue );

    return(
        <AppContext.Provider value={{
            isDark,
            isPolish,
            toggleIsDark,
            toggleLanguage
        }} >
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;