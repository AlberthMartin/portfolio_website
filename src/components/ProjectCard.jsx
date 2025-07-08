import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ImageModal } from "./ImageModal";
import { PanelTop } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="relative bg-black z-10 p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transition-all flex flex-col h-full">
      
      <h3 className="text-2xl text-white mb-8">{project.title}</h3>

      {/* Short summary */}
      <p className="text-gray-300 mb-2">{project.shortSummary}</p>

      {/* Read More / Description toggle */}
      {showFullDesc && (
        <div className="space-y-4 text-gray-400 text-base mb-6 leading-relaxed">
          {project.description.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      )}

      <button
        onClick={() => setShowFullDesc(!showFullDesc)}
        className=" text-indigo-400 hover:text-indigo-300 mb-6 transition-colors text-sm text-left cursor-pointer"
      >
        {showFullDesc ? "Show Less" : "Read More"}
      </button>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-10">
        {project.technologies.map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      {/*Links and images */}
      <div className="mt-auto place-items-start gap-4">
        <div className="flex gap-6 p-4">
          {project.githubLink ? (
            <a
              href={project.githubLink}
              className="text-indigo-400 hover:text-indigo-300 transition-colors mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          ) : (
            ""
          )}
          {/*Website */}
          {project.webSiteLink ? (
            <a
              href={project.webSiteLink}
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.webSiteLink}
            </a>
          ) : (
            ""
          )}
          {/*Images */}
          {project.images?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.images.map(({ label, src }, i) => (
                <ImageModal key={i} label={label} src={src} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
