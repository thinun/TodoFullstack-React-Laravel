import {LargeGridData} from "@/Data/LargeGridData/LargeGridData.js";

const LargeGrid = ({id}) => {
    return (
        <div>
            {LargeGridData.map((data) => (id === data.id ? (
                    <div key={data.id}
                         className={"grid-large bg-gray-100 col-span-1 row-span-1 rounded-custom-xlarge flex flex-col align-middle items-center justify-center pb-4"}>
                        <img className={'w-32 h-32 mb-2 pl-2 hover:cursor-pointer'} src={data.img} alt="task"/>
                        <p className={'font-bold w-1 text-center md:text-xl hover:cursor-pointer'}>{data.task}</p>
                        <p className={'font-bold text-gray-400  md:text-xl text-xs mt-2 hover:cursor-pointer'}>{data.subTask}</p>
                    </div>
                ) : null
            ))}


        </div>
    );
};

export default LargeGrid;
