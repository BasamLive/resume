import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Porjects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const App = () => {
  return (
    <main className="resume-container">
      <Header />
      <About />
      <Skills />
      <Porjects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
};

export default App;
