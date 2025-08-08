import "./App.css"
import Portfolio from "./app/page"

// Remove any imports of local assets that might be causing errors
function App() {
  return (
    <div className="bg-navy-900">
      {/* <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <Education />
      <GetInTouch />
      <BackToTop /> */}
      <Portfolio/>
    </div>
  )
}

export default App;