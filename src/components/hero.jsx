import { FiArrowDownCircle } from 'react-icons/fi';
import ProjectList from './projects';
import DeveloperImg from "../assets/developer.svg";

const Hero = () => {
    const handleClick = () => {
        window.open("https://drive.google.com/file/d/10PqEzG-T3m4DBQuUqnmO_zPKDmnmO83-/view?usp=sharing");
    }

    return (
        <>
            <div>
                <section className="flex flex-col sm:justify-between items-center sm:flex-row mt-20 md:mt-5">
                    <div className="w-full md:w-1/3 text-left">
                        <h1 className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
                            Hi, I am Hamza Azeem
                        </h1>
                        <p className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-300">
                            A Full-Stack Developer & Design Enthusiast
                        </p>
                        <div className="flex justify-center sm:block">
                            <button
                                onClick={handleClick}
                                className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                            >
                                <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
                                <span className="text-sm sm:text-lg font-general-medium duration-100">
                                    Download CV
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0">
                        <picture>
                            <source srcSet={DeveloperImg} media="(min-width: 768px)" />
                            <img src={DeveloperImg} alt="Developer" className="w-full h-full object-cover" />
                        </picture>
                    </div>
                </section>
                <ProjectList showAll={false} />
            </div>
        </>
    );
}

export default Hero;
