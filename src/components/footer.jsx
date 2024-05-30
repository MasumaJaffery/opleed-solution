import React from 'react';
import logo from '../assets/img/logo_footer.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  return (
    <footer className="footer-area pt-95 home-5 ">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".1s">
            <div className="footer__widget mb-30">
              <div className="footer-icon">
                <Link to="/">
                  <img style={{ width: '40%', marginBottom: '5rem'}} src={logo} alt="" />
                </Link>
                <p style={{marginTop: '-42px'}}>{t("OPLEED, your trusted IT partner. We offer 24/7 helpdesk and remote support, multi-level cybersecurity.")}</p> 
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".3s">
            <div className="footer__widget mb-30">
              <h6 className="widget-title text-white pb-15 mb-35">{t('Quick links')}</h6>
              <ul className="fot-list fot-flex">
                <li><Link to="/">{t('Home')}</Link></li>
                <li><Link to="/">{t('Services')}</Link></li>
                <li><Link to="/contact">{t('Contact')}</Link></li>
                <li><Link to="/cookie_policy">{t('Cookie Policy')}</Link></li>
                <li><Link to="/privacy_policy">{t('Privacy Policy')}</Link></li>
                <li><Link to="/data_policy">{t('Data Policy')}</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".5s">
            <div className="footer__widget form-widget mb-30">
              <h6 className="widget-title text-white pb-20 mb-35">{t('Subscribe Now')}</h6>
              <p>{t('Sign up to receive the latest articles')}</p>
              <form className="subscribe-form" action="#">
                <div className="input-box mail-input mb-10">
                  <input type="text" placeholder={t("Enter email address")} />
                </div>

                <button className="theme_btn subscribe-btn">{t("Subscribe Now")} <i className="fal fa-long-arrow-right"></i></button>
              </form>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp2 animated" data-wow-delay=".7s">
            <div className="footer__widget mb-30 pl-55 pl-lg-0 pl-md-0 pl-xs-0">
              <h6 className="widget-title text-white pb-15 mb-35">{t('Our Services')}</h6>
              <ul className="fot-list">
                <li><Link to="/">{t('IT Support')}</Link></li>
                <li><Link to="/service/5">{t('Cybersecurity and Data Protection')}</Link></li>
                <li><Link to="/service/3">{t('IT Equipment Management')}</Link></li>
                <li><Link to="/service/8">{t('Hardware Provisioning')}</Link></li>
                <li><Link to="/service/2">{t('Telecommuting Services')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-section">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 text-center">
              <div className="copyright">
                              <h6>Copyright ©2024 opleed.com </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
