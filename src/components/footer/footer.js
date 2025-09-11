const Footer = () => {
    return (
        <footer className="w-full text-white py-4 mt-auto bg-gradient-to-br from-slate-900 to-gray-900 border-t border-white/10">
            <div className="container mx-auto text-bottom-0">
                <div className="flex justify-center space-x-8 mb-2">
                    <p className="text-md">Impressum</p>
                    <p className="text-md">Datenschutz</p>
                    <p className="text-md">AGB</p>
                </div>
                <p className="text-center text-md"
                    >&copy; {new Date().getFullYear()} Dominik. Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    );
}

export default Footer;