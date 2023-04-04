import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Navbar from "./Components/Navbar";
import BodyWrapper from "./Components/BodyWrapper";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="main__wrapper">
      <TopNavbar />
      <Navbar />
      <BodyWrapper />
      <Footer />
    </main>
  );
}

export default App;
