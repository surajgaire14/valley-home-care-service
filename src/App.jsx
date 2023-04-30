import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Navbar from "./Components/Navbar";
import BodyWrapper from "./Components/BodyWrapper";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <main className="main__wrapper">
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<BodyWrapper />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
