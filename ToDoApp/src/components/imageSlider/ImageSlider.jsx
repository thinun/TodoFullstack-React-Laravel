import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import yellowBG1 from '../../assets/yellowBG.jpg';
import darkBlueBG from '../../assets/darkBlueBG.jpg';
import Icon from '@mdi/react';
import {mdiDotsVertical} from '@mdi/js';
import {Progress} from "@/components/ui/progress"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.jsx";
import {Button} from "@/components/ui/button.jsx";

const spanStyleBlack = {
    color: '#000000',
    fontWeight: 'bold',
};

const spanStyleWhite = {
    color: '#FFFFFF',
    fontWeight: 'bold',
};

const iconStyleBlack = {
    color: '#000000'
}

const iconStyleWhite = {
    color: '#FFFFFF'
}

const urlWhite = {
    fontSize: '15px',
    textDecoration: 'underline',
}

const urlBlack = {
    fontSize: '15px',
    textDecoration: 'underline',
}

const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'space-between',
    backgroundSize: 'cover',
    height: '250px',
    borderRadius: '30px',
    marginLeft: '40px',
    marginRight: '40px',
    paddingTop: '30px',
    paddingBottom: '30px',
    paddingLeft: '30px',
    paddingRight: '30px',
    fontSize: '25px',
};


const slideImages = [
    {
        id: 1,
        img: yellowBG1,
        caption: 'Redesign Profile Company',
        url: 'http://localhost:8080'
    },
    {
        id: 2,
        img: darkBlueBG,
        caption: 'Redesign Profile Company',
        url: 'http://localhost'
    }
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage) => (
                    <div key={slideImage.id}>
                        <div
                            style={{...divStyle, backgroundImage: `url(${slideImage.img})`}}>
                            <div className={'flex flex-row w-full items-center justify-between'}>
                                <div style={slideImage.id === 2 ? spanStyleWhite : spanStyleBlack}>
                                    {slideImage.caption}
                                </div>
                                <div style={slideImage.id === 2 ? iconStyleWhite : iconStyleBlack}>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <div className={'cursor-pointer'}><Icon path={mdiDotsVertical} size={1}/>
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto m-0 p-0 bg-white">
                                            <div className={'flex flex-col items-start'}>
                                                <div className={'w-full'}>
                                                    <Button variant={'secondary'}
                                                            className={'w-full rounded-none'}>Done</Button>
                                                </div>
                                                <div className={'w-full'}>
                                                    <Button variant={'secondary'}
                                                            className={'w-full rounded-none'}>Edit</Button>
                                                </div>
                                                <div className={'w-full'}>
                                                    <Button variant={'secondary'}
                                                            className={'w-full rounded-none'}>Delete</Button>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            <div style={slideImage.id === 2 ? urlWhite : urlBlack} className={'text-blue-500'}>
                                {slideImage.url}
                            </div>
                            <div style={slideImage.id === 2 ? iconStyleWhite : iconStyleBlack} className={'w-full'}>
                                <div className={'flex flex-row items-center justify-between text-base gap-4'}>
                                    <div>Progress</div>
                                    <div className={'font-bold text-xl'}>50%</div>
                                </div>
                                <div className={'mt-2'}>
                                    <Progress value={50}
                                              indicatorColor={slideImage.id === 2 ? 'bg-blue-500' : 'bg-white'}
                                              className={slideImage.id === 2 ? 'bg-blue-950 text-white' : 'bg-yellow-200'}/>
                                </div>

                            </div>

                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slideshow;
