import { useState } from 'react';
import './ProductsSection.css';

import ecoImg from '../../assets/reduco2.png';
import docucaImg from '../../assets/docuca.png';
import cyberImg from '../../assets/cyber_sathi.png';
import vartalqImg from '../../assets/vartalq.png';
import legalImg from '../../assets/legal_lens.png';

const products = [
  {
    id: 'eco-ca',
    name: 'Eco CA',
    tagline: 'Carbon Emission\nPlatform',
    poweredBy: 'FinTech AI',
    accentColor: '#00e5b3',
    category: 'ENVIRONMENTAL',
    image: ecoImg,
    details: {
      about: 'A comprehensive platform for tracking and automating carbon emission compliance and reporting across enterprise supply chains.',
      tech: 'React, Django, PostgreSQL',
      useCase: 'Environmental Tech',
    }
  },
  {
    id: 'docuca',
    name: 'DocuCA',
    tagline: 'Regulatory Automation\nAssistant',
    poweredBy: 'Agentic AI',
    accentColor: '#6c7fff',
    category: 'LEGAL TECH',
    image: docucaImg,
    details: {
      about: 'DocuCA handles massive regulatory document parsing and compliance checking automatically, reducing audit time by 75%.',
      tech: 'Python, FastAPI, LlamaIndex',
      useCase: 'Legal & Auditing',
    }
  },
  {
    id: 'cybersaathi',
    name: 'CYBER SAATHI',
    tagline: 'AI WhatsApp Assistant\nfor Cybercrime Help',
    poweredBy: 'Kodryx AI',
    accentColor: '#38d9f5',
    category: 'CYBERSECURITY',
    image: cyberImg,
    details: {
      about: 'Cyber Saathi is an AI-powered assistant by Kodryx AI that helps citizens quickly report cyber crimes, understand applicable IPC/IT Act sections, and get actionable recommendations — instantly on WhatsApp.',
      tech: 'Agentic AI + WhatsApp Business API',
      useCase: 'Cybersecurity, LegalTech, Public Safety',
    }
  },
  {
    id: 'vartalq',
    name: 'VartalQ',
    tagline: 'AI Voice Agents for\nEnterprise Calls',
    poweredBy: 'Kodryx AI',
    accentColor: '#a78bfa',
    category: 'VOICE AI',
    image: vartalqImg,
    details: {
      about: 'VartalQ deploys intelligent AI voice agents that handle customer calls, support queries, and outbound lead qualifications with human-like conversation abilities.',
      tech: 'ElevenLabs, Twilio, Node.js',
      useCase: 'Customer Support & Sales',
    }
  },
  {
    id: 'legimq',
    name: 'LegImq',
    tagline: 'Powered Real-time\nLegal Assistant',
    poweredBy: 'Kodryx AI',
    accentColor: '#f59e0b',
    category: 'LEGAL AI',
    image: legalImg,
    details: {
      about: 'LegImq provides instant, accurate legal research and precedent summarization for law firms and corporate legal teams.',
      tech: 'LangChain, OpenAI, Pinecone',
      useCase: 'Corporate Legal',
    }
  }
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState('cybersaathi');
  const activeProduct = products.find(p => p.id === activeTab) || products[2];
  const activeProductIndex = products.findIndex(p => p.id === activeTab);

  return (
    <section className="products" id="products">

      {/* ── 5 Premium Product Cards ── */}
      <div className="products__perspective-grid">
        {products.map((product, index) => {
          const positionDiff = index - activeProductIndex;
          let rotationClass = 'products__card--hidden';
          if (positionDiff <= -2) rotationClass = 'products__card--far-left';
          else if (positionDiff === -1) rotationClass = 'products__card--left';
          else if (positionDiff === 0) rotationClass = 'products__card--center';
          else if (positionDiff === 1) rotationClass = 'products__card--right';
          else if (positionDiff >= 2) rotationClass = 'products__card--far-right';
          const isCenter = positionDiff === 0;

          return (
            <div
              key={product.id}
              className={`products__card ${rotationClass}`}
              style={{ '--accent': product.accentColor } as React.CSSProperties}
              onClick={() => setActiveTab(product.id)}
            >
              {/* Dot grid background texture */}
              <div className="products__card-grid" />

              {/* Ambient glow top */}
              <div className="products__card-ambient" />

              {/* Category chip */}
              <div className="products__card-category">{product.category}</div>

              {/* Product illustration image */}
              <div className="products__card-icon">
                <img src={product.image} alt={product.name} className="products__card-img" />
              </div>

              {/* Divider */}
              <div className="products__card-divider" />

              {/* Text content */}
              <div className="products__card-body">
                <h4 className="products__card-title">{product.name}</h4>
                <p className="products__card-tagline">{product.tagline}</p>
              </div>

              {/* Footer */}
              <div className="products__card-footer">
                <span className="products__card-footer-label">POWERED BY</span>
                <span className="products__card-footer-brand">{product.poweredBy}</span>
              </div>

              {/* Active glow border */}
              {isCenter && <div className="products__card-border-glow" />}
            </div>
          );
        })}
      </div>

      {/* ── Browser Window ── */}
      <div className="products__browser">
        <div className="products__browser-bar">
          <div className="products__browser-actions">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          </div>
          <div className="products__browser-url">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <span>kodryx.ai/portfolios/{activeProduct.id}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          </div>
          <div className="products__browser-controls">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff4757" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </div>
        </div>

        <div className="products__browser-content">
          <div className="products__detail-left">
            <h3 className="products__detail-title">About {activeProduct.name}</h3>
            <p className="products__detail-desc">{activeProduct.details.about}</p>
            <div className="products__info-card">
              <div className="products__info-header">Project Info</div>
              <table className="products__info-table">
                <tbody>
                  <tr><th>Tool:</th><td>{activeProduct.name}</td></tr>
                  <tr><th>Function:</th><td>{activeProduct.tagline.replace('\n', ' ')}</td></tr>
                  <tr><th>Launch Date:</th><td>April 2025</td></tr>
                  <tr><th>Industry:</th><td>{activeProduct.details.useCase}</td></tr>
                  <tr><th>Built With:</th><td>{activeProduct.details.tech}</td></tr>
                </tbody>
              </table>
            </div>
            <div className="products__action-btns">
              <button className="products__btn-demo">Try Demo</button>
              <button className="products__btn-learn">Learn More</button>
            </div>
          </div>
          <div className="products__detail-right">
            <div className="products__placeholder-box"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
