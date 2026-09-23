import { useEffect, useRef } from "react";
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
  const journeyRef = useRef(null);
  const packageRef = useRef(null);
  const pathRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const journey = journeyRef.current;

    const items = [...journey.querySelectorAll(".how-step")];
    const icons = items.map((item) =>
      item.querySelector(".how-step-icon")
    );

    let points = [];
    let frame;
    let start;
    let lastReached = -1;

    // Milliseconds spent travelling and pausing at each circle.
    const travelTime = 1600;
    const stopTime = 650;

    const cycleTime =
      items.length * stopTime +
      (items.length - 1) * travelTime;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    function createPath(pathPoints) {
      return pathPoints
        .map(
          (point, index) =>
            `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
        )
        .join(" ");
    }

    function measure() {
      const journeyBox = journey.getBoundingClientRect();

      points = icons.map((icon) => {
        const iconBox = icon.getBoundingClientRect();

        return {
          x:
            iconBox.left -
            journeyBox.left +
            iconBox.width / 2,
          y:
            iconBox.top -
            journeyBox.top +
            iconBox.height / 2,
        };
      });

      pathRef.current.setAttribute("d", createPath(points));
    }

    function animate(now) {
      if (start === undefined) {
        start = now;
      }

      // Modulo automatically restarts the journey after the final pause.
      const elapsed = (now - start) % cycleTime;

      const segment = Math.min(
        Math.floor(elapsed / (stopTime + travelTime)),
        items.length - 1
      );

      const localTime =
        elapsed - segment * (stopTime + travelTime);

      const fraction =
        segment === items.length - 1
          ? 0
          : Math.max(
              0,
              Math.min(
                1,
                (localTime - stopTime) / travelTime
              )
            );

      const reached = motionPreference.matches
        ? items.length - 1
        : segment;

      if (reached !== lastReached) {
        items.forEach((item, index) => {
          item.classList.toggle(
            "is-reached",
            index <= reached
          );
        });

        lastReached = reached;
      }

      if (points.length > 0) {
        const from = points[segment];
        const to =
          points[Math.min(segment + 1, points.length - 1)];

        const x = from.x + (to.x - from.x) * fraction;
        const y = from.y + (to.y - from.y) * fraction;

        packageRef.current.style.left = `${x}px`;
        packageRef.current.style.top = `${y}px`;

        packageRef.current.style.visibility =
          motionPreference.matches ? "hidden" : "visible";

        const passedPoints = motionPreference.matches
          ? points
          : [
              ...points.slice(0, segment + 1),
              { x, y },
            ];

        progressRef.current.setAttribute(
          "d",
          createPath(passedPoints)
        );
      }

      frame = requestAnimationFrame(animate);
    }

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(journey);
    icons.forEach((icon) => observer.observe(icon));

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="how-section" id="how-it-works">
      <div className="how-container">
        <div className="how-header">
          <div className="how-heading-wrap">
            <div className="how-eyebrow">
              <span />
              HOW IT WORKS
            </div>

            <h2>
              From pickup
              <span>to destination.</span>
            </h2>
          </div>

          <div className="how-header-copy">
            <p>
              A simple, transparent logistics journey designed
              to keep your shipment moving and your business
              informed at every stage.
            </p>

            <a href="#tracking" className="how-track-link">
              Track a Shipment
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="how-journey" ref={journeyRef}>
          <svg
            className="how-route-overlay"
            aria-hidden="true"
          >
            <path
              ref={pathRef}
              className="how-route-base"
            />

            <path
              ref={progressRef}
              className="how-route-complete"
            />
          </svg>

          <div
            className="how-moving-package"
            ref={packageRef}
            aria-hidden="true"
          >
            <Package size={16} />
          </div>

          <div className="how-steps">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  className={`how-step ${
                    index === 0 ? "first" : ""
                  } ${
                    index === steps.length - 1 ? "last" : ""
                  }`}
                  key={step.number}
                >
                  <div className="how-step-number">
                    {step.number}
                  </div>

                  <div className="how-step-icon">
                    <Icon size={22} strokeWidth={1.8} />

                    <div className="how-step-check">
                      <CheckCircle2 size={11} />
                    </div>
                  </div>

                  <div className="how-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="how-bottom">
          <div className="how-bottom-left">
            <div className="how-bottom-icon">
              <CheckCircle2 size={19} />
            </div>

            <div>
              <strong>
                One journey. Complete visibility.
              </strong>

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