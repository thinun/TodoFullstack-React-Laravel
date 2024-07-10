import {Calendar} from "@/components/ui/calendar"
import './calendar.css'
import DesktopNavbar from "@/components/DesktopNavbar/DesktopNavbar.jsx";
import {useEffect, useState} from "react";
import CalendarHeader from "@/components/CalendarHeader/CalendarHeader.jsx";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.jsx";
import {cn} from "@/lib/utils.js";
import {Calendar as CalendarIcon} from "lucide-react";
import {format, isToday} from "date-fns";
import axiosClient from "@/axios-client.js";
import UpComingTaskCard from "@/components/UpCommingTaskCard/UpCommingTaskCard.jsx";
import {useGlobalContext} from "@/context/ContextProvider.jsx";
import ButtonVariant from "@/components/Buttons/Buttons.jsx";


const CalendarPage = () => {

    const [date, setDate] = useState()
    const [taskName, setTaskName] = useState()
    const [description, setDescription] = useState()
    const [isDialogOpen, setIsDialogOpen] = useState()
    const {tasks, fetchDataAPI, loading, error} = useGlobalContext()



// using use Effect to call the fetch api function

    useEffect(() => {
        fetchDataAPI()
    }, [fetchDataAPI]);


    // function to send data to database
    const handleTaskAddButton = () => {
        const formatedDate = format(date, "yyyy-MM-dd");
        setIsDialogOpen(false)

        const payload = {
            task: taskName,
            description: description,
            date: formatedDate
        }

        axiosClient.post('/tasks', payload).then((response) => {
            fetchDataAPI()
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }




    return (
        <>
            <div className={'mb-10'}>
                <CalendarHeader/>
                <DesktopNavbar/>
                <div className={'mobile flex flex-col items-center justify-between'}>
                    <div className={'task-calendar flex flex-row items-center'}>
                        <div className={'desktop pl-10 pr-10 mt-4'}>
                            <div className={'text-xl font-bold'}>Today Tasks</div>
                            {tasks.map((task) => (
                                isToday(new Date(task.date)) ? (
                                        <div key={task.id} >
                                            <UpComingTaskCard  key={task.id} task={task.task} desc={task.description} date={task.date}
                                                              taskId={task.id}
                                                              fetchDataAPI={fetchDataAPI}/>
                                        </div>

                                ) : null
                            ))}



                        </div>
                        <div className={'calendar-desktop'}>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="calendar-com rounded-md  mt-10"/>
                        </div>
                        <div className={'calendar'}>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="calendar-com rounded-md scale-x-150 scale-y-125"/>
                        </div>
                    </div>

                    <div className={'flex flex-row items-center justify-between mt-10 text-xl w-full pl-10 pr-10'}>
                        <div className={'font-bold'}>This Day Tasks</div>
                        <div><Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <ButtonVariant variant={'secondary'}>Add Task</ButtonVariant>
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
                                            onChange={(e) => setTaskName(e.target.value)}

                                        />
                                        <Input
                                            id="addDescription"
                                            defaultValue="Description"
                                            className="col-span-3"
                                            onChange={(e) => setDescription(e.target.value)}/>
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
                    <div className={'pl-10 pr-10 mt-6 w-full'}>

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
            </div>

        </>
    );
};

export default CalendarPage;
