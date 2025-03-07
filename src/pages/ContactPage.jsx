import ContactForm from "../components/ContactForm"; 
import Footer from "../components/Footer"; 
import backgroundImage from '/images/key.jpg';


const ContactPage = () => {
  return (
    <div className="overflow-hidden"> 
      <section className="relative bg-cover bg-center min-h-screen w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-xl w-full">
           
            <div className="flex items-center justify-center md:justify-start text-center md:text-left px-4">
              <div>
                <h2 className="text-3xl font-extrabold text-yellow-500 md:text-4xl lg:text-5xl">Contact Us!</h2>
                <p className="mt-4 text-2xl font-extrabold text-white md:text-3xl lg:text-5xl">
                  Let&apos;s Connect With Willows Spring Capital.
                </p>
              </div>
            </div>

          
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
