
import './App.css'

//ss
import Navebar from './components/Navebar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
function App() {
  return (
    <div className="App">
      <Navebar/>
      <Header />
      <Experience/>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer /> 
    </div>
  );
  
}

export default App
