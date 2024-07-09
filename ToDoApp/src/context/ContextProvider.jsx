import { createContext, useContext, useState, useCallback } from 'react';
import axiosClient from "@/axios-client.js";


// Create the globalContext
const GlobalContext = createContext({
    tasks: [],
    setTasks: () => {},
    fetchDataAPI: () => {},
    deleteTask: () => {}
});

// Create the ContextProvider component
export const ContextProvider = ({ children }) => {
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
                alert(error.message);
                setLoading(false);
            });
    }, []);

    const deleteTask = useCallback((id) => {
        setLoading(true);
        axiosClient.delete(`/tasks/${id}`)
            .then(() => {
                fetchDataAPI(); // Fetch updated tasks after deletion
            })
            .catch((err) => {
                console.error(err);
                alert('Failed to delete task.');
                setLoading(false);
            });
    }, [fetchDataAPI]);


    return (
        <GlobalContext.Provider value={{ tasks, setTasks, fetchDataAPI, loading, error, deleteTask }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);
