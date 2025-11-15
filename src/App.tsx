import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";

const App: React.FC = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <main className="flex flex-col">
        <Intro />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
