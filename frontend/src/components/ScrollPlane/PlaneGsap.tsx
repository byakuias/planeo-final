import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const SvgAnimation: React.FC = () => {
  useEffect(() => {
    const tl: GSAPTimeline = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });

    tl.fromTo(
      ".plane",
      {
        scale: 0.6,
      },
      {
        duration: 4,
        scale: 1.2,
        motionPath: {
          path: ".mp",
          align: ".mp",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
      },
      0
    )
      .to("#svg-stage", { duration: 0.7, opacity: 1 }, 0.25)
      .from(".mp", { duration: 3.8 }, 0.28)
      .to(".mp", { duration: 2, ease: "power2" }, "-=2")
      .to("#svg-stage", { duration: 0.7, opacity: 0 }, "-=0.9");

    // Animación para el texto
    tl.fromTo(
      ".animated-text",
      { opacity: 0, y: 50 },
      { duration: 1, opacity: 1, y: 0, ease: "power2.out" },
      0.5
    )
      .to(".animated-text", { duration: 1, opacity: 0, y: -50 }, "-=1");
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-blue-900 overflow-hidden">
      <div className="container relative w-[90vw] h-[90vh] flex flex-col items-center justify-evenly rounded-lg">
        {/* Texto animado */}
        <h1 className="animated-text text-white text-3xl font-bold absolute top-10">
          Sigue el trayecto del avión
        </h1>

        {/* SVG con animación */}
        <svg
          id="svg-stage"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-40 -180 1250 1100"
          opacity="0"
          className="w-[80%] max-w-[750px] overflow-visible"
        >
          <path
            className="mp"
            fill="none"
            strokeWidth="4"
            d="M-92 17.713c154.32 237.253 348.7 486.913 585.407 466.93 137.542-17.257 247.733-123.595 279.259-239.307 27.368-100.43-21.323-229.59-140.017-241.76-118.693-12.172-208.268 98.897-231.122 199.803-34.673 151.333 12.324 312.301 125.096 429.074C639.395 749.225 815.268 819.528 995 819"
          />

          <g className="plane">
            <path
              fill="url(#grad)"
              opacity="0.3"
              d="m82.8 35 215.9 94.6L79 92l3.8-57Z"
            />
            <path
              fill="url(#grad)"
              d="m82.8 35 52-23.5 163.9 118.1-216-94.5Z"
            />
            <path
              fill="url(#grad)"
              opacity="0.3"
              d="m76.8 107.1 214.4 19.6L74.7 131l2.1-23.9Z"
            />
            <path
              fill="url(#grad)"
              d="M298.8 130.4 1.9 103.3l54-45 242.9 72.1Z"
            />
          </g>

          <defs>
            <linearGradient
              id="grad"
              x1="154"
              x2="160"
              y1="49"
              y2="132"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="rgb(255, 255, 255)"></stop>
              <stop offset="1" stopColor="rgb(255, 255, 255)"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default SvgAnimation;
