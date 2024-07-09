import Icon from "@mdi/react";
import {mdiMagnify} from "@mdi/js";


const SearchBar = () => {
    return (

        <div className="relative flex flex-row w-full justify-between">
            <input
                className="p-4 pl-10 border-gray-400 rounded-full border focus:outline-0 w-full mr-4"
                type="text"
                placeholder="Search Here..."
            />
            <Icon
                className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-800"
                path={mdiMagnify}
                size={1}
            />
        </div>

    );
};

export default SearchBar;
