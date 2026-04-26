import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Trainers />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
