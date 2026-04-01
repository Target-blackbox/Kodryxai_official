import { useState } from 'react';
import './ProductsSection.css';
import kodryxSocialDemo from '../../assets/kodryx_social_demo.mp4';
import kodryxLensDemo from '../../assets/kodryx_lens.mov';
import cp1 from '../../assets/c_p1.mp4';
import cp2 from '../../assets/c_p2.mp4';
import cp3 from '../../assets/c_p3.mp4';
import cp4 from '../../assets/c_p4.mp4';

/* ── Inline SVG Illustrations per product ── */
const WidasIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="26" fill="#dce8ff" stroke="#3d52d5" strokeWidth="1.5" />
    <rect x="22" y="30" width="20" height="4" rx="2" fill="#3d52d5" />
    <rect x="30" y="22" width="4" height="20" rx="2" fill="#3d52d5" />
    <path d="M12 32h5M47 32h5M32 12v5M32 47v5" stroke="#3d52d5" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const KodryxSocialIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <path d="M52 30c0 11-10 20-22 20a21 21 0 0 1-13-4l-9 3 2-8a21 21 0 1 1 42-11z" fill="#dce8ff" stroke="#3d52d5" strokeWidth="1.5" />
    <circle cx="21" cy="30" r="2" fill="#3d52d5" />
    <circle cx="30" cy="30" r="2" fill="#3d52d5" />
    <circle cx="39" cy="30" r="2" fill="#3d52d5" />
  </svg>
);

const KodryxLensIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <rect x="12" y="12" width="40" height="40" rx="8" fill="#dce8ff" stroke="#3d52d5" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="14" stroke="#3d52d5" strokeWidth="1.5" strokeDasharray="3 2" />
    <circle cx="32" cy="32" r="6" fill="#3d52d5" />
    <path d="M12 24h4M48 24h4M12 40h4M48 40h4" stroke="#3d52d5" strokeWidth="1.5" />
  </svg>
);

const CultureSenseIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="26" fill="#dce8ff" stroke="#3d52d5" strokeWidth="1.5" />
    <ellipse cx="32" cy="32" rx="26" ry="10" stroke="#3d52d5" strokeWidth="1" opacity="0.3" />
    <ellipse cx="32" cy="32" rx="10" ry="26" stroke="#3d52d5" strokeWidth="1" opacity="0.3" />
    <path d="M32 6v52M6 32h52" stroke="#3d52d5" strokeWidth="1" opacity="0.3" />
    <circle cx="32" cy="32" r="6" fill="#3d52d5" />
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
  'widas': <WidasIcon />,
  'kodryxsocial': <KodryxSocialIcon />,
  'kodryxlens': <KodryxLensIcon />,
  'culturesense': <CultureSenseIcon />,
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
    id: 'widas',
    name: 'WIDAS',
    tagline: 'AI-powered platform for early detection and monitoring of chronic wounds.',
    poweredBy: 'KODRYX AI',
    category: 'HEALTHCARE',
    details: {
      about: 'WIDAS (Wound Intelligence & Decision Assistance System) is an AI-powered platform for early detection and monitoring of chronic wounds, especially diabetic foot ulcers. It uses advanced image analysis and patient data to help clinicians quickly assess wound severity and predict infection risks.',
      tech: 'Advanced AI Image Analysis & Smartphone Diagnostics',
      useCase: 'Wound Care Monitoring & Diagnostic Assistance',
      launchDate: 'January 2026',
    }
  },
  {
    id: 'kodryxsocial',
    name: 'Kodryx Social',
    tagline: 'Automates messaging and interactions across WhatsApp, Instagram, and Telegram using AI.',
    poweredBy: 'KODRYX AI',
    category: 'MARKETING',
    details: {
      about: 'Kodryx Social is a cutting-edge platform designed for autonomous and adaptive interactions across major social channels.',
      tech: 'Powered by advanced agentic AI systems for autonomous and adaptive interactions',
      useCase: 'Marketing Automation / Conversational AI / Social Media Automation',
      launchDate: 'March 2026',
      video: kodryxSocialDemo,
      startTime: 11,
    }
  },
  {
    id: 'kodryxlens',
    name: 'Kodryx Lens',
    tagline: 'AI assistant for medical scan analysis and radiologist support.',
    poweredBy: 'KODRYX AI',
    category: 'MEDICAL AI',
    details: {
      about: 'Kodryx Lens is an AI-powered assistant that helps doctors and radiologists analyze medical scans more efficiently. It automatically selects key frames from large image sets, saving time and reducing manual effort while providing clear summaries of findings as a second opinion.',
      tech: 'Computer Vision & Intelligent Frame Selection',
      useCase: 'Radiology / Clinical Decision Support',
      launchDate: 'February 2026',
      video: kodryxLensDemo,
    }
  },
  {
    id: 'culturesense',
    name: 'Culture Sense',
    tagline: 'Enhances communication by delivering culturally adaptive messaging across platforms.',
    poweredBy: 'KODRYX AI',
    category: 'CUSTOMER EXP',
    details: {
      about: 'Culture Sense is an intelligent, AI-driven platform designed to enable culturally aware, personalized, and context-sensitive interactions across global audiences. It adapts content based on language, region, traditions, and user behavior.',
      tech: 'Powered by advanced AI models integrating Natural Language Processing (NLP), cultural context engines, and adaptive learning systems for personalized and region-aware interactions.',
      useCase: 'AI Personalization / Cultural Intelligence / Conversational AI',
      launchDate: 'April 2026',
      videoSequence: [cp1, cp2, cp3, cp4],
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
  const [activeProductIndex, setActiveProductIndex] = useState(2);
  const [currentVideoInSeq, setCurrentVideoInSeq] = useState(0);

  const handleProductSelect = (index: number) => {
    setActiveProductIndex(index);
    setCurrentVideoInSeq(0);
  };

  const activeProduct = products[activeProductIndex];

  const handleVideoEnd = () => {
    if (activeProduct.details.videoSequence) {
      setCurrentVideoInSeq((prev: number) => (prev + 1) % (activeProduct.details.videoSequence?.length || 1));
    }
  };

  const currentVideoSrc = activeProduct.details.videoSequence 
    ? activeProduct.details.videoSequence[currentVideoInSeq]
    : activeProduct.details.video;

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
              className={`products__card ${posClass} ${activeProductIndex === index ? 'is-active' : ''}`}
              onClick={() => handleProductSelect(index)}
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
                  <tr><th>Launch Date:</th><td>{activeProduct.details.launchDate || 'April 2025'}</td></tr>
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
            {currentVideoSrc ? (
              <video
                src={!activeProduct.details.videoSequence && activeProduct.details.startTime 
                  ? `${currentVideoSrc}#t=${activeProduct.details.startTime}` 
                  : currentVideoSrc
                }
                className="products__video-player"
                autoPlay
                loop={!activeProduct.details.videoSequence}
                muted
                playsInline
                key={`${activeProduct.id}-${currentVideoInSeq}`}
                onPlay={(e) => (e.currentTarget.playbackRate = 2)}
                onEnded={handleVideoEnd}
              />
            ) : (
              <div className="products__placeholder-box"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
