import { useState } from 'react';
import PropTypes from 'prop-types';
import projects from './data/projectsData';
import { FiAlertCircle } from 'react-icons/fi';

const Project = ({ imageSrc, title, description, liveLink, codeLink }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative">
                <img src={imageSrc} alt={title} className="w-full rounded-t-lg" />
                {isHovered && (
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-200">
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-4 py-2 bg-gray-500 text-white font-medium rounded hover:bg-gray-600 transition-colors duration-200"
                        >
                            Live
                        </a>
                        <a
                            href={codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-block px-4 py-2 bg-gray-500 text-white font-medium rounded hover:bg-gray-600 transition-colors duration-200"
                        >
                            Source Code
                        </a>
                    </div>
                )}
            </div>
            <div className="p-4 bg-slate-500">
                <h3 className="text-xl font-bold text-black">{title}</h3>
                <p className="text-gray-200">{description}</p>
            </div>
        </div>
    );
};

Project.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string.isRequired,
};

const ProjectList = () => {
    return (
        <>
            <h1 className='text-white font-bold text-4xl mt-10 mb-20'>Projects Portfolio</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        imageSrc={project.imageSrc}
                        title={project.title}
                        description={project.description}
                        liveLink={project.liveLink}
                        codeLink={project.codeLink}
                    />
                ))}
            </div>
            <div className="flex items-center justify-center">
                <FiAlertCircle className="text-white font-extrabold text-5xl mr-4" />
                <span className="text-white font-extrabold text-5xl">More Projects Coming Up....</span>
            </div>
        </>
    );

};

export default ProjectList;
