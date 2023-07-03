import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Navbar from "./Components/Navbar";
import BodyWrapper from "./Components/BodyWrapper";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import React from "react";

function App() {
  const observerRefs = React.useRef([]);
  return (
    <main className="main__wrapper">
      {/* <section id="#"></section> */}
      <TopNavbar />
      <Navbar observerRefs={observerRefs} />
      <Routes>
        <Route path="/" element={<BodyWrapper observerRefs={observerRefs} />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
