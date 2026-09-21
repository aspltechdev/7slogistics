import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Quote,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    company: "Sundram Fasteners Limited",
    category: "AUTOMOTIVE",
    quote:
      "A dependable logistics partner that understands the importance of timely movement and consistent service.",
    initials: "SF",
  },
  {
    id: 2,
    company: "Suja Shoei",
    category: "MANUFACTURING",
    quote:
      "Their logistics support has helped us manage transportation requirements with greater confidence and visibility.",
    initials: "SS",
  },
  {
    id: 3,
    company: "L&T",
    category: "ENGINEERING",
    quote:
      "A professional logistics experience built around reliability, responsiveness and operational support.",
    initials: "L&T",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const nextTestimonial = () => {
    setActive((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const testimonial = testimonials[active];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">

        {/* =========================================
            HEADER
        ========================================= */}
        <div className="testimonials-header">
          <div>
            <div className="testimonials-eyebrow">
              <span></span>
              CLIENT TRUST
            </div>

            <h2>
              Trusted to keep
              <span>business moving.</span>
            </h2>
          </div>

          <div className="testimonials-header-copy">
            <p>
              Strong logistics partnerships are built through consistency,
              communication and the ability to deliver when it matters.
            </p>

            <div className="testimonials-nav">
              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>

              <span>
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================
            TESTIMONIAL CONTENT
        ========================================= */}
        <div className="testimonial-main">

          {/* LEFT BRAND PANEL */}
          <div className="testimonial-brand-panel">
            <div className="testimonial-quote-icon">
              <Quote size={25} />
            </div>

            <span className="testimonial-brand-label">
              LOGISTICS PARTNERSHIP
            </span>

            <strong>7 STAR</strong>

            <span>LOGISTICS</span>

            <div className="testimonial-brand-line"></div>

            <p>
              Building long-term relationships through dependable movement
              and responsive service.
            </p>
          </div>

          {/* RIGHT TESTIMONIAL */}
          <div className="testimonial-content">

            <div className="testimonial-top">
              <span>{testimonial.category}</span>

              <div className="testimonial-rating">
                <ShieldCheck size={15} />
                <span>TRUSTED PARTNER</span>
              </div>
            </div>

            <blockquote key={testimonial.id}>
              “{testimonial.quote}”
            </blockquote>

            <div className="testimonial-footer">
              <div className="testimonial-client">
                <div className="testimonial-initials">
                  {testimonial.initials}
                </div>

                <div>
                  <strong>{testimonial.company}</strong>
                  <span>Business Partner</span>
                </div>
              </div>

              <a href="#contact" className="testimonial-link">
                <span>WORK WITH US</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================
            CLIENT STRIP
        ========================================= */}
        <div className="client-strip">
          <div className="client-strip-label">
            <span>PARTNERING WITH</span>
          </div>

          {testimonials.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={`client-name ${
                index === active ? "active" : ""
              }`}
              onClick={() => setActive(index)}
            >
              {item.company}
            </button>
          ))}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}
        <div className="testimonials-bottom">
          <div>
            <span>READY TO MOVE FORWARD?</span>
            <strong>Let's move your business together.</strong>
          </div>

          <a href="#contact">
            Get Started
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;