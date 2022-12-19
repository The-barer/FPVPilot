import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Drones from "./Pages/Drones";
import Homepage from "./Pages/Homepage";
import Price from "./Pages/Price";
import { Video, VideoAll } from "./Pages/Video";

function App() {
  return (
    <Router basename="/FPVPilot">
      <Header />
      <div className="container content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/video" element={<Video />} />
          <Route path="/video/all" element={<VideoAll />} />
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
