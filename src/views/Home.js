import MyCarousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logo from "../assets/images/logo/logo_color.webp";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div>
        <MyCarousel />
        <Header header="A Bit About Us" />

        {/* Container for "About Us" */}
        <div class="container" id="contentAboutUs">
            <div class="row mt-5">
                <div class="col-12 col-md-5">
                    <img src={logo} class="mx-auto d-block logo" alt="logo" />
                </div>
                <div class="col-12 col-md-7">
                    <div class="card mt-5">
                        <div class="card-body">
                            <h5 class="card-title">EMERALDSWISS BERNESE</h5>
                            <p class="card-text">Uncover the story of our kennel, where love for Bernese Mountain Dogs meets a commitment to responsible breeding practices since 2020. With a focus on genetic health and longevity, we strive to breed intelligent, happy and devoted family dogs. Read more about our mission to celebrate and preserve the beauty and spirit of the beloved Bernese breed.
                            </p>                    
                            <div class="col-12 text-center mt-3">
                                <Link to="/about">
                                  <Button variant="success">About Us</Button>
                                </Link>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

        <Footer />
      </div>
    );
  }
  
  export default Home;
  