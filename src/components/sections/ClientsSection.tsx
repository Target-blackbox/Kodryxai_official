import './ClientsSection.css';
import partner1 from '../../assets/parter_1.png';
import partner2 from '../../assets/partner_2.png';
import partner3 from '../../assets/partner_3.png';
import partner4 from '../../assets/partner_4.png';
import partner5 from '../../assets/partner_5.png';

const clients = [
  { name: 'Partner 1', logo: partner1 },
  { name: 'Partner 2', logo: partner2 },
  { name: 'Partner 3', logo: partner3 },
  { name: 'Partner 4', logo: partner4 },
  { name: 'Partner 5', logo: partner5 },
];

export default function ClientsSection() {
  return (
    <section className="clients">
      <div className="clients__container">
        {clients.map((client, index) => (
          <div key={index} className="clients__item">
            <img src={client.logo} alt={client.name} className="clients__item-img" />
          </div>
        ))}
      </div>
    </section>
  );
}

