const navbar = () => {
    return (
        <nav>
            <div className="flex justify-center p-3 gap-4 fixed w-full bg-gradient-to-r from-indigo-900/85 to-indigo-800/85 backdrop-blur-lg shadow-xl">
                <a href="#home" className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl">Home</a>
                <a href="#about" className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl">About</a>
                <a href="#projects" className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl">Projects</a>
                <a href="#contact" className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl">Contact</a>
            </div>
        </nav>
    );
}
export default navbar;