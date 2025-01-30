import React from "react";
import Parallax from "./components/Parallax";
import TechStackSlider from "./components/TechStackSlider";
import AboutMe from "./components/AboutMe";
import MatrixRain from "./components/MatrixRain";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="App relative">
      {/* Parallax section wrapper */}
      <div className="relative h-[400vh] z-20">
        <Parallax />
      </div>

      <div className="relative bg-black">
        {/* Matrix Rain Background for all sections below */}
        <MatrixRain />

        {/* About Me Section */}
        <div className="relative z-30">
          <AboutMe />
        </div>

        {/* What I Do section */}
        <div className="relative z-30 bg-black w-full min-h-screen text-white font-mono overflow-hidden">
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold border-b-2 border-green-500 pb-2 inline-block mb-16">
              &gt; What_I_Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Full Stack Development Card */}
              <div className="border border-green-500 bg-black bg-opacity-50 rounded-xl p-6 hover:bg-green-900 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-bold text-green-500 mb-4">
                  &gt; Full_Stack_Development
                </h3>
                <p className="text-sm leading-relaxed mb-6">
                  I develop full stack applications with frameworks like{" "}
                  <span className="text-green-400">NodeJS</span>,{" "}
                  <span className="text-green-400">ReactJS</span>,{" "}
                  <span className="text-green-400">Laravel</span>,{" "}
                  <span className="text-green-400">SpringBoot</span> and I have
                  5+ years of experience in developing full stack applications
                </p>
                <button className="text-sm bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400 transition-colors duration-300">
                  &gt; Check_Projects
                </button>
              </div>

              {/* Mobile Development Card */}
              <div className="border border-green-500 bg-black bg-opacity-50 rounded-xl p-6 hover:bg-green-900 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-bold text-green-500 mb-4">
                  &gt; Mobile_Development
                </h3>
                <p className="text-sm leading-relaxed mb-6">
                  I develop mobile applications mainly with{" "}
                  <span className="text-green-400">React Native</span> and{" "}
                  <span className="text-green-400">Flutter</span> which are
                  cross-platform and I have more experience in Android
                  Development from Java and Kotlin
                </p>
                <button className="text-sm bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400 transition-colors duration-300">
                  &gt; Check_Projects
                </button>
              </div>

              {/* Software Development Card */}
              <div className="border border-green-500 bg-black bg-opacity-50 rounded-xl p-6 hover:bg-green-900 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-bold text-green-500 mb-4">
                  &gt; Software_Development
                </h3>
                <p className="text-sm leading-relaxed mb-6">
                  I have 3+ years experience in developing custom software in{" "}
                  <span className="text-green-400">Java</span> and{" "}
                  <span className="text-green-400">Python QT</span> and many
                  more. I can develop custom POS systems per client's
                  requirements and needs
                </p>
                <button className="text-sm bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400 transition-colors duration-300">
                  &gt; Check_Projects
                </button>
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold border-b-2 border-green-500 pb-2 inline-block mb-8">
                &gt; Tech_Stack
              </h2>
              <TechStackSlider />
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div className="relative z-30 bg-black w-full min-h-screen text-white font-mono">
          <Projects />
        </div>

        {/* Last section */}
        <div className="relative z-30 bg-black w-screen h-screen flex items-center justify-center">
          <ContactSection />
        </div>
      </div>
      <div className="relative z-30 bg-black font-mono text-center w-screen bottom-0 text-green-600">
        All rights Reserved @themiya.dev 2025
      </div>
    </div>
  );
}

export default App;
