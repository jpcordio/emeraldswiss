import Header from "../components/Header";
import Footer from "../components/Footer";
import MyCarousel from "../components/Carousel";
import FilePath from "../assets/files/Questionnaire.pdf";
import { Button } from 'react-bootstrap';
import ScrollToTopButton from "../components/ScrollToTopButton";

function AvailablePuppies() {
  return (
    <div>
      <Header header="Available Puppies" />

      <MyCarousel page="availablepuppies" />

      <div class="row justify-content-center mt-4">
          <div class="col-md-10 text-justify">                    
              <p>We are always excited when we have new litters - each one filled with adorable puppies ready to find their forever homes. Take a moment to read about adopting one of our puppies. Each of our puppies is given the utmost care and attention, ensuring they grow up healthy and happy. We work closely with veterinarians to ensure all our puppies are in the best of health before they go to their new homes. We also provide ongoing support and advice for new owners, helping you settle your new furry friend into your home. Our puppies are not just pets, they're family, and we're committed to helping each one find the perfect home. So why wait? Start the journey of adding a new member to your family today.</p>
              <p>Our goal is to find each puppy a loving home where they can be part of the family. The dog’s welfare is our foremost consideration before a choice is made for placement. We believe that every puppy deserves a home where they will be loved, cared for, and treated as a member of the family. We take great care in assessing potential homes, ensuring that they can provide the necessary care and environment for our puppies. We prioritize the puppy's health, happiness, and well-being above all else. We also offer support and guidance to new owners, helping them understand the responsibilities that come with owning a dog.</p>
              <p>We have new litters born regularly, and if you are interested in adopting a puppy, please fill out the form below and we will be in touch. The PDF questionnaire is available to download by clicking on the button below. We understand that adopting a puppy is a big decision, and we're here to help you every step of the way, We aim to provide all the necessary information to help you make an informed decision. Our puppies are raised with love and care, and we want to ensure they go to homes that can provide the same. So, if you're ready to open your heart and home to a new furry friend, fill out the form and start the adoption process today.</p>
          </div>
      </div>

      <div class="col-12 text-center mt-3">                
        <a href={FilePath} download target="_blank" rel="noopener noreferrer">
          <Button variant="success">
            <span className="fa fa-file-pdf-o"></span> Download Our Puppy Owner Questionnaire
          </Button>
        </a> 
      </div>

      <Footer />
      <ScrollToTopButton />
        
    </div>
  );
}

export default AvailablePuppies;
