import React from "react";
import { Code, Folder, Mail, ChevronDownIcon, User, Database, Globe, Github, ArrowRight } from "lucide-react";

const home = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: "smooth" });
    };
    const skills = [{name: "HTML", icon: <Code size={32} />}, 
                    {name: "Tailwind CSS", icon: <Code size={32} />}, 
                    {name: "JavaScript-React", icon: <Code size={32} />}, 
                    {name: "Java", icon: <Code size={32} />}, 
                    {name: "PLPGSQL", icon: <Database size={32} />}, 
                    {name: "Git", icon: <Globe size={32} />}];
    return (
        <main>
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 h-[100vh]" id="home">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center gap-4 absolute z-10">
                        <div className="w-24 h-24 p-3 mx-auto bg-gradient-to-r from-indigo-900 to-indigo-800 backdrop-blur-lg border border-white/80 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                            <Code size={80} className="text-white drop-shadow-lg" />
                        </div>
                        <h1 className="text-white font-bold text-4xl shadow-xl drop-shadow-xl">Dominik</h1>
                        <h2 className="text-white/90 font-semibold text-lg">Wirtschaftsinformatik Student | 19 Jahre alt </h2>
                        <p className="text-white/80 font-medium text-base italic">"Jeder Commit bringt mich näher zur perfekten App"</p>
                        <div className="flex gap-3 w-full flex-col">
                            <button className="w-full px-6 py-3 rounded-full text-white bg-gradient-to-r from-indigo-900 to-indigo-800 
                                                backdrop-blur-sm text-xl font-bold flex items-center justify-center gap-2 border border-white/20 font-semibold 
                                                hover:from-indigo-800 hover:to-indigo-700 hover:scale-[1.02] transition-all duration-300 shadow-lg">
                                <Folder size={20} className="text-white" />
                                Meine Projekte</button>
                            <button className="w-full px-6 py-3 rounded-full text-white border border-white text-xl font-bold flex items-center justify-center gap-2 
                                                hover:from-indigo-800 hover:to-indigo-700 hover:scale-[1.02] transition-all duration-300 shadow-lg">
                                <Mail size={20} className="text-white" />
                                Kontakt aufnehmen</button>
                        </div>
                    </div>
                    <video autoPlay loop muted className="relative w-full object-cover opacity-10 h-[92vh] mt-16">
                        <source src="/background.mp4" type="video/mp4" />
                    </video>
                    <ChevronDownIcon className="absolute text-white bottom-10 w-10 h-10 cursor-pointer" 
                            onClick={() => scrollToSection('about')}/>
                </div>
            </div>
            <div className="h-[100vh]" id="about">
                <div className="flex flex-row items-start h-full bg-gradient-to-br from-slate-900 to-gray-900 p-8">
                    <div className="w-1/2 pr-8">
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
                        <div className="flex flex-wrap gap-3">
                            <button className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg">
                                <Github size={20} />
                                GitHub
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="group flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 border border-white/20">
                                <Mail size={20} />
                                Kontakt
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-white font-bold text-4xl mb-12 mt-2 text-center">Meine Fähigkeiten</h1>
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
            <div className="h-[100vh]" id="projects">
                <div className="flex flex-col items-center justify-center h-full">
                    <span className="text-black font-bold text-2xl">Dominik</span>
                    <span className="text-black font-medium text-xl">Platz 3</span>
                </div>
            </div>
            <div className="h-[100vh]" id="contact">
                <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-indigo-900/85 to-indigo-800/85">
                    <section className="border border-white bg-gradient-to-br from-indigo-900/85 to-indigo-800/85 backdrop-blur-lg rounded-2xl p-10 w-[50%]">
                        <h1 className="text-white font-bold text-2xl text-center underline font-bold">Kontakt</h1>
                        <form className="flex flex-col gap-4"> 
                            <label className="text-white font-bold text-xl">Name</label>
                            <input type="text" placeholder="Name" className="border border-white/20 rounded-xl px-4 py-2" />
                            <label className="text-white font-bold text-xl">E-Mail</label>
                            <input type="email" placeholder="E-Mail" className="border border-white/20 rounded-xl px-4 py-2" />
                            <label className="text-white font-bold text-xl">Nachricht</label>
                            <textarea placeholder="Nachricht" className="border border-white/20 rounded-xl px-4 py-2"></textarea>
                            <button type="submit" className="bg-gradient-to-r from-indigo-900/85 to-indigo-800/85 backdrop-blur-sm text-white font-bold text-xl cursor-pointer px-4 py-2 
                                                            hover:from-indigo-800/90 hover:to-indigo-700/90 hover:scale-[1.02] 
                                                            transition-all duration-300 shadow-xl backdrop-blur-lg rounded-xl">Senden</button>
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default home;