// React
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// Own imports
import { Home } from "./pages/Home";
import { Ridetrack } from "./pages/Ridetrack";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Lessons } from "./pages/Lessons";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/ridetrack" element={<Ridetrack />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
