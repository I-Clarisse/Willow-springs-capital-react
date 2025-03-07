import React, { useState } from "react";

const teamTabs = [
  "All",
  "Administration",
  "Core Team",
  "Management",
  "Executives",
  "Board Members",
];

const teamMembers = [
  {
    name: "John Doe",
    position: "Head Officer",
    category: "Administration",
    image: "/images/profile.jpg",
    social: ["facebook", "instagram", "twitter"],
  },
  {
    name: "Jane Smith",
    position: "Manager",
    category: "Core Team",
    image: "/images/profile.jpg",
    social: ["facebook", "instagram", "twitter"],
  },
  {
    name: "Mike Johnson",
    position: "Executive",
    category: "Management",
    image: "/images/profile.jpg",
    social: ["facebook", "instagram", "twitter"],
  },
  {
    name: "Emily Davis",
    position: "CEO",
    category: "Executives",
    image: "/images/profile.jpg",
    social: ["facebook", "instagram", "twitter"],
  },
  {
    name: "Robert Brown",
    position: "Board Director",
    category: "Board Members",
    image: "/images/profile.jpg",
    social: ["facebook", "instagram", "twitter"],
  },
  {
    name: "Alice White",
    position: "Officer",
    category: "Administration",
    image: "/images/profile.jpg",
    social: ["facebook", "instagram", "twitter"],
  },
  {
    name: "Chris Green",
    position: "Strategist",
    category: "Core Team",
    image: "/images/profile.jpg",
    social: ["facebook", "instagram", "twitter"],
  },
  {
    name: "Sarah Lee",
    position: "VP",
    category: "Management",
    image: "/images/profile.jpg",
    social: ["facebook", "instagram", "twitter"],
  },
  {
    name: "Tom Wilson",
    position: "Senior Executive",
    category: "Executives",
    image: "/images/profile.jpg",
    social: ["facebook", "instagram", "twitter"],
  },
  {
    name: "Olivia Brown",
    position: "Board Member",
    category: "Board Members",
    image: "/images/profile.jpg",
    social: ["facebook", "instagram", "twitter"],
  },
];

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredMembers =
    activeTab === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === activeTab);

  return (
    <section
      id="inspiration"
      className="bg-white text-black py-12 px-4 md:px-8 lg:px-16 text-center"
    >
      <div className="pt-8 pb-6 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-semibold text-blue-600">
          Our Inspiration
        </h2>
        <div className="w-20 h-1 bg-blue-500 mt-2 mx-auto"></div>
      </div>
      <div className="flex justify-center space-x-4 mb-6 overflow-x-auto">
        {teamTabs.map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1.5 rounded-md font-semibold text-sm whitespace-nowrap ${
              activeTab === tab ? "bg-black text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {filteredMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full max-h-40 aspect-[4/5] object-cover rounded-lg"
            />
            <h3 className="font-semibold mt-3 text-sm">{member.name}</h3>
            <p className="text-gray-500 text-xs">{member.position}</p>
            <div className="flex justify-center space-x-2 mt-2 text-gray-400 text-lg">
              {member.social.map((icon, i) => (
                <span key={i} className="cursor-pointer">
                  •
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
