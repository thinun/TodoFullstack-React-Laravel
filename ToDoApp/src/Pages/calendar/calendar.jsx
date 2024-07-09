import {Calendar} from "@/components/ui/calendar"
import './calendar.css'
import DesktopNavbar from "@/components/DesktopNavbar/DesktopNavbar.jsx";
import {useState} from "react";
import CalendarHeader from "@/components/CalendarHeader/CalendarHeader.jsx";
import MobileTaskCard from "@/components/MobileTaskCard/MobileTaskCard.jsx";
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
import {format} from "date-fns";
import ButtonB from '../../components/Buttons/Buttons.jsx'


const CalendarPage = () => {

    const [date, setDate] = useState()
    const [taskName, setTaskName] = useState()
    const [description, setDescription] = useState()


    const handleTaskAddButton =()=>{
        const formatedDate = format(date, "yyyy-MM-dd");
        alert(taskName +" "+description+" "+ formatedDate)
    }


    return (
        <>
            <div>
                <CalendarHeader/>
                <DesktopNavbar/>
                <div className={'mobile flex flex-col items-center justify-between'}>
                    <div className={'task-calendar flex flex-row items-center'}>
                        <div className={'desktop pl-10 pr-10 mt-4'}>
                            <div className={'text-xl font-bold'}>Today Tasks</div>
                            <MobileTaskCard/>
                            <MobileTaskCard/>
                            <MobileTaskCard/>
                            <MobileTaskCard/>
                        </div>
                        <div className={'calendar-desktop'}>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="calendar-com rounded-md scale-x-125 scale-y-125 mt-10"/>
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
                        <div><Dialog>
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
                                            onChange={(e)=>setTaskName(e.target.value)}

                                        />
                                        <Input
                                            id="addDescription"
                                            defaultValue="Description"
                                            className="col-span-3"
                                            onChange={(e)=>setDescription(e.target.value)}/>
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
                        <MobileTaskCard/>
                        <MobileTaskCard/>
                        <MobileTaskCard/>
                        <MobileTaskCard/>
                        <MobileTaskCard/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default CalendarPage;
