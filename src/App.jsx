import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="blackcut-app" style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <BrandIntro />
        <Services />
        <Gallery />
        <WhyUs />
        <About />
        <Team />
        <Testimonials />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
