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
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <StrategySection />
        <ClientsSection />
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
