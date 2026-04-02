import './PartnersSection.css';

const techPartners = ['LLMWare', 'CloudBridge', 'Dynotek', 'Amnext'];
const healthcarePartners = ['TANITA', 'Motion+', 'Digissurance'];
const mediaPartners = ['TeaPot Games', 'Unity Circle', 'Atlas'];

export default function PartnersSection() {
  return (
    <section className="partners-v2">
      <div className="partners-container">
        <div className="partners-header">
          <span className="partners-badge">Ecosystem</span>
          <h2>Partners & Collaborations</h2>
          <p>We work with industry leaders to deliver world-class AI solutions across diverse domains.</p>
        </div>

        <div className="partners-categories">
          <div className="partner-category">
            <h3>Tech & Global</h3>
            <div className="partner-pills">
              {techPartners.map((p, i) => <span key={i} className="partner-pill">{p}</span>)}
            </div>
          </div>

          <div className="partner-category">
            <h3>Healthcare & Insurance</h3>
            <div className="partner-pills">
              {healthcarePartners.map((p, i) => <span key={i} className="partner-pill">{p}</span>)}
            </div>
          </div>

          <div className="partner-category">
            <h3>Gaming & Media</h3>
            <div className="partner-pills">
              {mediaPartners.map((p, i) => <span key={i} className="partner-pill">{p}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
