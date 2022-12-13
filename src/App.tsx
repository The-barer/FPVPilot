import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <Router basename='/FPVPilot'>
      <Header />
      <div className="container content">
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
