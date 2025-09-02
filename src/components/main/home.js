import { ChevronDownIcon, Code, Folder, Mail } from "lucide-react";

const Home = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        const yHeight = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yHeight;
        window.scrollTo({top: y, behavior: 'smooth'});
    };
    return (
        <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center gap-4 absolute z-10">
                        <div className="w-24 h-24 p-3 mx-auto bg-gradient-to-r from-indigo-900 to-indigo-800 backdrop-blur-lg border border-white/80 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                            <Code size={80} className="text-white drop-shadow-lg" />
                        </div>
                        <h1 className="text-white font-bold text-4xl shadow-xl drop-shadow-xl">Dominik</h1>
                        <h2 className="text-white font-semibold text-lg">Wirtschaftsinformatik Student | 19 Jahre alt </h2>
                        <p className="text-white font-medium text-base italic">"Jeder Commit bringt mich näher zur perfekten App"</p>
                        <div className="flex gap-3 w-full flex-col">
                            <button className="w-full px-6 py-3 rounded-full text-white bg-gradient-to-r from-indigo-900 to-indigo-800 
                                                backdrop-blur-sm text-xl font-bold flex items-center justify-center gap-2 border border-white/20 font-semibold 
                                                hover:from-indigo-800 hover:to-indigo-700 hover:scale-[1.02] transition-all duration-300 shadow-lg"
                                                aria-label="Meine Projekte anzeigen"
                                                onClick={() => scrollToSection('projects')}>
                                <Folder size={20} className="text-white" />
                                Meine Projekte</button>
                            <button className="w-full px-6 py-3 rounded-full text-white border border-white text-xl font-bold flex items-center justify-center gap-2 
                                                hover:from-indigo-800 hover:to-indigo-700 hover:scale-[1.02] transition-all duration-300 shadow-lg"
                                                aria-label="Kontaktformular anzeigen"
                                                onClick={() => scrollToSection('contact')}>
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
    )
}

export default Home;