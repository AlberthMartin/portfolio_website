import { motion } from 'framer-motion';
import {GraduationCap} from "lucide-react";

export const About = () => {
    const frontendSkills = ["React", "TailwindCSS", "JavaFX", "SceneBuilder"];
    const backendSkills = ["Java", "JavaScript", "Python", "NodeJs", "MongoDB", "Express", "Github"];
    const softSkills = [ "Agile development", "Communication", "Requirement Analysis", "Problem Solving"];
  
    return (
      <section
        id="about"
        className=" py-20 px-6 bg-slate-900 text-[#F1F5F9] flex flex-col items-center shadow-xl border-t border-slate-700"
      >
        <div className="max-w-4xl w-full">

          <motion.h2 
          className="text-4xl font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          viewport={{ once: true, amount: 0.3 }}
          >About Me
          </motion.h2>
  
          {/* Intro */}
          <motion.p 
          className="text-slate-300 text-lg leading-relaxed mb-12 md:text-justify"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, delay: 3 }}
          >
            I am a fourth-year Computer Engineering student with a 
            strong academic record and a growing portfolio of real-world development experience. 
            I have excelled in core computer science subjects, earning the highest posible grade (5/5) in 
            Algorithms, Data Structures, Object-Oriented Design, Software Engineering, Software Requirements Analysis
            Databases, Introduction to Cybersecurity and Operating Systems.  My fluency in English and Swedish, 
            along with conversational Finnish, enables effective communication in diverse, collaborative environments. 
            Through my university studies, I’ve also gained extensive experience working 
            in teams, developing both technical and interpersonal skills essential for successful group projects.
          </motion.p>
  
          {/* Education */}
          <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5 }}
          >
            <h3 className="text-2xl mb-4">Education</h3>
            <div className="pl-4 border-l-4 border-indigo-400">
              <p className="font-semibold">Bachelorʼs Program in Information Technology, Computer Engineering <span className='italic'>2022 -2025</span></p>
              
              <p className="text-slate-300 mt-1 italic">
                Data Structures: 5/5, Algorithms: 5/5, Databases: 5/5,
                Software Engineering: 5/5, Object-Oriented Design 5/5, Software Requirements Analysis 5/5, Introduction to Cybersecurity 5/5, Web Development: 4/5
              </p>
              <p className="mt-4 text-slate-300">
                Bachelor's thesis on: "Using Convolutional Neural Networks for Network Intrusion Detection" <br>
                </br>
                Received the highest possible grade (5/5) from a well-regarded 
                professor with extensive publications in the field. <a href="https://research.abo.fi/en/persons/dragos-truscan/publications/" target="_blank" className="text-white underline hover:text-indigo-300 transition">Dragos Truscan</a>
                

              </p>
            </div>
            <div className="pl-4 mt-6 border-l-4 border-indigo-400">
              <p className="font-semibold">Master’s­ Degree­ Pro­gramme­ in­ Information Tech­nology, Computer Engineering, <span className="italic">2025 - 2027</span></p>
              
            </div>
          </motion.div>

          {/*Key courses */}
  
          {/* Technologies */}
<div className="mb-12">
  <motion.h3 
  className="text-2xl mb-6"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.3 }}
  >
    Technologies</motion.h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Repeatable Card */}
    {[ 
      { title: "Frontend", skills: frontendSkills },
      { title: "Backend", skills: backendSkills },
      { title: "Soft Skills", skills: softSkills }
    ].map((section, i) => (
      <motion.div 
      className="relative h-full flex flex-col" 
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        {/* Glow effect behind
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-300 blur-xl opacity-30 animate-pulse z-0" />
        */}
        {/* Card */}
        <div className="relative flex flex-col flex-1 bg-black z-10 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
          <h3 className="text-xl mb-4">{section.title}</h3>
          <div className="flex flex-wrap gap-2 ">
            {section.skills.map((skill, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

    ))}
      
  
  </div>
</div>
      </div>
    </section>
  );
};
  