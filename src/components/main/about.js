import { User, Code, Database, Globe, Mail, ArrowRight, Github } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3,faJsSquare, faJava, faDatabase, faGitAlt} from "@fortawesome/free-brands-svg-icons";
import { faDatabase as faDatabaseSolid } from "@fortawesome/free-solid-svg-icons";


const About = () => {
    const skills = [
        {name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-xl" />},
        {name: "Tailwind CSS", icon: <FontAwesomeIcon icon={faCss3} className="text-cyan-500 text-xl" />}, 
        {name: "JavaScript-React", icon: <FontAwesomeIcon icon={faJsSquare} className="text-yellow-500 text-xl" />}, 
        {name: "Java", icon: <FontAwesomeIcon icon={faJava} className="text-red-500 text-xl" />}, 
        {name: "PLPGSQL", icon: <FontAwesomeIcon icon={faDatabaseSolid} className="text-green-500 text-xl" />}, 
        {name: "Git", icon: <FontAwesomeIcon icon={faGitAlt} className="text-orange-500 text-xl" />}];

    return (
        <div>
            <div className="flex flex-col items-start h-full bg-gradient-to-br from-slate-900 to-gray-900 p-10 justify-center items-center">
                <div className="w-full lg:max-w-5xl md:max-w-3xl sm:max-w-xl">
                    <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                        <div className="flex items-center gap-4 text-white mb-8">
                            <div className="p-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
                                <User size={32} className="text-indigo-400"/>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                                    Über mich
                                </h1>
                                <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"></div>
                            </div>
                        </div>
                        <div className="space-y-6 mb-8">
                            <div className="bg-white/5 border-l-4 border-indigo-500 rounded-r-xl p-6">
                                <p className="text-lg leading-relaxed text-gray-200">
                                    Als 19-jähriger Wirtschaftsinformatik Student brenne ich für die Entwicklung innovativer digitaler Lösungen.
                                    Meine Leidenschaft liegt darin, komplexe Probleme durch eleganten Code zu lösen und dabei immer den Nutzer im Fokus zu behalten.
                                </p>
                            </div>
                            <div className="bg-white/5 border-l-4 border-purple-500 rounded-r-xl p-6">
                                <p className="text-lg leading-relaxed text-gray-200">
                                    Neben meinem Studium arbeite ich kontinuierlich an persönlichen Projekten und erweitere meine Fähigkeiten in modernen Webtechnologien.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-6">
                            <button className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg" aria-label="GitHub Profil öffnen">
                                <Github size={20} />
                                GitHub
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 border border-white/20" aria-label="Kontaktformular anzeigen">">
                                <Mail size={20} />
                                Kontakt
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-5xl md:max-w-3xl sm:max-w-xl mt-16">
                    <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-8 rounded-2xl backdrop-blur-sm border border-indigo-500/20">
                        <div className="flex flex-row items-center gap-2 mb-4">
                            <div className="rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-4 border border-indigo-500/30 mr-1">
                                <Code size={30} className="text-white"/>
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-4xl">Meine Fähigkeiten</h1>
                                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {skills.map((skill, index) => (
                                <div key={index} className="group relative overflow-hidden rounded-full">
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-0 
                                                    group-hover:opacity-100 transition-all duration-300"/>
                                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3
                                                    group-hover:border-indigo-400/60 transition-all duration-300 group-hover:scale-[1.02]">
                                        <div className="flex items-center gap-3">
                                            <div className="text-indigo-400 group-hover:text-white transition-colors">{skill.icon}</div>
                                            <span className="text-white font-medium group-hover:text-indigo-100 transition-colors">{skill.name}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default About;
