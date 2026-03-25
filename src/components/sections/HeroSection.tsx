
import './HeroSection.css';

const testimonials = [
  {
    id: 1,
    quote:
      'AI solutions that actually work in production. Scalable AI systems delivered faster than expected.',
    name: 'Amit Verma',
    role: 'CTO',
  },
  {
    id: 2,
    quote:
      'Transformed our workflows with reliable AI automation. Production ready AI built for real business impact.',
    name: 'Akhildev',
    role: 'UI/UX Lead',
  },
  {
    id: 3,
    quote:
      'AI infrastructure that scales with our growth. From concept to production, flawlessly executed.',
    name: 'Raghu',
    role: 'Manager',
  },
];

const QuoteIcon = ({ flip = false }: { flip?: boolean }) => (
  <svg
    width="28"
    height="22"
    viewBox="0 0 28 22"
    fill="none"
    className={`quote-icon${flip ? ' quote-icon--flip' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    style={flip ? { transform: 'rotate(180deg)' } : {}}
  >
    <path
      d="M0 22V13.4C0 9.86667 0.8 6.93333 2.4 4.6C4.05333 2.26667 6.45333 0.666667 9.6 0L11.2 2.8C9.06667 3.33333 7.46667 4.33333 6.4 5.8C5.38667 7.26667 4.88 9 4.88 11H9.6V22H0ZM16.4 22V13.4C16.4 9.86667 17.2 6.93333 18.8 4.6C20.4533 2.26667 22.8533 0.666667 26 0L27.6 2.8C25.4667 3.33333 23.8667 4.33333 22.8 5.8C21.7867 7.26667 21.28 9 21.28 11H26V22H16.4Z"
      fill="#3d52d5"
      fillOpacity="0.35"
    />
  </svg>
);

const AvatarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill="#dce3f8" />
    <circle cx="18" cy="15" r="6" fill="#3d52d5" fillOpacity="0.5" />
    <ellipse cx="18" cy="28" rx="10" ry="6" fill="#3d52d5" fillOpacity="0.3" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="hero">
      {/* ── Background Split (Curved SVG) ── */}
      <div className="hero__bg" aria-hidden="true">
        <svg viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* White left side with the specific curve */}
          <path d="M0 0H800C800 0 850 150 820 400C790 650 850 900 850 900H0V0Z" fill="#ffffff" />
          {/* Light blue right side fills the rest (handled via CSS background on parent) */}
        </svg>
      </div>

      <div className="hero__content">
        {/* ── Left content ── */}
        <div className="hero__left">
          <h1 className="hero__heading">
            AI That Builds<br />
            Competitive Advantage
          </h1>

          <p className="hero__sub">
            Beyond the AI hype: building, scaling, and operating real-world AI for businesses.
            We design production-ready systems that integrate seamlessly with your data,
            infrastructure, and workflows.
          </p>

          <button className="hero__cta">Get Started</button>

          {/* Testimonial Cards */}
          <div className="hero__testimonials">
            {testimonials.map((t) => (
              <div key={t.id} className="hero__card">
                <QuoteIcon />
                <p className="hero__card-text">{t.quote}</p>
                <div className="hero__card-author">
                  <AvatarIcon />
                  <div>
                    <p className="hero__card-name">{t.name}</p>
                    <p className="hero__card-role">{t.role}</p>
                  </div>
                </div>
                <QuoteIcon flip />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}

