import React, { useState } from "react";
import { Home, CalendarDays, AlarmClockPlus } from "lucide-react";

function HeadNav() {
    const navItems = [
        { name: "Calender", icon: <CalendarDays size={24} /> },
        { name: "Home", icon: <Home size={24} />},
        { name: "Timer", icon: <AlarmClockPlus size={24} /> },
    ];

    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="hidden sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:h-16 sm:bg-white sm:shadow-md sm:flex sm:items-center sm:justify-center">
            <div className="flex justify-between w-full max-w-4xl mx-auto px-40">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${activeTab === index
                            ? "bg-lime-100 text-lime-700 border-2 border-lime-700"
                            : "text-gray-600 hover:text-lime-700 "
                            }`}
                    >
                        <span className="mr-2">{item.icon}</span>
                        <span className="text-sm font-medium">{item.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );

}

export default HeadNav;