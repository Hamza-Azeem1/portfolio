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
                    <p className="text-gray-200 text-justify text-base md:text-lg md:max-w-5xl md:mx-auto">
                        Hi there! I am Hamza Azeem, a passionate web developer with a focus on creating
                        dynamic and user-friendly websites. I have a strong foundation in HTML, CSS, and
                        JavaScript, which allows me to bring designs to life and create engaging user
                        interfaces. In addition to my web development skills, I also have experience in C++
                        and Python, which have broadened my problem-solving abilities and given me a solid
                        understanding of programming principles. I enjoy tackling complex challenges and
                        finding efficient solutions. One of my primary areas of expertise is working with the
                        MERN stack (MongoDB, Express.js, React, Node.js). I have developed several full-stack
                        applications using this technology stack, allowing me to seamlessly handle both
                        front-end and back-end development tasks. I am passionate about continuous learning
                        and staying up-to-date with the latest web development trends and technologies. I
                        believe in writing clean, efficient, and maintainable code to ensure the best possible
                        user experience. I thrive in collaborative environments and enjoy working in teams to
                        build innovative and impactful web applications. I&#39;m excited to continue growing as a
                        web developer and take on new challenges. If you&#39;re looking for a dedicated and
                        creative developer to bring your ideas to life, feel free to get in touch with me.
                        I&#39;d love to collaborate on your next project!
                    </p>
                </div>
            </div>
            <div className="mt-8 text-center">
                <h1 className="text-white font-bold text-4xl mb-2">Let&#39;s Talk</h1>
                <h4 className="text-xl text-gray-300 mb-6">Feel free to contact me... I will be in touch with you soon....</h4>
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
