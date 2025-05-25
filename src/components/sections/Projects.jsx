import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export const Projects = () =>{


    return(
    <section 
    id="projects" 
    className="bg-[#0F172A] py-20 "
    >
        <div className="max-w-5xl mx-auto px-18">
            <h2 className="text-4xl font-semibold mb-12 text-center">
                Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible items-stretch">
                <div className="relative">

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-300 blur-xl opacity-30 animate-pulse z-0"></div>
                    
                {/*Projects */}
                <div className="relative bg-black z-10 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all ">
                    <h3 className="text-xl mb-2">POS system</h3>
                    <p className="text-gray-400 mb-4">
                        Point of sale system, to manage a sale in the store, saving sales and printing recepices. Keep track of the products and their prices and discounts. As well as gather statistics about the products sold. Competing with other teams to get the best project.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                        {["JavaFX", "Java", "Github", "Agile development", "Teamwork", "Presentation", "Requirement Analysis"].map((tech, key)=>(
                            <span 
                            key={key}
                            className="bg-blue-500/10 justify-content text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                            hover:shadow-[0_2px_8_px_rgba(59,130,246,0.1)] transition-all h-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-indigo-500 hover:text-blue-300 transition-colors my-4 ml-3" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    </div>
                    </div>   
                </div>
                
                <div className="relative">

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-300 blur-xl opacity-30 animate-pulse z-0"></div>
                    
                {/*Projects */}
                <div className="relative bg-black h-full flex flex-col z-10 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
                    <h3 className="text-xl mb-2">Business Website</h3>
                    <p className="text-gray-400 mb-4">
                        Built with a friend a Lawyer Business website for a client from scratch. Gathered requirements, presented the project to client, got paid and good feedback.
                    </p>
                    <div className='flex flex-wrap gap-2'>
                        {["React", "Github", "Pair Programming", "Presentation", "Client Management", "Requirement Analysis", "Communication"].map((tech, key)=>(
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 
                            hover:shadow-[0_2px_8_px_rgba(59,130,246,0.1)] transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-indigo-500 hover:text-blue-300 transition-colors my-4 ml-3" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    </div>
                    </div>   
                </div>
            </div>
        </div>
    </section>)
    

}