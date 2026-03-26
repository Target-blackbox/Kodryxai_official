import { useState } from 'react';
import './ProductsSection.css';

/* ── Inline SVG Illustrations per product ── */
const DocuCAIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="10" y="6" width="36" height="46" rx="5" fill="#dce8ff" stroke="#3d52d5" strokeWidth="1.5" />
    <rect x="17" y="16" width="22" height="2.5" rx="1" fill="#3d52d5" opacity="0.5" />
    <rect x="17" y="23" width="22" height="2.5" rx="1" fill="#3d52d5" opacity="0.5" />
    <rect x="17" y="30" width="14" height="2.5" rx="1" fill="#3d52d5" opacity="0.5" />
    <circle cx="42" cy="46" r="11" fill="#3d52d5" />
    <path d="M37 46l3.5 3.5L47 42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CyberSaathiIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <path d="M32 6L12 14v18c0 12 9 22 20 26 11-4 20-14 20-26V14L32 6z" fill="#dce8ff" stroke="#3d52d5" strokeWidth="1.5" />
    <path d="M32 14L20 19v11c0 7 5.5 13.5 12 16 6.5-2.5 12-9 12-16V19L32 14z" fill="#3d52d5" opacity="0.15" />
    <circle cx="32" cy="28" r="7" stroke="#3d52d5" strokeWidth="1.5" fill="white" />
    <circle cx="32" cy="28" r="3" fill="#3d52d5" />
  </svg>
);

const VartalQIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="24" y="8" width="16" height="28" rx="8" fill="#dce8ff" stroke="#3d52d5" strokeWidth="1.5" />
    <path d="M16 32c0 8.8 7.2 16 16 16s16-7.2 16-16" stroke="#3d52d5" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <line x1="32" y1="48" x2="32" y2="56" stroke="#3d52d5" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="24" y1="56" x2="40" y2="56" stroke="#3d52d5" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="27" y1="22" x2="37" y2="22" stroke="#3d52d5" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    <line x1="27" y1="27" x2="37" y2="27" stroke="#3d52d5" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const LegImqIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="20" y="10" width="24" height="44" rx="3" fill="#dce8ff" stroke="#3d52d5" strokeWidth="1.5" />
    <rect x="26" y="18" width="12" height="2" rx="1" fill="#3d52d5" opacity="0.5" />
    <rect x="26" y="24" width="12" height="2" rx="1" fill="#3d52d5" opacity="0.5" />
    <rect x="26" y="30" width="8" height="2" rx="1" fill="#3d52d5" opacity="0.5" />
    <path d="M20 10 L32 4 L44 10" stroke="#3d52d5" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
    <line x1="32" y1="4" x2="32" y2="10" stroke="#3d52d5" strokeWidth="1.5" />
  </svg>
);

const EcoCaIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="22" fill="#dce8ff" stroke="#3d52d5" strokeWidth="1.5" />
    <path d="M32 14c-8 6-10 16-4 22 4 4 10 5 14 2-2-8-6-16-10-24z" fill="#3d52d5" opacity="0.25" />
    <path d="M32 14c8 6 10 16 4 22-4 4-10 5-14 2 2-8 6-16 10-24z" fill="#3d52d5" opacity="0.15" />
    <path d="M22 38 Q32 26 42 38" stroke="#3d52d5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <line x1="32" y1="26" x2="32" y2="46" stroke="#3d52d5" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const productIcons: Record<string, React.ReactNode> = {
  'eco-ca': <EcoCaIcon />,
  'docuca': <DocuCAIcon />,
  'cybersaathi': <CyberSaathiIcon />,
  'vartalq': <VartalQIcon />,
  'legimq': <LegImqIcon />,
};

const products = [
  {
    id: 'eco-ca',
    name: 'Eco CA',
    tagline: 'Carbon Emission Platform',
    poweredBy: 'KODRYX AI',
    category: 'ENVIRONMENTAL',
    details: {
      about: 'A comprehensive platform for tracking and automating carbon emission compliance and reporting across enterprise supply chains.',
      tech: 'React, Django, PostgreSQL',
      useCase: 'Environmental Tech',
    }
  },
  {
    id: 'docuca',
    name: 'DocuCA',
    tagline: 'Regulatory Automation Assistant',
    poweredBy: 'KODRYX AI',
    category: 'LEGAL TECH',
    details: {
      about: 'DocuCA handles massive regulatory document parsing and compliance checking automatically, reducing audit time by 75%.',
      tech: 'Python, FastAPI, LlamaIndex',
      useCase: 'Legal & Auditing',
    }
  },
  {
    id: 'cybersaathi',
    name: 'CYBER SAATHI',
    tagline: 'AI WhatsApp assistant for cybercrime reporting and legal help.',
    poweredBy: 'KODRYX AI',
    category: 'CYBERSECURITY',
    details: {
      about: 'Cyber Saathi helps citizens report cyber crimes, understand the IPC/IT Act, and get actionable legal recommendations — instantly via WhatsApp.',
      tech: 'Agentic AI + WhatsApp',
      useCase: 'Cybersecurity, LegalTech, Public Safety, Social Impact AI',
    }
  },
  {
    id: 'vartalq',
    name: 'VartalQ',
    tagline: 'AI Voice Agents for Enterprise Calls',
    poweredBy: 'KODRYX AI',
    category: 'VOICE AI',
    details: {
      about: 'VartalQ deploys intelligent AI voice agents that handle customer calls, support queries, and outbound lead qualifications with human-like conversation abilities.',
      tech: 'ElevenLabs, Twilio, Node.js',
      useCase: 'Customer Support & Sales',
    }
  },
  {
    id: 'legimq',
    name: 'LegImq',
    tagline: 'Real-time Legal Research Assistant',
    poweredBy: 'KODRYX AI',
    category: 'LEGAL AI',
    details: {
      about: 'LegImq provides instant, accurate legal research and precedent summarization for law firms and corporate legal teams.',
      tech: 'LangChain, OpenAI, Pinecone',
      useCase: 'Corporate Legal',
    }
  }
];

const AbstractDecorations = () => (
  <div className="products__bg-decorations">
    {/* Top Left Wavy Blobs */}
    <div className="products__bg-wave products__bg-wave--tl">
      <svg viewBox="0 0 500 500" preserveAspectRatio="none">
        <path d="M0,0 C150,100 350,50 500,200 L500,0 Z" fill="rgba(61, 82, 213, 0.06)" />
        <path d="M0,0 C100,150 250,100 400,250 L400,0 Z" fill="rgba(61, 82, 213, 0.04)" />
        <path d="M0,0 C50,200 150,150 300,300 L300,0 Z" fill="rgba(61, 82, 213, 0.02)" />
      </svg>
    </div>

    {/* Accents */}
    <div className="products__bg-accent products__bg-dot-grid products__bg-dot-grid--1"></div>
    <div className="products__bg-accent products__bg-dot-grid products__bg-dot-grid--2"></div>
    <div className="products__bg-accent products__bg-circle products__bg-circle--1"></div>
    <div className="products__bg-accent products__bg-circle products__bg-circle--2"></div>
    <div className="products__bg-accent products__bg-plus products__bg-plus--1">+</div>
    <div className="products__bg-accent products__bg-plus products__bg-plus--2">+</div>
  </div>
);

import { Skeleton } from '../ui/skeleton';

export default function ProductsSection({ isLoading }: { isLoading?: boolean }) {
  const [activeTab, setActiveTab] = useState('cybersaathi');

  if (isLoading) {
    return (
      <section className="products" id="products">
        <AbstractDecorations />
        <div className="products__header">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="products__perspective-grid">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="products__card products__card--center" style={{ opacity: 0.5 }}>
              <Skeleton className="h-6 w-20 mb-6" />
              <Skeleton className="h-32 w-full mb-8" />
              <Skeleton className="h-6 w-full mb-4" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}

        </div>
      </section>
    );
  }

  const activeProduct = products.find(p => p.id === activeTab) || products[2];
  const activeProductIndex = products.findIndex(p => p.id === activeTab);

  return (
    <section className="products" id="products">
      <AbstractDecorations />

      <div className="products__header">
        <h2>Our Products</h2>
        <p>Cutting-edge AI tools built to solve real-world complexities.</p>
      </div>

      {/* ── 5 Product Cards ── */}
      <div className="products__perspective-grid">
        {products.map((product, index) => {
          const positionDiff = index - activeProductIndex;
          let posClass = 'products__card--hidden';
          if (positionDiff <= -2) posClass = 'products__card--far-left';
          else if (positionDiff === -1) posClass = 'products__card--left';
          else if (positionDiff === 0) posClass = 'products__card--center';
          else if (positionDiff === 1) posClass = 'products__card--right';
          else if (positionDiff >= 2) posClass = 'products__card--far-right';

          return (
            <div
              key={product.id}
              className={`products__card ${posClass}`}
              onClick={() => setActiveTab(product.id)}
            >
              {/* Category badge */}
              <span className="products__card-badge">{product.category}</span>

              {/* SVG Illustration */}
              <div className="products__card-illustration">
                {productIcons[product.id]}
              </div>

              {/* Text */}
              <div className="products__card-body">
                <h4 className="products__card-title">{product.name}</h4>
                <p className="products__card-tagline">{product.tagline}</p>
              </div>

              {/* Footer */}
              <div className="products__card-footer">
                <span className="products__card-footer-label">POWERED BY</span>
                <span className="products__card-footer-brand">{product.poweredBy}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Browser Window ── */}
      <div className="products__browser">
        <div className="products__browser-bar">
          <div className="products__browser-actions">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
          </div>
          <div className="products__browser-url">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
            <span>kodryx.ai/portfolios/{activeProduct.id}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
          </div>
          <div className="products__browser-controls">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /></svg>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff4757" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
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
                  <tr><th>Function:</th><td>{activeProduct.tagline}</td></tr>
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
