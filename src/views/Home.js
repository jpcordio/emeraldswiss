import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MyCarousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Minigame from "../components/Minigame";
import Logo from "../assets/images/logo/logo_color.webp";
import OurFamily1 from "../assets/images/cards/CindyFace.webp";
import OurFamily2 from "../assets/images/cards/BritaFace.webp";
import OurFamily3 from "../assets/images/cards/OllieFace.webp";
import OurCustomer1 from "../assets/images/customer/customer_audrius.webp";
import OurCustomer2 from "../assets/images/customer/customer_stela.webp";
import OurCustomer3 from "../assets/images/customer/customer_joao.webp";
import ScrollToTopButton from "../components/ScrollToTopButton";

function Home() {
  return (
    <div className="text-justify">
      <MyCarousel page="home" />
      <Header header="A Bit About Us" />

      {/* Container for "About Us" */}
      <div className="container" id="contentAboutUs">
        <div className="row">
          <div className="col-12 col-md-5">
            <img src={Logo} className="mx-auto d-block logo" alt="logo" />
          </div>
          <div className="col-12 col-md-7">
            <div className="card mt-5">
              <div className="card-body">
                <h5 className="card-title">EMERALDSWISS BERNESE</h5>
                <p className="card-text">
                  Uncover the story of our kennel, where love for Bernese Mountain Dogs meets a commitment to responsible breeding practices since 2020. With a focus on genetic health and longevity, we strive to breed intelligent, happy and devoted family dogs. Read more about our mission to celebrate and preserve the beauty and spirit of the beloved Bernese breed.
                </p>
                <div className="col-12 text-center mt-3">
                  <Link to="/about">
                    <Button variant="success">About Us</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container for "Our Family" */}
      <div className="container" id="contentOurFamily">
        <div className="row mt-5">
          <div className="col-12 text-center mb-3">
            <h1>Our Family</h1>
          </div>
          <div className="card-group">
            {[OurFamily1, OurFamily2, OurFamily3].map((src, index) => (
              <div key={index} className="col-12 col-md-4 mb-2">
                <div className="card">
                  <img className="card-img-top dogFace" src={src} alt={`Dog's Face ${index + 1}`} />
                  <div className="card-body">
                    <h5 className="card-title">{['Cindy', 'Brita', 'Ollie'][index]}</h5>
                    <p className="card-text">
                      {[
                        "Meet Cindy, the remarkable Alpha female in our kennel. She holds Irish Junior Champion and IKC Centenary Winner titles. Cindy came to us from Lithuania, where she hails from a distinguished lineage of therapy dogs known for their exceptional calmness and strong character. She leaves an unforgettable impression on everyone she meets with her gentle and loving nature.",
                        "Meet Brita, the youngest member of our kennel. Despite her smaller size, Brita is true to the breed standard. She is also a show dog embodying elegance and poise in every aspect of her being. Brita possesses a calm and brave character, with a gentle and delicate temperament that endears her to all. She boasts a beautiful face expression that captures hearts wherever she goes.",
                        "Meet Ollie, our always happy stud dog! He's simply the best. He is the Junior Champion male, imported from Lithuania, with a big heart and playful spirit. Ollie is fully health tested, and his loving nature makes him a favourite among our family and friends. He is a proud daddy of our Litter A, passing on all of his best qualities to his beautiful puppies."
                      ][index]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 text-center mt-3">
          <Link to="/ourdogs">
            <Button variant="success">Meet Us</Button>
          </Link>
        </div>
      </div>

      {/* Container for "Client Feedback" */}
      <div className="container" id="contentOurClient">
        <div className="row mt-5">
          <div className="col-12 text-center mb-3">
            <h1>Our Puppy Parents</h1>
          </div>
          {[OurCustomer1, OurCustomer2, OurCustomer3].map((src, index) => (
            <div key={index} className="col-12 col-lg-4">
              <div className="card mx-auto mb-2 our-customer">
                <img className="card-img-top" src={src} alt={`Customer's Face ${index + 1}`} />
                <div className="card-body">
                  <h5 className="card-title">{['Audrius Skema', 'Stela Branco', 'João Cordio'][index]}</h5>
                  <p className="card-text">
                    {[
                      "Absolutely delighted with my new furry family member! Grateful beyond words for this adorable addition to our household. Looking forward to countless cuddles, and unconditional love ahead. Thank you all for helping bringing so much warmth and happiness into our lives!",
                      "Absolutely thrilled with my new furry friend! Grateful beyond words for this precious addition to my family. Can't wait for all the adventures and unconditional love ahead. Thank you for bringing so much joy into my life, little pup! We get our own little baby Bernese!",
                      "Over the moon with my new bundle of joy! Gratitude overflowing for this adorable puppy who has already stolen my heart. Looking forward to making unforgettable memories together. A huge thank you to everyone involved in bringing this little ray of sunshine into my life!"
                    ][index]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Minigame />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Home;