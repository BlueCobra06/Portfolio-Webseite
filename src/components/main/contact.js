import { Send, Mail } from "lucide-react";

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-slate-900 to-gray-900 p-10">
            <div className="w-[80%] flex flex-col items-center">   
                <div className="flex flex-row items-center gap-2 mb-4 bg-white/10 rounded-2xl p-8 border border-white/10 mb-8 w-[50%]">
                    <div className="rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-4 border border-indigo-500/30 mr-1">
                        <Mail size={30} className="text-white"/>
                    </div>
                    <div>
                        <h1 className="text-white font-bold text-4xl">Kontakt</h1>
                        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"></div>
                    </div>
                </div>  
                <section className="border border-white/10 bg-white/5 backdrop-blur-lg rounded-2xl p-10 w-[50%]">  
                    <form className="flex flex-col gap-4"> 
                        <label className="text-white font-bold text-xl">Name</label>
                        <input type="text" placeholder="Dein Name" className="border border-white/10 rounded-xl px-4 py-2 bg-white/5" required/>

                        <label className="text-white font-bold text-xl">E-Mail</label>
                        <input type="email" placeholder="deine@email.de" className="border border-white/10 rounded-xl px-4 py-2 bg-white/5" required/>

                        <label className="text-white font-bold text-xl">Nachricht</label>
                        <textarea placeholder="Nachricht" className="border border-white/10 rounded-xl px-4 py-2 bg-white/5" required></textarea>

                        <div className="">
                            <button type="submit" className="bg-indigo-600
                                                            backdrop-blur-sm 
                                                            text-white font-bold text-xl cursor-pointer px-4 py-2 
                                                            hover:from-indigo-800/90 hover:to-indigo-700/90 hover:scale-[1.02] 
                                                            transition-all duration-300 
                                                            shadow-xl backdrop-blur-lg rounded-xl 
                                                            border border-indigo-500/30 
                                                            w-full flex items-center justify-center gap-2">
                                <Send size={20} className="text-white"/>
                                Senden
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default Contact;