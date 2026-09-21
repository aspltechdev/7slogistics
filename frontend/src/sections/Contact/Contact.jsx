// // // import {
// // //   ArrowUpRight,
// // //   CheckCircle2,
// // //   Clock3,
// // //   Mail,
// // //   MapPin,
// // //   Phone,
// // //   Send,
// // //   Truck,
// // // } from "lucide-react";
// // // import "./Contact.css";

// // // const services = [
// // //   "Surface Express",
// // //   "Domestic Air Expressway",
// // //   "Rail Express",
// // //   "Not Sure / Need Guidance",
// // // ];

// // // function Contact() {
// // //   return (
// // //     <section className="contact-section" id="contact">
// // //       <div className="contact-container">

// // //         {/* =========================================
// // //             HEADER
// // //         ========================================= */}
// // //         <div className="contact-header">
// // //           <div>
// // //             <div className="contact-eyebrow">
// // //               <span></span>
// // //               GET IN TOUCH
// // //             </div>

// // //             <h2>
// // //               Let's move your
// // //               <span>business forward.</span>
// // //             </h2>
// // //           </div>

// // //           <p>
// // //             Tell us what you need to move. Our team will help you find the
// // //             right logistics solution for your shipment.
// // //           </p>
// // //         </div>

// // //         {/* =========================================
// // //             MAIN CONTACT CARD
// // //         ========================================= */}
// // //         <div className="contact-main">

// // //           {/* =========================================
// // //               LEFT FORM
// // //           ========================================= */}
// // //           <div className="contact-form-area">
// // //             <div className="contact-form-heading">
// // //               <div className="contact-form-icon">
// // //                 <Send size={18} />
// // //               </div>

// // //               <div>
// // //                 <span>REQUEST A QUOTE</span>
// // //                 <strong>Tell us about your shipment</strong>
// // //               </div>
// // //             </div>

// // //             <form className="contact-form">

// // //               {/* NAME + PHONE */}
// // //               <div className="contact-form-row">
// // //                 <div className="contact-field">
// // //                   <label htmlFor="contact-name">
// // //                     Full Name
// // //                   </label>

// // //                   <input
// // //                     id="contact-name"
// // //                     type="text"
// // //                     placeholder="Your name"
// // //                   />
// // //                 </div>

// // //                 <div className="contact-field">
// // //                   <label htmlFor="contact-phone">
// // //                     Phone Number
// // //                   </label>

// // //                   <input
// // //                     id="contact-phone"
// // //                     type="tel"
// // //                     placeholder="+91"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               {/* EMAIL + COMPANY */}
// // //               <div className="contact-form-row">
// // //                 <div className="contact-field">
// // //                   <label htmlFor="contact-email">
// // //                     Email Address
// // //                   </label>

// // //                   <input
// // //                     id="contact-email"
// // //                     type="email"
// // //                     placeholder="you@company.com"
// // //                   />
// // //                 </div>

// // //                 <div className="contact-field">
// // //                   <label htmlFor="contact-company">
// // //                     Company
// // //                   </label>

// // //                   <input
// // //                     id="contact-company"
// // //                     type="text"
// // //                     placeholder="Company name"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               {/* SERVICE */}
// // //               <div className="contact-field">
// // //                 <label htmlFor="contact-service">
// // //                   Service Required
// // //                 </label>

// // //                 <select id="contact-service" defaultValue="">
// // //                   <option value="" disabled>
// // //                     Select a service
// // //                   </option>

// // //                   {services.map((service) => (
// // //                     <option key={service} value={service}>
// // //                       {service}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               </div>

// // //               {/* MESSAGE */}
// // //               <div className="contact-field">
// // //                 <label htmlFor="contact-message">
// // //                   Shipment Details
// // //                 </label>

// // //                 <textarea
// // //                   id="contact-message"
// // //                   rows="4"
// // //                   placeholder="Tell us about your shipment, pickup location, destination, quantity or any other requirements..."
// // //                 ></textarea>
// // //               </div>

// // //               {/* SUBMIT */}
// // //               <button
// // //                 type="submit"
// // //                 className="contact-submit"
// // //               >
// // //                 <span>Request a Quote</span>

// // //                 <span className="contact-submit-icon">
// // //                   <ArrowUpRight size={17} />
// // //                 </span>
// // //               </button>

// // //               <p className="contact-form-note">
// // //                 By submitting this form, you agree to be contacted by our
// // //                 logistics team regarding your enquiry.
// // //               </p>
// // //             </form>
// // //           </div>

// // //           {/* =========================================
// // //               RIGHT INFORMATION
// // //           ========================================= */}
// // //           <div className="contact-info">

// // //             {/* VISUAL */}
// // //             <div className="contact-map">

// // //               <div className="contact-map-grid"></div>

// // //               <div className="contact-route route-one"></div>
// // //               <div className="contact-route route-two"></div>
// // //               <div className="contact-route route-three"></div>

// // //               {/* PONDICHERRY */}
// // //               <div className="contact-map-point point-one">
// // //                 <span></span>

// // //                 <div>
// // //                   <strong>Puducherry</strong>
// // //                   <small>HEAD OFFICE</small>
// // //                 </div>
// // //               </div>

// // //               {/* BENGALURU */}
// // //               <div className="contact-map-point point-two">
// // //                 <span></span>

// // //                 <div>
// // //                   <strong>Bengaluru</strong>
// // //                   <small>NETWORK</small>
// // //                 </div>
// // //               </div>

// // //               {/* CHENNAI */}
// // //               <div className="contact-map-point point-three">
// // //                 <span></span>

// // //                 <div>
// // //                   <strong>Chennai</strong>
// // //                   <small>NETWORK</small>
// // //                 </div>
// // //               </div>

// // //               {/* MOVING TRUCK */}
// // //               <div className="contact-map-truck">
// // //                 <Truck size={17} />
// // //               </div>

// // //               <div className="contact-map-label">
// // //                 <span></span>
// // //                 CONNECTED LOGISTICS NETWORK
// // //               </div>
// // //             </div>

// // //             {/* INFO */}
// // //             <div className="contact-info-content">

// // //               <div className="contact-info-heading">
// // //                 <span>7 STAR LOGISTICS</span>

// // //                 <strong>
// // //                   Let's talk about
// // //                   <br />
// // //                   your next shipment.
// // //                 </strong>
// // //               </div>

// // //               <div className="contact-details">

// // //                 <a
// // //                   href="tel:+918610511252"
// // //                   className="contact-detail"
// // //                 >
// // //                   <div className="contact-detail-icon">
// // //                     <Phone size={16} />
// // //                   </div>

// // //                   <div>
// // //                     <span>CALL US</span>
// // //                     <strong>+91 86105 11252</strong>
// // //                   </div>
// // //                 </a>

// // //                 <a
// // //                   href="mailto:dineshkumar@7slogistics.in"
// // //                   className="contact-detail"
// // //                 >
// // //                   <div className="contact-detail-icon">
// // //                     <Mail size={16} />
// // //                   </div>

// // //                   <div>
// // //                     <span>EMAIL US</span>
// // //                     <strong>
// // //                       dineshkumar@7slogistics.in
// // //                     </strong>
// // //                   </div>
// // //                 </a>

// // //                 <div className="contact-detail">
// // //                   <div className="contact-detail-icon">
// // //                     <MapPin size={16} />
// // //                   </div>

// // //                   <div>
// // //                     <span>HEAD OFFICE</span>
// // //                     <strong>
// // //                       126 Lenin Street, Kosapalayam,
// // //                       Puducherry – 605013
// // //                     </strong>
// // //                   </div>
// // //                 </div>

// // //                 <div className="contact-detail">
// // //                   <div className="contact-detail-icon">
// // //                     <Clock3 size={16} />
// // //                   </div>

// // //                   <div>
// // //                     <span>SUPPORT</span>
// // //                     <strong>24×7 Customer Support</strong>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* TRUST */}
// // //               <div className="contact-trust">
// // //                 <CheckCircle2 size={16} />

// // //                 <span>
// // //                   Your shipment enquiry will be handled by our logistics team.
// // //                 </span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* =========================================
// // //             BOTTOM STRIP
// // //         ========================================= */}
// // //         <div className="contact-bottom">

// // //           <div className="contact-bottom-item">
// // //             <span>01</span>
// // //             <strong>Tell us what you need</strong>
// // //           </div>

// // //           <div className="contact-bottom-line"></div>

// // //           <div className="contact-bottom-item">
// // //             <span>02</span>
// // //             <strong>Get the right solution</strong>
// // //           </div>

// // //           <div className="contact-bottom-line"></div>

// // //           <div className="contact-bottom-item">
// // //             <span>03</span>
// // //             <strong>Move with confidence</strong>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default Contact;

// // import {
// //   ArrowRight,
// //   Clock3,
// //   Mail,
// //   MapPin,
// //   Phone,
// //   Truck,
// //   TrainFront,
// //   Plane,
// // } from "lucide-react";

// // import "./Contact.css";

// // function Contact() {
// //   return (
// //     <section className="contact-section" id="contact">
// //       <div className="contact-container">

// //         {/* HEADER */}
// //         <div className="contact-heading">
// //           <div>
// //             <span className="contact-eyebrow">GET IN TOUCH</span>

// //             <h2>
// //               Let’s move your
// //               <br />
// //               <span>business forward.</span>
// //             </h2>
// //           </div>

// //           <p>
// //             Tell us what you need to move, where it needs to go,
// //             and we'll help you build the right logistics solution.
// //           </p>
// //         </div>

// //         <div className="contact-main-card">

// //           {/* LEFT FORM */}
// //           <div className="contact-form-area">
// //             <div className="form-top">
// //               <span>REQUEST A QUOTE</span>
// //               <p>We'll get back to you shortly.</p>
// //             </div>

// //             <form className="contact-form">

// //               <div className="form-row">
// //                 <div className="form-field">
// //                   <label>Full Name</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Enter your name"
// //                   />
// //                 </div>

// //                 <div className="form-field">
// //                   <label>Phone</label>
// //                   <input
// //                     type="tel"
// //                     placeholder="+91 XXXXX XXXXX"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="form-row">
// //                 <div className="form-field">
// //                   <label>Email</label>
// //                   <input
// //                     type="email"
// //                     placeholder="you@company.com"
// //                   />
// //                 </div>

// //                 <div className="form-field">
// //                   <label>Company</label>
// //                   <input
// //                     type="text"
// //                     placeholder="Company name"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="form-field">
// //                 <label>Service Required</label>

// //                 <select defaultValue="">
// //                   <option value="" disabled>
// //                     Select a service
// //                   </option>
// //                   <option>Surface Express</option>
// //                   <option>Domestic Air Expressway</option>
// //                   <option>Rail Express</option>
// //                   <option>Other</option>
// //                 </select>
// //               </div>

// //               <div className="form-field">
// //                 <label>Shipment Details</label>

// //                 <textarea
// //                   rows="4"
// //                   placeholder="Tell us about your shipment..."
// //                 />
// //               </div>

// //               <button type="submit" className="contact-submit">
// //                 Request a Quote
// //                 <ArrowRight size={18} />
// //               </button>

// //             </form>
// //           </div>


// //           {/* RIGHT SIDE */}
// //           <div className="contact-map-area">

// //             <div className="map-header">
// //               <div>
// //                 <span>NETWORK COVERAGE</span>
// //                 <h3>Connected across India.</h3>
// //               </div>

// //               <div className="network-status">
// //                 <i></i>
// //                 LIVE NETWORK
// //               </div>
// //             </div>


// //             {/* INDIA MAP */}
// //             <div className="india-map">

// //               {/* subtle grid */}
// //               <div className="map-grid"></div>

// //               {/* INDIA OUTLINE */}
// //               <svg
// //                 className="india-outline"
// //                 viewBox="0 0 500 600"
// //                 preserveAspectRatio="xMidYMid meet"
// //               >
// //                 <path
// //                   d="
// //                     M246 24
// //                     L218 37
// //                     L196 57
// //                     L169 67
// //                     L151 91
// //                     L128 104
// //                     L116 132
// //                     L91 146
// //                     L78 174
// //                     L91 197
// //                     L77 221
// //                     L91 245
// //                     L78 271
// //                     L91 295
// //                     L82 321
// //                     L101 339
// //                     L113 365
// //                     L129 384
// //                     L137 415
// //                     L153 437
// //                     L166 466
// //                     L184 493
// //                     L198 529
// //                     L217 562
// //                     L233 538
// //                     L243 507
// //                     L257 481
// //                     L274 456
// //                     L289 428
// //                     L307 405
// //                     L324 381
// //                     L343 359
// //                     L361 338
// //                     L377 313
// //                     L394 292
// //                     L409 267
// //                     L397 244
// //                     L419 226
// //                     L412 203
// //                     L390 190
// //                     L373 169
// //                     L348 154
// //                     L337 130
// //                     L347 107
// //                     L335 83
// //                     L315 63
// //                     L300 43
// //                     L273 32
// //                     Z
// //                   "
// //                 />
// //               </svg>


// //               {/* ROUTES */}
// //               <svg
// //                 className="network-routes"
// //                 viewBox="0 0 600 600"
// //                 preserveAspectRatio="none"
// //               >

// //                 {/* Puducherry → Chennai */}
// //                 <path
// //                   className="route route-surface"
// //                   d="M210 405 C265 365 300 320 342 285"
// //                 />

// //                 {/* Chennai → Bengaluru */}
// //                 <path
// //                   className="route route-rail"
// //                   d="M342 285 C360 235 392 195 435 150"
// //                 />

// //                 {/* Puducherry → Bengaluru */}
// //                 <path
// //                   className="route route-air"
// //                   d="M210 405 C290 330 355 235 435 150"
// //                 />

// //               </svg>


// //               {/* MOVING TRUCK */}
// //               <div className="map-vehicle vehicle-truck">
// //                 <Truck size={17} strokeWidth={2.2} />
// //               </div>

// //               {/* MOVING TRAIN */}
// //               <div className="map-vehicle vehicle-train">
// //                 <TrainFront size={17} strokeWidth={2.2} />
// //               </div>

// //               {/* MOVING PLANE */}
// //               <div className="map-vehicle vehicle-plane">
// //                 <Plane size={17} strokeWidth={2.2} />
// //               </div>


// //               {/* PUDUCHERRY */}
// //               <div className="map-city city-puducherry">
// //                 <div className="city-dot">
// //                   <span></span>
// //                 </div>

// //                 <div className="city-label">
// //                   <strong>Puducherry</strong>
// //                   <small>HEAD OFFICE</small>
// //                 </div>
// //               </div>


// //               {/* CHENNAI */}
// //               <div className="map-city city-chennai">
// //                 <div className="city-dot">
// //                   <span></span>
// //                 </div>

// //                 <div className="city-label">
// //                   <strong>Chennai</strong>
// //                   <small>NETWORK</small>
// //                 </div>
// //               </div>


// //               {/* BENGALURU */}
// //               <div className="map-city city-bengaluru">
// //                 <div className="city-dot">
// //                   <span></span>
// //                 </div>

// //                 <div className="city-label">
// //                   <strong>Bengaluru</strong>
// //                   <small>NETWORK</small>
// //                 </div>
// //               </div>


// //               {/* NETWORK BADGE */}
// //               <div className="network-badge">
// //                 <span></span>
// //                 CONNECTED LOGISTICS NETWORK
// //               </div>

// //             </div>


// //             {/* CONTACT INFO */}
// //             <div className="contact-info-grid">

// //               <div className="contact-info-item">
// //                 <div className="contact-info-icon">
// //                   <Phone size={17} />
// //                 </div>

// //                 <div>
// //                   <span>CALL US</span>
// //                   <strong>+91 86105 11252</strong>
// //                 </div>
// //               </div>


// //               <div className="contact-info-item">
// //                 <div className="contact-info-icon">
// //                   <Mail size={17} />
// //                 </div>

// //                 <div>
// //                   <span>EMAIL</span>
// //                   <strong>dineshkumar@7slogistics.in</strong>
// //                 </div>
// //               </div>


// //               <div className="contact-info-item">
// //                 <div className="contact-info-icon">
// //                   <MapPin size={17} />
// //                 </div>

// //                 <div>
// //                   <span>HEAD OFFICE</span>
// //                   <strong>
// //                     126 Lenin Street, Kosapalayam,
// //                     Puducherry – 605013
// //                   </strong>
// //                 </div>
// //               </div>


// //               <div className="contact-info-item">
// //                 <div className="contact-info-icon">
// //                   <Clock3 size={17} />
// //                 </div>

// //                 <div>
// //                   <span>SUPPORT</span>
// //                   <strong>24 × 7 Logistics Support</strong>
// //                 </div>
// //               </div>

// //             </div>

// //           </div>

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// // export default Contact;

// import {
//   ArrowRight,
//   Clock3,
//   Mail,
//   MapPin,
//   Phone,
//   Truck,
//   TrainFront,
//   Plane,
// } from "lucide-react";

// import "./Contact.css";

// const cities = [
//   {
//     id: "delhi",
//     name: "Delhi",
//     type: "NETWORK",
//     x: 44,
//     y: 17,
//   },
//   {
//     id: "jaipur",
//     name: "Jaipur",
//     type: "NETWORK",
//     x: 34,
//     y: 25,
//   },
//   {
//     id: "ahmedabad",
//     name: "Ahmedabad",
//     type: "NETWORK",
//     x: 24,
//     y: 38,
//   },
//   {
//     id: "mumbai",
//     name: "Mumbai",
//     type: "NETWORK",
//     x: 25,
//     y: 52,
//   },
//   {
//     id: "pune",
//     name: "Pune",
//     type: "NETWORK",
//     x: 32,
//     y: 57,
//   },
//   {
//     id: "nagpur",
//     name: "Nagpur",
//     type: "NETWORK",
//     x: 49,
//     y: 48,
//   },
//   {
//     id: "kolkata",
//     name: "Kolkata",
//     type: "NETWORK",
//     x: 76,
//     y: 38,
//   },
//   {
//     id: "hyderabad",
//     name: "Hyderabad",
//     type: "NETWORK",
//     x: 52,
//     y: 61,
//   },
//   {
//     id: "bengaluru",
//     name: "Bengaluru",
//     type: "NETWORK",
//     x: 45,
//     y: 76,
//   },
//   {
//     id: "chennai",
//     name: "Chennai",
//     type: "NETWORK",
//     x: 59,
//     y: 72,
//   },
//   {
//     id: "pondicherry",
//     name: "Puducherry",
//     type: "HEAD OFFICE",
//     x: 55,
//     y: 78,
//     featured: true,
//   },
//   {
//     id: "kochi",
//     name: "Kochi",
//     type: "NETWORK",
//     x: 37,
//     y: 88,
//   },
// ];

// function Contact() {
//   return (
//     <section className="contact-section" id="contact">
//       <div className="contact-container">

//         {/* =====================================
//             SECTION HEADER
//         ===================================== */}

//         <div className="contact-heading">

//           <div>
//             <span className="contact-eyebrow">
//               GET IN TOUCH
//             </span>

//             <h2>
//               Let’s move your
//               <br />
//               <span>business forward.</span>
//             </h2>
//           </div>

//           <p>
//             Tell us what you need to move, where it needs to go,
//             and we'll help you build the right logistics solution.
//           </p>

//         </div>


//         {/* =====================================
//             MAIN CONTACT CARD
//         ===================================== */}

//         <div className="contact-main-card">


//           {/* =====================================
//               FORM
//           ===================================== */}

//           <div className="contact-form-area">

//             <div className="form-top">
//               <span>REQUEST A QUOTE</span>

//               <p>
//                 We'll get back to you shortly.
//               </p>
//             </div>


//             <form className="contact-form">

//               <div className="form-row">

//                 <div className="form-field">
//                   <label>Full Name</label>

//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                   />
//                 </div>


//                 <div className="form-field">
//                   <label>Phone</label>

//                   <input
//                     type="tel"
//                     placeholder="+91 XXXXX XXXXX"
//                   />
//                 </div>

//               </div>


//               <div className="form-row">

//                 <div className="form-field">
//                   <label>Email</label>

//                   <input
//                     type="email"
//                     placeholder="you@company.com"
//                   />
//                 </div>


//                 <div className="form-field">
//                   <label>Company</label>

//                   <input
//                     type="text"
//                     placeholder="Company name"
//                   />
//                 </div>

//               </div>


//               <div className="form-field">

//                 <label>
//                   Service Required
//                 </label>

//                 <select defaultValue="">
//                   <option value="" disabled>
//                     Select a service
//                   </option>

//                   <option>
//                     Surface Express
//                   </option>

//                   <option>
//                     Domestic Air Expressway
//                   </option>

//                   <option>
//                     Rail Express
//                   </option>

//                   <option>
//                     Other
//                   </option>
//                 </select>

//               </div>


//               <div className="form-field">

//                 <label>
//                   Shipment Details
//                 </label>

//                 <textarea
//                   rows="5"
//                   placeholder="Tell us about your shipment..."
//                 />

//               </div>


//               <button
//                 type="submit"
//                 className="contact-submit"
//               >
//                 Request a Quote

//                 <ArrowRight size={18} />
//               </button>

//             </form>

//           </div>


//           {/* =====================================
//               NETWORK MAP
//           ===================================== */}

//           <div className="contact-map-area">

//             {/* MAP HEADER */}

//             <div className="map-header">

//               <div>
//                 <span>
//                   NETWORK COVERAGE
//                 </span>

//                 <h3>
//                   Connected across India.
//                 </h3>
//               </div>


//               <div className="network-status">

//                 <i></i>

//                 LIVE NETWORK

//               </div>

//             </div>


//             {/* =====================================
//                 MAP
//             ===================================== */}

//             <div className="india-network-map">


//               {/* GRID */}

//               <div className="map-grid"></div>


//               {/* =====================================
//                   INDIA OUTLINE
//               ===================================== */}

//               <svg
//                 className="india-svg"
//                 viewBox="0 0 600 700"
//                 preserveAspectRatio="xMidYMid meet"
//               >

//                 <defs>

//                   <linearGradient
//                     id="indiaFill"
//                     x1="0"
//                     y1="0"
//                     x2="0"
//                     y2="1"
//                   >
//                     <stop
//                       offset="0%"
//                       stopColor="#dce5ea"
//                     />

//                     <stop
//                       offset="100%"
//                       stopColor="#eef3f5"
//                     />
//                   </linearGradient>


//                   <filter id="softGlow">

//                     <feGaussianBlur
//                       stdDeviation="5"
//                     />

//                   </filter>

//                 </defs>


//                 {/* Glow */}

//                 <path
//                   className="india-glow"
//                   d="
//                     M255 30
//                     L225 42
//                     L205 64
//                     L176 74
//                     L158 98
//                     L133 111
//                     L117 137
//                     L91 151
//                     L76 179
//                     L84 203
//                     L70 229
//                     L82 250
//                     L71 277
//                     L84 300
//                     L77 326
//                     L92 349
//                     L105 373
//                     L111 401
//                     L126 425
//                     L135 453
//                     L148 481
//                     L158 512
//                     L174 543
//                     L190 570
//                     L205 604
//                     L220 642
//                     L237 617
//                     L245 585
//                     L260 554
//                     L278 527
//                     L292 496
//                     L310 468
//                     L330 440
//                     L347 415
//                     L365 390
//                     L384 368
//                     L403 343
//                     L421 317
//                     L441 292
//                     L454 265
//                     L444 243
//                     L462 222
//                     L456 201
//                     L436 190
//                     L419 170
//                     L394 158
//                     L378 138
//                     L366 116
//                     L374 94
//                     L359 72
//                     L338 57
//                     L320 39
//                     L288 30
//                     Z
//                   "
//                 />


//                 {/* Main India */}

//                 <path
//                   className="india-shape"
//                   d="
//                     M255 30
//                     L225 42
//                     L205 64
//                     L176 74
//                     L158 98
//                     L133 111
//                     L117 137
//                     L91 151
//                     L76 179
//                     L84 203
//                     L70 229
//                     L82 250
//                     L71 277
//                     L84 300
//                     L77 326
//                     L92 349
//                     L105 373
//                     L111 401
//                     L126 425
//                     L135 453
//                     L148 481
//                     L158 512
//                     L174 543
//                     L190 570
//                     L205 604
//                     L220 642
//                     L237 617
//                     L245 585
//                     L260 554
//                     L278 527
//                     L292 496
//                     L310 468
//                     L330 440
//                     L347 415
//                     L365 390
//                     L384 368
//                     L403 343
//                     L421 317
//                     L441 292
//                     L454 265
//                     L444 243
//                     L462 222
//                     L456 201
//                     L436 190
//                     L419 170
//                     L394 158
//                     L378 138
//                     L366 116
//                     L374 94
//                     L359 72
//                     L338 57
//                     L320 39
//                     L288 30
//                     Z
//                   "
//                 />

//               </svg>


//               {/* =====================================
//                   NETWORK ROUTES
//               ===================================== */}

//               <svg
//                 className="network-routes"
//                 viewBox="0 0 1000 700"
//                 preserveAspectRatio="none"
//               >

//                 {/* North → West */}

//                 <path
//                   className="route route-blue"
//                   d="M440 120 C360 170 300 220 245 330"
//                 />


//                 {/* Delhi → Kolkata */}

//                 <path
//                   className="route route-grey"
//                   d="M440 120 C570 145 680 200 760 270"
//                 />


//                 {/* Ahmedabad → Mumbai */}

//                 <path
//                   className="route route-orange"
//                   d="M245 265 C220 325 225 370 250 410"
//                 />


//                 {/* Mumbai → Pune */}

//                 <path
//                   className="route route-orange"
//                   d="M250 410 C280 430 300 445 320 460"
//                 />


//                 {/* Pune → Hyderabad */}

//                 <path
//                   className="route route-grey"
//                   d="M320 460 C390 490 455 525 520 560"
//                 />


//                 {/* Hyderabad → Bengaluru */}

//                 <path
//                   className="route route-orange"
//                   d="M520 560 C500 600 475 635 450 675"
//                 />


//                 {/* Bengaluru → Chennai */}

//                 <path
//                   className="route route-grey"
//                   d="M450 675 C500 655 550 640 590 620"
//                 />


//                 {/* Chennai → Puducherry */}

//                 <path
//                   className="route route-orange"
//                   d="M590 620 C570 655 555 680 550 700"
//                 />


//                 {/* Bengaluru → Kochi */}

//                 <path
//                   className="route route-blue"
//                   d="M450 675 C405 700 370 710 350 730"
//                 />

//               </svg>


//               {/* =====================================
//                   TRANSPORT VEHICLES
//               ===================================== */}

//               <div className="map-vehicle map-truck">
//                 <Truck size={18} />
//               </div>


//               <div className="map-vehicle map-train">
//                 <TrainFront size={18} />
//               </div>


//               <div className="map-vehicle map-plane">
//                 <Plane size={18} />
//               </div>


//               {/* =====================================
//                   CITIES
//               ===================================== */}

//               {cities.map((city) => (

//                 <div
//                   key={city.id}
//                   className={`network-city ${
//                     city.featured ? "featured-city" : ""
//                   }`}
//                   style={{
//                     left: `${city.x}%`,
//                     top: `${city.y}%`,
//                   }}
//                 >

//                   <div className="network-city-dot">

//                     <span></span>

//                   </div>


//                   <div className="network-city-label">

//                     <strong>
//                       {city.name}
//                     </strong>

//                     <small>
//                       {city.type}
//                     </small>

//                   </div>

//                 </div>

//               ))}


//               {/* =====================================
//                   MAP LEGEND
//               ===================================== */}

//               <div className="map-legend">

//                 <div>
//                   <span className="legend-dot orange"></span>
//                   ROAD
//                 </div>

//                 <div>
//                   <span className="legend-dot grey"></span>
//                   RAIL
//                 </div>

//                 <div>
//                   <span className="legend-dot blue"></span>
//                   AIR
//                 </div>

//               </div>


//               {/* NETWORK BADGE */}

//               <div className="network-badge">

//                 <span></span>

//                 CONNECTED LOGISTICS NETWORK

//               </div>

//             </div>


//             {/* =====================================
//                 CONTACT DETAILS
//             ===================================== */}

//             <div className="contact-info-grid">

//               <div className="contact-info-item">

//                 <div className="contact-info-icon">
//                   <Phone size={16} />
//                 </div>

//                 <div>
//                   <span>CALL US</span>

//                   <strong>
//                     +91 86105 11252
//                   </strong>
//                 </div>

//               </div>


//               <div className="contact-info-item">

//                 <div className="contact-info-icon">
//                   <Mail size={16} />
//                 </div>

//                 <div>
//                   <span>EMAIL</span>

//                   <strong>
//                     dineshkumar@7slogistics.in
//                   </strong>
//                 </div>

//               </div>


//               <div className="contact-info-item">

//                 <div className="contact-info-icon">
//                   <MapPin size={16} />
//                 </div>

//                 <div>
//                   <span>HEAD OFFICE</span>

//                   <strong>
//                     126 Lenin Street, Puducherry
//                   </strong>
//                 </div>

//               </div>


//               <div className="contact-info-item">

//                 <div className="contact-info-icon">
//                   <Clock3 size={16} />
//                 </div>

//                 <div>
//                   <span>SUPPORT</span>

//                   <strong>
//                     24 × 7 Logistics Support
//                   </strong>
//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Contact;

import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Plane,
  TrainFront,
  Truck,
} from "lucide-react";

import "./Contact.css";
import map from "../../assets/India_outline.svg";


/* =========================================================
   NETWORK CITIES
========================================================= */

const cities = [
  {
    name: "Delhi",
    type: "NETWORK",
    x: 48,
    y: 13,
  },
  {
    name: "Jaipur",
    type: "NETWORK",
    x: 38,
    y: 23,
  },
  {
    name: "Ahmedabad",
    type: "NETWORK",
    x: 28,
    y: 37,
  },
  {
    name: "Mumbai",
    type: "NETWORK",
    x: 29,
    y: 52,
  },
  {
    name: "Pune",
    type: "NETWORK",
    x: 35,
    y: 57,
  },
  {
    name: "Nagpur",
    type: "NETWORK",
    x: 53,
    y: 43,
  },
  {
    name: "Kolkata",
    type: "NETWORK",
    x: 77,
    y: 37,
  },
  {
    name: "Hyderabad",
    type: "NETWORK",
    x: 55,
    y: 56,
  },
  {
    name: "Bengaluru",
    type: "NETWORK",
    x: 49,
    y: 75,
  },
  {
    name: "Chennai",
    type: "NETWORK",
    x: 59,
    y: 72,
  },
  {
    name: "Puducherry",
    type: "HEAD OFFICE",
    x: 54,
    y: 78,
    featured: true,
  },
  {
    name: "Kochi",
    type: "NETWORK",
    x: 34,
    y: 88,
  },
];


/* =========================================================
   ROUTES
========================================================= */

const routes = [
  {
    from: [48, 13],
    to: [38, 23],
    color: "blue",
    curve: -3,
  },

  {
    from: [38, 23],
    to: [28, 37],
    color: "blue",
    curve: 2,
  },

  {
    from: [28, 37],
    to: [29, 52],
    color: "orange",
    curve: -2,
  },

  {
    from: [29, 52],
    to: [35, 57],
    color: "orange",
    curve: 1,
  },

  {
    from: [35, 57],
    to: [53, 43],
    color: "grey",
    curve: -5,
  },

  {
    from: [53, 43],
    to: [77, 37],
    color: "blue",
    curve: -4,
  },

  {
    from: [53, 43],
    to: [55, 56],
    color: "orange",
    curve: 2,
  },

  {
    from: [55, 56],
    to: [49, 75],
    color: "blue",
    curve: -3,
  },

  {
    from: [49, 75],
    to: [54, 78],
    color: "orange",
    curve: 1,
  },

  {
    from: [54, 78],
    to: [59, 72],
    color: "grey",
    curve: 2,
  },

  {
    from: [49, 75],
    to: [34, 88],
    color: "blue",
    curve: 4,
  },

  {
    from: [28, 52],
    to: [54, 78],
    color: "orange",
    curve: 8,
  },

  {
    from: [48, 13],
    to: [77, 37],
    color: "grey",
    curve: 8,
  },
];


/* =========================================================
   CURVE GENERATOR
========================================================= */

function createCurve(
  from,
  to,
  curve = 0
) {
  const [x1, y1] = from;
  const [x2, y2] = to;

  const midX =
    (x1 + x2) / 2;

  const midY =
    (y1 + y2) / 2;

  return `
    M ${x1} ${y1}
    Q ${midX + curve} ${midY + curve}
      ${x2} ${y2}
  `;
}


/* =========================================================
   CONTACT INFO
========================================================= */

const contactInfo = [
  {
    icon: Phone,
    label: "CALL US",
    value: "+91 86105 11252",
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: "dineshkumar@7slogistics.in",
  },
  {
    icon: MapPin,
    label: "HEAD OFFICE",
    value: "126 Lenin Street, Puducherry",
  },
  {
    icon: Clock3,
    label: "SUPPORT",
    value: "24 × 7 Logistics Support",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function Contact() {

  const handleSubmit =
    (event) => {
      event.preventDefault();

      /*
        Connect your form backend / FormSubmit /
        Web3Forms here later.
      */
    };


  return (

    <section
      className="contact-section"
      id="contact"
    >

      <div className="contact-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="contact-heading">

          <div>

            <div className="contact-eyebrow">

              <span></span>

              LET'S CONNECT

            </div>


            <h2>

              Move your business

              <span>
                forward.
              </span>

            </h2>

          </div>


          <p>

            Tell us what you need to move.
            Our logistics team will help you
            find the right route, service and
            delivery solution.

          </p>

        </div>


        {/* =================================================
            MAIN CARD
        ================================================= */}

        <div className="contact-main-card">


          {/* =================================================
              FORM
          ================================================= */}

          <div className="contact-form-area">

            <div className="form-top">

              <span>
                REQUEST A QUOTE
              </span>

              <p>
                Share your shipment requirements
                and our team will get back to you.
              </p>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >


              {/* NAME + PHONE */}

              <div className="form-row">

                <div className="form-field">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="form-field">

                  <label>
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />

                </div>

              </div>


              {/* EMAIL + COMPANY */}

              <div className="form-row">

                <div className="form-field">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                  />

                </div>


                <div className="form-field">

                  <label>
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                  />

                </div>

              </div>


              {/* SERVICE */}

              <div className="form-field">

                <label>
                  Service Required
                </label>

                <select
                  name="service"
                  defaultValue=""
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    Select a service
                  </option>

                  <option>
                    Surface Express
                  </option>

                  <option>
                    Domestic Air Expressway
                  </option>

                  <option>
                    Rail Express
                  </option>

                  <option>
                    Multimodal Logistics
                  </option>

                </select>

              </div>


              {/* SHIPMENT DETAILS */}

              <div className="form-field">

                <label>
                  Shipment Details
                </label>

                <textarea
                  name="message"
                  placeholder="Tell us about your shipment..."
                  rows="5"
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit"
              >

                <span>
                  Request a Quote
                </span>

                <span className="contact-submit-icon">

                  <ArrowRight size={21} />

                </span>

              </button>

            </form>

          </div>


          {/* =================================================
              NETWORK AREA
          ================================================= */}

          <div className="contact-network-area">


            {/* MAP HEADER */}

            <div className="map-header">

              <div>

                <span>
                  LOGISTICS NETWORK
                </span>

                <h3>
                  Connected across India.
                </h3>

              </div>


              <div className="network-status">

                <i></i>

                NETWORK ONLINE

              </div>

            </div>


            {/* =================================================
                MAP
            ================================================= */}

            <div className="india-network-map">


              {/* GRID */}

              <div className="map-grid"></div>


              {/* =================================================
                  INDIA OUTLINE
              ================================================= */}

              <div className="india-outline-wrapper">

                {/* <img
                  src="/maps/india-outline.svg"
                  alt="India logistics network"
                  className="india-outline"
                /> */}
<img
  src={map}
  alt="India logistics network"
  className="india-outline"
/>
              </div>


              {/* =================================================
                  ROUTES
              ================================================= */}

              <svg
                className="network-routes"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >

                <defs>

                  <filter
                    id="routeGlow"
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                  >

                    <feGaussianBlur
                      stdDeviation="0.7"
                      result="blur"
                    />

                    <feMerge>

                      <feMergeNode in="blur" />

                      <feMergeNode in="SourceGraphic" />

                    </feMerge>

                  </filter>

                </defs>


                {routes.map(
                  (route, index) => (

                    <path
                      key={index}
                      d={createCurve(
                        route.from,
                        route.to,
                        route.curve
                      )}
                      className={`network-route route-${route.color}`}
                      filter="url(#routeGlow)"
                    />

                  )
                )}

              </svg>


              {/* =================================================
                  CITY POINTS
              ================================================= */}

              {cities.map(
                (city) => (

                  <div
                    key={city.name}
                    className={`network-city ${
                      city.featured
                        ? "featured-city"
                        : ""
                    }`}
                    style={{
                      left: `${city.x}%`,
                      top: `${city.y}%`,
                    }}
                  >

                    <div className="network-city-dot">

                      <span></span>

                    </div>


                    <div className="network-city-label">

                      <strong>
                        {city.name}
                      </strong>

                      <small>
                        {city.type}
                      </small>

                    </div>

                  </div>

                )
              )}


              {/* =================================================
                  VEHICLES
              ================================================= */}

              <div className="map-vehicle map-truck">

                <Truck size={16} />

              </div>


              <div className="map-vehicle map-train">

                <TrainFront size={16} />

              </div>


              <div className="map-vehicle map-plane">

                <Plane size={16} />

              </div>


              {/* =================================================
                  LEGEND
              ================================================= */}

              <div className="map-legend">

                <div>

                  <span className="legend-dot orange"></span>

                  ROAD

                </div>

                <div>

                  <span className="legend-dot grey"></span>

                  RAIL

                </div>

                <div>

                  <span className="legend-dot blue"></span>

                  AIR

                </div>

              </div>


              {/* =================================================
                  NETWORK BADGE
              ================================================= */}

              <div className="network-badge">

                <span></span>

                CONNECTED LOGISTICS NETWORK

              </div>

            </div>


            {/* =================================================
                CONTACT INFO
            ================================================= */}

            <div className="contact-info-grid">

              {contactInfo.map(
                (item) => {

                  const Icon =
                    item.icon;

                  return (

                    <div
                      className="contact-info-item"
                      key={item.label}
                    >

                      <div className="contact-info-icon">

                        <Icon size={16} />

                      </div>


                      <div>

                        <span>
                          {item.label}
                        </span>

                        <strong>
                          {item.value}
                        </strong>

                      </div>

                    </div>

                  );

                }
              )}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}


export default Contact;