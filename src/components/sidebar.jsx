import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/img/logo_header.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SlideBar = ({ isOpen, toggleSidebar, scrollToRef }) => {
    const { t, i18n } = useTranslation();
    const [showServices, setShowServices] = useState(false); // State to track if services are displayed

    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
        toggleSidebar();
    };

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

    const handleServicesClick = (e) => {
        e.preventDefault();
        setShowServices(!showServices);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <button onClick={toggleSidebar} className="close-btn">
                    &times;
                </button>
            </div>
            <nav className="sidebar-nav">
                <img src={logo} style={{ width: '50%', marginTop: '-60px' }} alt="Header-logo" />
                <ul>
                    <li>
                        <a href="/" onClick={() => { toggleSidebar(); }}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={handleServicesClick}>
                            {t('Services')}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ height: "15px", marginLeft: "5px" }}
                            >
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                    </li>
                    {showServices && (
                        <ul style={{ paddingLeft: '20px' }}>
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link to={service.link} onClick={toggleSidebar}>
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    <li>
                        <a href="/contact" onClick={() => { toggleSidebar(); }}>
                            {t('Contact')}
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => { handleLanguageChange('eng'); }}>
                            English
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => { handleLanguageChange('fr'); }}>
                            French
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

SlideBar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
    scrollToRef: PropTypes.func.isRequired,
};

export default SlideBar;
