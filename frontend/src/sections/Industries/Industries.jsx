import {
  ArrowUpRight,
  Building2,
  CarFront,
  Factory,
  HeartPulse,
  ShoppingBag,
  Store,
} from "lucide-react";
import "./Industries.css";

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    shortTitle: "Manufacturing",
    description:
      "Reliable movement of raw materials, components and finished goods across your supply chain.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Automotive",
    shortTitle: "Automotive",
    description:
      "Flexible logistics support for automotive parts, components and time-sensitive shipments.",
    icon: CarFront,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Retail & E-commerce",
    shortTitle: "Retail",
    description:
      "Keep products moving efficiently from distribution points to stores and customers.",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    title: "Healthcare",
    shortTitle: "Healthcare",
    description:
      "Dependable transportation for critical healthcare products and time-sensitive consignments.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "05",
    title: "Corporate",
    shortTitle: "Corporate",
    description:
      "Business logistics solutions designed around reliability, visibility and operational efficiency.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "06",
    title: "Distribution",
    shortTitle: "Distribution",
    description:
      "Connect warehouses, hubs and destinations with flexible multimodal transportation.",
    icon: Store,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
  },
];

function Industries() {
  return (
    <section className="industries-section" id="industries">
      <div className="industries-container">

        {/* =========================================
            HEADER
        ========================================= */}
        <div className="industries-header">
          <div>
            <div className="industries-eyebrow">
              <span></span>
              INDUSTRIES WE SERVE
            </div>

            <h2>
              Logistics that
              <span>understands your business.</span>
            </h2>
          </div>

          <div className="industries-header-right">
            <p>
              Different industries move differently. Our logistics solutions
              adapt to the pace, scale and requirements of your business.
            </p>

            <div className="industries-header-stat">
              <strong>06</strong>
              <span>KEY INDUSTRIES</span>
            </div>
          </div>
        </div>

        {/* =========================================
            INDUSTRY GRID
        ========================================= */}
        <div className="industries-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article className="industry-card" key={industry.number}>
                {/* IMAGE */}
                <div className="industry-image">
                  <img
                    src={industry.image}
                    alt={industry.title}
                  />

                  <div className="industry-image-overlay"></div>

                  <span className="industry-number">
                    {industry.number}
                  </span>

                  <div className="industry-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="industry-content">
                  <div className="industry-title-row">
                    <h3>{industry.title}</h3>

                    <span className="industry-arrow">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>

                  <p>{industry.description}</p>

                  <div className="industry-link">
                    <span>LOGISTICS SOLUTION</span>
                    <span className="industry-link-line"></span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}
        <div className="industries-bottom">
          <div className="industries-bottom-copy">
            <span>YOUR INDUSTRY. YOUR REQUIREMENTS.</span>
            <strong>
              Let's build the right logistics solution.
            </strong>
          </div>

          <a href="#contact" className="industries-cta">
            <span>Talk to Our Team</span>

            <span className="industries-cta-icon">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Industries;