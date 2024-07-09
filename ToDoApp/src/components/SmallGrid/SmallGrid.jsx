import {smallGridData} from "@/Data/SmallGridData/SmallGridData.js";

const SmallGrid = ({id}) => {


    return (
        <div>
            {smallGridData.map(data => (data.id === id ? (

                        <div key={data.id}
                             className={"grid-small flex flex-col items-center justify-center bg-gray-100 col-span-1 rounded-custom-xlarge relative cursor-pointer"}>

                            <div
                                className={'flex flex-col items-center justify-center text-base md:text-xl font-bold text-center h-18 w-32 pr-4'}>
                                <div className={'relative'}>
                                    <p className={'pl-2 hover:cursor-pointer'}> {data.title}</p>
                                    <img
                                        className={'absolute top-4 -right-3 md:-right-11 md:w-10 md:h-10 w-6 h-6 hover:cursor-pointer'}
                                        src={data.img}
                                        alt="calender image"/>
                                </div>
                            </div>

                        </div>) : null
                ))
            }
        </div>
    );
};

export default SmallGrid;
