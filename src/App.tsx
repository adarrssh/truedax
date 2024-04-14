import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main className="main">
        <div className="main-nav-div">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Footer/>
      </main>
    </>
  );
}

export default App;
