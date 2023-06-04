import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiCodeCurly, BiUser, BiPhone } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleToggle = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className="flex items-center justify-between px-4 py-3 text-white">
            <div className="text-4xl font-bold">
                <Link to="/">Hamza</Link>
            </div>
            <div className={`relative md:hidden`}>
                <button className="text-4xl" onClick={handleToggle}>
                    {isSidebarOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </button>
                {isSidebarOpen && (
                    <div className="absolute right-0 w-48 bg-gray-900 mt-2 py-2 rounded shadow">
                        <ul className="text-white">
                            <li className="flex items-center py-2 px-4">
                                <BiCodeCurly className="mr-2" />
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className="flex items-center py-2 px-4">
                                <BiUser className="mr-2" />
                                <Link to="/about">About</Link>
                            </li>
                            <li className="flex items-center py-2 px-4">
                                <BiPhone className="mr-2" />
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <ul className="hidden md:flex items-center space-x-4">
                <li className="flex items-center">
                    <BiCodeCurly className="mr-2" />
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="flex items-center">
                    <BiUser className="mr-2" />
                    <Link to="/about">About</Link>
                </li>
                <li className="flex items-center">
                    <BiPhone className="mr-2" />
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
