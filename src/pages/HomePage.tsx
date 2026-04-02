import { useState, useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import PartnersSection from '../components/sections/PartnersSection';
import StrategySection from '../components/sections/StrategySection';
import ClientsSection from '../components/sections/ClientsSection';
import ProductsSection from '../components/sections/ProductsSection';
import TrustSection from '../components/sections/TrustSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <HeroSection isLoading={isLoading} />
      <ClientsSection isLoading={isLoading} />
      <StrategySection isLoading={isLoading} />
      <PartnersSection isLoading={isLoading} />
      <ProductsSection isLoading={isLoading} />
      <TrustSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
