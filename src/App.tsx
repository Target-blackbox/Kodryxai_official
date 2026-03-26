import { useState, useEffect } from 'react';
import './styles/global.css';
import './index.css';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import PartnersSection from './components/sections/PartnersSection';
import StrategySection from './components/sections/StrategySection';
import ClientsSection from './components/sections/ClientsSection';
import ProductsSection from './components/sections/ProductsSection';
import Footer from './components/layout/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading phase (e.g. for assets or data fetching)
    const timer = setTimeout(() => setIsLoading(false), 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection isLoading={isLoading} />
        <PartnersSection isLoading={isLoading} />
        <StrategySection isLoading={isLoading} />
        <ClientsSection isLoading={isLoading} />
        <ProductsSection isLoading={isLoading} />
      </main>
      <Footer />

    </>
  );
}

export default App;
