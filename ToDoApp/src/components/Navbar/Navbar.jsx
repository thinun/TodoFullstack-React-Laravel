import {mdiCalendarTextOutline} from '@mdi/js';
import Icon from "@mdi/react";
import {mdiMenu} from '@mdi/js';
import {mdiBagPersonalOutline} from '@mdi/js';
import {mdiAccountOutline} from '@mdi/js';
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div
                className={'mobile-navbar z-10 fixed text-gray-400 bg-white flex flex-row items-center justify-between bottom-0 left-0 right-0 h-16 mt-10 pl-14 pr-14'}>
                <div>
                    <Link to={'/'}><Icon className={'text-yellow-400'} path={mdiMenu} size={1}/></Link>

                </div>
                <div>
                    <Link to={'/calendar'}><Icon path={mdiCalendarTextOutline} size={1}/></Link>
                </div>
                <div>
                    <Link to={'/mytasks'}><Icon path={mdiBagPersonalOutline} size={1}/></Link>
                </div>
                <div>
                    <Icon path={mdiAccountOutline} size={1}/>
                </div>

            </div>
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
        </>

    );
};

export default Navbar;
