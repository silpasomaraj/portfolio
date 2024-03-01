
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';

import {Route,Routes} from "react-router-dom"
import Project from './components/WorkCard';
import { BrowserRouter as Router } from "react-router-dom";
import WorkCard from './components/WorkCard';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Intro/>
      
      <Work/>
      <Skills/>
      
      <Education/>
      
      
      <Contact/>
      <Footer/>
    </div>
    
    
    

    
    </>
  );
}

export default App;
