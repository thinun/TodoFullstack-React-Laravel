import MyTaskHeader from '@/components/MyTaskHeader/MyTaskHeader.jsx';
import Button from '@/components/Buttons/Buttons.jsx';
import Slideshow from "@/components/imageSlider/ImageSlider.jsx";
import UpComingTaskCard from "@/components/UpCommingTaskCard/UpCommingTaskCard.jsx";
import axiosClient from "@/axios-client.js";
import {useEffect, useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Input} from "@/components/ui/input.jsx";
import {format} from "date-fns"
import {Calendar as CalendarIcon} from "lucide-react"
import {cn} from "@/lib/utils"
import {Calendar} from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import ButtonB from '../../components/Buttons/Buttons.jsx'
import {useGlobalContext} from "@/context/ContextProvider.jsx";


const MyTask = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [date, setDate] = useState(null);
    const [newTask, setNewTask] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const {fetchDataAPI, tasks} = useGlobalContext()


// useEffect to call the fetchDataAPI when component mounts
    useEffect(() => {
        fetchDataAPI()
    }, [fetchDataAPI]);


// function to send data to database

    const handleTaskAddButton = () => {
        setIsDialogOpen(false)

        const payload = {
            task: newTask,
            description: newDescription,
            date: date
        }

        console.log(payload)

        axiosClient.post('/tasks', payload).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }


    const noOfTask = tasks.length;


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
                <div className={'flex flex-row items-center justify-between mt-10 text-xl w-full pl-10 pr-10'}>
                    <div className={'font-bold'}>This Day Tasks</div>
                    <div><Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <ButtonB variant={'secondary'} className={'text-xl'}>Add Task</ButtonB>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add Task</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex flex-col items-start gap-4">
                                    <Input
                                        id="addTask"
                                        defaultValue="Add Task"
                                        className="col-span-3"
                                        onChange={(e) => setNewTask(e.target.value)}

                                    />
                                    <Input
                                        id="addDescription"
                                        defaultValue="Description"
                                        className="col-span-3"
                                        onChange={(e) => setNewDescription(e.target.value)}/>
                                    <div>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[280px] justify-start text-left font-normal",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>

                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit"
                                        onClick={handleTaskAddButton}>
                                    Add
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog></div>
                </div>
                <div className={'flex flex-row items-center justify-start w-full text-base text-gray-400 pl-10'}>
                    2024/12/21
                </div>
            </div>
            <div className={'ml-10 mr-10 mb-10'}>

                {tasks.map((task) => (

                    <div key={task.id}>
                        {loading && <div>Loading...</div>}
                        <UpComingTaskCard task={task.task} desc={task.description} date={task.date}
                                          taskId={task.id}
                                          fetchDataAPI={fetchDataAPI}/>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default MyTask;
