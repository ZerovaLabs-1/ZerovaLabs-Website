import { useState } from 'react';
import OGLBackground from './components/OGLBackground';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Education from './components/Education';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen relative">
      <OGLBackground />
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          <Hero />
          <Stats />
          <About />
          <Services />
          <Education />
          <Projects />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      )}
    </div>
  );
}
