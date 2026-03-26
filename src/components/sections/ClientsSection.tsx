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

import { Skeleton } from '../ui/skeleton';

export default function ClientsSection({ isLoading }: { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <section className="clients">
        <div className="clients__scroll-container">
          <div className="clients__track">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="clients__item">
                <Skeleton className="h-8 w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Duplicate for seamless infinite scroll
  const allClients = [...clients, ...clients];

  return (
    <section className="clients">
      <div className="clients__scroll-container">
        <div className="clients__track">
          {allClients.map((client, index) => (
            <div key={index} className="clients__item">
              <img src={client.logo} alt={client.name} className="clients__item-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

