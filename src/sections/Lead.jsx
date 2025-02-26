import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import coogif from '../assets/coogif.gif'; // Import the GIF

const LeadSection = () => {
  const svgRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentColor, setCurrentColor] = useState('rgb(255, 215, 0)');

  useEffect(() => {
    const updateDimensions = () => {
      if (svgRef.current) {
        const { width, height } = svgRef.current.getBoundingClientRect();
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getRandomColor = () => {
    const colors = [
      'rgb(255, 0, 0)',    // Red
      'rgb(255, 165, 0)',  // Orange
      'rgb(255, 255, 0)',  // Yellow
      'rgb(0, 255, 0)',    // Green
      'rgb(0, 0, 255)',    // Blue
      'rgb(238, 130, 238)', // Violet
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleMouseMove = (e) => {
    if (svgRef.current) {
      const ctm = svgRef.current.getScreenCTM();
      if (ctm) {
        const point = svgRef.current.createSVGPoint();
        point.x = e.clientX;
        point.y = e.clientY;
        const svgPoint = point.matrixTransform(ctm.inverse());
        setMousePos({
          x: svgPoint.x,
          y: svgPoint.y,
        });
        setCurrentColor(getRandomColor());
      }
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="lead" className="relative flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center p-8" style={{ height: '100vh' }}>
      <div className="flex flex-col items-center w-full h-full">
        <div className="hover:opacity-90 transition-opacity duration-300 w-full h-full">
          <svg
            ref={svgRef}
            viewBox="0 0 1200 300"
            className="w-full h-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={currentColor} stopOpacity="0.6" />
                <stop offset="100%" stopColor={currentColor} stopOpacity="0" />
              </radialGradient>
              <mask id="text-mask">
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="100"
                  fontWeight="bold"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                >
                  GEOFFREY OMONDI
                </text>
              </mask>
            </defs>

            <circle
              cx={mousePos.x}
              cy={mousePos.y}
              r="80"
              fill="url(#glow)"
              mask="url(#text-mask)"
              style={{
                transition: "opacity 0.2s",
                opacity: mousePos.x === 0 && mousePos.y === 0 ? 0 : 1,
              }}
            />

            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="100"
              fontWeight="bold"
              fill="url(#textGradient)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            >
              GEOFFREY OMONDI
            </text>
          </svg>
        </div>
      </div>

      <div className="absolute bottom-8 text-white text-2xl animate-bounce">
        <button 
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
          className="p-8"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default LeadSection;