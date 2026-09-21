// // import {
// //   ArrowRight,
// //   ArrowUpRight,
// //   CheckCircle2,
// //   MapPin,
// //   Package,
// //   Truck,
// // } from "lucide-react";

// // import "./Hero.css";

// // function Hero() {
// //   return (
// //     <section className="hero-section" id="home">

// //       {/* Background */}
// //       <div className="hero-background">
// //         <div className="hero-grid"></div>
// //         <div className="hero-glow hero-glow-one"></div>
// //         <div className="hero-glow hero-glow-two"></div>
// //       </div>

// //       <div className="hero-container">

// //         {/* LEFT */}
// //         <div className="hero-content">

// //           <div className="hero-eyebrow">
// //             <span className="eyebrow-dot"></span>
// //             NextGen Supply Chain Solutions
// //           </div>

// //           <h1>
// //             Logistics That
// //             <span> Moves Business.</span>
// //           </h1>

// //           <p className="hero-description">
// //             Reliable logistics solutions built for speed, visibility and
// //             dependable delivery across India.
// //           </p>

// //           <div className="hero-actions">

// //             <a href="#contact" className="hero-primary-btn">
// //               Get a Quote
// //               <ArrowUpRight size={18} />
// //             </a>

// //             <a href="#tracking" className="hero-secondary-btn">
// //               Track Shipment
// //               <ArrowRight size={17} />
// //             </a>

// //           </div>

// //           {/* Trust points */}
// //           <div className="hero-trust">

// //             <div className="trust-item">
// //               <CheckCircle2 size={17} />
// //               <span>Reliable Delivery</span>
// //             </div>

// //             <div className="trust-item">
// //               <CheckCircle2 size={17} />
// //               <span>Real-Time Tracking</span>
// //             </div>

// //             <div className="trust-item">
// //               <CheckCircle2 size={17} />
// //               <span>Pan India Network</span>
// //             </div>

// //           </div>

// //         </div>

// //         {/* RIGHT VISUAL */}
// //         <div className="hero-visual">

// //           <div className="hero-image-wrapper">

// //             <img
// //               src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85"
// //               alt="Logistics truck and warehouse"
// //             />

// //             <div className="hero-image-overlay"></div>

// //             {/* Floating tracking card */}
// //             <div className="tracking-card">

// //               <div className="tracking-card-header">
// //                 <div>
// //                   <span>SHIPMENT STATUS</span>
// //                   <strong>On the move</strong>
// //                 </div>

// //                 <div className="tracking-icon">
// //                   <Truck size={20} />
// //                 </div>
// //               </div>

// //               <div className="tracking-number">
// //                 <span>Tracking ID</span>
// //                 <strong>7SLX-28491</strong>
// //               </div>

// //               <div className="tracking-route">

// //                 <div className="route-point active">
// //                   <div className="route-icon">
// //                     <Package size={13} />
// //                   </div>

// //                   <div>
// //                     <strong>Picked Up</strong>
// //                     <span>Chennai</span>
// //                   </div>
// //                 </div>

// //                 <div className="route-line">
// //                   <span></span>
// //                 </div>

// //                 <div className="route-point">
// //                   <div className="route-icon">
// //                     <MapPin size={13} />
// //                   </div>

// //                   <div>
// //                     <strong>In Transit</strong>
// //                     <span>Destination</span>
// //                   </div>
// //                 </div>

// //               </div>

// //               <div className="tracking-footer">
// //                 <span>Estimated delivery</span>
// //                 <strong>Today</strong>
// //               </div>

// //             </div>

// //             {/* Floating location badge */}
// //             <div className="location-badge">
// //               <div className="location-badge-icon">
// //                 <MapPin size={16} />
// //               </div>

// //               <div>
// //                 <span>NETWORK</span>
// //                 <strong>Pan India</strong>
// //               </div>
// //             </div>

// //           </div>

// //         </div>

// //       </div>

// //       {/* Bottom scroll */}
// //       <div className="hero-scroll">
// //         <span>SCROLL TO EXPLORE</span>
// //         <div className="scroll-line"></div>
// //       </div>

// //     </section>
// //   );
// // }

// // export default Hero;


// import {
//   ArrowRight,
//   ArrowUpRight,
//   CheckCircle2,
//   Clock3,
//   MapPin,
//   Package,
//   Plane,
//   TrainFront,
//   Truck,
// } from "lucide-react";
// import { useEffect, useState } from "react";

// import "./Hero.css";

// const slides = [
//   {
//     id: 1,
//     type: "SURFACE EXPRESS",
//     eyebrow: "01 / SURFACE NETWORK",
//     title: "Move More.",
//     highlight: "Deliver Further.",
//     description:
//       "Reliable surface logistics with multi-location pickup, real-time GPS tracking and dependable delivery across India.",
//     icon: Truck,
//     image:
//       "https://images.unsplash.com/photo-1586191582151-f73872dfd183?auto=format&fit=crop&w=1800&q=90",
//     points: [
//       "Multi-location pickup & delivery",
//       "Real-time vehicle tracking",
//       "24×7 customer support",
//     ],
//     tag: "ROAD LOGISTICS",
//     routeFrom: "Pickup",
//     routeTo: "Destination",
//   },
//   {
//     id: 2,
//     type: "DOMESTIC AIR EXPRESSWAY",
//     eyebrow: "02 / AIR NETWORK",
//     title: "Speed Meets",
//     highlight: "Reach.",
//     description:
//       "Time-sensitive domestic delivery connecting major metros within 24 hours and mini metros and A-class cities within 48 hours.",
//     icon: Plane,
//     image:
//       "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=90",
//     points: [
//       "Door-to-door & airport services",
//       "Major metros within 24 hours",
//       "Air + surface multimodal service",
//     ],
//     tag: "AIR EXPRESS",
//     routeFrom: "Origin",
//     routeTo: "Destination",
//   },
//   {
//     id: 3,
//     type: "RAIL EXPRESS",
//     eyebrow: "03 / RAIL NETWORK",
//     title: "Smart Freight.",
//     highlight: "Better Reach.",
//     description:
//       "Cost-effective rail logistics designed for bulk shipments with flexible door-to-door and station-to-station options.",
//     icon: TrainFront,
//     image:
//       "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1800&q=90",
//     points: [
//       "Efficient bulk shipment handling",
//       "Door-to-door & station-to-station",
//       "Multimodal transportation",
//     ],
//     tag: "RAIL LOGISTICS",
//     routeFrom: "Origin",
//     routeTo: "Destination",
//   },
// ];

// function Hero() {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const slide = slides[activeSlide];
//   const Icon = slide.icon;

//   useEffect(() => {
//     if (isPaused) return;

//     const timer = setInterval(() => {
//       setActiveSlide((current) =>
//         current === slides.length - 1 ? 0 : current + 1
//       );
//     }, 6500);

//     return () => clearInterval(timer);
//   }, [isPaused]);

//   const goToSlide = (index) => {
//     setActiveSlide(index);
//   };

//   return (
//     <section
//       className="hero-section"
//       id="home"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       {/* =========================
//           BACKGROUND SLIDES
//       ========================= */}

//       <div className="hero-slides">
//         {slides.map((item, index) => (
//           <div
//             key={item.id}
//             className={`hero-slide-bg ${
//               index === activeSlide ? "active" : ""
//             }`}
//             style={{
//               backgroundImage: `url(${item.image})`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="hero-dark-overlay"></div>

//       <div className="hero-gradient"></div>

//       {/* =========================
//           CONTENT
//       ========================= */}

//       <div className="hero-container">

//         {/* LEFT CONTENT */}

//         <div className="hero-content">

//           <div className="hero-eyebrow">
//             <span className="hero-live-dot"></span>

//             <span>{slide.eyebrow}</span>

//             <span className="hero-eyebrow-line"></span>

//             <span>7 STAR LOGISTICS</span>
//           </div>

//           <div className="hero-counter">
//             0{slide.id}
//             <span>/</span>
//             03
//           </div>

//           <h1 key={`title-${activeSlide}`}>
//             {slide.title}
//             <span>{slide.highlight}</span>
//           </h1>

//           <p
//             className="hero-description"
//             key={`description-${activeSlide}`}
//           >
//             {slide.description}
//           </p>

//           {/* ACTIONS */}

//           <div className="hero-actions">

//             <a
//               href="#contact"
//               className="hero-primary-btn"
//             >
//               Get a Quote

//               <span>
//                 <ArrowUpRight size={17} />
//               </span>
//             </a>

//             <a
//               href="#tracking"
//               className="hero-secondary-btn"
//             >
//               Track Shipment

//               <ArrowRight size={17} />
//             </a>

//           </div>

//           {/* SERVICE POINTS */}

//           <div className="hero-points">

//             {slide.points.map((point) => (
//               <div
//                 className="hero-point"
//                 key={point}
//               >
//                 <CheckCircle2 size={15} />
//                 <span>{point}</span>
//               </div>
//             ))}

//           </div>

//         </div>

//         {/* RIGHT SIDE */}

//         <div className="hero-visual">

//           {/* Floating service card */}

//           <div className="hero-service-card">

//             <div className="hero-service-card-top">

//               <div className="hero-service-icon">
//                 <Icon size={21} />
//               </div>

//               <div>
//                 <span>SERVICE MODE</span>
//                 <strong>{slide.type}</strong>
//               </div>

//               <div className="hero-service-status">
//                 <span></span>
//                 ACTIVE
//               </div>

//             </div>

//             {/* Route */}

//             <div className="hero-route">

//               <div className="hero-route-point">

//                 <div className="route-circle">
//                   <MapPin size={13} />
//                 </div>

//                 <div>
//                   <span>FROM</span>
//                   <strong>{slide.routeFrom}</strong>
//                 </div>

//               </div>

//               <div className="hero-route-line">

//                 <span></span>

//                 <div className="route-moving-dot"></div>

//               </div>

//               <div className="hero-route-point">

//                 <div className="route-circle destination">
//                   <MapPin size={13} />
//                 </div>

//                 <div>
//                   <span>TO</span>
//                   <strong>{slide.routeTo}</strong>
//                 </div>

//               </div>

//             </div>

//             {/* Bottom information */}

//             <div className="hero-card-bottom">

//               <div>
//                 <Clock3 size={15} />
//                 <span>Reliable TAT</span>
//               </div>

//               <strong>{slide.tag}</strong>

//             </div>

//           </div>

//           {/* Floating package */}

//           <div className="hero-package-card">

//             <div className="hero-package-icon">
//               <Package size={18} />
//             </div>

//             <div>
//               <span>SHIPMENT</span>
//               <strong>Moving safely</strong>
//             </div>

//           </div>

//         </div>

//       </div>

//       {/* =========================
//           SLIDE NAVIGATION
//       ========================= */}

//       <div className="hero-navigation">

//         <div className="hero-slide-tabs">

//           {slides.map((item, index) => {
//             const SlideIcon = item.icon;

//             return (
//               <button
//                 key={item.id}
//                 type="button"
//                 className={`hero-slide-tab ${
//                   index === activeSlide ? "active" : ""
//                 }`}
//                 onClick={() => goToSlide(index)}
//               >

//                 <span className="slide-tab-number">
//                   0{item.id}
//                 </span>

//                 <SlideIcon size={16} />

//                 <span className="slide-tab-name">
//                   {item.type}
//                 </span>

//               </button>
//             );
//           })}

//         </div>

//         <div className="hero-progress">

//           <div className="hero-progress-track">
//             <span
//               key={activeSlide}
//               className="hero-progress-bar"
//             ></span>
//           </div>

//           <span>
//             {String(activeSlide + 1).padStart(2, "0")} / 03
//           </span>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;





import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  Plane,
  TrainFront,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import hero1 from "../../assets/hero1.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";

import "./Hero.css";

const slides = [
  {
    id: 1,
    type: "SURFACE EXPRESS",
    eyebrow: "01 / SURFACE NETWORK",
    title: "Move More.",
    highlight: "Deliver Further.",
    description:
      "Reliable surface logistics with multi-location pickup, real-time GPS tracking and dependable delivery across India.",
    image:
     hero1,
    icon: Truck,
    points: [
      "Multi-location pickup & delivery",
      "Real-time vehicle tracking",
      "24×7 customer support",
    ],
    tag: "ROAD LOGISTICS",
    routeFrom: "Pickup",
    routeTo: "Destination",
  },

  {
    id: 2,
    type: "DOMESTIC AIR EXPRESSWAY",
    eyebrow: "02 / AIR NETWORK",
    title: "Speed Meets",
    highlight: "Reach.",
    description:
      "Time-sensitive domestic delivery connecting major metros within 24 hours and mini metros and A-class cities within 48 hours.",
    image:
     hero2,
    icon: Plane,
    points: [
      "Door-to-door & airport services",
      "Major metros within 24 hours",
      "Air + surface multimodal service",
    ],
    tag: "AIR EXPRESS",
    routeFrom: "Origin",
    routeTo: "Destination",
  },

  {
    id: 3,
    type: "RAIL EXPRESS",
    eyebrow: "03 / RAIL NETWORK",
    title: "Smart Freight.",
    highlight: "Better Reach.",
    description:
      "Cost-effective rail logistics designed for bulk shipments with flexible door-to-door and station-to-station options.",
    image:
      hero3,
    icon: TrainFront,
    points: [
      "Efficient bulk shipment handling",
      "Door-to-door & station-to-station",
      "Multimodal transportation",
    ],
    tag: "RAIL LOGISTICS",
    routeFrom: "Origin",
    routeTo: "Destination",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
   * AUTO SLIDE
   * Changes slide every 6.5 seconds
   */
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((current) =>
        current === slides.length - 1 ? 0 : current + 1
      );
    }, 6500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const slide = slides[activeSlide];
  const Icon = slide.icon;

  return (
    <section
      className="hero-section"
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* =========================================
          BACKGROUND SLIDES
      ========================================= */}
      <div className="hero-slides">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`hero-slide-bg ${
              index === activeSlide ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="hero-dark-overlay"></div>

      {/* GRADIENT OVERLAY */}
      <div className="hero-gradient"></div>

      {/* =========================================
          MAIN HERO CONTAINER
      ========================================= */}
      <div className="hero-container">
        {/* =========================================
            LEFT CONTENT
        ========================================= */}
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-live-dot"></span>

            <span>{slide.eyebrow}</span>

            <span className="hero-eyebrow-line"></span>

            <span>7 STAR LOGISTICS</span>
          </div>

          {/* Slide Counter */}
          <div className="hero-counter">
            0{slide.id}
            <span>/</span>
            03
          </div>

          {/* Main Heading */}
          <h1 key={`title-${activeSlide}`}>
            {slide.title}

            <span>{slide.highlight}</span>
          </h1>

          {/* Description */}
          <p
            className="hero-description"
            key={`description-${activeSlide}`}
          >
            {slide.description}
          </p>

          {/* =========================================
              HERO BUTTONS
          ========================================= */}
          <div className="hero-actions">
            <a href="#contact" className="hero-primary-btn">
              <span>Get a Quote</span>

              <span className="hero-primary-icon">
                <ArrowUpRight size={17} />
              </span>
            </a>

            <a href="#tracking" className="hero-secondary-btn">
              <span>Track Shipment</span>

              <ArrowRight size={17} />
            </a>
          </div>

          {/* =========================================
              SERVICE POINTS
          ========================================= */}
          <div className="hero-points">
            {slide.points.map((point) => (
              <div className="hero-point" key={point}>
                <CheckCircle2 size={15} />

                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            RIGHT VISUAL
        ========================================= */}
        <div className="hero-visual">
          {/* SERVICE CARD */}
          <div className="hero-service-card">
            {/* CARD TOP */}
            <div className="hero-service-card-top">
              <div className="hero-service-icon">
                <Icon size={21} strokeWidth={2} />
              </div>

              <div className="hero-service-info">
                <span>SERVICE MODE</span>

                <strong>{slide.type}</strong>
              </div>

              <div className="hero-service-status">
                <span></span>
                ACTIVE
              </div>
            </div>

            {/* =========================================
                ROUTE
            ========================================= */}
            <div className="hero-route">
              {/* FROM */}
              <div className="hero-route-point">
                <div className="route-circle">
                  <MapPin size={13} strokeWidth={2} />
                </div>

                <div className="route-point-content">
                  <span>FROM</span>

                  <strong>{slide.routeFrom}</strong>
                </div>
              </div>

              {/* =========================================
                  ANIMATED ROUTE LINE
              ========================================= */}
              <div className="hero-route-line">
                {/* DOTTED TRACK */}
                <div className="route-track-line"></div>

                {/* MOVING VEHICLE */}
                <div
                  className="route-moving-vehicle"
                  key={`vehicle-${activeSlide}`}
                >
                  <Icon size={18} strokeWidth={2.2} />
                </div>
              </div>

              {/* TO */}
              <div className="hero-route-point">
                <div className="route-circle destination">
                  <MapPin size={13} strokeWidth={2} />
                </div>

                <div className="route-point-content">
                  <span>TO</span>

                  <strong>{slide.routeTo}</strong>
                </div>
              </div>
            </div>

            {/* =========================================
                CARD FOOTER
            ========================================= */}
            <div className="hero-card-bottom">
              <div className="hero-card-reliable">
                <Clock3 size={15} />

                <span>Reliable TAT</span>
              </div>

              <strong>{slide.tag}</strong>
            </div>
          </div>

          {/* =========================================
              FLOATING SHIPMENT CARD
          ========================================= */}
          <div className="hero-package-card">
            <div className="hero-package-icon">
              <Package size={18} />
            </div>

            <div className="hero-package-content">
              <span>SHIPMENT</span>

              <strong>Moving safely</strong>
            </div>

            <div className="hero-package-live"></div>
          </div>

          {/* DECORATIVE ELEMENT */}
          <div className="hero-visual-glow"></div>
        </div>
      </div>

      {/* =========================================
          BOTTOM NAVIGATION
      ========================================= */}
      <div className="hero-navigation">
        {/* SLIDE TABS */}
        <div className="hero-slide-tabs">
          {slides.map((item, index) => {
            const SlideIcon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                className={`hero-slide-tab ${
                  index === activeSlide ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              >
                <span className="slide-tab-number">
                  0{item.id}
                </span>

                <SlideIcon size={16} />

                <span className="slide-tab-name">
                  {item.type}
                </span>
              </button>
            );
          })}
        </div>

        {/* PROGRESS */}
        <div className="hero-progress">
          <div className="hero-progress-track">
            <span
              key={`progress-${activeSlide}`}
              className="hero-progress-bar"
            ></span>
          </div>

          <span>
            {String(activeSlide + 1).padStart(2, "0")} / 03
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;