import socialLinks from "./data/data";

const Footer = () => {
    return (
        <footer className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-dark">
            {/* Footer social links */}
            <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
                <p className="text-white text-3xl sm:text-4xl mb-5">
                    Follow me
                </p>
                <ul className="flex gap-4 sm:gap-8">
                    {socialLinks.map((link) => (
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={link.id}
                            className="text-gray-400 text-xl sm:text-2xl md:text-3xl hover:text-white cursor-pointer rounded-lg bg-slate-800 dark:bg-ternary-dark hover:bg-indigo-500 duration-300 p-2"
                        >
                            {link.icon}
                        </a>
                    ))}
                </ul>
            </div>

            <div className="font-general-regular flex justify-center items-center text-center">
                <div className="text-white">
                    &copy; Web Dev Portfolio <a href="https://github.com/Hamza-Azeem1/portfolio.git" target="_blank" rel="noopener noreferrer">@Hamza</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
