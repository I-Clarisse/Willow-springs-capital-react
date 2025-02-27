import { useState } from "react";
import logo from '../assets/images/logo_transparent_background.png';

const ContactForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); 

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const formData = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      const response = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({ success: false, message: data.error || "Something went wrong!" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({ success: false, message: "Network error, please try again." });
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg mx-auto lg:mx-0 lg:p-8">
     
      <div className="absolute top-4 left-4 md:top-6 md:left-8 lg:top-8 lg:left-10">
        <img src={logo} alt="Company Logo" className="h-12 md:h-16 lg:h-20" />
      </div>
      <h4 className="mb-6 text-lg tracking-tight font-extrabold text-gray-900 md:mb-8 lg:text-xl text-center">
        Send Us A Message
      </h4>

     
      {status && (
        <div className={`p-3 mb-4 text-sm rounded-lg ${status.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        <div>
          <input
            type="text"
            name="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="First Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Enter Message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
