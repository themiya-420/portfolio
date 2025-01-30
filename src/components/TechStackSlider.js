import React from "react";
import aws from "../images/aws.png";
import docker from "../images/docker.png";
import flutter from "../images/flutter.png";
import gc from "../images/gc.png";
import git from "../images/git.png";
import java from "../images/java.png";
import kotlin from "../images/kotlin.png";
import nodejs from "../images/nodejs.png";
import python from "../images/python.png";
import reactimg from "../images/react.png";
import angular from "../images/angular.png";
import laravel from "../images/laravel.png";

const techStack = [
  {
    name: "ReactJS",
    image: reactimg,
  },
  {
    name: "Angular",
    image: angular,
  },
  {
    name: "Laravel",
    image: laravel,
  },
  {
    name: "NodeJS",
    image: nodejs,
  },
  {
    name: "Java",
    image: java,
  },
  {
    name: "Kotlin",
    image: kotlin,
  },
  {
    name: "Python",
    image: python,
  },
  {
    name: "Flutter",
    image: flutter,
  },
  {
    name: "React-Native",
    image: reactimg,
  },
  {
    name: "Github",
    image: git,
  },
  {
    name: "AWS",
    image: aws,
  },
  {
    name: "Google Cloud",
    image: gc,
  },
];

const TechStackSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-transparent py-8">
      <div className="flex animate-scroll">
        {/* Double the items to create seamless loop */}
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-8 min-w-[100px]"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-12 h-12 object-contain"
            />
            <p className="text-white text-sm mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSlider;
