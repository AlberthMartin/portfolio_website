import { useState } from "react";
import { ProjectCard } from "../ProjectCard";

// Project data
const projectList = [
  {
    title: "Training Management System",
    shortSummary:
      "Full-stack app for creating and managing personalized workout programs with secure authentication and modern, responsive UI.",
    description:
      "A full-stack web application for managing personalized training programs. Users can create, edit, and delete workouts composed of exercises with customizable sets, reps, weights, and rest times.\n The app features secure JWT-based authentication, responsive light/dark mode, and intuitive UI built with Chakra UI. Users can also manage their exercise library directly within the app. Designed with modern UX principles and built to scale — with new features continuously in development.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "ChakraUI",
      "JWT Authentication",
      "UI/UX Design",
    ],
    githubLink: "https://github.com/AlberthMartin/TrainingManagementSystem",
    webSiteLink: "",
  },

  {
    title: "Business Website",
    shortSummary:
      "Professional website developed collaboratively for a law firm, including client requirements, design presentations, and successful delivery.",
    description:
      "Collaboratively developed a professional website for a law firm from the ground up. Led the requirements gathering process, presented design drafts to the client, and delivered a polished final product that received excellent feedback.",
    technologies: [
      "React",
      "TailwindCSS",
      "Github",
      "Team Collaboration",
      "Presentation",
      "Client Collaboration",
      "Requirement Engineering",
      "UI/UX",
    ],
    githubLink: "https://github.com/AlberthMartin/bouppteckning",
    webSiteLink: "https://bouppteckning.fi",
  },
  {
    title: "Home Automation Project",
    shortSummary:
      "Smart home system integrating 50+ devices with custom dashboards and automations that helps daily routines.",
    description:
      "Developed a smart home automation system for a real client using Home Assistant. Integrated over 50 smart devices like lights, sensors, speakers, and switches into an intuitive dashboard.\n Designed clean, responsive room-based views and implemented automations such as a 'Good Morning' routine that starts lights, music, and coffee. Included smart utility features like a button to turn off all lights and real-time device status tracking. The system significantly improved the client’s daily routines and is used daily to control the home environment.",
    technologies: [
      "Home Assistant",
      "YAML Automations",
      "Smart Home Integration",
      "UI Design",
      "IoT",
      "Custom Dashboards",
      "Client Collaboration",
    ],
    githubLink: "",
    webSiteLink: "",
    images: [
      {
        label: "Main Dashboard",
        src: "/images/HomeAssistant_Main_Dasboard.png",
      },
      {
        label: "Enitites Overview",
        src: "/images/HomeAssistantProjectEntities.png",
      },
      {
        label: "Lights Dashboard",
        src: "/images/HomeAssistant_LightsDashboard.png",
      },
    ],
  },
  {
    title: "POS system",
    shortSummary:
      "University team project: a full-featured Point of Sale system handling sales, discounts, receipts, and hardware API integration.",
    description:
      "Built a fully functional Point of Sale system as part of a university course team project. The system handles in-store transactions, product and discount management, receipt printing, and sales statistics.\n Integrated with external REST APIs for a cashbox, card reader, and receipt printer to simulate real-world hardware interactions. Developed using agile practices with a focus on usability, modularity, and teamwork.",
    technologies: [
      "Java",
      "JavaFX",
      "Github",
      "Agile development",
      "Team Collaboration",
      "Presentation Skills",
      "Requirement Analysis",
    ],
    githubLink: "https://github.com/AlberthMartin/CashierSystem",
    webSiteLink: "",
  },
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
          {/* Project Card */}
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
