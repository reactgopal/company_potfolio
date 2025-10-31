import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/Hero'
import Project from './components/project'
import Resume from './components/resume'
import Services from './components/services'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default App
