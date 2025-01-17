import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import DogShowsList from "../components/DogShowsList";
import Ollie from "../assets/images/cards/OllieFace.webp";
import Cindy from "../assets/images/cards/CindyFace.webp";
import Brita from "../assets/images/cards/BritaFace.webp";
import Alice from "../assets/images/cards/AliceFace.webp";
import { Modal, Button } from 'react-bootstrap';
import ScrollToTopButton from "../components/ScrollToTopButton";

function OurDogs() {
  
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    name: '',
    info: '',
    imageSrc: ''
  });

  const handleShowModal = (dogName, dogInfo, dogImageSrc) => {
    setModalContent({
      name: dogName,
      info: dogInfo,
      imageSrc: dogImageSrc
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const dogs = [
    { src: Ollie, name: 'Ollie', info: 'Our always happy stud dog! He is the Junior Champion male, imported from Lithuania, with a big heart and playful spirit. Ollie is fully health tested, and his loving nature makes him a favourite among our family and friends. He is a proud daddy of our Litter A, passing on all of his best qualities to his beautiful puppies.' },
    { src: Cindy, name: 'Cindy', info: 'The remarkable Alpha female in our kennel. She holds Irish Junior Champion and IKC Centenary Winner titles. Cindy came to us from Lithuania, where she hails from a distinguished lineage of therapy dogs known for their exceptional calmness and strong character. She leaves an unforgettable impression on everyone she meets with her gentle and loving nature.' },
    { src: Brita, name: 'Brita', info: 'The charming and lively addition to our kennel. Despite her smaller size, Brita is true to the breed standard. She is also a show dog embodying elegance and poise in every aspect of her being. Brita possesses a calm and brave character, with a gentle and delicate temperament that endears her to all. She boasts a beautiful face expression that captures hearts wherever she goes.' },
    { src: Alice, name: 'Alice', info: 'Introducing our home bred baby girl! With her playful spirit and loving temperament, she\'s already stealing hearts at just a few months old. We can\'t wait to see her shine in the show ring as she embarks on her promising career.' }
  ];

  return (
    <div className="container">
      <Header header="Our Dogs" />

      <div className="container" id="content">
        <p className="text-justify">
          Please check the profile of each of our dogs Ollie, Cindy, Brita, and Alice. Each one of them has a unique story that's as distinctive as their personalities. Our dogs are like family to us and we'd love for you to get to know them too. Simply click on the image to load the dog profile and enjoy reading about our family here at EmeraldSwiss kennel.
        </p>
        <div className="row">
          {dogs.map((dog, index) => (
            <div key={index} className="col-6 text-center mb-2">
              <img
                className="dog-img img-fluid"
                src={dog.src}
                alt={dog.name}
                onClick={() => handleShowModal(dog.name, dog.info, dog.src)}
                style={{ cursor: 'pointer' }}
              />
              <h5>{dog.name}</h5>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalContent.imageSrc} alt={modalContent.name} className="img-fluid" />
          <p className="text-justify">{modalContent.info}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <DogShowsList /> 

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default OurDogs;