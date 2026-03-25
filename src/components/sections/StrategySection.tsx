import { useEffect, useRef } from 'react';
import './StrategySection.css';
import imgStrategy from '../../assets/ai_start.png';
import imgGen from '../../assets/gen_ai.png';
import imgAgentic from '../../assets/agentic_ai.png';
import imgTradi from '../../assets/tradi_ai.png';
import imgLite from '../../assets/ai_lite.png';

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
          // Clamp the translation to prevent excessive clipping outside its container
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

export default function StrategySection() {
  return (
    <section className="strategy" id="services">

      <div className="strategy__header" data-aos="fade-up">
        <h2>Our Core Capabilities</h2>
        <p>Comprehensive AI solutions tailored for enterprise growth.</p>
      </div>

      <div className="timeline">
        {features.map((f, i) => {
          const isLeft = i % 2 === 0; // even → text left, image right

          return (
            <div
              key={i}
              className={`timeline__item ${isLeft ? 'timeline__item--left' : 'timeline__item--right'}`}
            >
              {/* Checkpoint dot — centred on the vertical line via CSS */}
              <div className="timeline__dot" />

              {/* Text */}
              <div
                className="timeline__content"
                data-aos={isLeft ? 'fade-right' : 'fade-left'}
                data-aos-duration="700"
                data-aos-delay={String(i * 60)}
              >
                <h3 className="timeline__title">{f.title}</h3>
                <p className="timeline__desc">{f.desc}</p>
              </div>

              {/* Illustration */}
              <div
                className="timeline__image"
                data-aos={isLeft ? 'fade-left' : 'fade-right'}
                data-aos-duration="700"
                data-aos-delay={String(i * 60)}
              >
                <ParallaxImage src={f.img} alt={f.title} speed={isLeft ? -0.1 : -0.15} />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
