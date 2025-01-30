import React from "react";
import Plx from "react-plx";

//Images Imports
import Cosmos from "../images/cmos.jpg";
import Earth from "../images/erth.png";
import Me from "../images/me.PNG";
import Saturn from "../images/saturn.png";

// Icon Imports
import { FaGithub, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const ParallaxZoom = () => {
  const createParallaxData = (startOffset) => [
    {
      start: 0 + startOffset,
      end: 800 + startOffset,
      properties: [
        {
          startValue: 1,
          endValue: 1.5,
          property: "scale",
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-[400vh] bg-black">
      {/* Cosmos Layer */}
      <Plx
        className="fixed inset-0 h-screen w-full"
        parallaxData={createParallaxData(0)}
      >
        <img
          src={Cosmos}
          alt="cosmos.jpg"
          className="absolute inset-0 w-full h-full object-cover z-40 brightness-[30%]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
            Cosmos
          </h1>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-lg md:text-xl animate-fade-in z-50">
          Scroll to Reveal More
        </div>
      </Plx>

      {/* Earth Layer */}
      <Plx
        className="fixed inset-0 h-screen w-full"
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
          ...createParallaxData(400),
        ]}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-75 z-30"
          src={Earth}
          alt="earth.png"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-up"></h1>
        </div>
      </Plx>

      {/* Me and Saturn Grid Layer */}
      <Plx
        className="fixed inset-0 h-screen w-full opacity-0"
        parallaxData={[
          {
            start: 400,
            end: 800,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
          {
            start: 400,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1, // Keep the scale at 1 (no zoom)
                property: "scale",
              },
            ],
          },
        ]}
      >
        <div className="absolute inset-0 w-full h-full z-20">
          <div className="container mx-auto h-full flex items-center justify-center px-4">
            <div className="relative left-[6%] flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-[900px]">
              {/* Me Section */}
              <div className="w-64 h-64 relative flex-shrink-0">
                <img
                  className="absolute w-full h-full rounded-full border-8 border-green-300 object-cover animate-fade-in-left"
                  src={Me}
                  alt="themiya.png"
                />
              </div>

              {/* Saturn and Text Section */}
              <div className="relative flex flex-col items-center justify-center md:items-start space-y-4 max-w-xl">
                <img
                  className="w-32 h-32 object-contain animate-float"
                  src={Saturn}
                  alt="saturn.png"
                />
                <div className="text-center md:text-left space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-white animate-fade-in-right">
                    Hi 👋 I am Themiya
                  </h1>
                  <p className="text-md font-extralight w-[90%] md:w-[70%] text-gray-300 animate-fade-in-up leading-relaxed">
                    I am a Passionate Software Engineer mainly focusing on Full
                    Stack Development and Cross-platform mobile applications. I
                    love Coding and Experimenting with new technologies and
                    frameworks
                  </p>
                  <div className="flex flex-row gap-6 text-white justify-center md:justify-start text-2xl">
                    <a href="https://github.com/themiya-420">
                      <FaGithub />
                    </a>
                    <a href="https://wa.me/94752171796">
                      <FaWhatsapp />
                    </a>
                    <a href="https://www.facebook.com/share/15x2YGyfhc/?mibextid=wwXIfr">
                      <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/themiya_420?igsh=cTdrYXdwY3o5azl1&utm_source=qr">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Plx>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ParallaxZoom;
