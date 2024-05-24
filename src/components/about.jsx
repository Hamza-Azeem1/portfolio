import pic from "../assets/Hamza.jpg";
import { Link } from 'react-router-dom';
import { BiPhone } from 'react-icons/bi';

const About = () => {
    return (
        <section className="mt-20 px-4 md:px-8">
            <div className="md:max-w-4xl md:mx-auto">
                <div className="text-center md:text-left">
                    <img src={pic} alt="Hamza" className="rounded-full border object-cover mx-auto mb-4" style={{ width: '250px', height: '250px' }} />
                    <h2 className="text-white font-bold text-4xl mb-4">About Me</h2>
                    <p className="text-gray-200 text-justify text-base md:text-lg md:max-w-5xl md:mx-auto leading-relaxed">
                        Hi there! I am Hamza Azeem, a dedicated and skilled web developer with a passion for creating dynamic, responsive, and user-friendly websites. My expertise spans across various front-end technologies, including HTML, CSS, JavaScript, React.js, Material UI, and Tailwind CSS. Additionally, I have experience with Next.js, which allows me to build highly optimized and efficient web applications.
                        I have a solid understanding of back-end development fundamentals and have basic knowledge of Node.js. My experience includes working with APIs to fetch and integrate data seamlessly into projects, ensuring smooth and dynamic user experiences.
                        Throughout my career, I have successfully completed numerous projects, leveraging my strong logic-building skills and in-depth knowledge of programming languages like Python, Django, and C++. My ability to tackle complex challenges and find efficient solutions has been a key factor in the success of my projects.
                        I am committed to continuous learning and staying up-to-date with the latest trends and technologies in web development. I believe in writing clean, maintainable, and efficient code to deliver the best possible user experience. My collaborative spirit and enthusiasm for teamwork enable me to contribute effectively to innovative and impactful web applications.
                        If you&apos;re looking for a dedicated and creative developer to bring your ideas to life, feel free to get in touch. I&apos;d love to collaborate on your next project!
                    </p>
                </div>
            </div>
            <div className="mt-8 text-center">
                <h1 className="text-white font-bold text-4xl mb-2">Let&apos;s Talk</h1>
                <h4 className="text-xl text-white mb-6">Feel free to contact me... I will be in touch with you soon....</h4>
                <div className="flex justify-center">
                    <Link to="/contact" className="cursor-pointer font-medium w-50 md:w-auto px-6 py-3 text-white text-center tracking-wider bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-900 rounded-lg mt-6 duration-500 flex items-center justify-center">
                        <BiPhone className="mr-3" size={40} />
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default About;
