import { useEffect } from 'react';
import './CareersPage.css';

/* ── SVGs for Benefits ── */
const MedicalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="benefit-svg">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

const TechIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="benefit-svg">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const GrowthIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="benefit-svg">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2 5-2" />
    <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2-5 2-5" />
  </svg>
);

const RemoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="benefit-svg">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const TimeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    { title: 'Innovate with Purpose', desc: 'Work on AI systems that have real-world clinical impact and save lives.', icon: <MedicalIcon /> },
    { title: 'Modern Tech Stack', desc: 'Use cutting-edge tools in AI development, from LLMs to advanced vision systems.', icon: <TechIcon /> },
    { title: 'Growth & Mentorship', desc: 'Learn from industry experts in healthcare technology and AI governance.', icon: <GrowthIcon /> },
    { title: 'Remote-First Culture', desc: 'We value results over hours. Work with flexibility and autonomy.', icon: <RemoteIcon /> }
  ];

  const jobs = [
    { title: 'Senior AI Engineer', dept: 'Engineering', type: 'Full-Time', location: 'Hyderabad / Remote' },
    { title: 'Clinical Data Scientist', dept: 'Research', type: 'Contract / Full-Time', location: 'Remote' },
    { title: 'Full Stack Developer', dept: 'Product', type: 'Full-Time', location: 'Hyderabad' },
    { title: 'Backend Developer (Python/AI)', dept: 'Engineering', type: 'Full-Time', location: 'Remote' }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero__container">
          <span className="careers-badge">Now Hiring</span>
          <h1 className="careers-title">Build the Future of <span className="text-gradient">Applied AI</span></h1>
          <p className="careers-subtitle">
            At Kodryx AI, we don't just build models—we build solutions. Join a team of researchers and engineers dedicated to production-ready AI with clinical excellence.
          </p>
          <a href="#openings" className="careers-cta-btn">View Openings</a>
        </div>
        <div className="careers-hero__bg">
          <div className="career-circle career-circle--1"></div>
          <div className="career-circle career-circle--2"></div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="careers-why">
        <div className="careers-section__container">
          <div className="careers-section__header">
            <h2>Why Kodryx AI?</h2>
            <p>We are a DPIIT-recognized startup solving complex problems at the intersection of AI and Healthcare.</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="careers-openings" id="openings">
        <div className="careers-section__container">
          <div className="careers-section__header">
            <h2>Current Openings</h2>
            <p>Ready to make an impact? Explore our current opportunities.</p>
          </div>
          <div className="jobs-list">
            {jobs.map((job, i) => (
              <div key={i} className="job-card">
                <div className="job-info">
                  <span className="job-dept">{job.dept}</span>
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-meta-item"><LocationIcon /> {job.location}</span>
                    <span className="job-meta-item"><TimeIcon /> {job.type}</span>
                  </div>
                </div>
                <button className="job-apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
          <div className="careers-contact-box">
            <p>Don't see a role that fits? Send us your CV at <strong>careers@kodryx.com</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
