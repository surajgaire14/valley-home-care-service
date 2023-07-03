import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Navbar from "./Components/Navbar";
import BodyWrapper from "./Components/BodyWrapper";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import React from "react";

function App() {
  const [isvisible, setIsVisible] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <main className="main__wrapper">
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<BodyWrapper />} />
        <Route path="about" element={<About />} />
      </Routes>
      {isvisible && (
        <div className="top__scrollbar" onClick={scrollToTop}>
          <p>
            <i className="ri-arrow-up-line"></i>
          </p>
        </div>
      )}
      <Footer />
    </main>
  );
}

export default App;
