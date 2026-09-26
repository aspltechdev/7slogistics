import {
  ArrowUpRight,
  Check,
  ClipboardCheck,
  Handshake,
  MessageSquare,
  PackageCheck,
  Settings2,
  Truck,
  Users,
} from "lucide-react";
import "./OperatingApproach.css";

import Transport from "../../assets/hero1.png";
import Distribution from "../../assets/hero3.png";
import Manpower from "../../assets/hero2.png";

const principles = [
  {
    icon: ClipboardCheck,
    title: "Reliable day-to-day execution",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication and status updates",
  },
  {
    icon: Settings2,
    title: "Flexible solutions aligned to client requirements",
  },
  {
    icon: Handshake,
    title: "Long-term, service-oriented partnerships",
  },
];

const services = [
  {
    number: "01",
    title: "Transportation",
    icon: Truck,
    image:
      Transport,
    imageAlt: "Logistics facility and transportation operations",
    items: [
      "FTL & PTL movement",
      "Primary & secondary distribution",
      "Dedicated vehicle operations",
      "Route planning & POD",
    ],
  },
  {
    number: "02",
    title: "Distribution",
    icon: PackageCheck,
    image:
      Distribution,
    imageAlt: "Warehouse and distribution operations",
    items: [
      "Regional distribution",
      "Last-mile delivery",
      "Cross-docking",
      "Reverse logistics",
    ],
  },
  {
    number: "03",
    title: "Manpower",
    icon: Users,
    image:
      Manpower,
    imageAlt: "Staff assisting a customer",
    items: [
      "Unskilled & semi-skilled",
      "Skilled operators",
      "Supervisory staff",
      "Technical & support roles",
    ],
  },
];

function OperatingApproach() {
  return (
    <section
      className="operating-section"
      id="operating-approach"
      aria-labelledby="operating-heading"
      tabIndex={0}
    >
      <div className="operating-container">
        <header className="operating-header">
          <div className="operating-heading-wrap">
            <div className="operating-eyebrow">
              <span aria-hidden="true" />
              HOW WE OPERATE
            </div>

            <h2 id="operating-heading">
              Our operating
              <span>approach.</span>
            </h2>
          </div>

          <div className="operating-header-note">
            <p>
              Reliable execution, transparent communication
              and flexible solutions aligned to your
              business requirements.
            </p>

            <div className="operating-header-stat">
              <strong>03</strong>
              <span>CORE SERVICE AREAS</span>
            </div>
          </div>
        </header>

        <ul className="operating-principles">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <li
                className="operating-principle"
                key={principle.title}
              >
                <Icon
                  size={18}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <span>{principle.title}</span>
              </li>
            );
          })}
        </ul>

        <div
          className="operating-services"
          role="region"
          aria-label="Transportation, distribution and manpower services"
          tabIndex={0}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="operating-service-card"
                key={service.number}
              >
                <div className="operating-service-image">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width="900"
                    height="600"
                  />

                  <div
                    className="operating-image-overlay"
                    aria-hidden="true"
                  />

                  <span className="operating-service-number">
                    {service.number}
                  </span>

                  <div className="operating-service-icon">
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="operating-service-content">
                  <div className="operating-service-title">
                    <h3>{service.title}</h3>

                    <a
                      href="#contact"
                      className="operating-service-link"
                      aria-label={`Enquire about ${service.title.toLowerCase()}`}
                    >
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  <ul className="operating-service-list">
                    {service.items.map((item) => (
                      <li key={item}>
                        <Check
                          size={12}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="operating-service-caption">
                    LOGISTICS SOLUTION
                    <span aria-hidden="true" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="operating-footer">
          <p>
            Long-term partnerships.
            <strong> Service at every step.</strong>
          </p>

          <a href="#contact">
            Discuss your requirements
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
}

export default OperatingApproach;