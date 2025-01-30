import React from "react";

const projects = [
  {
    title: "Vehicle Recommendation System",
    description:
      "AI-powered system that recommends vehicles based on user preferences and requirements",
    image: "/project-previews/vehicle-rec.png",
    link: "https://vehicle-recomendation-system-rax7.vercel.app/",
    tech: ["React", "TailwindCSS", "Machine Learning"],
  },
  {
    title: "Password Generator",
    description:
      "Secure password generator with customizable options and strength indicators",
    image: "/project-previews/pwdgen.png",
    link: "https://pwdgen-nu.vercel.app/",
    tech: ["React", "TailwindCSS", "Cryptography"],
  },
  {
    title: "Botsix Lanka",
    description: "Corporate website showcasing IT solutions and services",
    image: "/project-previews/botsix.png",
    link: "https://botsix-lanka.com",
    tech: ["React", "TailwindCSS", "Node.js"],
  },
  {
    title: "Cotezco",
    description: "Modern e-commerce platform with advanced features",
    image: "/project-previews/cotezco.png",
    link: "https://cotezco.vercel.app",
    tech: ["Next.js", "TailwindCSS", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <div className="w-full  z-[50] px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold border-b-2 border-green-500 pb-2 inline-block mb-16">
          &gt; My_Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-green-500 bg-black bg-opacity-50 rounded-xl overflow-hidden hover:bg-green-900 hover:bg-opacity-20 transition-all duration-300"
            >
              {/* Project Preview Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full z-50 object-cover object-top transition-transform duration-1000 group-hover:translate-y-[-70%]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-500 mb-2">
                  &gt; {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full border border-green-500 text-green-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400 transition-colors duration-300"
                >
                  &gt; View_Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
