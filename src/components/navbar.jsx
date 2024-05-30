import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/img/logo_header.png";
import SlideBar from "../components/sidebar"; // Import the sidebar component

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation hook
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Create references for different sections
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Define scrollToRef function
  const scrollToRef = (sectionId) => {
    switch (sectionId) {
      case "#slider-one":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#service":
        serviceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  // Function to change the language
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  // Define services dropdown options
  const services = [
    { name: t("IT Support"), link: "/service/1" },
    { name: t("Telecommuting Services"), link: "/service/2" },
    { name: t("IT Equipment Management"), link: "/service/3" },
    { name: t("Data Backup and Recovery"), link: "/service/4" },
    { name: t("Cybersecurity and Data Protection"), link: "/service/5" },
    { name: t("Company IT Management"), link: "/service/6" },
    { name: t("Network and Device Monitoring"), link: "/service/7" },
    { name: t("Hardware Provisioning"), link: "/service/8" },
    { name: t("Custom Projects"), link: "/service/9" },
  ];
  
  return (
    <>
      <div className="main-header-area">
        <div className="container">
          <div className="sticky-header" style={{ padding: "0.5rem" }}>
            <div className="row align-items-center">
              <div className="col-lg-9 col-6">
                <div
                  className="logo-area"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <a href="#">
                    <img
                      src={logo}
                      style={{ width: "auto", height: "50px", marginTop: '14px' }}
                      alt={t("Header-logo")}
                    />
                  </a>
                  <nav className="d-none d-lg-block navbar navbar-expand-lg justify-content-start py-0 pl-20 pl-lg-0">
                    <ul className="navbar-nav list-style-none">
                      <li className="nav-item active">
                        <a
                          className="nav-link"
                          href="#slider-one"
                          onClick={() => scrollToRef("#slider-one")}
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#about"
                          onClick={() => scrollToRef("#about")}
                        >
                          About
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Services {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style={{ height: "15px" }}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                          style={{width: "30vw"}}
                        >
                          {services.map((service, index) => (
                            <li key={index}>
                              <Link className="dropdown-item" to={service.link}>
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => handleLanguageChange("en")}
                        >
                          English
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          onClick={() => handleLanguageChange("fr")}
                        >
                          French
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-3 col-6 text-end">
              <Link
                to="/contact"
                className="btn d-lg-inline-block d-none"
                style={{
                  fontSize: "1rem",
                  borderRadius: "20px",
                  height: "36px",
                  display: "flex",
                  gap: "0.60rem",
                  alignItems: "center",
                  backgroundColor: "#527EFB",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                {t("Contact us")}
              </Link>
              </div>
              <div className="text-end d-lg-none">
                <div
                  className="hamburger-menu"
                  onClick={toggleSidebar}
                  style={{ position: "absolute", right: "7%", top: "25%" }}
                >
                  <i className="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render SlideBar and pass the required props */}
      <SlideBar
        scrollToRef={scrollToRef}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  );
};

export default Navbar;
