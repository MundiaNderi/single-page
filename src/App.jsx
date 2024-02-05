import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
      <Router>
        <>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Contact />
        <Footer />
      </>
      </Router>
  );
}

export default App;
