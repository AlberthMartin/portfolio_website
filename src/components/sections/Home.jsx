import { motion } from "framer-motion";

export const Home = () =>{


    return(
        <section 
        id="home" 
        className="py-32 md:py-62 flex items-center justify-center relative">
            {/* Background Video */}
            <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/3163534-uhd_3840_2160_30fps.mp4" 
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            />
            
        
            {/* Content */}
            <div className="text-center z-20 mx-18">
                {/*TEXT */}
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#F1F5F9] ">
                    Alberth Martin
                </h1>

                <p className="text-[#F1F5F9] text-xl mb-8 max-w-lg mx-auto  rounded-xl font-medium">
                    Master Computer Engineering Student
                </p>
               
                {/* BUTTONS */}
                <div className="flex justify-center space-x-4">
                    <a 
                    href="#projects" className="border border-[#F1F5F9] text-[#F1F5F9] py-2 px-6 rounded-xl font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-indigo-500/10">
                        View Projects
                    </a>
                    <a 
                    href="#contact" className="border border-[#C084FC] text-[#C084FC] py-2 px-6 rounded-xl font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-indigo-500/10 hover:border-[#D946EF] hover:text-[#D946EF]">
                        Contact Me
                    </a>
                    
                </div>
            </div>
        </section>
    )
}