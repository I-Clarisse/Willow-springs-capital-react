import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamSection from "../components/TeamSection";
const LandingPage = () => {
  const imageSrc = "/images/building-image.jpeg";
  return (
    <div className="landing-page font-sans antialiased">
      <Navbar />
      <section
        id="video-background"
        className="relative h-screen overflow-hidden"
      >
        <video
          autoPlay
          loop
          playsInline
          id="background-video"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/background2.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>
      <section id="identity" className="bg-white text-black py-12 px-4 md:px-8 lg:px-16 text-center">
  {/* Title */}
  <div className="pt-8 pb-6 px-6 md:px-16 text-center">
    <h2 className="text-3xl font-semibold text-blue-600">Our Identity</h2>
    <div className="w-20 h-1 bg-blue-500 mt-2 mx-auto"></div>
  </div>

  {/* Main Content Section */}
  <div className="flex-grow flex flex-col md:flex-row items-center px-6 md:px-16 py-8 space-y-8 md:space-y-0 md:space-x-12">
    {/* Left - Text */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <p className="text-gray-600 leading-relaxed">
        Founded in the heart of South Florida, Willow Springs Capital is a real estate investment 
        management firm dedicated to more than just property development. We are passionate about 
        shaping vibrant communities, fostering economic growth, and creating spaces that inspire 
        connection, well-being, and progress. Every investment we make reflects our deep commitment 
        to integrity, innovation, and positive social impact.
      </p>
    </div>

    {/* Right - Two Images */}
    <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
      <img 
        src="/images/background.jpeg" 
        alt="Building 1" 
        className="w-full md:w-1/2 lg:w-2/5 h-auto rounded-lg shadow-lg"
      />
      <img 
        src="/images/building-image.jpeg" 
        alt="Building 2" 
        className="w-full md:w-1/2 lg:w-2/5 h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

      <section id="soul" className="bg-gray-50 py-7 my-5">
        <div className="text-center">
          <div className="pt-8 pb-6 px-6 md:px-16 text-center">
            <h2 className="text-3xl font-semibold text-blue-600">Our Soul</h2>
            <div className="w-32 h-1 bg-blue-500 mt-2 mx-auto"></div>
          </div>
          <p className="my-10 md:text-lg text-gray-600">
            We view real estate investment management as a dynamic journey of
            connection and growth <br className="hidden md:block" />
            where each endeavor is a meaningful intersection of purpose and
            progress.
          </p>
        </div>
        <div className="theedivs container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center lg:items-start md:space-x-6 pb-8">
          <div className="w-full lg:w-1/3 p-4 transform transition duration-50 ease-in-out hover:scale-105 cursor-pointer">
            <div className="p-6 bg-gray-50 rounded shadow-lg text-center">
              <div className="icon-container">
                <i className="fa-solid icon-style fa-thumbs-up my-5"></i>
              </div>
              <h4 className="text-xl font-semibold mb-4">
                Committed to Growth
              </h4>
              <p className="text-gray-600 text-s">
                We are devoted to nurturing economic and social advancement with
                a deep sense of peace and gratitude. Through our thoughtfully
                designed investments, we cultivate sustainable development,
                creating spaces where communities and ventures harmoniously
                thrive.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-4 mt-20 transform transition duration-50 ease-in-out hover:scale-105 cursor-pointer">
            <div className="p-6 bg-gray-50 rounded shadow-lg text-center">
              <div className="icon-container">
                <i className="fa-solid fa-heart icon-style my-5"></i>
              </div>
              <h4 className="text-xl font-semibold mb-4">Driven by Passion</h4>
              <p className="text-gray-600 text-s">
                Our passion for real estate is a source of profound inspiration,
                driving us to effect meaningful change with serene dedication.
                We approach each project with an innovative spirit and a
                heartfelt commitment cherish growth that arise within the
                communities we serve.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 p-4 mt-40 transform transition duration-50 ease-in-out hover:scale-105 cursor-pointer">
            <div className="p-6 bg-gray-50 rounded shadow-lg text-center">
              <div className="icon-container">
                <i className="fa-solid icon-style fa-star my-5"></i>
              </div>
              <h4 className="text-xl font-semibold mb-4">Grounded In Values</h4>
              <p className="text-gray-600 text-s">
                At Willow Springs Capital, we are rooted in the timeless
                principles of integrity, transparency, and professionalism. We
                uphold the highest standards of ethical conduct, ensuring that
                every decision and interaction resonates with our commitment to
                excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="gifts"
        className="bg-black text-white py-16 px-4 md:px-12 lg:px-24 relative text-center"
      >
       <div className="pt-8 pb-6 px-6 md:px-16 text-center">
    <h2 className="text-3xl font-semibold text-blue-600">Our Gifts</h2>
    <div className="w-20 h-1 bg-blue-500 mt-2 mx-auto"></div>
  </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white text-black rounded-full p-6 text-3xl flex items-center justify-center w-16 h-16">
              📈
            </div>
            <h3 className="font-semibold text-lg text-center">
              Real Estate Investment Management
            </h3>
            <p className="text-gray-400 text-sm text-center">
              We manage real estate investments with a focus on financial
              returns and community growth.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white text-black rounded-full p-6 text-3xl flex items-center justify-center w-16 h-16">
              🤝
            </div>
            <h3 className="font-semibold text-lg text-center">
              Community Empowerment
            </h3>
            <p className="text-gray-400 text-sm text-center">
              We design investments that promote social and economic
              advancement, fostering spaces where communities and businesses can
              thrive.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white text-black rounded-full p-6 text-3xl flex items-center justify-center w-16 h-16">
              🏛️
            </div>
            <h3 className="font-semibold text-lg text-center">
              Strategic Partnerships
            </h3>
            <p className="text-gray-400 text-sm text-center">
              Our team offers expert guidance in navigating the complexities of
              the real estate market.
            </p>
          </div>
        </div>
      </section>
      <TeamSection />
      <section class="bg-gray-100 py-10 text-center px-4">
        <div class="w-full md:w-4/5 mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h3 class="text-2xl md:text-3xl font-bold mb-4">
            Are you ready to take the next step in your real estate journey?
          </h3>
          <p class="text-gray-600 mb-6">
            Let's work together to build a brighter, more prosperous future.
            Contact us today to learn more about how Willow Springs Capital can
            help you achieve your goals.
          </p>
          <a
            href="/contact"
            class="inline-flex items-center bg-white border border-gray-800 text-gray-800 px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition duration-300"
          >
            Get In Touch <span class="ml-2">→</span>
          </a>
        </div>
      </section>
      {/* Footer */}
      <Footer />

      {/* Scripts */}
      <script>
        {`
                document.getElementById('video-background')?.addEventListener('click', () => {
                    document.querySelector('#main-section')?.scrollIntoView({ behavior: 'smooth' });
                });

                document.getElementById('customers')?.addEventListener('click', () => {
                    document.querySelector('#testimonials')?.scrollIntoView({ behavior: 'smooth' });
                });

                window.addEventListener('scroll', () => {
                    const video = document.getElementById('background-video');
                    if (video) {
                        video.muted = window.scrollY > 500;
                    }
                });

                document.querySelectorAll('a[href^="#"]')?.forEach(anchor => {
                    anchor.addEventListener('click', function(e) {
                        e.preventDefault();
                        document.querySelector(this.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
                    });
                });
                `}
      </script>
    </div>
  );
};
export default LandingPage;
