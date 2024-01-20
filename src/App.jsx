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
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </Router>
  );
}

export default App;
