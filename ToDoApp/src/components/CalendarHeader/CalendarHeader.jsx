
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { mdiShareVariant } from '@mdi/js';
import {Link} from "react-router-dom";
const CalendarHeader = () => {
    return (
        <div className="calendar-header flex justify-center items-center justify-between flex-row mt-10 pl-10 pr-10">
            <div>
                <Link to={'/'}><Icon path={mdiArrowLeft} size={1} /></Link>
            </div>
            <div className={'text-xl font-bold'}>
                Calendar
            </div>
            <div>
                <Icon path={mdiShareVariant} size={1} />
            </div>
        </div>
    );
};

export default CalendarHeader;
