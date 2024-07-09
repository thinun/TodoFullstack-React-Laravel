import './Header.css'
import HeaderButton from "@/components/Buttons/HeaderButton/HeaderButton.jsx";
import SearchBar from "@/components/SearchBar/SearchBar.jsx";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header flex flex-row items-center justify-center mt-10 max-h-64">
            <div className="flex flex-row items-center align-middle gap-4 w-full mr-10 ml-10">
                <SearchBar/>
                <div>
                    <Link to={'/calendar'}><HeaderButton/></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
