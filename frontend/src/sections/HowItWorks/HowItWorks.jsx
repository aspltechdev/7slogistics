import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MapPin,
  Package,
  Route,
  Truck,
} from "lucide-react";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Book Shipment",
    description:
      "Share your shipment details and choose the logistics solution that fits your requirement.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Pickup",
    description:
      "Our team coordinates the pickup from your location with a reliable and streamlined process.",
    icon: Package,
  },
  {
    number: "03",
    title: "Move",
    description:
      "Your shipment travels through our surface, air or rail network based on the selected service.",
    icon: Truck,
  },
  {
    number: "04",
    title: "Track",
    description:
      "Stay informed with shipment visibility and tracking throughout the transportation journey.",
    icon: Route,
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "Your shipment reaches its destination safely with a focus on dependable delivery.",
    icon: MapPin,
  },
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <div className="how-header">
          <div className="how-heading-wrap">
            <div className="how-eyebrow">
              <span></span>
              HOW IT WORKS
            </div>

            <h2>
              From pickup
              <span>to destination.</span>
            </h2>
          </div>

          <div className="how-header-copy">
            <p>
              A simple, transparent logistics journey designed to keep your
              shipment moving and your business informed at every stage.
            </p>

            <a href="#tracking" className="how-track-link">
              Track a Shipment
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* =========================================
            JOURNEY
        ========================================= */}
        <div className="how-journey">

          {/* CONNECTING LINE */}
          <div className="how-journey-line">
            <div className="how-line-base"></div>

            <div className="how-line-progress"></div>

            <div className="how-moving-package">
              <Package size={16} />
            </div>
          </div>

          {/* STEPS */}
          <div className="how-steps">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  className={`how-step ${
                    index === 0 ? "first" : ""
                  } ${index === steps.length - 1 ? "last" : ""}`}
                  key={step.number}
                >
                  {/* NUMBER */}
                  <div className="how-step-number">
                    {step.number}
                  </div>

                  {/* ICON */}
                  <div className="how-step-icon">
                    <Icon size={22} strokeWidth={1.8} />

                    <div className="how-step-check">
                      <CheckCircle2 size={11} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="how-step-content">
                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>

                  {/* ARROW */}
                  {index !== steps.length - 1 && (
                    <div className="how-mobile-arrow">
                      <ArrowRight size={15} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            BOTTOM FEATURE
        ========================================= */}
        <div className="how-bottom">

          <div className="how-bottom-left">
            <div className="how-bottom-icon">
              <CheckCircle2 size={19} />
            </div>

            <div>
              <strong>One journey. Complete visibility.</strong>

              <span>
                From the first pickup request to final delivery.
              </span>
            </div>
          </div>

          <div className="how-bottom-right">
            <span>LOGISTICS MADE SIMPLE</span>

            <div className="how-bottom-arrow">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;