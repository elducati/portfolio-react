import React, { useRef, useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

const colors = [
  'rgb(59, 130, 246)',
  'rgb(99, 102, 241)',
  'rgb(139, 92, 246)',
  'rgb(236, 72, 153)',
  'rgb(248, 113, 113)',
  'rgb(16, 185, 129)',
];

const LeadSection = () => {
  const svgRef = useRef(null);
  const rafRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentColor, setCurrentColor] = useState('rgb(255, 215, 0)');

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (svgRef.current) {
        const ctm = svgRef.current.getScreenCTM();
        if (ctm) {
          const point = svgRef.current.createSVGPoint();
          point.x = e.clientX;
          point.y = e.clientY;
          const svgPoint = point.matrixTransform(ctm.inverse());
          setMousePos({ x: svgPoint.x, y: svgPoint.y });
          setCurrentColor(getRandomColor());
        }
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <section id="lead" className="relative flex items-center justify-center overflow-hidden text-white text-center" style={{ height: '100vh' }}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"></div>
      

      
      <div className="flex flex-col items-center w-full h-full relative z-10">
        <div className="hover:opacity-90 transition-opacity duration-300 w-full h-full flex items-center justify-center">
          <svg
            ref={svgRef}
            viewBox="0 0 1200 300"
            className="w-full max-w-5xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <defs>
              {/* <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient> */}

              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor={currentColor} stopOpacity="0.8" />
                <stop offset="100%" stopColor={currentColor} stopOpacity="0" />
              </radialGradient>

              <filter id="glow-filter">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <mask id="text-mask">
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="160"
                  fontWeight="bold"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                >
                  GEOFFREY
                </text>
              </mask>
            </defs>

            <circle
              cx={mousePos.x}
              cy={mousePos.y}
              r="160"
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
              fontSize="160"
              fontWeight="bold"
              fill="url(#textGradient)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              filter="url(#glow-filter)"
            >
              GEOFFREY
            </text>
          </svg>
        </div>
        <div className="absolute bottom-8 text-white animate-bounce">
          <button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            className="p-4 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
          >
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default LeadSection;