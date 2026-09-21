import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTruck,
} from "react-icons/fa";

import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUp,
} from "react-icons/fi";

import "./Footer.css";


const services = [
  {
    label: "Surface Express",
    href: "#services",
  },
  {
    label: "Domestic Air Expressway",
    href: "#services",
  },
  {
    label: "Rail Express",
    href: "#services",
  },
];


const companyLinks = [
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Our Services",
    href: "#services",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Industries",
    href: "#industries",
  },
  {
    label: "Track Shipment",
    href: "#tracking",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];


const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
];


function Footer() {

  const currentYear =
    new Date().getFullYear();


  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  return (

    <footer className="footer">


      {/* =====================================================
          CTA
      ===================================================== */}

      {/* <div className="footer-cta-wrapper">

        <div className="footer-container">

          <div className="footer-cta">

            <div className="footer-cta-content">

              <div className="footer-cta-eyebrow">

                <span></span>

                READY TO MOVE?

              </div>


              <h2>

                Let's move your

                <span>
                  business forward.
                </span>

              </h2>


              <p>

                From pickup to destination,
                7 Star Logistics keeps your
                shipments moving with confidence.

              </p>

            </div>


            <a
              href="#contact"
              className="footer-cta-button"
            >

              <span>
                Request a Quote
              </span>

              <span className="footer-cta-icon">

                <FiArrowUpRight />

              </span>

            </a>

          </div>

        </div>

      </div> */}


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-main">

        <div className="footer-container">

          <div className="footer-grid">


            {/* =================================================
                BRAND
            ================================================= */}

            <div className="footer-brand">

              <a
                href="#"
                className="footer-logo"
              >

                <div className="footer-logo-mark">

                  <FaTruck />

                </div>


                <div className="footer-logo-text">

                  <strong>
                    7 STAR
                  </strong>

                  <span>
                    LOGISTICS
                  </span>

                </div>

              </a>


              <p className="footer-description">

                The NextGen Supply Chain Services
                Solution Provider in India.

              </p>


              <div className="footer-location">

                <FiMapPin />

                <span>

                  126 Lenin Street,
                  Kosapalayam,
                  Puducherry – 605013

                </span>

              </div>


              <div className="footer-contact">

                <a href="tel:+918610511252">

                  <FiPhone />

                  <span>
                    +91 86105 11252
                  </span>

                </a>


                <a
                  href="mailto:dineshkumar@7slogistics.in"
                >

                  <FiMail />

                  <span>
                    dineshkumar@7slogistics.in
                  </span>

                </a>

              </div>

            </div>


            {/* =================================================
                COMPANY
            ================================================= */}

            <div className="footer-column">

              <h3>
                Company
              </h3>


              <ul>

                {companyLinks.map(
                  (item) => (

                    <li key={item.label}>

                      <a href={item.href}>

                        <span>
                          {item.label}
                        </span>

                        <FiArrowUpRight />

                      </a>

                    </li>

                  )
                )}

              </ul>

            </div>


            {/* =================================================
                SERVICES
            ================================================= */}

            <div className="footer-column">

              <h3>
                Services
              </h3>


              <ul>

                {services.map(
                  (item) => (

                    <li key={item.label}>

                      <a href={item.href}>

                        <span>
                          {item.label}
                        </span>

                        <FiArrowUpRight />

                      </a>

                    </li>

                  )
                )}

              </ul>

            </div>


            {/* =================================================
                CONNECT
            ================================================= */}

            <div className="footer-column footer-connect">

              <h3>
                Stay Connected
              </h3>


              <p>

                Follow 7 Star Logistics
                for logistics updates,
                insights and company news.

              </p>


              <div className="footer-socials">

                {socialLinks.map(
                  (item) => {

                    const Icon =
                      item.icon;

                    return (

                      <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className="footer-social"
                      >

                        <Icon />

                      </a>

                    );

                  }
                )}

              </div>


              <div className="footer-support">

                <span className="footer-support-dot"></span>

                <div>

                  <strong>
                    24×7 Support
                  </strong>

                  <span>
                    We're here when you need us.
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              NETWORK STRIP
          ================================================= */}

          <div className="footer-network">

            <div className="footer-network-left">

              <span className="footer-network-dot"></span>

              <strong>
                CONNECTED LOGISTICS NETWORK
              </strong>

            </div>


            <div className="footer-network-line"></div>


            <div className="footer-network-right">

              <span>
                SURFACE
              </span>

              <span>
                AIR
              </span>

              <span>
                RAIL
              </span>

              <span>
                PAN-INDIA
              </span>

            </div>

          </div>


          {/* =================================================
              BOTTOM
          ================================================= */}

          <div className="footer-bottom">

            <div>

              © {currentYear} 7 Star Logistics.
              All rights reserved.

            </div>


            <div className="footer-bottom-links">

              <a href="#">
                Privacy Policy
              </a>

              <a href="#">
                Terms & Conditions
              </a>

            </div>


            <button
              type="button"
              className="footer-top-button"
              onClick={scrollToTop}
              aria-label="Back to top"
            >

              <FiArrowUp />

            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}


export default Footer;