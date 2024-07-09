import './HomeGrid.css';
import {Link} from "react-router-dom";
import SmallGrid from "@/components/SmallGrid/SmallGrid.jsx";
import LargeGrid from "@/components/LargeGrid/LargeGrid.jsx";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.jsx";
import {cn} from "@/lib/utils.js";
import {Calendar as CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar.jsx";
import {useState} from "react";

const HomeGrid = ({submit}) => {
    const [dateSelect, setDateSelect] = useState(null);
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);


    // this function handle the task data as payload sending to the home page for api submission
    const handleTaskAddButton = () => {
        const formatedDate = format(dateSelect, "yyyy-MM-dd");
        const payload = {
            task,
            description,
            date: formatedDate,
        };
        console.log(payload)
        submit(payload);
        setIsDialogOpen(false);
    };

    return (
        <>
            <div className={'flex flex-row items-center gap-4 ml-10 mr-10 mt-8 pb-24 small:pb-0 sm:pb-10 md:pb-20'}>
                <div className={"grid grid-cols-1 w-1/2 gap-6 align-middle"}>
                    <Link to={'/calendar'}><SmallGrid id={1}/></Link>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <button onClick={() => setIsDialogOpen(true)}><LargeGrid id={2}/></button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add Task</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex flex-col items-start gap-4">
                                    <Input
                                        id="Task"
                                        placeholder={'Task'}
                                        className="col-span-3"
                                        onChange={(e) => setTask(e.target.value)}
                                    />
                                    <Input
                                        id="Description"
                                        placeholder={'Description'}
                                        className="col-span-3 row-span-3"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    <div>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-[280px] justify-start text-left font-normal",
                                                        !dateSelect && "text-muted-foreground"
                                                    )}
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4"/>
                                                    {dateSelect ? format(dateSelect, "PPP") : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={dateSelect}
                                                    onSelect={setDateSelect}
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" onClick={handleTaskAddButton}>
                                    Add
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className={"grid grid-cols-1 w-1/2 gap-4"}>
                    <Link to={'/calendar'}><LargeGrid id={1}/></Link>
                    <Link to={'/mytasks'}><SmallGrid id={2}/></Link>
                </div>
            </div>
        </>
    );
};

export default HomeGrid;
