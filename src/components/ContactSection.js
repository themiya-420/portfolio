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
    <div className="relative z-30 bg-black w-full flex flex-col items-center justify-center p-6 lg:p-10">
      <div className="w-full max-w-2xl mx-auto">
        {/* Terminal header */}
        <div className="border-2 border-green-500 bg-black p-2 rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-3 text-green-500 text-sm font-mono">
              /contact
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="border-2 border-t-0 border-green-500 bg-black bg-opacity-75 p-5 lg:p-8 rounded-b-lg">
          <h1 className="text-green-500 font-mono text-xl lg:text-2xl mb-6">
            &gt; Initialize_Contact
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <div className="flex flex-col">
              <label className="text-green-500 text-sm mb-2">&gt; Name:</label>
              <input
                type="text"
                name="name"
                required
                className="bg-black border-2 border-green-500 text-green-500 p-3 rounded text-sm placeholder-green-800 transition-all duration-300
                focus:outline-none focus:border-green-400 focus:shadow-[0_0_8px_rgba(34,197,94,0.5)] focus:bg-black/50"
                placeholder="_"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-green-500 text-sm mb-2">&gt; Email:</label>
              <input
                type="email"
                name="email"
                required
                className="bg-black border-2 border-green-500 text-green-500 p-3 rounded text-sm placeholder-green-800 transition-all duration-300
                focus:outline-none focus:border-green-400 focus:shadow-[0_0_8px_rgba(34,197,94,0.5)] focus:bg-black/50"
                placeholder="_"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-green-500 text-sm mb-2">
                &gt; Message:
              </label>
              <textarea
                name="message"
                required
                rows="4"
                className="bg-black border-2 border-green-500 text-green-500 p-3 rounded text-sm placeholder-green-800 resize-none transition-all duration-300
                focus:outline-none focus:border-green-400 focus:shadow-[0_0_8px_rgba(34,197,94,0.5)] focus:bg-black/50"
                placeholder="_"
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-black font-bold py-2 px-5 rounded text-sm hover:bg-green-400 transition-colors duration-300 font-mono mt-3
              hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]"
            >
              &gt; SEND
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-6 pt-4 border-t-2 border-green-500">
            <h2 className="text-green-500 font-mono text-sm mb-3">
              &gt; Network:
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/themiya-420"
                className="text-green-500 hover:text-green-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              </a>
              <a
                href="https://wa.me/94752171796"
                className="text-green-500 hover:text-green-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl hover:shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              </a>
              <a
                href="https://www.facebook.com/share/15x2YGyfhc/?mibextid=wwXIfr"
                className="text-green-500 hover:text-green-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              </a>
              <a
                href="https://www.instagram.com/themiya_420?igsh=cTdrYXdwY3o5azl1&utm_source=qr"
                className="text-green-500 hover:text-green-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
