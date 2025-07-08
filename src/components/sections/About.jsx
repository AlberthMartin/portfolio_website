export const About = () => {
  const frontendSkills = [
    "React",
    "TailwindCSS",
    "ChakraUI",
    "JavaFX",
    "SceneBuilder",
  ];
  const backendSkills = [
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express",
    "Github",
    "Java",
  ];
  const softSkills = [
    "Team Collaboration",
    "Client Collaboration",
    "Requirement Analysis",
    "Problem Solving",
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-slate-900 text-[#F1F5F9] flex flex-col items-center shadow-xl border-t border-slate-700"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-semibold mb-12 text-center">About Me</h2>

        {/* Intro */}
        <div className="align-content text-slate-300 text-xm leading-relaxed mb-12 md:text-justify space-y-6">
          <p>
            I’m a Master’s student in Computer Engineering student with top
            academic performance and hands-on experience building full-stack and
            front-end applications. I’ve earned the highest grade (5/5) in key
            computer science courses including Algorithms and Data Structures,
            Object-Oriented Design, Software Engineering, Databases,
            Cybersecurity and Operating Systems.
          </p>
          <p>
            Alongside my studies, I’ve designed, built, and deployed full-stack
            and front-end applications using technologies such as React,
            Node.js, MongoDB, and Express. These projects have deepened my
            skills in both backend architecture and modern UI development.
          </p>

          <p>
            My fluency in English and Swedish, combined with conversational
            Finnish, supports effective communication in collaborative
            environments. University projects have further strengthened my
            ability to work in diverse teams and deliver results under
            deadlines.
          </p>

          <p>
            I’m now seeking a summer trainee position where I can contribute
            with real development skills, grow as a software engineer, and gain
            experience in a professional setting.
          </p>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6 text-white">Education</h3>

          {/* Bachelor's Degree */}
          <div className="pl-5 border-l-4 border-indigo-400 space-y-3">
            <p className="text-xl font-semibold text-white">
              Bachelor’s Program in Information Technology, Computer Engineering{" "}
              <span className="italic text-slate-300">(2022 – 2025)</span>
            </p>

            <p className="text-slate-300 italic">
              Data Structures: 5/5, Algorithms: 5/5, Databases: 5/5, Software
              Engineering: 5/5, Object-Oriented Design: 5/5, Software
              Requirements Analysis: 5/5, Introduction to Cybersecurity: 5/5,
              Web Development: 4/5
            </p>

            <div className="text-slate-300">
              <p className="font-bold text-white mb-1">
                Bachelor's thesis on:{" "}
                <span className="italic">
                  “Using Convolutional Neural Networks for Network Intrusion
                  Detection”
                </span>
              </p>
              <p>
                Received the highest grade (5/5) under supervision of{" "}
                <a
                  href="https://research.abo.fi/en/persons/dragos-truscan/publications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-white hover:text-indigo-300 transition"
                >
                  Professor Dragos Truscan
                </a>
                , a recognized researcher in the field.
              </p>
            </div>
          </div>

          {/* Master's Degree */}
          <div className="pl-5 mt-8 border-l-4 border-indigo-400">
            <p className="text-white text-lg font-semibold">
              Master’s Degree Programme in Information Technology, Computer
              Engineering{" "}
              <span className="italic text-slate-300">(2025 – 2027)</span>
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h3 className="text-2xl mb-6">Technologies</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Frontend", skills: frontendSkills },
              { title: "Backend", skills: backendSkills },
              { title: "Soft Skills", skills: softSkills },
            ].map((section, i) => (
              <div className="relative h-full flex flex-col" key={i}>
                <div className="relative flex flex-col flex-1 bg-black z-10 p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
                  <h3 className="text-xl mb-4">{section.title}</h3>
                  <div className="flex flex-wrap gap-2">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
