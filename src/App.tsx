// React
import { Routes, Route } from "react-router-dom";

// Own imports
import { Home } from "./pages/Home";
import { Events } from "./pages/Events";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Lessons } from "./pages/Lessons";
import { Navbar } from "./components/Navbar";

import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
