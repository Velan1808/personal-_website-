import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/contact';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Project from './component/Project/Project';
import Skills from './component/Skills/Skills';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
