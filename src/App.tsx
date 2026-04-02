import { Routes, Route } from 'react-router-dom';
import './styles/global.css';
import './index.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
