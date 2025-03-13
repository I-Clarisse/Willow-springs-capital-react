import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";

const LandingPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="landing-page font-sans antialiased">
      <Navbar />

      {/* Background Video Section */}
      <section id="video-background" className="relative h-screen overflow-hidden">
        <video autoPlay loop playsInline id="background-video" className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/background2.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>

      {/* Our Identity */}
      <section id="identity" className="bg-white text-black py-12 px-4 md:px-8 lg:px-16 text-center">
        <div className="pt-8 pb-6 px-6 md:px-16 text-center animate-fadeIn">
          <h2 className="text-3xl font-semibold text-blue-600">Our Identity</h2>
          <div className="w-20 h-1 bg-blue-500 mt-2 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center px-4 md:px-16 py-8 space-y-6 md:space-y-0 md:space-x-4 animate-fadeIn">
          <p className="text-gray-600 leading-relaxed w-full md:w-1/2 text-center md:text-left">
            Founded in the heart of South Florida, Willow Springs Capital is a real estate investment 
            management firm dedicated to more than just property development. We are passionate about 
            shaping vibrant communities, fostering economic growth, and creating spaces that inspire 
            connection, well-being, and progress. Every investment we make reflects our deep commitment 
            to integrity, innovation, and positive social impact.
          </p>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img src="/images/identity.jpg" alt="Building 1" className="w-full md:w-4/5 lg:w-3/5 rounded-lg shadow-lg transition duration-300 hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Our Soul */}
      <section id="soul" className="bg-gray-50 py-7 my-5">
        <div className="text-center animate-fadeIn">
          <h2 className="text-3xl font-semibold text-blue-600">Our Soul</h2>
          <div className="w-32 h-1 bg-blue-500 mt-2 mx-auto"></div>
        </div>
        <p className="my-10 md:text-lg text-gray-600 text-center animate-fadeIn">
          We view real estate investment management as a dynamic journey of
          connection and growth <br className="hidden md:block" />
          where each endeavor is a meaningful intersection of purpose and
          progress.
        </p>

        {/* Click-to-Toggle Divs */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center lg:items-start md:space-x-6 pb-8">
          {[
            {
              title: "Committed to Growth",
              text: "We are devoted to nurturing economic and social advancement with a deep sense of peace and gratitude. Through our thoughtfully designed investments, we cultivate sustainable development, creating spaces where communities and ventures harmoniously thrive.",
              icon: "fa-thumbs-up",
            },
            {
              title: "Driven by Passion",
              text: "Our passion for real estate is a source of profound inspiration, driving us to effect meaningful change with serene dedication. We approach each project with an innovative spirit and a heartfelt commitment to cherish the growth that arises within the communities we serve.",
              icon: "fa-heart",
            },
            {
              title: "Grounded In Values",
              text: "At Willow Springs Capital, we are rooted in the timeless principles of integrity, transparency, and professionalism. We uphold the highest standards of ethical conduct, ensuring that every decision and interaction resonates with our commitment to excellence.",
              icon: "fa-star",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-1/3 p-4 transform transition duration-200 ease-in-out hover:scale-105 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="p-6 bg-gray-50 rounded shadow-lg text-center">
                <div className="icon-container">
                  <i className={`fa-solid icon-style ${item.icon} my-5`}></i>
                </div>
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className={`text-gray-600 text-sm overflow-hidden transition-all ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Gifts */}
      <section id="gifts" className="bg-black text-white py-16 px-4 md:px-12 lg:px-24 relative text-center">
        <div className="pt-8 pb-6 px-6 md:px-16 text-center animate-fadeIn">
          <h2 className="text-3xl font-semibold text-blue-600">Our Gifts</h2>
          <div className="w-20 h-1 bg-blue-500 mt-2 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            { icon: "📈", title: "Real Estate Investment Management", text: "We manage real estate investments with a focus on financial returns and community growth." },
            { icon: "🤝", title: "Community Empowerment", text: "We design investments that promote social and economic advancement, fostering spaces where communities and businesses can thrive." },
            { icon: "🏛️", title: "Strategic Partnerships", text: "Our team offers expert guidance in navigating the complexities of the real estate market." },
          ].map((gift, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 transition duration-300 hover:scale-105">
              <div className="bg-white text-black rounded-full p-6 text-3xl flex items-center justify-center w-16 h-16">
                {gift.icon}
              </div>
              <h3 className="font-semibold text-lg text-center">{gift.title}</h3>
              <p className="text-gray-400 text-sm text-center">{gift.text}</p>
            </div>
          ))}
        </div>
      </section>

      <TeamSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
