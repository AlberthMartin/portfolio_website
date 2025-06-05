import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

// Project data
const projectList = [
  {
    title: "POS system",
    description:
      "Point of sale system to manage in-store sales, track products and discounts, print receipts, and gather sales statistics. Developed competitively within a team.",
    technologies: [
      "JavaFX",
      "Java",
      "Github",
      "Agile development",
      "Teamwork",
      "Presentation",
      "Requirement Analysis",
    ],
    githubLink: "https://github.com/AlberthMartin/CashierSystem",
  },
  {
    title: "Business Website",
    description:
      "Built a lawyer business website with a friend from scratch. Gathered requirements, presented to the client, and delivered successfully with great feedback.",
    technologies: [
      "React",
      "Github",
      "Pair Programming",
      "Presentation",
      "Client Management",
      "Requirement Analysis",
      "Communication",
    ],
    githubLink: "https://bouppteckning.fi",
  },
  // You can easily add more projects here
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-800 py-20 shadow-xl border-t border-slate-700"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12 text-center text-white">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="relative">
              {/* Background glow 
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-300 blur-xl opacity-30 animate-pulse z-0"></div>
*/}
              {/* Project Card */}
              <div className="relative bg-black z-10 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all flex flex-col h-full">
                <h3 className="text-xl text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={project.githubLink}
                    className="text-indigo-400 hover:text-indigo-300 transition-colors mx-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} size="2x"/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
