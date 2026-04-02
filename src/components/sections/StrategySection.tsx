import { useEffect, useRef } from 'react';
import './StrategySection.css';
import imgStrategy from '../../assets/ai_start.png';
import imgGen from '../../assets/gen_ai.png';
import imgAgentic from '../../assets/agentic_ai.png';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI Development & Services',
    desc: 'Bespoke AI solutions including SLM/LLM integration, Agentic systems, and comprehensive automation pipelines.',
    img: imgGen,
    points: ['Custom AI solutions', 'SLM & LLM integration', 'Agentic AI systems', 'AI-driven automation']
  },
  {
    title: 'AI Cybersecurity',
    desc: 'Defense-first AI engineering: adversarial defense, data protection, and secure model deployment pipelines.',
    img: imgAgentic,
    points: ['AI model security', 'Data protection & privacy', 'Adversarial defense', 'Secure pipelines']
  },
  {
    title: 'AI Governance',
    desc: 'Strategic frameworks for regulatory compliance, risk assessment, and responsible AI deployment.',
    img: imgStrategy,
    points: ['Governance frameworks', 'Compliance alignment', 'Responsible AI', 'Risk and audit readiness']
  },
];

function ParallaxImage({ src, alt, speed = -0.12 }: { src: string; alt: string; speed?: number }) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!imgRef.current) return;
      const { top, height } = imgRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = top + height / 2;
      const viewportCenter = windowHeight / 2;
      const offset = elementCenter - viewportCenter;

      const translateY = offset * speed;

      animationFrameId = requestAnimationFrame(() => {
        if (imgRef.current) {
          const clampedY = Math.max(-60, Math.min(60, translateY));
          imgRef.current.style.transform = `translateY(${clampedY}px)`;
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return <img ref={imgRef} src={src} alt={alt} style={{ willChange: 'transform' }} />;
}

import { Skeleton } from '../ui/skeleton';

export default function StrategySection({ isLoading }: { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <section className="strategy" id="solutions">
        <div className="strategy__header">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="pillars-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="pillar-skeleton-card">
              <Skeleton className="w-full aspect-video rounded-2xl mb-6" />
              <Skeleton className="h-8 w-48 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="strategy-v2" id="solutions">
      {/* Abstract Background Elements */}
      <div className="strategy-v2__bg">
        <div className="v2-bg-circle v2-bg-circle--1"></div>
        <div className="v2-bg-circle v2-bg-circle--2"></div>
      </div>

      <div className="strategy-v2__container">
        <motion.div
          className="strategy-v2__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="v2-badge">Core Pillars</span>
          <h2>Strategic Foundation</h2>
          <p>Our solutions are built on three foundational pillars of excellence, ensuring stability, security, and exponential growth.</p>
        </motion.div>

        <div className="pillars-masonry">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={`pillar-card pillar-card--${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="pillar-card__visual">
                <div className="v2-parallax-wrap">
                  <ParallaxImage src={f.img} alt={f.title} speed={-0.1} />
                </div>
                <div className="pillar-card__icon-overlay">
                  {i === 0 && <ShieldCheckIcon />}
                  {i === 1 && <CpuIcon />}
                  {i === 2 && <ScaleIconV2 />}
                </div>
              </div>

              <div className="pillar-card__content">
                <h3 className="pillar-card__title">{f.title}</h3>
                <p className="pillar-card__desc">{f.desc}</p>
                <ul className="pillar-card__points">
                  {f.points.map((p, j) => (
                    <li key={j} className="pillar-card__point">
                      <span className="v2-point-dot"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pillar-card__glass-effect"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Supplemental Icons for Pillars ── */
const ShieldCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const CpuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2M9 2v2M20 15h2M20 9h2M15 20v2M9 20v2M2 15h2M2 9h2"/></svg>
);
const ScaleIconV2 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg>
);
