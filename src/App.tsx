import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import { Category } from "./Pages/Category";
import Contact from "./Pages/Contact";
import Drones from "./Pages/Drones";
import Homepage from "./Pages/Homepage";
import Price from "./Pages/Price";
import { Video } from "./Pages/Video";

function App() {
  return (
    <Router basename="/FPVPilot">
      <Header />
      <div className="container content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/video" element={<Video />} />
          <Route path="/video/:videoPage" element={<Video />} />
          <Route path="/video/category/:categoryPage" element={<Category/>} />
          <Route path="/drones" element={<Drones />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
