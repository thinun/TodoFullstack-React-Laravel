import hero from '../../assets/hero.jpg'
import './hero.css'

const Hero = () => {
    return (
        <div className={'hero'}>
            <div className={'relative ml-10 mr-10'}>
                <img className={'hero-img rounded-custom-xlarge'} src={hero} alt="hero image"/>
                <div className={'absolute xl:text-large top-1/2 transform -translate-y-1/2 text-black text-2xl md:text-4xl font-bold w-1  pl-8 pb-10'}>
                    Let's Set-Up Your Live Now!!
                </div>
                <button className={'hero-button absolute bottom-0 md:bottom-5 md:p-6 md:text-xl transform -translate-y-1/2 pl-6 pr-6 font-bold text-yellow-800 left-8 bg-white p-2 rounded-xl shadow-xl'}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;
