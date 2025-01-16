import React from "react";
import Parallax from "./components/Parallax";

function App() {
  return (
    <div className="App relative">
      {/* Parallax section wrapper */}
      <div className="relative h-[400vh]">
        <Parallax />
      </div>

      {/* Additional content section */}
      <div className="relative w-screen h-screen bg-gray-800 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">New Section</h1>
      </div>

      {/* You can add more sections here */}
      <div className="relative w-screen h-screen bg-gray-900 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white">Another Section</h1>
      </div>
    </div>
  );
}

export default App;
