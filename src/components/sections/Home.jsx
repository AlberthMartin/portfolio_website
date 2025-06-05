import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Home = () => {
  return (
    <section
      id="home"
      className="py-56 md:py-56 flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-indigo-500/10 to-slate-800"
    >
      {/* Content */}
      <div className="text-center z-20 mx-18">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#F1F5F9]">
          Alberth Martin
        </h1>

        <p className="text-slate-400 text-xl mb-8 max-w-lg mx-auto rounded-xl font-medium">
        Driven Computer Engineering Student | Fast Learner | Future Software Innovator!
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="#projects"
            className="border border-[#F1F5F9] text-[#F1F5F9] py-2 px-6 rounded-xl font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-indigo-500/10"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-indigo-400 text-indigo-400 py-2 px-6 rounded-xl font-medium backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-indigo-500/10 hover:border-[#D946EF] hover:text-[#D946EF]"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 ">
          <a
            href="https://github.com/AlberthMartin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F1F5F9] hover:text-indigo-400 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F1F5F9] hover:text-indigo-400 transition-all"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};
