import MyTaskHeader from '@/components/MyTaskHeader/MyTaskHeader.jsx';
import Button from '@/components/Buttons/Buttons.jsx';
import Slideshow from "@/components/imageSlider/ImageSlider.jsx";
import UpComingTaskCard from "@/components/UpCommingTaskCard/UpCommingTaskCard.jsx";
import axiosClient from "@/axios-client.js";
import {useEffect, useState} from "react";
import MobileTaskCard from "@/components/MobileTaskCard/MobileTaskCard.jsx";

const MyTask = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [tasks, setTasks] = useState([])


    // useEffect to call the fetchDataAPI when component mounts
    useEffect(() => {
        fetchDataAPI()
    }, []);

    // function to get the payload data from the database

    const fetchDataAPI=()=>{
        setLoading(true)
        axiosClient.get('/tasks').then((response) => {
            setTasks(response.data)
        }).catch((error)=>{
            setError("failed to fetch data")
            if(error){
                alert(error.message)
            }
        })

        setLoading(false)
    }


    const noOfTask = 3;
    const handleButtonClick = () => {
        alert('Task Added');
    };


    return (
        <div>
            <MyTaskHeader/>
            <div className={'flex flex-row items-center justify-between ml-10 mr-10 mt-6'}>
                <div className={'font-bold text-xl'}>
                    {`In Progress (${noOfTask})`}
                </div>
            </div>
            <div className={'mt-5'}>
                <Slideshow></Slideshow>
            </div>
            <div>
                <div className={'flex flex-row items-center justify-between mt-6 text-xl w-full pl-10 pr-10'}>
                    <div className={'font-bold'}>Up Coming Tasks</div>
                    <div><Button variant={'secondary'} onClick={handleButtonClick}>Add Task</Button></div>
                </div>
                <div className={'flex flex-row items-center justify-start w-full text-base text-gray-400 pl-10'}>
                    2024/12/21
                </div>
            </div>
            <div className={'ml-10 mr-10 mb-10'}>
                { tasks.map((task) => (

                    <div key={task.id}>
                        {loading && <div>Loading...</div>}
                        <UpComingTaskCard task={task.task} taskDate={task.date} des={task.description}/>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default MyTask;
