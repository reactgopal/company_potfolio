import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import Resume from './components/Resume'
import Services from './components/Services'
import Testimonial from './components/testimonial'

function App() {
  return (
    <div className='' style={{ overflow: "hidden" }}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Project />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
