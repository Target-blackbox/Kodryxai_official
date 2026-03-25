import { useState } from 'react';
import './ProductsSection.css';
import docuCaImg from '../../assets/image 6.png'; // Placeholder for product images
import cyberSaathiImg from '../../assets/image 7.png';
import vartalQImg from '../../assets/image 5.png';
import legImq from '../../assets/image 4.png'; // A fourth placeholder


const products = [
  {
    id: 'docuca',
    name: 'DocuCA',
    tagline: 'Reg. / Intly. Automation Assistant',
    poweredBy: 'Kodryx AI',
    image: docuCaImg,
    details: {
      about: 'DocuCA is an AI-powered regulatory framework...',
      tech: 'Azure OpenAI',
      features: ['Automated compliance parsing', 'High accuracy reasoning', 'Real-time updates'],
      useCase: 'Tax & Audit',
      training: 'Specialized CA corpus',
      funFact: 'Saves 20 hours per audit',
    }
  },
  {
    id: 'cybersaathi',
    name: 'CYBER SAATHI',
    tagline: 'Cybersecurity Consultant for Everyday',
    poweredBy: 'Kodryx AI',
    image: cyberSaathiImg,
    details: {
      about: 'Cyber Saathi is your personal cybersecurity assistant. By leveraging AI, it scans for vulnerabilities, prevents phishing, and encrypts your daily workflow.',
      tech: 'AWS Bedrock',
      features: ['Real-time threat detection', 'Phishing simulation', 'Dark web scanning'],
      useCase: 'B2B & Enterprise',
      training: 'Zero-day threat intelligence',
      funFact: 'Blocked 1M+ threats last week',
    }
  },
  {
    id: 'vartalq',
    name: 'VartalQ',
    tagline: 'AI Voice Agents for Enterprise Data',
    poweredBy: 'Kodryx AI',
    image: vartalQImg,
    details: {
      about: 'VartalQ enables human-like voice interactions for enterprise-grade customer support.',
      tech: 'NVIDIA Riva & OpenAI',
      features: ['<100ms latency', 'Multilingual support', 'Emotion detection'],
      useCase: 'Customer Service',
      training: 'Custom voice cloning',
      funFact: 'Handles 10,000 calls concurrently',
    }
  }
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState('cybersaathi');
  const activeProduct = products.find(p => p.id === activeTab) || products[1];

  return (
    <section className="products">
      
      {/* ── 3D Floating Product Cards ── */}
      <div className="products__perspective-grid">
        {products.map((product, index) => {
          // Calculate rotation based on index to create the curved 3D look
          let rotationClass = '';
          if (index === 0) rotationClass = 'products__card--left';
          else if (index === 1) rotationClass = 'products__card--center';
          else if (index === 2) rotationClass = 'products__card--right';

          return (
            <div 
              key={product.id} 
              className={`products__card ${rotationClass} ${activeTab === product.id ? 'products__card--active' : ''}`}
              onClick={() => setActiveTab(product.id)}
            >
              <div className="products__card-inner">
                <img src={product.image} alt={product.name} className="products__card-img" />
                <h4 className="products__card-title">{product.name}</h4>
                <p className="products__card-tagline">{product.tagline}</p>
                <div className="products__card-footer">
                  <small>Powered by {product.poweredBy}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Detailed Info Browser Window ── */}
      <div className="products__browser">
        {/* Browser Top Bar */}
        <div className="products__browser-bar">
          <div className="products__browser-dots">
            <span className="dot dot-close"></span>
            <span className="dot dot-min"></span>
            <span className="dot dot-max"></span>
          </div>
          <div className="products__browser-url">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            kodryx.ai/products/{activeProduct.id}
          </div>
        </div>

        {/* Browser Content Split */}
        <div className="products__browser-content">
          <div className="products__detail-left">
            <h3 className="products__detail-title">About {activeProduct.name}</h3>
            <p className="products__detail-desc">{activeProduct.details.about}</p>
            
            <button className="products__tab-btn active">Project Details</button>

            <table className="products__detail-table">
              <tbody>
                <tr>
                  <th>Tech</th>
                  <td>{activeProduct.details.tech}</td>
                </tr>
                <tr>
                  <th>Features</th>
                  <td>
                    <ul className="products__feature-list">
                      {activeProduct.details.features.map(f => <li key={f}>{f}</li>)}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Ideal State</th>
                  <td>{activeProduct.details.useCase}</td>
                </tr>
                <tr>
                  <th>Training</th>
                  <td>{activeProduct.details.training}</td>
                </tr>
                <tr>
                  <th>Fun Fact</th>
                  <td>{activeProduct.details.funFact}</td>
                </tr>
              </tbody>
            </table>

            <div className="products__action-btns">
              <button className="btn-primary">Try Demo</button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>

          <div className="products__detail-right">
             {/* Placeholder for the grey content area in the right panel */}
             <div className="products__placeholder-box"></div>
          </div>
        </div>
      </div>
      
    </section>
  );
}
