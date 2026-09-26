import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import "./About.css";
import about1 from "../../assets/about.png";


const highlights = [
  {
    icon: Globe2,
    title: "Pan-India Reach",
    text: "A connected logistics network built to move shipments across major cities and regions.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Handling",
    text: "Every shipment is managed with a strong focus on safety, visibility and dependable delivery.",
  },
  {
    icon: Truck,
    title: "Multiple Modes",
    text: "Surface, air and rail solutions designed around different shipment requirements.",
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* =========================================
            LEFT VISUAL
        ========================================= */}
        <div className="about-visual">

          <div className="about-image-wrapper">
            <img
              src={about1}
              alt="7 Star Logistics warehouse and transportation"
              className="about-image"
            />

            <div className="about-image-overlay"></div>

            {/* IMAGE LABEL */}
            <div className="about-image-label">
              <span className="about-image-label-dot"></span>
              <span>LOGISTICS IN MOTION</span>
            </div>
          </div>

          {/* FLOATING NETWORK CARD */}
          <div className="about-network-card">
            <div className="about-network-icon">
              <MapPin size={18} />
            </div>

            <div className="about-network-content">
              <span>NETWORK COVERAGE</span>
              <strong>Across India</strong>
            </div>

            <div className="about-network-line"></div>
          </div>

          {/* EXPERIENCE CARD */}
          <div className="about-experience-card">
            <strong>24×7</strong>
            <span>Support</span>
          </div>

          {/* DECORATIVE DOTS */}
          <div className="about-dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* =========================================
            RIGHT CONTENT
        ========================================= */}
        <div className="about-content">

          <div className="about-eyebrow">
            <span></span>
            ABOUT 7 STAR LOGISTICS
          </div>

          <h2>
            Moving businesses
            <span>towards what’s next.</span>
          </h2>

          <p className="about-intro">
            7 STAR LOGISTICS provides integrated logistics and supply-chain support for manufacturers, 
            distributors and corporate customers. The company’s service scope covers warehouse operations, 
            transportation, distribution, dispatch coordination and workforce support.
          </p>

          <p className="about-description">
            Our company was founded with the mission of providing reliable, 
            transparent, and cost-effective logistics solutions to support daily operations 
            and long-term business growth. With a dedicated operations team, organised processes, 
            and a customer-first approach, we ensure timely deliveries and smooth coordination at every level.
          </p>

          {/* HIGHLIGHTS */}
          <div className="about-highlights">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-highlight" key={item.title}>
                  <div className="about-highlight-icon">
                    <Icon size={18} />
                  </div>

                  <div className="about-highlight-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="about-actions">
            <a href="#services" className="about-primary-btn">
              <span>Explore Our Services</span>

              <span className="about-primary-icon">
                <ArrowUpRight size={16} />
              </span>
            </a>

            <div className="about-trust">
              <div className="about-trust-icon">
                <CheckCircle2 size={16} />
              </div>

              <div>
                <strong>Built for dependable delivery</strong>
                <span>From pickup to destination</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM STATEMENT
      ========================================= */}
      <div className="about-bottom">
        <div className="about-bottom-line"></div>

        <div className="about-bottom-content">
          <Sparkles size={17} />

          <span>
            Smarter logistics. Better visibility. Stronger connections.
          </span>
        </div>

        <div className="about-bottom-line"></div>
      </div>
    </section>
  );
}

export default About;