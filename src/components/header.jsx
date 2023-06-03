import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiCodeCurly, BiUser, BiPhone } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <nav className="w-full h-14 flex justify-between p-4 md:p-4 items-center">
            <div className="text-white font-bold text-4xl">
                <Link to="/">
                    Hamza
                </Link>
            </div>
            <div className="inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out transform md:translate- x-0 md:static md:inset-auto md:bg-transparent md:opacity-100 md:scale-100">
                <ul className={`md:flex ${toggle ? 'block' : 'hidden'} text-white font-bold text-xl mt-2 md:mt-0 absolute top-0 left-0 w-3/5 h-full z-50 bg-black md:relative md:flex md:w-auto md:h-auto md:bg-transparent md:z-auto transform-translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out`}>
                    <li className="mx-2 md:mx-4 cursor-pointer flex items-center">
                        <BiCodeCurly className="mr-2" />
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="mx-2 md:mx-4 cursor-pointer flex items-center">
                        <BiUser className="mr-2" />
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-2 md:mx-4 cursor-pointer flex items-center">
                        <BiPhone className="mr-2" />
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="block md:hidden text-white">
                <button className="text-5xl " onClick={handleToggle}>
                    {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
                </button>
            </div>

        </nav>
    );
}

export default Header;

