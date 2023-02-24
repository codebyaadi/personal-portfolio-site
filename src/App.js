import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import './App.css';
import { Social } from './components/Social';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Social />
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
