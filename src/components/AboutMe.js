import React from "react";
import {
  FaYoutube,
  FaGraduationCap,
  FaCode,
  FaGamepad,
  FaMusic,
  FaCamera,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

const AboutMe = () => {
  const personalInfo = [
    {
      icon: <BsFillPersonFill />,
      label: "Name",
      value: "Themiya Induwara Bandara",
    },
    { icon: <BsFillPersonFill />, label: "Age", value: "23" },
    {
      icon: <FaGraduationCap />,
      label: "Education",
      value: "Bachelor's Degree in Softtware Engineering(Hons)",
    },
    { icon: <MdWork />, label: "Experience", value: "5+ Years" },
  ];

  const hobbies = [
    { icon: <FaCode />, label: "Coding" },
    { icon: <FaGamepad />, label: "Gaming" },
    { icon: <FaMusic />, label: "Music" },
    { icon: <FaCamera />, label: "Photography" },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-bg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b-2 border-green-500 pb-2 inline-block">
              &gt; Personal_Info
            </h2>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 border border-green-500 bg-black bg-opacity-50 hover:bg-green-900 hover:bg-opacity-20 transition-all duration-300"
                >
                  <span className="text-green-500 text-xl">{info.icon}</span>
                  <div>
                    <p className="text-green-500 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Hobbies & YouTube */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b-2 border-green-500 pb-2 inline-block">
              &gt; Hobbies
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 border border-green-500 bg-black bg-opacity-50 hover:bg-green-900 hover:bg-opacity-20 transition-all duration-300"
                >
                  <span className="text-green-500 text-xl">{hobby.icon}</span>
                  <span>{hobby.label}</span>
                </div>
              ))}
            </div>

            {/* YouTube Section */}
            <div className="mt-8">
              <h2 className="text-3xl font-bold border-b-2 border-green-500 pb-2 inline-block">
                &gt; YouTube_Channel
              </h2>
              <div className="mt-4 p-6 border border-green-500 bg-black bg-opacity-50 hover:bg-green-900 hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <FaYoutube className="text-4xl text-red-600" />
                  <div>
                    <h3 className="text-xl font-bold">Themiya ;{")"}</h3>
                    <p className="text-gray-400">Subscribers: 52</p>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/@themiya-420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors duration-300"
                >
                  Visit Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
