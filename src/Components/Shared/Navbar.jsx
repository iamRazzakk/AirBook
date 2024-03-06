import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/image.png'
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 z-50 w-full bg-[#F1F5F8] py-3 flex flex-col lg:flex-row lg:mb-6 lg:px-4 ${scrolled ? 'bg-[#F1F5F8] text-black' : ''}`}>
            {/* Hamburger menu for mobile */}
            <div className="flex items-center justify-end mr-14 lg:hidden">
                <MdMenu className="text-2xl" onClick={toggleMenu} />
            </div>
            {/* Navbar Start */}
            <div className={`lg:flex lg:flex-1 lg:items-center ${showMenu ? "flex flex-col lg:flex-row-reverse" : "hidden"}`}>
                <ul className="flex flex-col lg:flex-row gap-4">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </ul>
            </div>
            {/* Middle section */}
            <div className={`lg:flex lg:flex-1 lg:gap-6 lg:items-center lg:justify-center text-[11px] ${showMenu ? "flex flex-col lg:flex-row-reverse" : "hidden"}`}>
                <li className="flex items-center text-xl cursor-pointer">
                    Blog
                </li>
                <li className="flex items-center text-xl cursor-pointer">Offer</li>
                <li className="flex items-center text-xl cursor-pointer">Airlines</li>
                <li className="flex items-center text-xl cursor-pointer">About</li>
            </div>
            {/* Navbar End Section */}
            <div className={`lg:flex lg:flex-1 lg:items-end lg:justify-end ${showMenu ? "flex flex-col lg:flex-row-reverse" : "hidden"}`}>
                <ul className={`flex flex-col lg:flex-row gap-4 ${showMenu ? 'justify-end' : 'justify-start'}`}>

                    <li>
                        <Link to='/singup'>
                            <button className="mt-2 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 bg-[#4262FF] text-white rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#4262FF]  group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Sign up free</span>
                                <span className="relative invisible">Sign up free</span>
                            </button>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;