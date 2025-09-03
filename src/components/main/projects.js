import { Code, User, Database, Github, Link } from "lucide-react";

const Projects = () => {
    const projects = [{
        name: "Portfolioseite",
        description: "Eine moderne und responsive Portfolioseite erstellt mit React und Tailwind CSS. Fokus auf saubere Benutzeroberfläche und optimale Performance für alle Geräte.",
        icon: <User size={32} className="text-white" />,
        link: "https://github.com/BlueCobra06/Portfolio-Webseite.git",
        date: "05.08.2025",
        tags: ["React", "Tailwind CSS"]
    },
    {
        name: "Material-Datenbank",
        description: "Eine umfassende Material-Datenbank, die mit Java und PLPGSQL für das Backend sowie React und Tailwind CSS für das Frontend entwickelt wurde.",
        icon: <Database size={32} className="text-white" />,
        link: "https://github.com/BlueCobra06/Material-Datenbank.git",
        date: "05.08.2025",
        tags: ["Java - Spring Boot", "PLPGSQL", "React", "Tailwind CSS"]
    }
    ];

    return (
        <div className="flex flex-col items-center justify-start h-full bg-gradient-to-br from-slate-900 to-gray-900 p-8">
            <div className="flex flex-row items-center gap-2">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
                    <Code size={32} className="text-white" />
                </div>
                <div>
                    <h1 className="text-5xl text-white font-bold bg-gradient-to-r from-indigo-500/20 to-purple-500/20 bg-clip-text text-transparent">
                            Meine Projekte
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-5 w-full lg:max-w-5xl md:max-w-3xl sm:max-w-xl">
                {projects.map((projects,index) => {
                    return (
                        <div key={index} className="group bg-gradient-to-br from-gray-800/60 to-gray-900/70 backdrop-blur-sm border border-indigo-500/40 rounded-xl px-6 py-4 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-900/20 hover:border-indigo-400/60">
                            <div className="flex flex-row items-center justify-between gap-4">
                                <div className="flex flex-row items-center gap-4">
                                    <div className="bg-gradient-to-br from-indigo-500/30 to-purple-500/30 p-4 rounded-2xl border border-white/20 bacjkdrop-blur-sm">
                                        {projects.icon}
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold text-white mb-2">
                                            {projects.name}
                                        </h1>
                                        <div className="text-gray-300 text-sm bg-gray-800/50 px-3 py-1 rounded-full inline-block">
                                            {projects.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-200 leading-relaxed text-justify mb-6">
                                {projects.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {projects.tags.map((tag, tagIndex) => (
                                    <span 
                                        key={tagIndex} 
                                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white/95"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>    
                            <div className="flex gap-3">
                                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-indigo-500/80 backdrop-blur-sm hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 border border-indigo-400/30">
                                    <a href={projects.link} className="flex items-center gap-2" aria-label="GitHub Repository des Projekts öffnen">
                                        <Github size={18}/>
                                        GitHub
                                    </a>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-500/80 backdrop-blur-sm hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 border border-emerald-400/30">
                                    <a href={projects.link} className="flex items-center gap-2" aria-label="Live Demo des Projekts öffnen">
                                        <Link size={18}/>
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