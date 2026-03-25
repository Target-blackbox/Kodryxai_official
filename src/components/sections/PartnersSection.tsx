import './PartnersSection.css';
import partner1 from '../../assets/image 3.png';
import partner2 from '../../assets/image 4.png';
import partner3 from '../../assets/image 5.png';
import partner4 from '../../assets/image 6.png';
import partner5 from '../../assets/image 7.png';
import partner6 from '../../assets/image 8.png';

const partners = [
  { name: 'Partner 1', logo: partner1 },
  { name: 'Partner 2', logo: partner2 },
  { name: 'Partner 3', logo: partner3 },
  { name: 'Partner 4', logo: partner4 },
  { name: 'Partner 5', logo: partner5 },
  { name: 'Partner 6', logo: partner6 },
];

export default function PartnersSection() {
  // Duplicate partners for seamless scroll
  const allPartners = [...partners, ...partners];

  return (
    <section className="partners">
      <div className="partners__scroll-container">
        <div className="partners__track">
          {allPartners.map((p, index) => (
            <div key={index} className="partners__item">
              <img src={p.logo} alt={p.name} className="partners__logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
