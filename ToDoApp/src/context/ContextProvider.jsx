import {createContext, useContext, useState, useCallback} from 'react';
import axiosClient from "@/axios-client.js";

// Create the globalContext
const GlobalContext = createContext({
    tasks: [],
    setTasks: () => {},
    fetchDataAPI: () => {}
});

// Create the ContextProvider component
export const ContextProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchDataAPI = useCallback(() => {
        setLoading(true);
        axiosClient.get('/tasks')
            .then((response) => {
                setTasks(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch data");
                if (error) {
                    alert(error.message);
                }
                setLoading(false);
            });
    }, []);

    return (
        <GlobalContext.Provider value={{tasks, setTasks, fetchDataAPI, loading, error}}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);
