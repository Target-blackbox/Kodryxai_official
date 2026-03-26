import './ContactSection.css';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const handleScrollToContact = () => {
    // This could also open a modal or form if needed
    window.open('https://calendly.com/your-ai-expert', '_blank'); // Example for a "Discovery Call"
  };

  return (
    <section id="contact" className="contact-banner">
      <div className="contact-banner__container">
        <motion.div
          className="contact-banner__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-banner__left">
            <h2 className="contact-banner__title">Want to learn more?</h2>
          </div>

          <div className="contact-banner__right">
            <p className="contact-banner__label">Book a discovery call with an AI expert today.</p>
            <button className="contact-banner__cta" onClick={handleScrollToContact}>
              <div className="cta-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <span className="cta-text">SCHEDULE A CALL</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
