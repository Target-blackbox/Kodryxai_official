import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './StrategySection.css';

// Importing new assets
import imgDev from '../../assets/ai_dev.png';
import imgCyber from '../../assets/ai_cyber.png';
import imgGov from '../../assets/ai_gov.png';

const features = [
  {
    id: 'development',
    title: 'AI Development',
    tag: 'DEVELOPMENT',
    desc: 'Bespoke AI systems built on SLM/LLM foundations with complex multi-agent orchestration and low-latency inference.',
    img: imgDev,
    stats: [
      { label: 'Latency', value: '40ms' },
      { label: 'Engine', value: 'Agentic SLM' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'AI Cybersecurity',
    tag: 'CYBERSECURITY',
    desc: 'Forensic-grade hardening for AI intelligence modules, emphasizing data privacy and adversarial threat mitigation.',
    img: imgCyber,
    stats: [
      { label: 'Protocols', value: 'Zero Trust' },
      { label: 'Hardening', value: 'Military' }
    ]
  },
  {
    id: 'governance',
    title: 'AI Governance',
    tag: 'GOVERNANCE',
    desc: 'Integrated regulatory frameworks for responsible AI deployment, risk management, and ethical oversight.',
    img: imgGov,
    stats: [
      { label: 'Standard', value: 'ISO-aligned' },
      { label: 'Audit', value: 'Continuous' }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

export default function StrategySection() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <header className="features-header">
          <motion.span
            className="features-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Strategic Foundation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Architecture of Intelligence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Engineered frameworks for the modern enterprise AI landscape.
          </motion.p>
        </header>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((f) => (
            <motion.div
              key={f.id}
              className="features-card"
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="features-card-image">
                <img src={f.img} alt={f.title} loading="lazy" />
                <div className="features-card-overlay" />
              </div>

              <div className="features-card-content">
                <div className="features-card-header">
                  <span className="features-card-tag">{f.tag}</span>
                  <h3 className="features-card-title">{f.title}</h3>
                </div>

                <p className="features-card-desc">{f.desc}</p>

                <div className="features-card-stats">
                  {f.stats.map((s, idx) => (
                    <div key={idx} className="features-card-stat">
                      <span className="features-card-stat-label">{s.label}</span>
                      <span className="features-card-stat-value">{s.value}</span>
                    </div>
                  ))}
                </div>

                <a href="#products" className="features-card-link">
                  Explore Products <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
