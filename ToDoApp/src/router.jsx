import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import MyTask from "@/Pages/myTask/myTask.jsx";
import Calendar from "@/Pages/calendar/calendar.jsx";


const router = createBrowserRouter([{
    path:'/',
    element:<Home/>
},{
    path:'/mytasks',
    element:<MyTask/>
},{
    path:'*',
    element:<Home/>
},{
    path:'/calendar',
    element:<Calendar/>
}])


export default router;
