
import logo from "@/assets/logo.png";
import {Link} from "react-router-dom";

const DesktopNavbar = () => {
    return (
        <div>
            <div
                className={'navbar z-10 fixed top-0 left-0 right-0 flex flex-row items-center justify-between pl-10 pr-10 bg-white h-20 border-b-2 rounded-2xl'}>
                <div className={'nav-right'}>
                    <div>
                        <img src={logo} alt={'Logo'}/>
                    </div>
                </div>
                <div className={'nav-left flex flex-row items-center justify-between w-1/2'}>
                    <div className={'nav'}><Link to={'/'}>Home</Link></div>
                    <div className={'nav'}><Link to={'/mytasks'}>My Task</Link></div>
                    <div className={'nav'}><Link to={'/calendar'}>Calender</Link></div>
                    <div className={'nav'}>Account</div>
                </div>

            </div>
        </div>
    );
};

export default DesktopNavbar;
