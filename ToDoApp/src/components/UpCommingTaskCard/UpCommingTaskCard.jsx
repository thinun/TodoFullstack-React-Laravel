import Icon from '@mdi/react';
import {mdiDotsVertical} from '@mdi/js';
import {mdiClockTimeEightOutline} from '@mdi/js';
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.jsx";
import {Button} from "@/components/ui/button.jsx";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Input} from "@/components/ui/input.jsx";
import {cn} from "@/lib/utils.js";
import {Calendar as CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar.jsx";
import {useState} from "react";

const UpComingTaskCard = ({task,taskDate,des}) => {
    const [date, setDate] = useState()
    const [taskName, setTaskName] = useState()
    const [description, setDescription] = useState()


    const handleTaskAddButton = () => {
        const formatedDate = format(date, "yyyy-MM-dd");
        alert(taskName + " " + description + " " + formatedDate)
    }
    return (
        <div className={'MobileTaskCard bg-gray-100 w-full flex flex-row rounded-2xl mt-4'}>
            <div className={'flex flex-col justify-start w-3/4 pl-6 p-4'}>
                <div className={'font-bold'}>
                    {task}
                </div>
                <div className={'text-xs text-gray-400'}>
                    {des}
                </div>
                <div className={' flex flex-row justify-start gap-2 mt-4'}>
                    <div><Icon path={mdiClockTimeEightOutline} size={0.7}/></div>
                    <div>{taskDate}</div>
                </div>

            </div>
            <div className={'flex flex-col justify-center items-center w-1/4'}>
                <Popover>
                    <PopoverTrigger asChild>
                        <div className={'cursor-pointer'}><Icon path={mdiDotsVertical} size={1}/></div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto m-0 p-0 bg-white">
                        <div className={'flex flex-col items-start'}>
                            <div className={'w-full'}>
                                <Button variant={'secondary'} className={'w-full rounded-none'}>Done</Button>
                            </div>
                            <div className={'w-full'}>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant={'secondary'} className={'w-full rounded-none'}>Edit</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Edit Task</DialogTitle>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="flex flex-col items-start gap-4">
                                                <Input
                                                    id="EditTask"
                                                    defaultValue="Add Task"
                                                    className="col-span-3"
                                                    onChange={(e) => setTaskName(e.target.value)}/>
                                                <Input
                                                    id="EditDescription"
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
                                </Dialog>
                            </div>
                            <div className={'w-full'}>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant={'secondary'} className={'w-full rounded-none'}>Delete</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Are you sure you want to delete this task?</DialogTitle>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="flex flex-col items-start gap-4">
                                            </div>
                                        </div>
                                        <DialogFooter className={'flex flex-row justify-between items-center w-full'}>
                                            <Button type="submit">
                                                Delete
                                            </Button>
                                            <Button type="submit">
                                                Cancel
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default UpComingTaskCard;