import logo from "../assets/images/logo_white_background.jpg";
import usgbc from "../assets/images/usgbc.png";
import uli from "../assets/images/uli.png";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-97 text-white py-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between mb-4">
          <a href="landing" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Logo" />
            <span className="text-2xl font-semibold">WILLOWS SPRINGS CAPITAL</span>
          </a>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />

        
        <div className="flex justify-center space-x-8 mb-6">
          <a href="landing" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
          <a href="/projects" className="hover:underline">Projects</a>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />

      
        <div className="flex flex-col sm:flex-row justify-around items-start mx-auto space-y-8 sm:space-y-0 px-4">
    
          <div className="max-w-xs text-center sm:text-left">
            <h2 className="text-xl font-extrabold text-white uppercase mb-4">Reach out to us</h2>
            <ul className="text-gray-400">
              <li className="mb-4 flex items-center">
                <p className="hover:underline">700 South Rosemary Ave #204</p>
              </li>
              <li className="mb-4 flex items-center">
                <p className="hover:underline">+1 (202) 451-0876</p>
              </li>
              <li className="mb-4 flex items-center">
                <p className="hover:underline">info@willowsprings-capital.com</p>
              </li>
            </ul>
          </div>

         
          <div className="max-w-xs text-center sm:text-left">
            <h2 className="text-xl font-extrabold text-white uppercase mb-4">Services</h2>
            <ul className="text-gray-400 list-disc list-inside">
              <li className="mb-4 hover:underline">Real Estate Investment Management</li>
              <li className="mb-4 hover:underline">Strategic Partnerships</li>
              <li className="mb-4 hover:underline">Community Empowerment</li>
            </ul>
          </div>

          
          <div className="max-w-xs text-center sm:text-left">
            <h2 className="text-xl font-extrabold text-white uppercase mb-4">OUR PARTNERS</h2>
            <div className="flex justify-center sm:justify-start space-x-6">
              <img src={usgbc} className="w-24 h-auto" alt="USGBC Logo" />
              <img src={uli} className="w-24 h-auto" alt="ULI Logo" />
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />

       
        <div className="w-full max-w-screen-xl mx-auto p-4 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <a href="#" className="hover:underline mb-2 sm:mb-0">Terms & Conditions</a>
          <a href="#" className="hover:underline mb-2 sm:mb-0">Privacy Policy</a>
          <span>&copy; 2024. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
