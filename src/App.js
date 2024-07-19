import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import OurDogs from "./views/OurDogs";
import BreedHealth from "./views/BreedHealth";
import AvailablePuppies from "./views/AvailablePuppies";
import Contact from "./views/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="ourdogs" element={<OurDogs />}></Route>
          <Route path="breedhealth" element={<BreedHealth />}></Route>
          <Route path="availablepuppies" element={<AvailablePuppies />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
