import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';
import Education from './components/Education';
import GetInTouch from './components/GetInTouch';
import './App.css';
import Projects from './components/Projects';
function App() {

  return (
    
    <div className="bg-navy-900">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <Education />
      <GetInTouch />
    </div>
    
  );
}

export default App;

