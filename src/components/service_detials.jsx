import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import services from '../utilities/servicesapi';
import img1 from '../assets/img/icon/Source_Company IT Management.png';
import img2 from '../assets/img/icon/Source_Telecommuting Services.png';
import img3 from '../assets/img/icon/Source_IT Equipment Management.png';
import img4 from '../assets/img/icon/Source_Data Backup and Recovery.png';
import img5 from '../assets/img/icon/Source_Cybersecurity and Data Protection.png';
import img6 from '../assets/img/icon/Source_Company IT Management.png';
import img7 from '../assets/img/icon/Source_Network and Device Monitoring.png';
import img8 from '../assets/img/icon/Source_Hardware Provisioning.png';
import img9 from '../assets/img/icon/Source_Custom Projects.png';
import S1 from '../assets/images/1.svg';
import S2 from '../assets/images/2.svg';
import S3 from '../assets/images/3.svg';
import S4 from '../assets/images/4.svg';
import S5 from '../assets/images/5.svg';
import S6 from '../assets/images/6.svg';
import S7 from '../assets/images/7.svg';
import S8 from '../assets/images/8.svg';
import S9 from '../assets/images/9.svg';

const ServiceDetail = () => {
    const { t, i18n } = useTranslation();
    const { serviceId, serviceLinkEn, serviceLinkFr } = useParams();
    const navigate = useNavigate();

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const serviceImages = [S1, S2, S3, S4, S5, S6, S7, S8, S9];

    const service = services.find(service => {
        return (serviceId && service.id === parseInt(serviceId)) || 
               (serviceLinkEn && service.linkEn === `en/${serviceLinkEn}`) || 
               (serviceLinkFr && service.linkFr === serviceLinkFr);
    });

    useEffect(() => {
        if (serviceLinkEn && i18n.language !== 'en') {
            i18n.changeLanguage('en');
        } else if (serviceLinkFr && i18n.language !== 'fr') {
            i18n.changeLanguage('fr');
        }
    }, [serviceLinkEn, serviceLinkFr, i18n]);

    if (!service) {
        return <div>{t('Service not found')}</div>;
    }

    const index = services.findIndex(serviceItem => serviceItem.id === service.id);

    return (
        <section className="about-services-area pt-120 pb-130 pt-md-60 pb-md-30 pt-xs-60 pb-xs-30" style={{ margin: '4rem 0' }}>
            <div className="container wow fadeInUp2 animated" data-wow-delay=".1s">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-services-img mb-30">
                            <img className="img-fluid service-img" src={serviceImages[index]} alt="Service" />
                        </div>
                        <div style={{ marginTop: '9rem' }}>
                            <h5 className="mb-20">{t(service.heading2)}</h5>
                            <p className="mb-35">{t(service.para2)}</p>
                            <h6 className="mb-30" style={{ textAlign: 'center', color: 'blue', lineHeight: '1.6rem' }}>{t(service.blueheading)}</h6>
                            <h5 className="mb-20">{t(service.heading3)}</h5>
                            <p className="mb-35">{t(service.para3)}</p>
                            <h6 className="mb-20">{t(service.subheading1)}</h6>
                            <p className="mb-35">{t(service.subpara1)}</p>
                            <h6 className="mb-20">{t(service.subheading2)}</h6>
                            <p className="mb-35">{t(service.subpara2)}</p>
                            <h6 className="mb-20">{t(service.subheading3)}</h6>
                            <p className="mb-35">{t(service.subpara3)}</p>
                            <h6 className="mb-20">{t(service.subheading100)}</h6>
                            <p className="mb-35">{t(service.subpara100)}</p>
                            <h5 className="mb-20">{t(service.heading8)}</h5>
                            <h6 className="mb-20">{t(service.subheading4)}</h6>
                            <p className="mb-35">{t(service.subpara4)}</p>
                            <h6 className="mb-20">{t(service.subheading5)}</h6>
                            <p className="mb-35">{t(service.subpara5)}</p>
                            <h6 className="mb-20">{t(service.subheading6)}</h6>
                            <p className="mb-35">{t(service.subpara6)}</p>
                            <h6 className="mb-20">{t(service.subheading7)}</h6>
                            <p className="mb-35">{t(service.subpara7)}</p>
                            <div className="mb-4">
                                <ul style={{ listStyle: 'dotted', marginLeft: '-30px', marginTop: '-10px' }}>
                                    <li className="mb-2">{t(service.qa1)}</li>
                                    <li className="mb-2">{t(service.qa2)}</li>
                                    <li className="mb-2">{t(service.qa3)}</li>
                                    <li className="mb-2">{t(service.qa4)}</li>
                                    <li className="mb-2">{t(service.qa5)}</li>
                                    <li className="mb-2">{t(service.qa6)}</li>
                                    <li className="mb-2">{t(service.qa7)}</li>
                                    <li className="mb-2">{t(service.qa8)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-services-text ps-xxl-5 mb-30 pt-30">
                            <h3 className="service-title-1 mb-30">{t(service.title)}</h3>
                            <h5 className="mb-20">{t(service.heading1)}</h5>
                            <h6 className="mb-10">{t(service.headingsub1)}</h6>
                            <p className="mb-35">{t(service.para1)}</p>
                            <div className="plan-box d-sm-flex align-items-center">
                                <div className="icon d-flex align-items-center">
                                    <img src={images[index]} alt="Icon" style={{ width: '5vw' }} />
                                    <h5>{t('Looking For an IT Expert?')}</h5>
                                </div>
                                <Link to="/contact" className="d-block"><i className="fal fa-long-arrow-right"></i></Link>
                            </div>
                            <ul style={{ marginLeft: '-30px' }}>
                                <li className="mb-20">{t(service.furtherdetails1)}</li>
                                <li className="mb-20">{t(service.furtherdetails2)}</li>
                                <li className="mb-20">{t(service.furtherdetails3)}</li>
                                <li className="mb-20">{t(service.furtherdetails4)}</li>
                                <li className="mb-20">{t(service.furtherdetails5)}</li>
                                <li className="mb-20">{t(service.furtherdetails6)}</li>
                                <li className="mb-20">{t(service.furtherdetails7)}</li>
                                <li className="mb-20">{t(service.furtherdetails8)}</li>
                                <li className="mb-20">{t(service.furtherdetails9)}</li>
                            </ul>
                            <h5 className="mb-20">{t(service.heading4)}</h5>
                            <p className="mb-30">{t(service.para4)}</p>
                            <h6 className="mb-20">{t(service.subheading8)}</h6>
                            <p className="mb-30">{t(service.subpara8)}</p>
                            <h6 className="mb-20">{t(service.subheading9)}</h6>
                            <p className="mb-30">{t(service.subpara9)}</p>
                            <h6 className="mb-20">{t(service.subheading10)}</h6>
                            <p className="mb-30">{t(service.subpara10)}</p>
                            <h5 className="mb-20">{t(service.heading5)}</h5>
                            <p className="mb-30">{t(service.para5)}</p>
                            <p className="mb-35">{t('We help our clients succeed by creating brand identities, digital IT experiences, and print materials. We would love to help you with making your experiences better, Connect with us.')}</p>
                            <Link to="/contact" className="theme_btn theme_btn3">{t('Learn More')} <i className="fal fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;
