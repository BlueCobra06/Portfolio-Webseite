import { Code, User, Database, Github } from "lucide-react";

const Projects = () => {
    const projects = [{
        name: "Portfolioseite",
        description: "Portfolioseite erstellt mit React und Tailwind CSS",
        icon: <User size={32} className="text-white" />,
        link: "https://github.com/BlueCobra06/Portfolio-Webseite.git"
    },
    {
        name: "Material-Datenbank",
        description: "Material-Datenbank backend erstellt mit Java und PLPGSQL inklusive Frontend mit React und Tailwind CSS",
        icon: <Database size={32} className="text-white" />,
        link: "https://github.com/BlueCobra06/Material-Datenbank.git"
    }
    ];
    return (
        <div className="flex flex-col items-center justify-start h-full bg-gradient-to-br from-indigo-900 to-indigo-800 p-8">
            <div className="flex flex-row items-center gap-2">
                <div className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/20 p-4 rounded-xl border border-indigo-500/30">
                    <Code size={32} className="text-white" />
                </div>
                <div>
                    <h1 className="text-4xl text-white font-bold">
                            Meine Projekte
                        </h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-full mt-2"></div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-4 mt-5">
                {projects.map((projects,index) => {
                    return (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3">
                            <div className="flex flex-row items-center gap-4">
                                <div className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/20 p-4 rounded-xl border border-indigo-500/30">
                                    {projects.icon}
                                </div>
                                <div>
                                    <h1 className="text-3xl text-white font-bold">{projects.name}</h1>
                                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-full mt-2"></div>
                                </div>
                            </div>
                            <p className="w-[50vh] h-24 px-4 py-2 mt-2 text-white leading-relaxed text-justify text-white">{projects.description}</p>
                            <button className="bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-xl px-4 py-2 font-bold text-xl">
                                <a href={projects.link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2 text-white">
                                    <Github size={20} className="text-white" />
                                    GitHub
                                </a>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;