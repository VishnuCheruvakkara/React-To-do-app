import React, { useState } from "react";
import { Home, Pencil,AlarmClockPlus  } from "lucide-react";

const MobileNav = () => {
  const navItems = [
    { name: "Edit", icon: <Pencil size={24} /> },
    { name: "Home", icon: <Home size={24} /> },
    { name: "Timer", icon: <AlarmClockPlus size={24} /> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-white shadow-lg rounded-t-2xl sm:hidden">
      <div className="relative h-full max-w-lg mx-auto">
        {/* Floating Circle Indicator */}
        <div
          className="absolute -top-8 w-16 h-16 transition-all duration-300 border-2 rounded-full border-white ease-in-out"
          style={{
            left: `calc((100% / 3) * ${activeTab} + (100% / 6) - 32px)`,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-lime-700 to-lime-400 shadow-lg flex items-center justify-center">
            <div className="text-white">{navItems[activeTab].icon}</div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex justify-between h-full items-end pb-2">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="flex-1 flex flex-col items-center relative"
            >
              <span
                className={`transition-all duration-300 ${
                  activeTab === index ? "opacity-0" : "text-lime-800"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "text-lime-800 font-semibold transform -translate-y-4"
                    : "text-gray-500 opacity-0"
                }`}
              >
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;