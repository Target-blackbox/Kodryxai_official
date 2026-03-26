import { useEffect, useRef } from 'react';
import './StrategySection.css';
import imgStrategy from '../../assets/ai_start.png';
import imgGen from '../../assets/gen_ai.png';
import imgAgentic from '../../assets/agentic_ai.png';
import imgTradi from '../../assets/tradi_ai.png';
import imgLite from '../../assets/ai_lite.png';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI Strategy & Consulting',
    desc: 'Actionable AI roadmaps — from discovery to deployment and governance.',
    img: imgStrategy,
  },
  {
    title: 'Generative AI Engineering',
    desc: 'LLMs, RAG, and AI copilots tailored for enterprise productivity.',
    img: imgGen,
  },
  {
    title: 'Agentic AI & Autonomous Systems',
    desc: 'Autonomous agents. Voice-ready. AgentOps-enabled.',
    img: imgAgentic,
  },
  {
    title: 'Traditional AI & ML Solutioning',
    desc: 'Forecasting, prediction, and classification engines powered by ML/DL at scale.',
    img: imgTradi,
  },
  {
    title: 'AI Literacy',
    desc: 'Upskill your teams and build in-house AI expertise. Build a competitive advantage in the AI era.',
    img: imgLite,
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
        <div className="timeline">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}>
              <div className="timeline__dot" />
              <div className="timeline__content">
                <Skeleton className="h-8 w-48 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
              <div className="timeline__image">
                <Skeleton className="w-full aspect-video rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="strategy" id="solutions">

      <motion.div
        className="strategy__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Our Core Solutions</h2>
        <p>Comprehensive AI solutions tailored for enterprise growth.</p>
      </motion.div>

      <div className="timeline">
        {features.map((f, i) => {
          const isLeft = i % 2 === 0;

          return (
            <div
              key={i}
              className={`timeline__item ${isLeft ? 'timeline__item--left' : 'timeline__item--right'}`}
            >
              <div className="timeline__dot" />

              {/* Text */}
              <motion.div
                className="timeline__content"
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3 className="timeline__title">{f.title}</h3>
                <p className="timeline__desc">{f.desc}</p>
              </motion.div>

              {/* Illustration */}
              <motion.div
                className="timeline__image"
                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <ParallaxImage src={f.img} alt={f.title} speed={isLeft ? -0.1 : -0.15} />
              </motion.div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
