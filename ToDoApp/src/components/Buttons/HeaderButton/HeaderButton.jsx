
import Icon from "@mdi/react";
import {mdiCalendarTextOutline} from "@mdi/js";

const HeaderButton = () => {
    return (
        <div>
            <div className={'relative'}>
                <div
                    className={'absolute -top-0 -right-0 border-3 border-white w-3 h-3 bg-orange-500 rounded-full'}>
                </div>

                <div>
                    <Icon path={mdiCalendarTextOutline} size={1}/>
                </div>
            </div>

        </div>
    );
};

export default HeaderButton;
