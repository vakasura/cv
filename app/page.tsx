"use client";

import { useState } from "react";
import About from "./components/about";
import Experience from "./components/experience";

enum NavState {
  About,
  Experience,
  Projects,
  Volunteering,
  Essays,
  FAQs
}

const navStateToText = {
  [NavState.About]: "Hey there! Thanks for checking out my CV.",
  [NavState.Experience]: "4x SWE & 2x Founder",
  [NavState.Projects]: "Here are some of my projects!",
  [NavState.Volunteering]: "I think giving back is important!",
  [NavState.Essays]: "I like to read and write about philosophy.",
  [NavState.FAQs]: "Questions I get asked a lot!"
};

const navStateToComponent = {
  [NavState.About]: <About />,
  [NavState.Experience]: <Experience />,
  [NavState.Projects]: <div>Projects Component</div>,
  [NavState.Volunteering]: <div>Volunteering Component</div>,
  [NavState.Essays]: <div>Essays Component</div>,
  [NavState.FAQs]: <div>FAQs Component</div>
};

export default function Home() {
  const [navState, setNavState] = useState(NavState.About);

  const handleNavClick = (state: NavState) => {
    setNavState(state);
  };

  return (
    <main>
      <nav className="bg-gray-800 text-white p-4 fixed top-10 left-1/2 transform -translate-x-1/2 w-1/2 rounded-lg">
        <ul className="flex justify-around">
          <li><a href="#about" onClick={() => handleNavClick(NavState.About)}>About</a></li>
          <li><a href="#experience" onClick={() => handleNavClick(NavState.Experience)}>Entrepreneurship</a></li>
          <li><a href="#experience" onClick={() => handleNavClick(NavState.Experience)}>Experience</a></li>
          <li><a href="#projects" onClick={() => handleNavClick(NavState.Projects)}>Projects</a></li>
          <li><a href="#service" onClick={() => handleNavClick(NavState.Volunteering)}>Volunteering</a></li>
          <li><a href="#essays" onClick={() => handleNavClick(NavState.Essays)}>Essays</a></li>
          <li><a href="#faqs" onClick={() => handleNavClick(NavState.FAQs)}>FAQs</a></li>
        </ul>
      </nav>
      <div className="flex flex-row items-center justify-center h-screen">
        <div className="w-1/2">
          <div className="text-4xl font-bold flex items-center justify-center">Gaurav Ranganath</div>
          <div className="font-bold flex items-center justify-center mt-4">
            {navStateToText[navState]}
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col items-center justify-center">
            <div className="w-5/6 h-1/2 p-4 bg-gray-800 rounded-lg text-white">
              {navStateToComponent[navState]}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
