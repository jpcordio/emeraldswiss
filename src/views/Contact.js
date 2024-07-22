import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GoogleMaps from "../components/GoogleMaps.js";


function Contact() {
  return (
    <>
      <Header header="Contact Us" />
     
      <ContactForm />

      <GoogleMaps />
      
      <Footer />

      <ScrollToTopButton />   
    </>
  );
}

export default Contact;
