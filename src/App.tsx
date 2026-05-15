import { useState } from 'react';
import OGLBackground from './components/OGLBackground';
import { AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Education from './components/Education';
import Projects from './components/Projects';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen relative noise">
      <OGLBackground />
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          <Hero />
          <Marquee />
          <Stats />
          <About />
          <Services />
          <Education />
          <Projects />
          <Team />
          <Testimonials />
          <CTA />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}
