import React from "react";
import { FaGithub, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    window.location.href = `mailto:bandarathemiya33@gmail.com?subject=Contact from ${name}&body=${message} - ${email}`;
  };

  return (
    <div className="relative z-30 bg-black w-full min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Terminal header */}
        <div className="border border-green-500 bg-black p-1 rounded-t-lg">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="ml-2 text-green-500 text-xs">/contact</span>
          </div>
        </div>

        {/* Main content */}
        <div className="border border-t-0 border-green-500 bg-black bg-opacity-75 p-6 rounded-b-lg">
          <h1 className="text-green-500 font-mono text-xl mb-4">
            &gt; Initialize_Contact
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="text-green-500 text-xs mb-1">&gt; Name:</label>
              <input
                type="text"
                name="name"
                required
                className="bg-black border border-green-500 text-green-500 p-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent font-mono placeholder-green-800"
                placeholder="_"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-green-500 text-xs mb-1">&gt; Email:</label>
              <input
                type="email"
                name="email"
                required
                className="bg-black border border-green-500 text-green-500 p-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent font-mono placeholder-green-800"
                placeholder="_"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-green-500 text-xs mb-1">
                &gt; Message:
              </label>
              <textarea
                name="message"
                required
                rows="3"
                className="bg-black border border-green-500 text-green-500 p-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent font-mono placeholder-green-800 resize-none"
                placeholder="_"
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-black font-bold py-2 px-4 rounded text-sm hover:bg-green-400 transition-colors duration-300 font-mono"
            >
              &gt; SEND
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-4 pt-4 border-t border-green-500">
            <h2 className="text-green-500 font-mono text-sm mb-2">
              &gt; Network:
            </h2>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/themiya-420"
                className="text-green-500 hover:text-green-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://wa.me/94752171796"
                className="text-green-500 hover:text-green-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/share/15x2YGyfhc/?mibextid=wwXIfr"
                className="text-green-500 hover:text-green-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/themiya_420?igsh=cTdrYXdwY3o5azl1&utm_source=qr"
                className="text-green-500 hover:text-green-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
