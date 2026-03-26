import { useState } from 'react';

import { motion } from 'framer-motion';
import './HeroSection.css';

const testimonials = [
  { id: 1, quote: "Kodryx AI's predictive models revolutionized our supply chain efficiency.", name: "Sarah Jenkins", role: "Logistics Director" },
  { id: 2, quote: "The agentic AI implementation was seamless and human-like.", name: "David Chen", role: "CTO, Fintech" },
  { id: 3, quote: "Finally, a production-ready RAG system that actually works at scale.", name: "Marcus Thorne", role: "Head of Data Science" },
  { id: 4, quote: "Their strategy roadmap gave us a clear competitive advantage.", name: "Elena Rossi", role: "CEO, Retail Group" },
  { id: 5, quote: "Enterprise grade AI with a startup's speed of execution.", name: "James Wilson", role: "VP Engineering" },
];


const QuoteIcon = ({ flip = false }: { flip?: boolean }) => (
  <svg className={`quote-icon ${flip ? 'quote-icon--flip' : ''}`} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 11V6.264C0 4.2 0.352 2.684 1.056 1.716C1.76 0.748 3.124 0.176 5.148 0L5.364 1.548C4.14 1.636 3.326 1.954 2.922 2.502C2.518 3.05 2.316 3.886 2.316 5.01V5.796H5.256V11H0ZM8.448 11V6.264C8.448 4.2 8.8 2.684 9.504 1.716C10.208 0.748 11.572 0.176 13.596 0L13.812 1.548C12.588 1.636 11.774 1.954 11.37 2.502C10.966 3.05 10.764 3.886 10.764 5.01V5.796H13.704V11H8.448Z" fill="#3D52D5" />
  </svg>
);

const AvatarIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#E9EEFE" />
    <circle cx="20" cy="16" r="6" stroke="#3D52D5" strokeWidth="2" />
    <path d="M30 31C30 26.5817 25.5228 23 20 23C14.4772 23 10 26.5817 10 31" stroke="#3D52D5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

import { Skeleton } from '../ui/skeleton';
import heroIllustration from '../../assets/hero_illustration_2.png';

export default function HeroSection({ isLoading }: { isLoading?: boolean }) {
  // Initialize state synchronously to avoid render flash on first visit
  const [shouldAnimate] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasVisited = localStorage.getItem('hasVisitedKodryx');
    if (!hasVisited) {
      localStorage.setItem('hasVisitedKodryx', 'true');
      return true;
    }
    return false;
  });

  if (isLoading) {
    return (
      <section className="hero">
        <div className="hero__mesh-container">
          <div className="hero__mesh-blob hero__mesh-blob--1"></div>
          <div className="hero__mesh-blob hero__mesh-blob--2"></div>
          <div className="hero__mesh-blob hero__mesh-blob--3"></div>
          <div className="hero__mesh-blob hero__mesh-blob--4"></div>
          <div className="hero__frosted-overlay"></div>
        </div>

        <div className="hero__content">
          <div className="hero__left">
            <Skeleton className="h-16 w-[80%] mb-4" />
            <Skeleton className="h-16 w-[60%] mb-8" />
            <Skeleton className="h-6 w-[90%] mb-2" />
            <Skeleton className="h-6 w-[85%] mb-8" />
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
          <div className="hero__right">
            <Skeleton className="w-full aspect-square rounded-2xl" />
          </div>
        </div>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 100,
      },
    },
  };

  const illustrationVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
        delay: 0.5,
      },
    },
  };

  return (
    <section className="hero">
      {/* ── Frosted Mesh Gradient Background ── */}
      <div className="hero__mesh-container">
        <div className="hero__mesh-blob hero__mesh-blob--1"></div>
        <div className="hero__mesh-blob hero__mesh-blob--2"></div>
        <div className="hero__mesh-blob hero__mesh-blob--3"></div>
        <div className="hero__mesh-blob hero__mesh-blob--4"></div>
        
        {/* AI Bar Graph Wave Background at Bottom */}
        <div className="hero__waves-container hero__bar-spectrogram">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="hero__bar" 
              style={{ 
                height: `${15 + Math.random() * 70}%`,
                animationDelay: `${i * 0.05}s` 
              }}
            />
          ))}
        </div>





        <div className="hero__frosted-overlay"></div>
      </div>



      {/* ── Background Split (Curved SVG) ── */}
      <div className="hero__bg" aria-hidden="true">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* White left side with the specific curve */}
          <path d="M0 0H800C800 0 850 150 820 400C790 650 850 900 850 900H0V0Z" fill="rgba(255, 255, 255, 0.4)" />
          {/* Light blue right side fills the rest (handled via CSS background on parent) */}
        </svg>
      </div>

      <div className="hero__content">
        {/* ── Left content ── */}
        <motion.div
          className="hero__left"
          variants={containerVariants}
          initial={shouldAnimate ? "hidden" : "visible"}
          animate="visible"
        >
          <motion.h1 className="hero__heading" variants={itemVariants}>
            AI That Builds<br />
            Competitive Advantage
          </motion.h1>

          <motion.p className="hero__sub" variants={itemVariants}>
            Beyond the AI hype: building, scaling, and operating real-world AI for businesses.
            We design production-ready systems that integrate seamlessly with your data,
            infrastructure, and workflows.
          </motion.p>

          <motion.button className="hero__cta" variants={itemVariants}>
            Get Started
          </motion.button>

          {/* Infinite Marquee Testimonial Cards */}
          <div className="hero__testimonials-container">
            <div className="hero__testimonials-track">
              {[...testimonials, ...testimonials].map((t, index) => (
                <div
                  key={`${t.id}-${index}`}
                  className="hero__card"
                >
                  <QuoteIcon />
                  <p className="hero__card-text">"{t.quote}"</p>
                  <div className="hero__card-author">
                    <AvatarIcon />
                    <div>
                      <p className="hero__card-name">{t.name}</p>
                      <p className="hero__card-role">{t.role}</p>
                    </div>
                  </div>
                  <QuoteIcon flip />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Right content ── */}
        <motion.div
          className="hero__right"
          variants={illustrationVariants}
          initial={shouldAnimate ? "hidden" : "visible"}
          animate="visible"
        >
          <div className="hero__illustration-wrapper">
            <img
              src={heroIllustration}
              alt="AI Robot Illustration"
              className="hero__img"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
