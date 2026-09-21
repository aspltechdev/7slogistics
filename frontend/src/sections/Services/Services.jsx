import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Plane,
  TrainFront,
  Truck,
} from "lucide-react";

import "./Services.css";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";

const services = [
  {
    number: "01",
    type: "SURFACE NETWORK",
    title: "Surface",
    highlight: "Express",
    description:
      "Reliable road transportation with multi-location pickup, real-time tracking and dependable delivery across India.",

    icon: Truck,

    features: [
      "Multi-location pickup & delivery",
      "Real-time GPS / vehicle tracking",
      "24×7 customer support",
    ],

    meta: "ROAD LOGISTICS",

    image:
      hero1,
  },

  {
    number: "02",
    type: "AIR NETWORK",
    title: "Domestic Air",
    highlight: "Expressway",
    description:
      hero2,

    icon: Plane,

    features: [
      "Door-to-door & airport services",
      "Major metros within 24 hours",
      "Air + surface multimodal service",
    ],

    meta: "AIR EXPRESS",

    image:
      hero3,
  },

  {
    number: "03",
    type: "RAIL NETWORK",
    title: "Rail",
    highlight: "Express",
    description:
      "Cost-effective rail transportation for larger shipments with flexible door-to-door and station-to-station options.",

    icon: TrainFront,

    features: [
      "Efficient bulk shipment handling",
      "Door-to-door & station-to-station",
      "Multimodal transportation",
    ],

    meta: "RAIL LOGISTICS",

    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=85",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* HEADER */}
        <div className="services-header">

          <div className="services-heading">
            <div className="services-eyebrow">
              <span className="services-eyebrow-line"></span>
              OUR SERVICES
            </div>

            <h2>
              Logistics built for
              <span>every mile.</span>
            </h2>
          </div>

          <div className="services-intro">
            <p>
              From road to air and rail, our integrated logistics network
              gives businesses the flexibility to move shipments efficiently
              across India.
            </p>

            <a href="#contact" className="services-header-link">
              <span>Discuss your requirement</span>
              <ArrowUpRight />
            </a>
          </div>

        </div>


        {/* SERVICES */}
        <div className="services-grid">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>

                {/* IMAGE */}
                <div className="service-image-wrapper">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />

                  <div className="service-image-overlay"></div>

                  <div className="service-number">
                    {service.number}
                  </div>

                  <div className="service-image-label">
                    <span className="service-status-dot"></span>
                    {service.meta}
                  </div>

                </div>


                {/* CONTENT */}
                <div className="service-content">

                  <div className="service-top">

                    <div className="service-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span className="service-type">
                      {service.type}
                    </span>

                  </div>


                  <h3>
                    {service.title}
                    <span>{service.highlight}</span>
                  </h3>


                  <p className="service-description">
                    {service.description}
                  </p>


                  <div className="service-divider"></div>


                  <ul className="service-features">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span className="service-check">
                          <span></span>
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>


                  <a
                    href="#contact"
                    className="service-link"
                  >
                    <span>Explore service</span>

                    <span className="service-link-icon">
                      <ArrowUpRight size={17} />
                    </span>
                  </a>

                </div>

              </article>
            );
          })}

        </div>


        {/* BOTTOM STRIP */}
        <div className="services-bottom">

          <div className="services-bottom-item">
            <div className="services-bottom-icon">
              <Clock3 size={18} />
            </div>

            <div>
              <strong>24×7 Support</strong>
              <span>Always available when you need us.</span>
            </div>
          </div>


          <div className="services-bottom-line"></div>


          <div className="services-bottom-item">
            <div className="services-bottom-icon">
              <MapPin size={18} />
            </div>

            <div>
              <strong>Pan-India Reach</strong>
              <span>Connected across major logistics hubs.</span>
            </div>
          </div>


          <div className="services-bottom-line"></div>


          <div className="services-bottom-item">
            <div className="services-bottom-icon">
              <Truck size={18} />
            </div>

            <div>
              <strong>Real-Time Tracking</strong>
              <span>Visibility from pickup to delivery.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;