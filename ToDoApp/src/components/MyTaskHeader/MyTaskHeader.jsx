
import Icon from '@mdi/react';
import {mdiArrowLeft} from '@mdi/js';
import {Link} from "react-router-dom";
import HeaderButton from "@/components/Buttons/HeaderButton/HeaderButton.jsx";
const MyTaskHeader = () => {
    return (
        <div className="calendar-header flex items-center justify-between flex-row mt-10 pl-10 pr-10">
            <div>
                <Link to={'/'}><Icon path={mdiArrowLeft} size={1} /></Link>
            </div>
            <div className={'text-xl font-bold'}>
                My Task
            </div>
            <div className={'relative'}>
                <Link to={'/calendar'}><HeaderButton/></Link>
            </div>
        </div>
    );
};

export default MyTaskHeader;
