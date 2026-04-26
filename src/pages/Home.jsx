import React, { useState } from 'react';
import SEO from '../components/SEO';
import Hero from '../components/home/Hero';
import GrowthChart from '../components/home/GrowthChart';
import Services from '../components/home/Services';
import Addons from '../components/home/Addons';
import Process from '../components/home/Process';
import Results from '../components/home/Results';
import Experts from '../components/home/Experts';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';
import StackBar from '../components/home/StackBar';
import Offer from '../components/home/Offer';

const Home = () => {
  const [selectedServices, setSelectedServices] = useState(new Set());

  const toggleService = (serviceId) => {
    setSelectedServices(prev => {
      const next = new Set(prev);
      if (next.has(serviceId)) {
        next.delete(serviceId);
      } else {
        next.add(serviceId);
      }
      return next;
    });
  };

  return (
    <div className="bg-[var(--bg-dark)] min-h-screen">
      <SEO title="Digital Marketing & PR Agency" path="/" />
      <Hero />
      <GrowthChart />
      <Offer/>
      <div id="solutions">
        <Services selectedServices={selectedServices} toggleService={toggleService} />
        <Addons selectedServices={selectedServices} toggleService={toggleService} />
      </div>

      <Process />
      <Results />
      <Experts />
      <FAQ />
      <Contact />

      {/* Floating UI */}
      <StackBar selectedServices={selectedServices} />
    </div>
  );
};

export default Home;
