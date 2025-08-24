import React from "react";
import { Code, Folder, Mail } from "lucide-react";

const home = () => {
    return (
        <main>
            <div className="bg-gradient-to-br from-indigo-900/85 to-indigo-800/85 h-[100vh]">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center gap-4 absolute z-10">
                        <div className="w-24 h-24 p-3 mx-auto bg-gradient-to-r from-indigo-900/85 to-indigo-800/85 backdrop-blur-lg border border-white/80 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                            <Code size={80} className="text-white drop-shadow-lg" />
                        </div>
                        <h1 className="text-white font-bold text-4xl shadow-xl drop-shadow-xl">Dominik</h1>
                        <h2 className="text-white/90 font-semibold text-lg">Wirtschaftsinformatik Student | 19 Jahre alt </h2>
                        <p className="text-white/80 font-medium text-base italic">"Jeder Commit bringt mich näher zur perfekten App"</p>
                        <div className="flex gap-3 w-full flex-col">
                            <button className="w-full px-6 py-3 rounded-full text-white bg-gradient-to-r from-indigo-900/85 to-indigo-800/85 
                                                backdrop-blur-sm text-xl font-bold flex items-center justify-center gap-2 border border-white/20 font-semibold 
                                                hover:from-indigo-800/90 hover:to-indigo-700/90 hover:scale-[1.02] transition-all duration-300 shadow-lg">
                                <Folder size={20} className="text-white" />
                                Meine Projekte</button>
                            <button className="w-full px-6 py-3 rounded-full text-white border border-white text-xl font-bold flex items-center justify-center gap-2 
                                                hover:from-indigo-800/90 hover:to-indigo-700/90 hover:scale-[1.02] transition-all duration-300 shadow-lg">
                                <Mail size={20} className="text-white" />
                                Kontakt aufnehmen</button>
                        </div>
                    </div>
                    <video autoPlay loop muted className="relative w-full object-cover opacity-20 h-[92vh] mt-16">
                        <source src="/background.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="h-[100vh]">
                <div className="flex flex-col items-center justify-center h-full">
                    <span className="text-black font-bold text-2xl">Dominik</span>
                    <span className="text-black font-medium text-xl">Platz 2</span>
                </div>
            </div>
            <div className="h-[100vh]">
                <div className="flex flex-col items-center justify-center h-full">
                    <span className="text-black font-bold text-2xl">Dominik</span>
                    <span className="text-black font-medium text-xl">Platz 3</span>
                </div>
            </div>
            <div className="h-[100vh]">
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