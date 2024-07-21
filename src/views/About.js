import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from 'react';
import MyCarousel from "../components/Carousel";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ScrollToTopButton from "../components/ScrollToTopButton";

function About() {

  const [isHovered, setIsHovered] = useState(false);
  const [quotes] = useState([
    '"Dogs are better than human beings because they know a lot, but do not tell" – Emily Dickinson',
    '"A dog is the only thing on earth that loves you more than you love yourself" – Josh Billings',
    '"Money can buy you a fine dog, but only love can make him wag his tail" – Kinky Friedman',
    '"Animals are such agreeable friends. They ask no questions, they pass no criticisms" – George Eliot',
    '"When I walk my dog, people always ask if we’re twins as we look so alike" – Jarod Kintz'
  ]);

  return (
    <div class="container">

      <Header header="About Us" />     

      <p 
        className="font-dancing text-center active quote"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        See What Famous People Think About Dogs
      </p>

      <div className="text-center quotes">
        {isHovered && quotes.map((quote, index) => (
          <p key={index}>{quote}</p>
        ))}
      </div>

      <div>
        <div class="row mt-3">
          <div class="col-md-12 text-justify">
              <p>
                Emeraldswiss Bernese is a small family run kennel, located in Dublin, Ireland. It was founded in 2020 with a passion for breeding happy and healthy Bernese Mountain Dogs. These dogs, originating from the Swiss Alps, are known for their striking tricolour coats and gentle temperament, making them perfect family pets. Renowned for their intelligence and adaptability, the Bernese are eager learners, who can quickly become cherished companions and effortlessly assimilate into bustling households. It's no wonder they've taken over the hearts of many, including the current Irish President! Their majestic beauty and joyful character had made a deep impression on us too, and it was a love at first sight!
              </p>
              <p>
                Since the establishment of the Emerladswiss kennel, our aim was to breed only healthy and happy Bernese dogs, who live a normal family life filled with love, fun and engaging activities, and a balanced diet rich of nutrients they need to remain strong and vibrant. Acknowledging the health challenges that Bernese dogs often encounter, such as inherited troublesome hips and elbows, as well as a number of genetic disorders affecting the quality of their lives, we meticulously select our breeding stock from diverse European bloodlines, prioritising good health and calm temperaments. All our adult dogs have valid health screening results for their eyes, shoulders, hips, elbows, and are tested for genetic predispositions, such as Degenerative Myelopathy (DM) and von Willebrand Disorder (vWD). By adhering to these stringent health standards, we aim to mitigate the incidence of inherited health issues within our Bernese lineage, ensuring that each pup leaving our kennel is equipped with the best possible foundation for a long and healthy life.
              </p>
          </div>
        </div>
      </div>
      
      <MyCarousel page="about" />
      
      <div>
        <div class="row mt-3">
          <div class="col-md-12 text-justify">
          <p> Having established ourselves as conscientious and responsible breeders, we take great pride in our affiliation with esteemed organisations dedicated to upholding the highest standards of canine welfare. Our kennel is registered with the 
						<a href="https://www.fci.be/" class="link" target="_blank" rel="noreferrer"> International Canine Federation (FCI)</a> and proudly associated with the 
						<a href="https://www.ikc.ie/" class="link" target="_blank" rel="noreferrer"> Irish Kennel Club (IKC)</a> adhering to their strict guidelines and regulations. On a personal level, my commitment extends beyond the confines of our kennel. As a dedicated committee member of the 
						<a href="https://www.berneseclubireland.com/" class="link" target="_blank" rel="noreferrer"> Bernese Mountain Dog Club of Ireland</a>, I am privileged to contribute to the promotion and preservation of this beloved breed within our local community. Furthermore, I am honored to serve as the Irish and Baltic representative for the Berner-Garde Foundation, which is a global organisation focused on enabling scientific research and providing resources to reduce the spread of genetic diseases and to increase the longevity of our beloved breed.
					</p>
					<p> In conclusion, our journey is guided by a profound love and respect for the Bernese breed, ensuring that every puppy departing the Emerladswiss kennel continues to receive the love, attention, and support they deserve. We invite you to embark together with us on this enchanting journey, full of love, happiness, and commitment to these wonderful dogs, who in turn will bring laughter, devotion, friendship, and lifetime memories in the hearts and homes of their loving their families. Please meet our dogs bellow.
					</p>
          </div>
        </div>
      </div>

      {/* <!-- Button Leading to Our Dogs page --> */} 
      <div class="col-12 text-center mb-3">   
      <Link to="/ourdogs">
        <Button variant="success">Our Dogs</Button>
      </Link>
      </div>

      <Footer /> 
      <ScrollToTopButton />

    </div>
  );
}

export default About;