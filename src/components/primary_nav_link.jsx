import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo_header.png";
import SlideBar from "../components/sidebar";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);    
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const scrollToRef = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
    setSidebarOpen(false); // Close sidebar on navigation
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    // Adjust the current URL to the new language
    const currentPath = window.location.pathname;
    let newPath = currentPath;
  
    if (lng === "en" && currentPath.startsWith("/")) {
      newPath = currentPath.replace("/en", "/");
    } else if (lng === "fr" && currentPath.startsWith("/")) {
      newPath = currentPath.replace("/", "/");
    }
  
    navigate(newPath);
  };
  

  const services = [
    { name: t("IT Support"), linkEn: "/en/it-support", linkFr: "/support-informatique" },
    { name: t("Telecommuting Services"), linkEn: "/en/remote-work-services", linkFr: "/services-de-teletravail" },
    { name: t("IT Equipment Management"), linkEn: "/en/it-equipment-management", linkFr: "/gestion-du-materiel-informatique" },
    { name: t("Data Backup and Recovery"), linkEn: "/en/data-backup-and-recovery", linkFr: "/sauvegarde-et-recuperation-des-donnees" },
    { name: t("Cybersecurity and Data Protection"), linkEn: "/en/cybersecurity-and-data-protection", linkFr: "/cybersecurite-et-protection-des-donnees" },
    { name: t("Company IT Management"), linkEn: "/en/enterprise-it-management", linkFr: "/gestion-de-linformatique-de-lentreprise" },
    { name: t("Network and Device Monitoring"), linkEn: "/en/network-and-device-monitoring", linkFr: "/surveillance-des-reseaux-et-des-appareils" },
    { name: t("Hardware Provisioning"), linkEn: "/en/equipment-procurement", linkFr: "/approvisionnement-en-materiel-informatique" },
    { name: t("Custom Projects"), linkEn: "/en/customized-projects", linkFr: "/projets-personnalises" },
  ];
  

  return (
    <>
      <div className={`main-header-area ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="sticky-header" style={{ padding: "0.5rem" }}>
            <div className="row align-items-center">
              <div className="col-lg-9 col-6">
                <div
                  className="logo-area"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Link to="/">
                    <img
                      src={logo}
                      style={{ width: "auto", height: "50px" }}
                      alt={t("Header-logo")}
                    />
                  </Link>
                  <nav className="d-none d-lg-block navbar navbar-expand-lg justify-content-start py-0 pl-20 pl-lg-0">
                    <ul className="navbar-nav list-style-none">
                      <li className="nav-item">
                        <Link
                          to="/"
                          className="nav-link"
                          onClick={() => scrollToRef(homeRef)}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/"
                          className="nav-link"
                          onClick={() => scrollToRef(aboutRef)}
                        >
                          About
                        </Link>
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
                          {t("Services")}{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ height: "15px" }}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                          style={{ width: "30vw" }}
                        >
                          {services.map((service, index) => (
                            <li key={index}>
                              <Link 
                                className="dropdown-item" 
                                to={i18n.language === "en" ? service.linkEn : service.linkFr}
                              >
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
                  style={{ position: "absolute", right: "7%", top: "25%", color: '#fff' }}
                >
                  <i className="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SlideBar
        scrollToRef={scrollToRef}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* References for scrolling */}
      <div ref={homeRef}></div>
      <div ref={aboutRef}></div>
      <div ref={contactRef}></div>
    </>
  );
};

export default Navbar;
