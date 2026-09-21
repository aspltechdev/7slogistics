// import { ArrowUpRight, Menu, X } from "lucide-react";
// import { useState } from "react";
// import "./Header.css";

// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Tracking", href: "#tracking" },
//   { label: "Contact", href: "#contact" },
// ];

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="site-header">
//       <div className="header-container">

//         {/* Logo */}
//         <a href="#home" className="brand-logo" onClick={closeMenu}>
//           <div className="brand-mark">
//             <span>7</span>
//           </div>

//           <div className="brand-text">
//             <strong>7 STAR</strong>
//             <span>LOGISTICS</span>
//           </div>
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="desktop-nav">
//           {navLinks.map((link) => (
//             <a key={link.label} href={link.href}>
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         {/* Desktop CTA */}
//         <a href="#contact" className="header-cta">
//           Get a Quote
//           <ArrowUpRight size={17} strokeWidth={2} />
//         </a>

//         {/* Mobile Button */}
//         <button
//           className="mobile-menu-btn"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <div className={`mobile-nav ${menuOpen ? "active" : ""}`}>
//         {navLinks.map((link) => (
//           <a
//             key={link.label}
//             href={link.href}
//             onClick={closeMenu}
//           >
//             {link.label}
//           </a>
//         ))}

//         <a
//           href="#contact"
//           className="mobile-nav-cta"
//           onClick={closeMenu}
//         >
//           Get a Quote
//           <ArrowUpRight size={17} />
//         </a>
//       </div>
//     </header>
//   );
// }

// export default Header;


import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  Package,
  X,
} from "lucide-react";
import { useState } from "react";

import logo from "../../assets/logo.png";
import "./Header.css";

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
    dropdown: true,
  },
  {
    label: "Tracking",
    href: "#tracking",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const serviceLinks = [
  {
    label: "Surface Express",
    href: "#services",
  },
  {
    label: "Domestic Air Express",
    href: "#services",
  },
  {
    label: "Rail Express",
    href: "#services",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">

        {/* =========================
            LOGO
        ========================= */}
        <a
          href="#home"
          className="brand-logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="7 Star Logistics"
            className="brand-logo-image"
          />
        </a>

        {/* =========================
            DESKTOP NAVIGATION
        ========================= */}
        <nav className="desktop-nav">

          {navLinks.map((link) => (
            <div
              key={link.label}
              className={`nav-item ${
                link.dropdown ? "has-dropdown" : ""
              }`}
            >
              <a href={link.href}>
                <span>{link.label}</span>

                {link.dropdown && (
                  <ChevronDown
                    size={13}
                    strokeWidth={2}
                  />
                )}
              </a>

              {/* Services Dropdown */}
              {link.dropdown && (
                <div className="services-dropdown">

                  <div className="dropdown-label">
                    OUR SERVICES
                  </div>

                  {serviceLinks.map((service) => (
                    <a
                      href={service.href}
                      key={service.label}
                    >
                      <span className="dropdown-icon">
                        <Package
                          size={14}
                          strokeWidth={2}
                        />
                      </span>

                      <span className="dropdown-service-name">
                        {service.label}
                      </span>

                      <ArrowUpRight
                        size={14}
                        className="dropdown-arrow"
                      />
                    </a>
                  ))}

                </div>
              )}
            </div>
          ))}

        </nav>

        {/* =========================
            RIGHT ACTIONS
        ========================= */}
        <div className="header-right">

          <a
            href="#tracking"
            className="track-link"
          >
            <Package
              size={15}
              strokeWidth={2}
            />

            <span>Track Shipment</span>
          </a>

          <a
            href="#contact"
            className="header-cta"
          >
            <span>Get a Quote</span>

            <span className="header-cta-icon">
              <ArrowUpRight
                size={15}
                strokeWidth={2}
              />
            </span>
          </a>

        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================= */}
      <div
        className={`mobile-nav ${
          menuOpen ? "active" : ""
        }`}
      >
        <div className="mobile-nav-inner">

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="mobile-nav-link"
            >
              <span>{link.label}</span>

              {link.dropdown && (
                <ChevronDown
                  size={15}
                  strokeWidth={2}
                />
              )}
            </a>
          ))}

          <div className="mobile-nav-divider"></div>

          {/* Mobile Tracking */}
          <a
            href="#tracking"
            onClick={closeMenu}
            className="mobile-track-link"
          >
            <Package
              size={17}
              strokeWidth={2}
            />

            <span>Track Shipment</span>
          </a>

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mobile-nav-cta"
          >
            <span>Get a Quote</span>

            <ArrowUpRight
              size={17}
              strokeWidth={2}
            />
          </a>

        </div>
      </div>
    </header>
  );
}

export default Header;

