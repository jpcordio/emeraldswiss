import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Header header="Contact Us" /> 

      <div id="iframeMap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152516.10066152998!2d-6.410852916791496!3d53.324206082685656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin!5e0!3m2!1sen!2sie!4v1712597081701!5m2!1sen!2sie" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
      </div>

      <Footer />
        
    </div>
  );
}

export default Contact;
