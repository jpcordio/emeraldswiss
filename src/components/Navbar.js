import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div>
        <nav>
            <Link to="/">Home</Link> | &nbsp;
            <Link to="/about">About</Link> | &nbsp;
            <Link to="/ourdogs">Our Dogs</Link> | &nbsp;
            <Link to="/breedhealth">Breed Health</Link> | &nbsp;
            <Link to="/availablepuppies">Available Puppies</Link> | &nbsp;
            <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    );
  }
  
  export default Navbar;