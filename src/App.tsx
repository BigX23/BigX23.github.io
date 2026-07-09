import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Tinkering } from './components/Tinkering';
import { Projects } from './components/Projects';
import { Family } from './components/Family';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';

export function App() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Tinkering />
        <Projects />
        <Family />
        <Blog />
      </main>
      <Footer year={year} />
    </div>
  );
}

export default App;
