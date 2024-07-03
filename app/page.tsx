"use client";

import { useState } from "react";
import About from "./components/about";
import Entrepreneurship from "./components/entrepreneurship";
import Experience from "./components/experience";
import Volunteering from "./components/volunteering";
import Footer from "./components/footer";

enum NavState {
  About,
  Entrepreneurship,
  Experience,
  Volunteering,
  FAQs,
}

const navStateToText = {
  [NavState.About]: "Hey there! Thanks for checking out my CV.",
  [NavState.Entrepreneurship]: "4x SWE & 3x Founder",
  [NavState.Experience]: "4x SWE & 3x Founder",
  [NavState.Volunteering]: "I think giving back is important!",
  [NavState.FAQs]: "Questions I get asked a lot!",
};

const navStateToComponent = {
  [NavState.About]: <About />,
  [NavState.Entrepreneurship]: <Entrepreneurship />,
  [NavState.Experience]: <Experience />,
  [NavState.Volunteering]: <Volunteering />,
  [NavState.FAQs]: <div>FAQs Component</div>,
};

export default function Home() {
  const [navState, setNavState] = useState(NavState.About);

  const handleNavClick = (state: NavState) => {
    setNavState(state);
  };

  return (
    <main className="bg-zinc-50">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="bg-zinc-800 text-white p-4 fixed top-10 left-1/2 transform -translate-x-1/2 w-1/2 rounded-lg">
          <ul className="flex justify-around">
            <li>
              <a href="#about" onClick={() => handleNavClick(NavState.About)}>
                About
              </a>
            </li>
            <li>
              <a
                href="#entrepreneurship"
                onClick={() => handleNavClick(NavState.Entrepreneurship)}
              >
                Entrepreneurship
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => handleNavClick(NavState.Experience)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#volunteering"
                onClick={() => handleNavClick(NavState.Volunteering)}
              >
                Volunteering
              </a>
            </li>
            <li>
              <a href="https://gauravranganath.substack.com/" target="_blank">Essays</a>
            </li>
            <li>
              <a href="#faqs" onClick={() => handleNavClick(NavState.FAQs)}>
                FAQs
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row items-center justify-center h-screen">
          <div className="w-1/2">
            <div className="flex items-center justify-center">
              <img
                src="/headshot.jpg"
                alt="Gaurav Ranganath"
                className="rounded-full border-8 border-zinc-800 w-96 h-96 mb-4"
              />
            </div>
            <div className="text-4xl font-bold flex items-center justify-center">
              Gaurav Ranganath
            </div>
            <div className="font-bold flex items-center justify-center mt-4">
              {navStateToText[navState]}
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col items-center justify-center">
              <div className="w-5/6 h-1/2">{navStateToComponent[navState]}</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
