import { useState } from 'react';
import './StrategySection.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, ArrowRight } from 'lucide-react';

import imgGen from '../../assets/gen_ai.png';
import imgAgentic from '../../assets/agentic_ai.png';
import imgStrategy from '../../assets/ai_start.png';

const features = [
  {
    id: 'development',
    title: 'AI Development',
    subtitle: 'Autonomous Systems',
    desc: 'Bespoke AI systems built on SLM/LLM foundations with complex multi-agent orchestration and low-latency inference.',
    details: [
      { label: 'Core Engine', value: 'Agentic SLM' },
      { label: 'Latency', value: '40ms' },
      { label: 'Scale', value: 'Global' },
    ],
    color: '#3b82f6',
    img: imgGen,
    tag: 'MODULE_DEV_01',
  },
  {
    id: 'cybersecurity',
    title: 'AI Cybersecurity',
    subtitle: 'Defensive Strategy',
    desc: 'Forensic-grade hardening for AI intelligence modules, emphasizing data privacy and adversarial threat mitigation.',
    details: [
      { label: 'Protocols', value: 'Zero Trust' },
      { label: 'Encryption', value: 'Post-Quantum' },
      { label: 'Hardening', value: 'Military' },
    ],
    color: '#6366f1',
    img: imgAgentic,
    tag: 'MODULE_SEC_02',
  },
  {
    id: 'governance',
    title: 'AI Governance',
    subtitle: 'Strategic Compliance',
    desc: 'Integrated regulatory frameworks for responsible AI deployment, risk management, and ethical oversight.',
    details: [
      { label: 'Framework', value: 'ISO-aligned' },
      { label: 'Risk Audit', value: 'Continuous' },
      { label: 'Ethics', value: 'Verified' },
    ],
    color: '#8b5cf6',
    img: imgStrategy,
    tag: 'MODULE_GOV_03',
  },
];

const transition: any = { duration: 0.5, ease: [0.4, 0, 0.2, 1] };

export default function StrategySection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="ss-section" id="solutions">
      <div className="ss-container">
        <header className="ss-header">
          <span className="ss-badge">Strategic Foundation</span>
          <h2>The Architecture of Intelligence</h2>
          <p>Engineered frameworks for the modern enterprise AI landscape.</p>
        </header>

        <div className="ss-grid">
          {features.map((f) => {
            const isOpen = expandedId === f.id;
            return (
              <motion.div
                key={f.id}
                layout
                className={`ss-card ${isOpen ? 'ss-card--open' : ''}`}
                style={{ '--c': f.color } as any}
                animate={{ flex: isOpen ? 12 : 1 }}
                transition={transition}
                onClick={() => setExpandedId(isOpen ? null : f.id)}
                onMouseMove={(e) => {
                  if (!isOpen) {
                    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                    (e.currentTarget as HTMLElement).style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                    (e.currentTarget as HTMLElement).style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.setProperty('--mouse-x', '-999px');
                  (e.currentTarget as HTMLElement).style.setProperty('--mouse-y', '-999px');
                }}
              >
                {/* Collapsed view — always visible */}
                <div className="ss-collapsed">
                  {/* Top group */}
                  <div className="ss-collapsed-top">
                    <div className="ss-img-wrap">
                      <img src={f.img} alt={f.title} />
                    </div>
                    <span className="ss-tag">{f.tag}</span>
                    <h3 className="ss-title">{f.title}</h3>
                    <p className="ss-sub">{f.subtitle}</p>
                  </div>
                  {/* Bottom accent — anchors space-between */}
                  <div className="ss-collapsed-footer">
                    <div className="ss-collapsed-bar" style={{ background: f.color }} />
                    <span className="ss-collapsed-cta">Explore <span>→</span></span>
                  </div>
                  <div className="ss-toggle">{isOpen ? <X size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}</div>
                </div>

                {/* Expanded detail panel — slides in from right */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="ss-detail"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2, duration: 0.35 }}
                    >
                      <div className="ss-detail-divider" />
                      <p className="ss-detail-desc">{f.desc}</p>
                      <div className="ss-stats">
                        {f.details.map((d, i) => (
                          <div key={i} className="ss-stat">
                            <span className="ss-stat-label">{d.label}</span>
                            <span className="ss-stat-value" style={{ color: f.color }}>{d.value}</span>
                          </div>
                        ))}
                      </div>
                        <a
                          href="#products"
                          className="ss-cta"
                          style={{ background: f.color }}
                          onClick={(e) => { e.stopPropagation(); }}
                        >
                          Explore Products <ArrowRight size={16} />
                        </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
