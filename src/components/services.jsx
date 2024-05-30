import React from 'react';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/img/icon/Source_Company IT Management.png';
import img2 from '../assets/img/icon/Source_Telecommuting Services.png';
import img3 from '../assets/img/icon/Source_IT Equipment Management.png';
import img4 from '../assets/img/icon/Source_Data Backup and Recovery.png';
import img5 from '../assets/img/icon/Source_Cybersecurity and Data Protection.png';
import img6 from '../assets/img/icon/Source_Company IT Management.png';
import img7 from '../assets/img/icon/Source_Network and Device Monitoring.png';
import img8 from '../assets/img/icon/Source_Hardware Provisioning.png';
import img9 from '../assets/img/icon/Source_Custom Projects.png';
import services from '../utilities/servicesapi';
import icon4 from "../assets/img/blueline2.png";
import icon2 from "../assets/img/Icon 2.jpg";
import '../assets/css/s.css';

const ServicesCarousel = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const handleNavigate = (service) => {
        const currentLanguage = i18n.language;
        const link = currentLanguage === 'en' ? service.linkEn : service.linkFr;
        console.log(`Navigating to: ${link}`); // Debugging line to check the URL
        navigate(link);
    };

    // Array of imported images
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return (
        <div id="service" className="wow fadeInUp2 animated" data-wow-delay=".1s">
            <div className="headings wow fadeInUp2 animated" data-wow-delay=".1s" style={{ display: 'flex', justifyContent: 'center'}}>
                {i18n.language === 'en' ? (
                    <h2
                        className="text-center p-2"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center', /* Align items vertically */
                            position: 'relative', /* Add relative positioning */
                            width: 'fit-content', /* Adjust width to fit content */
                            gap: '10px'
                        }}
                    >
                        <span>
                            <span
                                style={{
                                    backgroundImage: `url(${icon4})`,                 
                                    height: '18px',
                                    position: 'relative',
                                    display: 'block',
                                    top: '28px',  
                                    backgroundSize: 'contain',
                              }}
                            ></span>
                            <span style={{ position: "relative", marginLeft: '0.25rem', top: '-10px' }}>
                                Essential
                            </span>
                        </span>
                        <span>
                            services for your business.
                        </span>
                    </h2>
                ) : (
                    <h2
                        className="text-center p-2"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center', /* Align items vertically */
                            position: 'relative', /* Add relative positioning */
                            width: 'fit-content', /* Adjust width to fit content */
                            gap: '10px'
                        }}
                    >
                        <span>
                              Des services
                        </span>
                        <span>
                            <span
                                style={{
                                 backgroundImage: `url(${icon4})`,               
                                 height: '18px',
                                 position: 'relative',
                                 display: 'block',
                                 top: '28px',  
                                 backgroundSize: 'contain',
                                }}
                            ></span>
                            <span style={{ position: "relative", marginLeft: '0.25rem', top: '-10px'}}>
                                essentiels
                            </span>
                        </span>
                        <span>
                            pour votre entreprise.
                        </span>
                    </h2>
                )}
                <img src={icon2} alt='icon' style={{width: '5%', height: '4%', alignSelf: 'center'}} /> {/* Adjust alignment */}
            </div>

            <section id="services" className="services-area-three pb-30" style={{ marginTop: '2rem' }}>
                <div className="container wow fadeInUp2 animated" data-wow-delay=".1s">
                    <div className="row">
                        {services.map((service, index) => (
                            <div key={service.id} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-services3 text-center mb-30">
                                    {/* Use images[index] to select the correct image dynamically */}
                                    <img className="mb-30" src={images[index]} alt="Services icon" style={{ width: '28%' }} />
                                    <h5 className="fs-20">{t(service.title)}</h5>
                                    <p>{t(service.description)}</p>
                                    <div className='service-btn'>
                                    <a
                                        className="tot-list"
                                        onClick={() => handleNavigate(service)}
                                    >
                                        {t('Read More')}
                                    </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesCarousel;
