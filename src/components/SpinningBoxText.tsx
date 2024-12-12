import React, { useState, useEffect } from "react";

const SpinningBoxText: React.FC = () => {
  const words = ["Organiza", "Prioriza", "Logra", "Crea"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex items-center justify-center min-h-56 bg-gray-900">
      <div className="text-white text-5xl font-bold flex items-center space-x-4">
        <span>Con Planeo</span>
        <div className="relative w-52 h-16 overflow-hidden bg-blue-600 rounded-lg">
          <div
            className="absolute w-full h-full"
            style={{
              transform: `translateY(-${currentIndex * 100}%)`,
              transition: "transform 1s ease-in-out", // Transición suave de 1s
            }}
          >
            {words.map((word, index) => (
              <div
                key={index}
                className="h-16 flex items-center justify-center text-white"
                style={{ height: "4rem" }} // Ajusta la altura de cada palabra
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinningBoxText;
