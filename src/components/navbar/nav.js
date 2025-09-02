const navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        const navbarHeight = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + navbarHeight;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    return (
        <nav>
            <div className="flex justify-center p-3 gap-4 fixed w-full bg-gradient-to-r from-indigo-900/95 to-indigo-800/95 shadow-xl z-50">
                <button onClick={() => scrollToSection('home')} className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl" aria-label="Zur Startseite scrollen">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl" aria-label="Über mich anzeigen">About</button>
                <button onClick={() => scrollToSection('projects')} className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl" aria-label="Projekte anzeigen">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="text-white font-bold text-xl cursor-pointer px-4 py-2 hover:shadow-lg hover:bg-white/10 transition-all duration-200 rounded-xl" aria-label="Kontaktformular">Contact</button>
            </div>
        </nav>
    );
}
export default navbar;