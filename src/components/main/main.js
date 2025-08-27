import React from "react";
import About from "./about";
import Home from "./home";
import Projects from "./projects";
import Contact from "./contact";

const home = () => {
    return (
        <main>
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 h-[100vh]" id="home">
                <Home />
            </div>
            <div className="h-auto" id="about">
                <About />
            </div>
            <div className="h-[100vh]" id="projects">
                <Projects />
            </div>
            <div className="h-[100vh]" id="contact">
                <Contact />
            </div>
        </main>
    );
}

export default home;