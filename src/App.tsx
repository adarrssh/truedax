import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Service from "./components/Service/Service";

function App() {
  return (
    <>
      <main className="main">
        {/* <div className="main-nav-div"> */}
          <Navbar />
        {/* </div> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<Service />} />
        </Routes>

        <Footer/>
      </main>
    </>
  );
}

export default App;
