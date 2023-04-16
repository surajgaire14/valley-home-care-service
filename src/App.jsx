import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Navbar from "./Components/Navbar";
import BodyWrapper from "./Components/BodyWrapper";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BodyWrapper />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <main className="main__wrapper">
      <TopNavbar />
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </main>
  );
}

export default App;
