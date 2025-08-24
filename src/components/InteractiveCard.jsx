/**
 * SmoothScrollUI - A comprehensive scroll animation component using Framer Motion
 *
 * Features:
 * - Scroll progress indicator
 * - Parallax effects
 * - Scroll-triggered animations
 * - Stagger animations
 * - 3D transforms and hover effects
 *
 * Dependencies(used here):
 * - react: ^19.0.0
 * - lucide-react: 0.540.0
 * - tailwindcss: 4.1.12
 * - postcss: 8.5.6
 * - autoprefixer: 10.4.21
 *
 * Usage:
 * At the end of the code
 *
 * -----------------------------
 * Author: Krishna Sagar S Bisht
 * codeName: WallerTech
 * Preview: https://lfldp4.csb.app/
 * Portfolio: https://portofolio-krishnasagar.netlify.app/  (-2020 not updated one)
 */

import React, { useState } from "react";
import {
  Heart,
  Star,
  Share2,
  Eye,
  Code,
  Palette,
  Zap,
  Users,
  Trophy,
  Target,
} from "lucide-react";

const InteractiveCard = ({
  type = "flip",
  frontContent,
  backContent,
  expandedContent,
  className = "",
  glowColor = "blue",
  icon: Icon,
  gradient = "from-purple-600 to-pink-600",
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const glowColors = {
    blue: "shadow-blue-500/50",
    purple: "shadow-purple-500/50",
    pink: "shadow-pink-500/50",
    green: "shadow-green-500/50",
    orange: "shadow-orange-500/50",
    red: "shadow-red-500/50",
  };

  if (type === "flip") {
    return (
      <div
        className={`relative w-80 h-48 perspective-1000 ${className}`}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Face */}
          <div
            className={`absolute inset-0 backface-hidden rounded-xl bg-gradient-to-br ${gradient} p-6 shadow-2xl ${glowColors[glowColor]} hover:shadow-2xl transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              {Icon && <Icon className="w-8 h-8 text-white" />}
              <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
            </div>
            {frontContent}
          </div>

          {/* Back Face */}
          <div
            className={`absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-2xl ${glowColors[glowColor]} hover:shadow-2xl transition-all duration-300`}
          >
            {backContent}
          </div>
        </div>
      </div>
    );
  }

  if (type === "expand") {
    return (
      <div
        className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ease-out ${
          isExpanded ? "w-96 h-80" : "w-80 h-48"
        } ${
          isHovered ? `shadow-2xl ${glowColors[glowColor]}` : ""
        } ${className}`}
        onMouseEnter={() => {
          setIsHovered(true);
          setTimeout(() => setIsExpanded(true), 100);
        }}
        onMouseLeave={() => {
          setIsExpanded(false);
          setIsHovered(false);
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}
        ></div>
        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            {Icon && <Icon className="w-8 h-8 text-white" />}
            <div
              className={`transition-all duration-300 ${
                isExpanded ? "scale-110" : "scale-100"
              }`}
            >
              <div className="w-3 h-3 bg-white/50 rounded-full"></div>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ${
              isExpanded
                ? "opacity-100 translate-y-0"
                : "opacity-80 translate-y-2"
            }`}
          >
            {frontContent}
          </div>

          <div
            className={`mt-4 transition-all duration-500 overflow-hidden ${
              isExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {expandedContent}
          </div>
        </div>
      </div>
    );
  }

  // Layered type - multiple layers that separate on hover
  return (
    <div
      className={`relative w-80 h-48 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Layer */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 transition-transform duration-500 ${
          isHovered ? "translate-x-2 translate-y-2 rotate-1" : ""
        }`}
      ></div>

      {/* Middle Layer */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 transition-transform duration-500 delay-75 ${
          isHovered ? "translate-x-1 translate-y-1 rotate-0.5" : ""
        }`}
      ></div>

      {/* Top Layer */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} p-6 shadow-2xl transition-all duration-500 delay-150 ${
          isHovered ? `${glowColors[glowColor]} shadow-2xl scale-105` : ""
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          {Icon && <Icon className="w-8 h-8 text-white" />}
          <div
            className={`w-3 h-3 bg-white/40 rounded-full transition-all duration-300 ${
              isHovered ? "animate-bounce" : "animate-pulse"
            }`}
          ></div>
        </div>
        {frontContent}
      </div>
    </div>
  );
};

const CardShowcase = () => {
  const demoCards = [
    {
      type: "flip",
      icon: Code,
      gradient: "from-blue-600 to-cyan-600",
      glowColor: "blue",
      // front
      frontContent: (
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Frontend Magic</h3>
          <p className="text-blue-100">
            Crafting beautiful user experiences with modern React
          </p>
        </div>
      ),
      // back card view
      backContent: (
        <div className="text-white">
          <h3 className="text-xl font-bold mb-3">Tech Stack</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>React & TypeScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Framer Motion</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "expand",
      icon: Palette,
      gradient: "from-purple-600 to-pink-600",
      glowColor: "purple",
      // expand view
      frontContent: (
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Design System</h3>
          <p className="text-purple-100">
            Building scalable component libraries
          </p>
        </div>
      ),
      expandedContent: (
        <div className="text-white space-y-3">
          <div className="bg-white/20 rounded-lg p-3">
            <h4 className="font-semibold mb-1">Atomic Design</h4>
            <p className="text-sm text-purple-100">
              Modular, reusable components
            </p>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <h4 className="font-semibold mb-1">Accessibility First</h4>
            <p className="text-sm text-purple-100">WCAG 2.1 AA compliant</p>
          </div>
        </div>
      ),
    },
    {
      type: "layered",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
      glowColor: "orange",
      // glow viwe
      frontContent: (
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Performance</h3>
          <p className="text-orange-100">Optimized for speed and efficiency</p>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-orange-200 mb-1">
              <span>Core Web Vitals</span>
              <span>98/100</span>
            </div>
            <div className="w-full bg-orange-900/50 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full"
                style={{ width: "98%" }}
              ></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      type: "flip",
      icon: Users,
      gradient: "from-green-500 to-teal-600",
      glowColor: "green",
      // flip view
      frontContent: (
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Collaboration</h3>
          <p className="text-green-100">
            Working seamlessly with cross-functional teams
          </p>
        </div>
      ),
      backContent: (
        <div className="text-white">
          <h3 className="text-xl font-bold mb-3">Team Impact</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">15+</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">8</div>
              <div className="text-sm">Team Members</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Interactive Card Gallery
          </h1>
          <p className="text-xl text-gray-300">
            Hover over cards to see the magic happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {demoCards.map((card, index) => (
            <InteractiveCard key={index} {...card} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Customizable & Reusable
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Each card component accepts props for complete customization:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">
                  Animation Types
                </h3>
                <p className="text-gray-300 text-sm">flip, expand, layered</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Style Options</h3>
                <p className="text-gray-300 text-sm">
                  Custom gradients, glow colors, icons
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">
                  Content Flexible
                </h3>
                <p className="text-gray-300 text-sm">
                  Any React content supported
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShowcase;

/**
 * USAGE EXAMPLES:
 *
 * Basic usage:
 * import InteractiveCard from './components/InteractiveCard';
 * <InteractiveCard />
 *
 * CUSTOM CONTENT (modify data arrays above):
 * - Update the skills array in StaggerSection^
 * - Update the project data in the cards section^
 * - Modify colors and gradients for your brand^
 *
 * PERFORMANCE TIPS:
 * - useTransform is optimized for scroll animations
 * - Use transform properties like scale, rotate, translate over changing width/height
 * - Set once: true on animations that should only happens once and
 * - Use viewport margins to create animations fast or late
 *
 * CUSTOMIZATION IDEAS:
 * - Add your own sections between existing ones
 * - Change the color scheme by updating Tailwind classes
 * - Also use
 * @tailwind base;
 * @tailwind components;
 * @tailwind utilities;
 * - Add more effect with whileHover & whileTap
 * - Create different entrance animations by modifying initial states
 *
 */
