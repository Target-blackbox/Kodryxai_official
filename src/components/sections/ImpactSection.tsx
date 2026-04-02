import { motion } from 'framer-motion';
import './ImpactSection.css';
import gitamLogo from '../../assets/parter_1.png';
import anuragLogo from '../../assets/anurag_logo.webp';
import revaLogo from '../../assets/reva_logo.webp';

const stats = [
  { label: 'Students Trained', value: '5000+' },
  { label: 'Universities Partnered', value: '4+' },
  { label: 'Faculty Upskilled', value: '200+' },
  { label: 'School Students Introduced', value: '200+' },
  { label: 'Internships Delivered', value: '50+' }
];

const universities = [
  { name: 'GITAM University', loc: 'Visakhapatnam / Hyderabad', logo: gitamLogo },
  { name: 'Anurag University', loc: 'Hyderabad', logo: anuragLogo },
  { name: 'REVA University', loc: 'Bengaluru', logo: revaLogo }
];

const programs = [
  { title: 'Faculty Development', desc: 'Advanced AI training for educators.' },
  { title: 'School AI Literacy', desc: 'Foundational AI for the next generation.' },
  { title: 'Corporate Training', desc: 'Custom AI workshops for industry teams.' },
  { title: 'Hackathons & AI Days', desc: 'Fostering innovation through competition.' },
  { title: 'Japan Internship Program', desc: 'Global exposure and career pathways.' }
];

export default function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="impact-container">
        <div className="impact-header">
          <span className="impact-badge">Social Impact</span>
          <h2>Building India’s AI Talent Ecosystem</h2>
          <p>We are dedicated to bridging the AI skill gap through strategic academic partnerships and intense training programs.</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="impact-details-grid">
          {/* Universities */}
          <div className="impact-box u-box">
            <h3>Academic Partners</h3>
            <div className="uni-list">
              {universities.map((uni, i) => (
                <div key={i} className="uni-item">
                  <div className="uni-logo-box">
                    <img src={uni.logo} alt={uni.name} className="uni-logo" />
                  </div>
                  <div className="uni-info">
                    <strong>{uni.name}</strong>
                    <span>{uni.loc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="impact-box p-box">
            <h3>Key Programs</h3>
            <div className="prog-grid">
              {programs.map((prog, i) => (
                <div key={i} className="prog-item">
                  <h4>{prog.title}</h4>
                  <p>{prog.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
