import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Education from "./components/Education"
import GetInTouch from "./components/GetInTouch"
import "./App.css"
import Projects from "./components/Projects"
import BackToTop from "./components/BackToTop"

// Remove any imports of local assets that might be causing errors
function App() {
  return (
    <div className="bg-navy-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <Education />
      <GetInTouch />
      <BackToTop />
    </div>
  )
}

export default App
