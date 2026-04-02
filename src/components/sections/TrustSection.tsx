import { useState } from 'react';
import './TrustSection.css';
import isoImg from '../../assets/iso_image.webp';
import cdImg from '../../assets/cd_image.png';
import dpiitImg from '../../assets/dpiit_image.png';
import geethsLogo from '../../assets/geeths_logo.webp';
import sevaLogo from '../../assets/seva_logo.webp';
import ai4Logo from '../../assets/ai4_logo.webp';
import waigLogo from '../../assets/waig_logo.webp';

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

const MicroscopeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1l-5-5-4 4 5 5v1" /><path d="M14 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /></svg>
);

const ScaleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h18" /></svg>
);

const TrustSection = () => {
  const [activeTab, setActiveTab] = useState('compliance');

  const tabs = [
    { id: 'compliance', label: 'Compliance & Regulatory', icon: <ShieldIcon /> },
    { id: 'clinical', label: 'Clinical Evidence & Contribution to Society', icon: <MicroscopeIcon /> },
    { id: 'governance', label: 'AI Governance', icon: <ScaleIcon /> },
  ];

  return (
    <section className="trust-section" id="trust">
      {/* Background Decorations */}
      <div className="trust-bg-decorations">
        <div className="trust-bg-dot-grid trust-bg-dot-grid--tl"></div>
        <div className="trust-bg-dot-grid trust-bg-dot-grid--br"></div>
        <div className="trust-bg-circle trust-bg-circle--1"></div>
        <div className="trust-bg-circle trust-bg-circle--2"></div>
      </div>

      <div className="trust-section__container">
        <div className="trust-section__header">
          <span className="trust-section__badge">Enterprise Integrity</span>
          <h2 className="trust-section__title">Compliance & Trust</h2>
          <p className="trust-section__subtitle">
            Powering progress with responsibility. We build secure, reliable, and regulatory-ready AI systems as a foundational commitment to our enterprise partners.
          </p>
          <div className="trust-global-reach">
            <span>India</span> • <span>Japan</span> • <span>USA</span> • <span>Singapore</span> • <span>Canada</span> • <span>Middle East</span> • <span>Europe</span> • <span>Australia</span> • <span>Russia</span>
          </div>
        </div>

        <div className="trust-section__tabs-container">
          <div className="trust-section__tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`trust-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="trust-tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="trust-content-wrapper">
          {activeTab === 'compliance' && (
            <div className="trust-content animate-fade">
              <div className="trust-grid">
                <div className="trust-card highlight">
                  <div className="trust-card-icon-main">🏛️</div>
                  <h3>Recognition & Credibility</h3>
                  <div className="trust-official-logos">
                    <div className="official-logo-item">
                      <img src={dpiitImg} alt="DPIIT Recognized" className="trust-logo-img" />
                    </div>
                    <div className="official-logo-item">
                      <img src={cdImg} alt="CDSCO Registered" className="trust-logo-img" />
                    </div>
                  </div>
                  <ul className="trust-list">
                    <li>
                      <strong>DPIIT Recognized Startup</strong>
                      <p>Validation of our innovation and startup credibility by the Department for Promotion of Industry and Internal Trade (GoI).</p>
                    </li>
                    <li>
                      <strong>CDSCO Medical Device Portal</strong>
                      <p>Registered on the CDSCO Portal, enabling us to engage in regulated healthcare and medical device workflows.</p>
                    </li>
                  </ul>
                </div>
                <div className="trust-card">
                  <div className="trust-card-icon-main">🔒</div>
                  <h3>Data Privacy & Protection</h3>
                  <ul className="trust-list">
                    <li>
                      <strong>DPDP Act Alignment (2023)</strong>
                      <p>Ensuring responsible handling of personal and sensitive data under India's Digital Personal Data Protection Act.</p>
                    </li>
                    <li>
                      <strong>Privacy-by-Design</strong>
                      <p>Embedding data minimization, encryption, and access control into every layer of our systems.</p>
                    </li>
                  </ul>
                </div>
                <div className="trust-card">
                  <div className="trust-card-icon-main">📜</div>
                  <h3>Standards & Compliance</h3>
                  <div className="iso-image-container">
                    <img src={isoImg} alt="ISO Certification" className="trust-iso-img" />
                  </div>
                  <p className="trust-special-note">Actively working towards global certifications:</p>
                  <div className="iso-badges">
                    <div className="iso-badge">ISO 27001 <small>(In Progress)</small></div>
                    <div className="iso-badge">ISO 13485 <small>(Planned)</small></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clinical' && (
            <div className="trust-content animate-fade">
              <div className="trust-grid">
                <div className="trust-card full-width">
                  <div className="trust-card-icon-main">🧪</div>
                  <h3>Clinical Validation & Approach</h3>
                  <div className="clinical-grid">
                    <div className="clinical-item">De-identified medical imaging datasets</div>
                    <div className="clinical-item">Collaboration with healthcare professionals</div>
                    <div className="clinical-item">Clinical expert review of AI outputs</div>
                    <div className="clinical-item">Evidence-based continuous improvement</div>
                  </div>
                </div>
                <div className="trust-row-side">
                  <div className="trust-card">
                    <h3>Clinical Collaborations & NGOs</h3>
                    <div className="collaboration-grid">
                      <div className="collaboration-logo-item">
                        <div className="collab-img-box">
                          <img src={sevaLogo} alt="Seva Bharathi" className="collab-logo" />
                        </div>
                        <span className="collab-name">Seva Bharathi</span>
                      </div>
                      <div className="collaboration-logo-item">
                        <div className="collab-img-box">
                          <img src={geethsLogo} alt="Geetha Hospital" className="collab-logo" />
                        </div>
                        <span className="collab-name">Geetha Hospital</span>
                      </div>
                      <div className="collaboration-logo-item">
                        <div className="collab-img-box">
                          <img src={ai4Logo} alt="AI4ALL" className="collab-logo" />
                        </div>
                        <span className="collab-name">AI4ALL</span>
                      </div>
                      <div className="collaboration-logo-item">
                        <div className="collab-img-box">
                          <img src={waigLogo} alt="WAIG" className="collab-logo" />
                        </div>
                        <span className="collab-name">WAIG</span>
                      </div>
                      <div className="collaboration-logo-item text-fallback">
                        <span className="collab-name text-center">Sankhyantra Foundation</span>
                      </div>
                    </div>
                  </div>
                  <div className="trust-card advisory-side-card">
                    <h3>Advisory Board</h3>
                    <div className="advisory-grid">
                      {[
                        'Dr. Raju', 'Santhana Selvan', 'Umang Mehta',
                        'Dr. Jigna Raja', 'Dr. Jayesh Karkere', 'Dr. Dollar Karkere',
                        'CA Shiva Prasad', 'Anwar Shaik Kapur', 'Syson Jose', 'Satish Chandra'
                      ].map((name, idx) => (
                        <div key={idx} className="advisory-member">
                          <strong>{name}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'governance' && (
            <div className="trust-content animate-fade">
              <div className="trust-grid">
                <div className="trust-card">
                  <h3>AI Lifecycle Governance</h3>
                  <div className="lifecycle-stepper">
                    <div className="step">Dataset Preparation</div>
                    <div className="step">Model Training</div>
                    <div className="step">Clinical Testing</div>
                    <div className="step">Controlled Deployment</div>
                  </div>
                </div>
                <div className="trust-card">
                  <div className="trust-card-icon-main">🛡️</div>
                  <h3>Safety & Data Ethics</h3>
                  <ul className="trust-list">
                    <li><strong>De-identified Data</strong> - Identifying information is removed before any AI training.</li>
                    <li><strong>Restricted Access</strong> - Access is strictly limited to authorized personnel only.</li>
                  </ul>
                </div>
                <div className="trust-card highlight">
                  <h3>Human Oversite & Feedback</h3>
                  <p>Qualified practitioners must review all AI outputs. Performance is continuously monitored against real-world usage data.</p>
                  <p className="standard-mention">Built according to <strong>ISO/IEC 42001</strong> standards.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
