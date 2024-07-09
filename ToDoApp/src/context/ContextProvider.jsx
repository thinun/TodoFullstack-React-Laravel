import { createContext, useContext, useState } from 'react';

// Create the globalContext
const GlobalContext = createContext({ setTask: () => {} });

// Create the ContextProvider component
export const ContextProvider = ({ children }) => {
    const [task, setTask] = useState('');

    return (
        <GlobalContext.Provider value={{ task, setTask }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);
