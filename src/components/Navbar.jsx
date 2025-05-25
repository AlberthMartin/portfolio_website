import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({menuOpen, setMenuOpen}) =>{


    useEffect(() =>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen])



    return(

    <nav className="fixed top-0 w-full z-40 bg-transparent backdrop-blur-lg shadow-xl">
        <div className="max-w-5xl mx-auto px-4">

            

            <div className="flex justify-between items-center h-16">
                {/**Logo */}
                
                <a href="#home" className="font-[Orbitron] text-xl text-white">
                     ALBERTH MARTIN
                </a>

                {/* mobile menu */}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    
                    {/* hamburger icon */}
                    <FontAwesomeIcon icon={faBars} />
                </div>

                {/* desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" 
                    className="relative text-[#F1F5F9] hover:text-[#D946EF] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D946EF] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home {" "}

                    </a>
                    <a href="#about" 
                    className="relative text-[#F1F5F9] hover:text-[#D946EF] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D946EF] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        About {" "}

                    </a>
                    <a href="#projects" 
                    className="relative text-[#F1F5F9] hover:text-[#D946EF] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D946EF] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Projects {" "}

                    </a>
                    <a href="#contact" 
                    className="relative text-[#F1F5F9] hover:text-[#D946EF] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D946EF] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Contact {" "}

                    </a>
                </div>

            </div>
        </div>

    </nav>
    ) 
}