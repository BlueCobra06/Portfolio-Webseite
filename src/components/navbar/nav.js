const navbar = () => {
    return (
        <nav>
            <div className="flex justify-center p-3 gap-4 fixed w-full bg-gradient-to-r from-indigo-900/85 to-indigo-800/85 backdrop-blur-lg shadow-xl">
                <span className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl">Home</span>
                <span className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl">About</span>
                <span className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl">Projects</span>
                <span className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl">Contact</span>
            </div>
        </nav>
    );
}
export default navbar;