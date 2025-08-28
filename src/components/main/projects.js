import { Code, User, Database, Github, Link } from "lucide-react";

const Projects = () => {
    const projects = [{
        name: "Portfolioseite",
        description: "Portfolioseite erstellt mit React und Tailwind CSS",
        icon: <User size={32} className="text-white" />,
        link: "https://github.com/BlueCobra06/Portfolio-Webseite.git",
        date: "05.08.2025",
        tags: ["React", "Tailwind CSS"]
    },
    {
        name: "Material-Datenbank",
        description: "Material-Datenbank backend erstellt mit Java und PLPGSQL inklusive Frontend mit React und Tailwind CSS",
        icon: <Database size={32} className="text-white" />,
        link: "https://github.com/BlueCobra06/Material-Datenbank.git",
        date: "05.08.2025",
        tags: ["Java - Spring Boot", "PLPGSQL", "React", "Tailwind CSS"]
    }
    ];

    return (
        <div className="flex flex-col items-center justify-start h-full bg-gradient-to-br from-purple-900 to-indigo-800 p-8">
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
            <div className="grid grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-5">
                {projects.map((projects,index) => {
                    return (
                        <div key={index} className="group bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-sm border border-indigo-500/40 rounded-xl px-6 py-4 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-900/20 hover:border-indigo-400/60">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <div className="flex flex-row items-center gap-4">
                                    <div className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 p-3 rounded-xl border border-indigo-500/40 group-hover:from-indigo-800/50 group-hover:to-indigo-700/50 transition-colors duration-300">
                                        {projects.icon}
                                    </div>
                                    <div>
                                        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                            {projects.name}
                                        </h1>
                                        <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
                                    </div>
                                </div>
                                <div className="text-gray-300 font-medium text-sm md:text-base bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50">
                                    {projects.date}
                                </div>
                            </div>
                            <p className="w-full md:max-w-[50vh] h-auto px-1 py-3 mt-2 text-gray-300 leading-relaxed text-justify">
                                {projects.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {projects.tags.map((tag, tagIndex) => (
                                    <span 
                                        key={tagIndex} 
                                        className="bg-gradient-to-r from-indigo-900/30 to-indigo-800/30 border border-indigo-500/30 rounded-full px-3 py-1 text-sm font-medium text-indigo-100 transition-all duration-300 hover:from-indigo-800/50 hover:to-indigo-700/50 hover:border-indigo-400/50"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>    
                            <div className="flex gap-3">
                                <button className="group/btn w-full bg-gradient-to-r from-indigo-900/80 to-indigo-800/80 hover:from-indigo-800 hover:to-indigo-700 rounded-xl px-4 py-2 font-semibold text-lg text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-900/30">
                                    <a href={projects.link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2">
                                        <Github size={18} className="text-white group-hover/btn:scale-110 transition-transform" />
                                        GitHub
                                    </a>
                                </button>
                                <button className="group/btn w-full bg-gradient-to-r from-green-700/90 to-emerald-600/90 hover:from-green-600 hover:to-emerald-500 rounded-xl px-4 py-2 font-semibold text-lg text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-900/30">
                                    <a href={projects.link} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2">
                                        <Link size={18} className="text-white group-hover/btn:scale-110 transition-transform" />
                                        Live Demo
                                    </a>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;