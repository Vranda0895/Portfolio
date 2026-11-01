import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

/**
 * App — Root component that composes all portfolio sections.
 *
 * Layout order:
 *   Navbar, Hero, About, Skills, Projects, Experience & Activities,
 *   Achievements & Certifications, Hobbies & Creative Interests,
 *   Resume, Contact, Footer
 */
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Hobbies />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
