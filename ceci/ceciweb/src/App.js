import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/About";
import Home from "./components/Home";
import './App.css'
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
 );
}

export default App;














