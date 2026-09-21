// // import {
// //   ArrowRight,
// //   CheckCircle2,
// //   Clock3,
// //   MapPin,
// //   Package,
// //   Search,
// //   Truck,
// // } from "lucide-react";
// // import { useState } from "react";
// // import "./Tracking.css";

// // const trackingSteps = [
// //   {
// //     title: "Shipment Booked",
// //     location: "Puducherry",
// //     time: "09:15 AM",
// //     completed: true,
// //   },
// //   {
// //     title: "Picked Up",
// //     location: "Puducherry Hub",
// //     time: "11:40 AM",
// //     completed: true,
// //   },
// //   {
// //     title: "In Transit",
// //     location: "Bengaluru Hub",
// //     time: "02:25 PM",
// //     completed: true,
// //     current: true,
// //   },
// //   {
// //     title: "Out for Delivery",
// //     location: "Destination Hub",
// //     time: "Expected",
// //     completed: false,
// //   },
// //   {
// //     title: "Delivered",
// //     location: "Destination",
// //     time: "Pending",
// //     completed: false,
// //   },
// // ];

// // function Tracking() {
// //   const [trackingId, setTrackingId] = useState("");
// //   const [isTracking, setIsTracking] = useState(false);

// //   const handleTrack = (event) => {
// //     event.preventDefault();

// //     if (!trackingId.trim()) return;

// //     setIsTracking(true);
// //   };

// //   return (
// //     <section className="tracking-section" id="tracking">
// //       <div className="tracking-container">

// //         {/* =========================================
// //             HEADER
// //         ========================================= */}
// //         <div className="tracking-header">
// //           <div>
// //             <div className="tracking-eyebrow">
// //               <span></span>
// //               SHIPMENT VISIBILITY
// //             </div>

// //             <h2>
// //               Know where your
// //               <span>shipment is.</span>
// //             </h2>
// //           </div>

// //           <p>
// //             Real-time shipment visibility gives you the confidence to know
// //             what's moving, where it's moving and what's next.
// //           </p>
// //         </div>

// //         {/* =========================================
// //             TRACKING PANEL
// //         ========================================= */}
// //         <div className="tracking-panel">

// //           {/* LEFT */}
// //           <div className="tracking-left">

// //             <div className="tracking-panel-label">
// //               <span className="tracking-status-dot"></span>
// //               LIVE SHIPMENT TRACKING
// //             </div>

// //             <h3>
// //               Track your shipment
// //               <span>in seconds.</span>
// //             </h3>

// //             <p className="tracking-panel-description">
// //               Enter your shipment or tracking number below to get the latest
// //               status and movement details.
// //             </p>

// //             {/* FORM */}
// //             <form
// //               className="tracking-form"
// //               onSubmit={handleTrack}
// //             >
// //               <div className="tracking-input-wrapper">
// //                 <Package size={17} />

// //                 <input
// //                   type="text"
// //                   placeholder="Enter shipment ID"
// //                   value={trackingId}
// //                   onChange={(event) =>
// //                     setTrackingId(event.target.value)
// //                   }
// //                 />
// //               </div>

// //               <button type="submit">
// //                 <span>Track Shipment</span>
// //                 <ArrowRight size={16} />
// //               </button>
// //             </form>

// //             <div className="tracking-example">
// //               <span>Example</span>
// //               <strong>7SL2026XXXX</strong>
// //             </div>

// //             {/* RESULT MESSAGE */}
// //             {isTracking && (
// //               <div className="tracking-success">
// //                 <CheckCircle2 size={16} />

// //                 <div>
// //                   <strong>Shipment found</strong>
// //                   <span>
// //                     Showing the latest available shipment journey.
// //                   </span>
// //                 </div>
// //               </div>
// //             )}

// //             {/* FEATURES */}
// //             <div className="tracking-features">
// //               <div>
// //                 <CheckCircle2 size={14} />
// //                 <span>Real-time visibility</span>
// //               </div>

// //               <div>
// //                 <CheckCircle2 size={14} />
// //                 <span>Route updates</span>
// //               </div>

// //               <div>
// //                 <CheckCircle2 size={14} />
// //                 <span>Delivery status</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* RIGHT */}
// //           <div className="tracking-right">

// //             {/* TOP */}
// //             <div className="tracking-card-top">
// //               <div>
// //                 <span>SHIPMENT STATUS</span>

// //                 <strong>In Transit</strong>
// //               </div>

// //               <div className="tracking-live">
// //                 <span></span>
// //                 LIVE
// //               </div>
// //             </div>

// //             {/* ROUTE */}
// //             <div className="tracking-route">

// //               <div className="tracking-location">
// //                 <div className="tracking-location-icon origin">
// //                   <MapPin size={15} />
// //                 </div>

// //                 <div>
// //                   <span>FROM</span>
// //                   <strong>Puducherry</strong>
// //                 </div>
// //               </div>

// //               <div className="tracking-route-line">
// //                 <div className="tracking-route-base"></div>

// //                 <div className="tracking-route-active"></div>

// //                 <div className="tracking-truck">
// //                   <Truck size={16} />
// //                 </div>
// //               </div>

// //               <div className="tracking-location">
// //                 <div className="tracking-location-icon destination">
// //                   <MapPin size={15} />
// //                 </div>

// //                 <div>
// //                   <span>TO</span>
// //                   <strong>Bengaluru</strong>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* META */}
// //             <div className="tracking-meta">
// //               <div>
// //                 <span>SHIPMENT ID</span>
// //                 <strong>
// //                   {trackingId || "7SL2026XXXX"}
// //                 </strong>
// //               </div>

// //               <div>
// //                 <span>SERVICE</span>
// //                 <strong>Surface Express</strong>
// //               </div>

// //               <div>
// //                 <span>ETA</span>
// //                 <strong>Today</strong>
// //               </div>
// //             </div>

// //             {/* TIMELINE */}
// //             <div className="tracking-timeline">
// //               {trackingSteps.map((step, index) => (
// //                 <div
// //                   className={`tracking-step ${
// //                     step.current ? "current" : ""
// //                   } ${step.completed ? "completed" : ""}`}
// //                   key={step.title}
// //                 >
// //                   <div className="tracking-step-marker">
// //                     {step.completed ? (
// //                       <CheckCircle2 size={14} />
// //                     ) : (
// //                       <span></span>
// //                     )}
// //                   </div>

// //                   {index !== trackingSteps.length - 1 && (
// //                     <div className="tracking-step-line"></div>
// //                   )}

// //                   <div className="tracking-step-content">
// //                     <div>
// //                       <strong>{step.title}</strong>

// //                       {step.current && (
// //                         <span className="tracking-current-label">
// //                           CURRENT
// //                         </span>
// //                       )}
// //                     </div>

// //                     <span>{step.location}</span>
// //                   </div>

// //                   <time>{step.time}</time>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* =========================================
// //             BOTTOM STRIP
// //         ========================================= */}
// //         <div className="tracking-bottom">

// //           <div className="tracking-bottom-item">
// //             <Clock3 size={17} />

// //             <div>
// //               <strong>24×7 Support</strong>
// //               <span>We're here when you need us.</span>
// //             </div>
// //           </div>

// //           <div className="tracking-bottom-divider"></div>

// //           <div className="tracking-bottom-item">
// //             <MapPin size={17} />

// //             <div>
// //               <strong>Shipment Visibility</strong>
// //               <span>Stay informed throughout the journey.</span>
// //             </div>
// //           </div>

// //           <div className="tracking-bottom-divider"></div>

// //           <div className="tracking-bottom-item">
// //             <Truck size={17} />

// //             <div>
// //               <strong>Reliable Movement</strong>
// //               <span>Built around dependable delivery.</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Tracking;

// import {
//   ArrowRight,
//   CheckCircle2,
//   Clock3,
//   MapPin,
//   Package,
//   Truck,
//   AlertCircle,
//   Loader2,
//   CalendarDays,
// } from "lucide-react";

// import { useState } from "react";
// import "./Tracking.css";


// /* =========================================================
//    HELPERS
// ========================================================= */

// const formatDate = (value) => {
//   if (!value) return "--";

//   const date = new Date(value);

//   if (Number.isNaN(date.getTime())) {
//     return value;
//   }

//   return date.toLocaleString("en-IN", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//   });
// };


// const getStatusClass = (status = "") => {
//   const value = status.toLowerCase();

//   if (
//     value.includes("delivered") ||
//     value.includes("delivery")
//   ) {
//     return "delivered";
//   }

//   if (
//     value.includes("transit") ||
//     value.includes("dispatch")
//   ) {
//     return "transit";
//   }

//   if (
//     value.includes("packing") ||
//     value.includes("book")
//   ) {
//     return "packing";
//   }

//   return "default";
// };


// /* =========================================================
//    TRACKING
// ========================================================= */

// function Tracking() {

//   const [trackingId, setTrackingId] = useState("");

//   const [shipment, setShipment] = useState(null);

//   const [isTracking, setIsTracking] = useState(false);

//   const [error, setError] = useState("");


//   /* =======================================================
//      TRACK SHIPMENT
//   ======================================================= */

//   const handleTrack = async (event) => {

//     event.preventDefault();

//     const id = trackingId.trim();

//     if (!id) {
//       setError("Please enter a tracking ID.");
//       setShipment(null);
//       return;
//     }


//     setIsTracking(true);
//     setError("");
//     setShipment(null);


//     try {

//       const formData = new URLSearchParams();

//       formData.append(
//         "trackingid",
//         id
//       );


//       const response = await fetch(
//         "http://www.7slogistics.in/admin/tracking.php",
//         {
//           method: "POST",

//           headers: {
//             "Content-Type":
//               "application/x-www-form-urlencoded;charset=UTF-8",
//           },

//           body: formData.toString(),
//         }
//       );


//       if (!response.ok) {
//         throw new Error(
//           `Tracking request failed: ${response.status}`
//         );
//       }


//       /*
//        * PHP may return JSON OR HTML/text.
//        */

//       const responseText =
//         await response.text();


//       let data;


//       /* ===================================================
//          TRY JSON
//       =================================================== */

//       try {

//         data = JSON.parse(responseText);

//       } catch {

//         /*
//          * If PHP returns HTML/text,
//          * keep the response as raw data.
//          */

//         data = {
//           raw: responseText,
//         };

//       }


//       console.log(
//         "Tracking API Response:",
//         data
//       );


//       /* ===================================================
//          NORMALIZE RESPONSE
//       =================================================== */

//       const normalizedShipment =
//         normalizeTrackingResponse(
//           data,
//           id
//         );


//       if (
//         !normalizedShipment &&
//         !data?.raw
//       ) {

//         throw new Error(
//           "Shipment details were not found."
//         );

//       }


//       setShipment(
//         normalizedShipment || {
//           trackingId: id,
//           raw: data.raw,
//         }
//       );

//     } catch (err) {

//       console.error(
//         "Tracking Error:",
//         err
//       );

//       setError(
//         err.message ||
//         "Unable to retrieve shipment details."
//       );

//     } finally {

//       setIsTracking(false);

//     }

//   };


//   return (

//     <section
//       className="tracking-section"
//       id="tracking"
//     >

//       <div className="tracking-container">


//         {/* =================================================
//             HEADER
//         ================================================= */}

//         <div className="tracking-header">

//           <div>

//             <div className="tracking-eyebrow">

//               <span></span>

//               SHIPMENT VISIBILITY

//             </div>


//             <h2>

//               Know where your

//               <span>
//                 shipment is.
//               </span>

//             </h2>

//           </div>


//           <p>

//             Real-time shipment visibility gives you the
//             confidence to know what's moving, where it's
//             moving and what's next.

//           </p>

//         </div>



//         {/* =================================================
//             TRACKING PANEL
//         ================================================= */}

//         <div className="tracking-panel">


//           {/* =================================================
//               LEFT
//           ================================================= */}

//           <div className="tracking-left">

//             <div className="tracking-panel-label">

//               <span className="tracking-status-dot"></span>

//               LIVE SHIPMENT TRACKING

//             </div>


//             <h3>

//               Track your shipment

//               <span>
//                 in seconds.
//               </span>

//             </h3>


//             <p className="tracking-panel-description">

//               Enter your shipment or tracking number below
//               to get the latest status and movement details.

//             </p>


//             {/* =================================================
//                 FORM
//             ================================================= */}

//             <form
//               className="tracking-form"
//               onSubmit={handleTrack}
//             >

//               <div className="tracking-input-wrapper">

//                 <Package size={17} />

//                 <input
//                   type="text"
//                   placeholder="Enter shipment ID"
//                   value={trackingId}
//                   onChange={(event) =>
//                     setTrackingId(
//                       event.target.value
//                     )
//                   }
//                 />

//               </div>


//               <button
//                 type="submit"
//                 disabled={isTracking}
//               >

//                 {isTracking ? (
//                   <>
//                     <Loader2
//                       size={16}
//                       className="tracking-spinner"
//                     />

//                     <span>
//                       Tracking...
//                     </span>
//                   </>
//                 ) : (
//                   <>
//                     <span>
//                       Track Shipment
//                     </span>

//                     <ArrowRight size={16} />
//                   </>
//                 )}

//               </button>

//             </form>


//             <div className="tracking-example">

//               <span>
//                 Example
//               </span>

//               <strong>
//                 124
//               </strong>

//             </div>


//             {/* =================================================
//                 ERROR
//             ================================================= */}

//             {error && (

//               <div className="tracking-error">

//                 <AlertCircle size={17} />

//                 <div>

//                   <strong>
//                     Tracking unavailable
//                   </strong>

//                   <span>
//                     {error}
//                   </span>

//                 </div>

//               </div>

//             )}


//             {/* =================================================
//                 FEATURES
//             ================================================= */}

//             <div className="tracking-features">

//               <div>

//                 <CheckCircle2 size={14} />

//                 <span>
//                   Real-time visibility
//                 </span>

//               </div>


//               <div>

//                 <CheckCircle2 size={14} />

//                 <span>
//                   Route updates
//                 </span>

//               </div>


//               <div>

//                 <CheckCircle2 size={14} />

//                 <span>
//                   Delivery status
//                 </span>

//               </div>

//             </div>

//           </div>



//           {/* =================================================
//               RIGHT
//           ================================================= */}

//           <div className="tracking-right">


//             {/* =================================================
//                 IF SHIPMENT FOUND
//             ================================================= */}

//             {shipment ? (

//               <ShipmentResult
//                 shipment={shipment}
//               />

//             ) : (

//               <EmptyTrackingState />

//             )}

//           </div>

//         </div>



//         {/* =================================================
//             BOTTOM STRIP
//         ================================================= */}

//         <div className="tracking-bottom">


//           <div className="tracking-bottom-item">

//             <Clock3 size={17} />

//             <div>

//               <strong>
//                 24×7 Support
//               </strong>

//               <span>
//                 We're here when you need us.
//               </span>

//             </div>

//           </div>


//           <div className="tracking-bottom-divider"></div>


//           <div className="tracking-bottom-item">

//             <MapPin size={17} />

//             <div>

//               <strong>
//                 Shipment Visibility
//               </strong>

//               <span>
//                 Stay informed throughout the journey.
//               </span>

//             </div>

//           </div>


//           <div className="tracking-bottom-divider"></div>


//           <div className="tracking-bottom-item">

//             <Truck size={17} />

//             <div>

//               <strong>
//                 Reliable Movement
//               </strong>

//               <span>
//                 Built around dependable delivery.
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>

//   );
// }


// /* =========================================================
//    SHIPMENT RESULT
// ========================================================= */

// function ShipmentResult({
//   shipment,
// }) {

//   const status =
//     shipment.status ||
//     "Packing";


//   const events =
//     shipment.events ||
//     [];


//   return (

//     <div className="shipment-result">


//       {/* =====================================================
//           TOP
//       ===================================================== */}

//       <div className="tracking-card-top">

//         <div>

//           <span>
//             SHIPMENT STATUS
//           </span>

//           <strong>
//             {status}
//           </strong>

//         </div>


//         <div
//           className={`tracking-live tracking-status-${getStatusClass(
//             status
//           )}`}
//         >

//           <span></span>

//           {status.toUpperCase()}

//         </div>

//       </div>



//       {/* =====================================================
//           SHIPMENT SUMMARY
//       ===================================================== */}

//       <div className="shipment-summary">


//         <div className="shipment-summary-card">

//           <Package size={17} />

//           <div>

//             <span>
//               TRACKING ID
//             </span>

//             <strong>
//               {shipment.trackingId || "--"}
//             </strong>

//           </div>

//         </div>


//         <div className="shipment-summary-card">

//           <CalendarDays size={17} />

//           <div>

//             <span>
//               BOOKING DATE
//             </span>

//             <strong>
//               {formatDate(
//                 shipment.bookingDate
//               )}
//             </strong>

//           </div>

//         </div>


//         <div className="shipment-summary-card">

//           <Clock3 size={17} />

//           <div>

//             <span>
//               EXPECTED DELIVERY
//             </span>

//             <strong>
//               {formatDate(
//                 shipment.expectedDeliveryDate
//               )}
//             </strong>

//           </div>

//         </div>

//       </div>



//       {/* =====================================================
//           ROUTE
//       ===================================================== */}

//       <div className="tracking-route">

//         <div className="tracking-location">

//           <div className="tracking-location-icon origin">

//             <MapPin size={15} />

//           </div>

//           <div>

//             <span>
//               FROM
//             </span>

//             <strong>
//               {shipment.origin || "Puducherry"}
//             </strong>

//           </div>

//         </div>


//         <div className="tracking-route-line">

//           <div className="tracking-route-base"></div>

//           <div className="tracking-route-active"></div>

//           <div className="tracking-truck">

//             <Truck size={16} />

//           </div>

//         </div>


//         <div className="tracking-location">

//           <div className="tracking-location-icon destination">

//             <MapPin size={15} />

//           </div>

//           <div>

//             <span>
//               TO
//             </span>

//             <strong>
//               {shipment.destination || "--"}
//             </strong>

//           </div>

//         </div>

//       </div>



//       {/* =====================================================
//           REASON
//       ===================================================== */}

//       {shipment.reason && (

//         <div className="shipment-reason">

//           <span>
//             REASON
//           </span>

//           <strong>
//             {shipment.reason}
//           </strong>

//         </div>

//       )}



//       {/* =====================================================
//           TIMELINE
//       ===================================================== */}

//       <div className="tracking-timeline">

//         {events.length > 0 ? (

//           events.map(
//             (event, index) => (

//               <div
//                 className={`tracking-step ${
//                   index === 0
//                     ? "current"
//                     : ""
//                 } ${
//                   index > 0
//                     ? "completed"
//                     : ""
//                 }`}
//                 key={`${event.title}-${index}`}
//               >

//                 <div className="tracking-step-marker">

//                   {index > 0 ? (

//                     <CheckCircle2 size={14} />

//                   ) : (

//                     <span></span>

//                   )}

//                 </div>


//                 {index !== events.length - 1 && (

//                   <div className="tracking-step-line"></div>

//                 )}


//                 <div className="tracking-step-content">

//                   <div>

//                     <strong>
//                       {event.title}
//                     </strong>

//                     {index === 0 && (

//                       <span className="tracking-current-label">
//                         LATEST
//                       </span>

//                     )}

//                   </div>

//                   <span>
//                     {event.location || ""}
//                   </span>

//                 </div>


//                 <time>

//                   {formatDate(
//                     event.date
//                   )}

//                 </time>

//               </div>

//             )

//           )

//         ) : (

//           <div className="tracking-no-events">

//             <Clock3 size={18} />

//             <span>
//               Shipment history is currently unavailable.
//             </span>

//           </div>

//         )}

//       </div>

//     </div>

//   );
// }


// /* =========================================================
//    EMPTY STATE
// ========================================================= */

// function EmptyTrackingState() {

//   return (

//     <div className="tracking-empty-state">

//       <div className="tracking-empty-icon">

//         <Package size={30} />

//       </div>

//       <h3>
//         Your shipment journey
//       </h3>

//       <p>
//         Enter a tracking ID to see booking,
//         movement and delivery information.
//       </p>

//       <div className="tracking-empty-line">

//         <span></span>
//         <span></span>
//         <span></span>

//       </div>

//     </div>

//   );
// }


// /* =========================================================
//    RESPONSE NORMALIZER
// ========================================================= */

// function normalizeTrackingResponse(
//   data,
//   trackingId
// ) {

//   /*
//    * Handles several possible PHP response formats:
//    *
//    * {
//    *   trackingid: 124,
//    *   bookingdate: "...",
//    *   expected_delivery_date: "...",
//    *   status: "Packing",
//    *   reason: "...",
//    *   events: [...]
//    * }
//    */


//   if (!data) {
//     return null;
//   }


//   if (data.raw) {

//     return parseRawTrackingResponse(
//       data.raw,
//       trackingId
//     );

//   }


//   /*
//    * If API wraps the actual object.
//    */

//   const source =
//     data.data ||
//     data.result ||
//     data.shipment ||
//     data;


//   if (
//     typeof source !== "object" ||
//     Array.isArray(source)
//   ) {
//     return null;
//   }


//   const events =
//     source.events ||
//     source.history ||
//     source.tracking ||
//     source.timeline ||
//     [];


//   return {

//     trackingId:
//       source.trackingid ??
//       source.trackingId ??
//       source.tracking_id ??
//       trackingId,


//     bookingDate:
//       source.bookingdate ??
//       source.bookingDate ??
//       source.booking_date ??
//       source.booked_at ??
//       null,


//     expectedDeliveryDate:
//       source.expected_delivery_date ??
//       source.expectedDeliveryDate ??
//       source.expected_delivery ??
//       source.delivery_date ??
//       null,


//     status:
//       source.status ??
//       source.shipment_status ??
//       "Packing",


//     reason:
//       source.reason ??
//       source.reasons ??
//       "",


//     origin:
//       source.origin ??
//       source.from ??
//       source.from_location ??
//       "Puducherry",


//     destination:
//       source.destination ??
//       source.to ??
//       source.to_location ??
//       "",


//     events:
//       normalizeEvents(events),

//   };

// }


// /* =========================================================
//    NORMALIZE EVENTS
// ========================================================= */

// function normalizeEvents(
//   events
// ) {

//   if (!Array.isArray(events)) {
//     return [];
//   }


//   return events.map(
//     (event) => {

//       if (typeof event === "string") {

//         return {

//           title: event,

//           location: "",

//           date: "",

//         };

//       }


//       return {

//         title:
//           event.title ??
//           event.status ??
//           event.description ??
//           event.name ??
//           "Shipment Update",


//         location:
//           event.location ??
//           event.place ??
//           event.hub ??
//           "",


//         date:
//           event.date ??
//           event.datetime ??
//           event.created_at ??
//           event.createdAt ??
//           "",

//       };

//     }
//   );

// }


// /* =========================================================
//    RAW PHP RESPONSE PARSER
// ========================================================= */

// function parseRawTrackingResponse(
//   raw,
//   trackingId
// ) {

//   /*
//    * This is intentionally conservative.
//    *
//    * If tracking.php returns HTML,
//    * we show the raw response in the console
//    * instead of pretending we know its structure.
//    */


//   console.log(
//     "Raw tracking.php response:",
//     raw
//   );


//   const text =
//     raw.replace(
//       /<[^>]*>/g,
//       " "
//     ).replace(
//       /\s+/g,
//       " "
//     ).trim();


//   /*
//    * Try to extract the values visible
//    * in the response.
//    */


//   const bookingMatch =
//     text.match(
//       /Booking Date\s*:?\s*([^|]+?)(?=Expected Delivery|Status|Reasons|$)/i
//     );


//   const expectedMatch =
//     text.match(
//       /Expected Delivery Date\s*:?\s*([^|]+?)(?=Status|Reasons|$)/i
//     );


//   const statusMatch =
//     text.match(
//       /Status\s*:?\s*([^|]+?)(?=Reasons|$)/i
//     );


//   return {

//     trackingId,

//     bookingDate:
//       bookingMatch
//         ? bookingMatch[1].trim()
//         : null,

//     expectedDeliveryDate:
//       expectedMatch
//         ? expectedMatch[1].trim()
//         : null,

//     status:
//       statusMatch
//         ? statusMatch[1].trim()
//         : "Packing",

//     reason: "",

//     origin: "Puducherry",

//     destination: "",

//     events: [],

//     raw: raw,

//   };

// }


// export default Tracking;

import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Loader2,
  MapPin,
  Package,
  Search,
  Truck,
} from "lucide-react";

import { useState } from "react";

import "./Tracking.css";


/* =========================================================
   TRACKING API
========================================================= */

/*
  IMPORTANT:

  During local development:
  React = http://localhost:5174
  PHP    = http://www.7slogistics.in

  Therefore we MUST use the complete PHP URL here.
*/

// const TRACKING_API =
//   "http://www.7slogistics.in/admin/tracking.php";
const TRACKING_API =
  "/tracking-api/admin/tracking.php";

/* =========================================================
   FORMAT DATE
========================================================= */

function formatDate(value) {

  if (!value) {
    return "--";
  }

  const cleanValue =
    String(value).trim();

  const date =
    new Date(cleanValue);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return cleanValue;
  }

  return date.toLocaleString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );
}


/* =========================================================
   CLEAN TEXT
========================================================= */

function cleanText(value = "") {

  return String(value)
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .trim();
}


/* =========================================================
   STATUS CLASS
========================================================= */

function getStatusClass(
  status = ""
) {

  const value =
    status.toLowerCase();


  if (
    value.includes("deliver")
  ) {
    return "delivered";
  }


  if (
    value.includes("transit") ||
    value.includes("dispatch")
  ) {
    return "transit";
  }


  if (
    value.includes("packing") ||
    value.includes("book")
  ) {
    return "packing";
  }


  return "default";
}


/* =========================================================
   EXTRACT HEADER VALUE
========================================================= */

function extractHeaderValue(
  text,
  label,
  nextLabels = []
) {

  const escapedLabel =
    label.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );


  let ending = "$";


  if (
    nextLabels.length > 0
  ) {

    const escapedNextLabels =
      nextLabels
        .map(
          (item) =>
            item.replace(
              /[.*+?^${}()|[\]\\]/g,
              "\\$&"
            )
        )
        .join("|");


    ending =
      `(?=${escapedNextLabels}\\s*:|$)`;

  }


  const regex =
    new RegExp(
      `${escapedLabel}\\s*:\\s*(.*?)${ending}`,
      "i"
    );


  const match =
    text.match(regex);


  return match
    ? cleanText(match[1])
    : "";
}


/* =========================================================
   PARSE TIMELINE EVENT
========================================================= */

function parseTimelineEvent(
  block
) {

  const content =
    block.querySelector(
      ".cd-timeline-content"
    );


  if (!content) {
    return null;
  }


  const paragraph =
    content.querySelector(
      "p"
    );


  const dateElement =
    content.querySelector(
      ".cd-date"
    );


  const paragraphText =
    cleanText(
      paragraph?.textContent || ""
    );


  const timelineDate =
    cleanText(
      dateElement?.textContent || ""
    );


  if (
    !paragraphText &&
    !timelineDate
  ) {
    return null;
  }


  let title =
    paragraphText;


  let eventDate =
    "";


  /* =======================================================
     FORMAT:

     2026-09-11 20:21 Shortly Delivered
  ======================================================= */

  const isoDate =
    title.match(
      /^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}(?::\d{2})?/
    );


  if (isoDate) {

    eventDate =
      isoDate[0];


    title =
      title
        .replace(
          isoDate[0],
          ""
        )
        .trim();

  }


  /* =======================================================
     FORMAT:

     Arrived At PUNE HUB
     08 Sep 2026 01:10
  ======================================================= */

  if (!eventDate) {

    const normalDate =
      title.match(
        /\b\d{1,2}\s+[A-Za-z]{3,9}\s+\d{4}\s+\d{2}:\d{2}(?::\d{2})?\b/
      );


    if (normalDate) {

      eventDate =
        normalDate[0];


      title =
        title
          .replace(
            normalDate[0],
            ""
          )
          .trim();

    }

  }


  return {

    title:
      title ||
      "Shipment Update",

    eventDate,

    date:
      timelineDate,

  };
}


/* =========================================================
   PARSE PHP HTML RESPONSE
========================================================= */

function parseTrackingResponse(
  html,
  requestedTrackingId
) {

  if (!html) {
    return null;
  }


  const parser =
    new DOMParser();


  const document =
    parser.parseFromString(
      html,
      "text/html"
    );


  const bodyText =
    cleanText(
      document.body?.innerText ||
      ""
    );


  if (!bodyText) {
    return null;
  }


  /* =======================================================
     TRACKING ID

     PHP typo is "Traking Id"
  ======================================================= */

  const trackingId =
    extractHeaderValue(
      bodyText,
      "Traking Id",
      [
        "Booking Date",
      ]
    ) ||
    extractHeaderValue(
      bodyText,
      "Tracking Id",
      [
        "Booking Date",
      ]
    ) ||
    requestedTrackingId;


  /* =======================================================
     BOOKING DATE
  ======================================================= */

  const bookingDate =
    extractHeaderValue(
      bodyText,
      "Booking Date",
      [
        "Expected Delivery Date",
      ]
    );


  /* =======================================================
     EXPECTED DELIVERY
  ======================================================= */

  const expectedDeliveryDate =
    extractHeaderValue(
      bodyText,
      "Expected Delivery Date",
      [
        "Status",
      ]
    );


  /* =======================================================
     STATUS
  ======================================================= */

  const status =
    extractHeaderValue(
      bodyText,
      "Status",
      [
        "Reasons",
      ]
    ) ||
    "Unknown";


  /* =======================================================
     TIMELINE
  ======================================================= */

  const timelineBlocks =
    document.querySelectorAll(
      ".cd-timeline-block"
    );


  const events =
    Array.from(
      timelineBlocks
    )
      .map(
        parseTimelineEvent
      )
      .filter(Boolean);


  /* =======================================================
     RESULT
  ======================================================= */

  return {

    trackingId,

    bookingDate,

    expectedDeliveryDate,

    status,

    origin:
      "Puducherry",

    destination:
      "",

    events,

  };
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

function Tracking() {

  const [
    trackingId,
    setTrackingId,
  ] = useState("");


  const [
    shipment,
    setShipment,
  ] = useState(null);


  const [
    loading,
    setLoading,
  ] = useState(false);


  const [
    error,
    setError,
  ] = useState("");


  /* =======================================================
     TRACK SHIPMENT
  ======================================================= */

  const handleTrack =
    async (event) => {

      event.preventDefault();


      const id =
        trackingId.trim();


      /* ===================================================
         VALIDATION
      =================================================== */

      if (!id) {

        setError(
          "Please enter a tracking ID."
        );

        setShipment(null);

        return;
      }


      /* ===================================================
         RESET
      =================================================== */

      setLoading(true);

      setError("");

      setShipment(null);


      try {

        /* =================================================
           FORM DATA

           PHP expects:

           trackingid=124
        ================================================= */

        // const formData =
        //   new URLSearchParams();


        // formData.append(
        //   "trackingid",
        //   id
        // );


        // /* =================================================
        //    POST REQUEST
        // ================================================= */

        // const response =
        //   await fetch(
        //     TRACKING_API,
        //     {
        //       method: "POST",

        //       headers: {
        //         "Content-Type":
        //           "application/x-www-form-urlencoded; charset=UTF-8",

        //         Accept: "*/*",
        //       },

        //       body:
        //         formData.toString(),
        //     }
        //   );


        // /* =================================================
        //    HTTP ERROR
        // ================================================= */

        // if (!response.ok) {

        //   throw new Error(
        //     `Tracking server returned ${response.status}`
        //   );

        // }


        // /* =================================================
        //    READ HTML RESPONSE
        // ================================================= */

        // const html =
        //   await response.text();


        // console.log(
        //   "7 Star Logistics Tracking Response:",
        //   html
        // );


        // /* =================================================
        //    PARSE HTML
        // ================================================= */

        // const result =
        //   parseTrackingResponse(
        //     html,
        //     id
        //   );


        // if (!result) {

        //   throw new Error(
        //     "No shipment information was returned."
        //   );

        // }


        // /* =================================================
        //    SET SHIPMENT
        // ================================================= */

        // setShipment(
        //   result
        // );

        const formData = new URLSearchParams();

formData.append(
  "trackingid",
  id
);

const response = await fetch(
  TRACKING_API,
  {
    method: "POST",

    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded; charset=UTF-8",

      Accept: "*/*",
    },

    body: formData.toString(),
  }
);

if (!response.ok) {
  throw new Error(
    `Tracking server returned ${response.status}`
  );
}

const html =
  await response.text();

console.log(
  "TRACKING RESPONSE:",
  html
);

const result =
  parseTrackingResponse(
    html,
    id
);

if (!result) {
  throw new Error(
    "No shipment information was returned."
  );
}

setShipment(result);
      } catch (err) {

        console.error(
          "Tracking Error:",
          err
        );


        /*
         * Better message for CORS
         */

        if (
          err instanceof TypeError
        ) {

          setError(
            "Unable to connect to the tracking server. Please check the PHP server or CORS settings."
          );

        } else {

          setError(
            err.message ||
            "Unable to fetch shipment details."
          );

        }

      } finally {

        setLoading(false);

      }

    };


  /* =======================================================
     JSX
  ======================================================= */

  return (

    <section
      className="tracking-section"
      id="tracking"
    >

      <div className="tracking-container">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="tracking-header">

          <div>

            <div className="tracking-eyebrow">

              <span></span>

              SHIPMENT VISIBILITY

            </div>


            <h2>

              Know where your

              <span>
                shipment is.
              </span>

            </h2>

          </div>


          <p>

            Real-time shipment visibility gives you
            the confidence to know what's moving,
            where it's moving and what's next.

          </p>

        </div>


        {/* =================================================
            MAIN PANEL
        ================================================= */}

        <div className="tracking-panel">


          {/* =================================================
              LEFT
          ================================================= */}

          <div className="tracking-left">

            <div className="tracking-panel-label">

              <span className="tracking-status-dot"></span>

              LIVE SHIPMENT TRACKING

            </div>


            <h3>

              Track your shipment

              <span>
                in seconds.
              </span>

            </h3>


            <p className="tracking-panel-description">

              Enter your shipment or tracking number
              below to get the latest status and
              movement details.

            </p>


            {/* =================================================
                FORM
            ================================================= */}

            <form
              className="tracking-form"
              onSubmit={handleTrack}
            >

              <div className="tracking-input-wrapper">

                <Package size={17} />

                <input
                  type="text"
                  placeholder="Enter shipment ID"
                  value={trackingId}
                  onChange={(event) =>
                    setTrackingId(
                      event.target.value
                    )
                  }
                />

              </div>


              <button
                type="submit"
                disabled={loading}
              >

                {loading ? (

                  <>
                    <Loader2
                      size={16}
                      className="tracking-spinner"
                    />

                    <span>
                      Checking...
                    </span>
                  </>

                ) : (

                  <>
                    <span>
                      Track Shipment
                    </span>

                    <ArrowRight size={16} />
                  </>

                )}

              </button>

            </form>


            {/* =================================================
                EXAMPLE
            ================================================= */}

            <div className="tracking-example">

              <span>
                Example
              </span>

              <strong>
                124
              </strong>

            </div>


            {/* =================================================
                ERROR
            ================================================= */}

            {error && (

              <div className="tracking-error">

                <AlertCircle size={17} />

                <div>

                  <strong>
                    Tracking unavailable
                  </strong>

                  <span>
                    {error}
                  </span>

                </div>

              </div>

            )}


            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="tracking-features">

              <div>

                <CheckCircle2 size={14} />

                <span>
                  Real-time visibility
                </span>

              </div>


              <div>

                <CheckCircle2 size={14} />

                <span>
                  Route updates
                </span>

              </div>


              <div>

                <CheckCircle2 size={14} />

                <span>
                  Delivery status
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT
          ================================================= */}

          <div className="tracking-right">

            {shipment ? (

              <ShipmentResult
                shipment={shipment}
              />

            ) : (

              <EmptyTracking />

            )}

          </div>

        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="tracking-bottom">


          <div className="tracking-bottom-item">

            <Clock3 size={17} />

            <div>

              <strong>
                24×7 Support
              </strong>

              <span>
                We're here when you need us.
              </span>

            </div>

          </div>


          <div className="tracking-bottom-divider"></div>


          <div className="tracking-bottom-item">

            <MapPin size={17} />

            <div>

              <strong>
                Shipment Visibility
              </strong>

              <span>
                Stay informed throughout the journey.
              </span>

            </div>

          </div>


          <div className="tracking-bottom-divider"></div>


          <div className="tracking-bottom-item">

            <Truck size={17} />

            <div>

              <strong>
                Reliable Movement
              </strong>

              <span>
                Built around dependable delivery.
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}


/* =========================================================
   SHIPMENT RESULT
========================================================= */

function ShipmentResult({
  shipment,
}) {

  const status =
    shipment.status ||
    "Unknown";


  return (

    <div className="shipment-result">


      {/* =================================================
          STATUS HEADER
      ================================================= */}

      <div className="tracking-card-top">

        <div>

          <span>
            SHIPMENT STATUS
          </span>

          <strong>
            {status}
          </strong>

        </div>


        <div
          className={`tracking-live tracking-status-${getStatusClass(
            status
          )}`}
        >

          <span></span>

          {status.toUpperCase()}

        </div>

      </div>


      {/* =================================================
          SHIPMENT DETAILS
      ================================================= */}

      <div className="shipment-summary">


        {/* TRACKING ID */}

        <div className="shipment-summary-card">

          <Package size={17} />

          <div>

            <span>
              TRACKING ID
            </span>

            <strong>
              {shipment.trackingId}
            </strong>

          </div>

        </div>


        {/* BOOKING DATE */}

        <div className="shipment-summary-card">

          <CalendarDays size={17} />

          <div>

            <span>
              BOOKING DATE
            </span>

            <strong>
              {formatDate(
                shipment.bookingDate
              )}
            </strong>

          </div>

        </div>


        {/* EXPECTED DELIVERY */}

        <div className="shipment-summary-card">

          <Clock3 size={17} />

          <div>

            <span>
              EXPECTED DELIVERY
            </span>

            <strong>
              {formatDate(
                shipment.expectedDeliveryDate
              )}
            </strong>

          </div>

        </div>

      </div>


      {/* =================================================
          ROUTE
      ================================================= */}

      <div className="tracking-route">


        {/* FROM */}

        <div className="tracking-location">

          <div className="tracking-location-icon origin">

            <MapPin size={15} />

          </div>

          <div>

            <span>
              FROM
            </span>

            <strong>
              {shipment.origin}
            </strong>

          </div>

        </div>


        {/* LINE */}

        <div className="tracking-route-line">

          <div className="tracking-route-base"></div>

          <div className="tracking-route-active"></div>

          <div className="tracking-truck">

            <Truck size={16} />

          </div>

        </div>


        {/* TO */}

        <div className="tracking-location">

          <div className="tracking-location-icon destination">

            <MapPin size={15} />

          </div>

          <div>

            <span>
              TO
            </span>

            <strong>
              {shipment.destination ||
                "Destination"}
            </strong>

          </div>

        </div>

      </div>


      {/* =================================================
          TIMELINE
      ================================================= */}

      <div className="tracking-timeline">

        {shipment.events.length > 0 ? (

          shipment.events.map(
            (event, index) => (

              <div
                className={`tracking-step ${
                  index === 0
                    ? "current"
                    : "completed"
                }`}
                key={`${event.date}-${index}`}
              >


                {/* MARKER */}

                <div className="tracking-step-marker">

                  {index === 0 ? (

                    <span></span>

                  ) : (

                    <CheckCircle2 size={14} />

                  )}

                </div>


                {/* CONNECTING LINE */}

                {index !==
                  shipment.events.length - 1 && (

                  <div className="tracking-step-line"></div>

                )}


                {/* CONTENT */}

                <div className="tracking-step-content">

                  <div>

                    <strong>
                      {event.title}
                    </strong>


                    {index === 0 && (

                      <span className="tracking-current-label">
                        LATEST
                      </span>

                    )}

                  </div>


                  {event.eventDate && (

                    <span className="tracking-event-detail-date">

                      {event.eventDate}

                    </span>

                  )}

                </div>


                {/* PHP CD DATE */}

                <time>

                  {formatDate(
                    event.date
                  )}

                </time>

              </div>

            )

          )

        ) : (

          <div className="tracking-no-events">

            <Clock3 size={17} />

            <span>
              No shipment movement history available.
            </span>

          </div>

        )}

      </div>

    </div>

  );
}


/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyTracking() {

  return (

    <div className="tracking-empty-state">

      <div className="tracking-empty-icon">

        <Search size={28} />

      </div>


      <h3>
        Track your shipment
      </h3>


      <p>

        Enter your tracking ID to view
        booking details, current status,
        hub movements and delivery updates.

      </p>


      <div className="tracking-empty-line">

        <span></span>

        <span></span>

        <span></span>

      </div>

    </div>

  );
}


export default Tracking;