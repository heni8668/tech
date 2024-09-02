import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OutgoingProgram from "./pages/OutgoingProgram";
import Scholarship from "./pages/Scholarship";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog";
import UxAcademy from "./pages/UxAcademy";

function App() {
  return (
    <div>
      <Header /> <br/><br/><br/><br/>
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/academy" element={<UxAcademy />} />
          <Route  path="/outgoing-program" element={<OutgoingProgram />} />
          <Route  path="/scholarship" element={<Scholarship />} />
          <Route  path="/blog" element={<Blog />} />

        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
