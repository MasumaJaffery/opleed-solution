import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companySize: '',
    industry: '',
    subject: 'Subject',
    message: '',
    service: '',
    contactMethod: '', 
    agreeToTerms: false
  });

  const services = [
    { name: t("IT Support") },
    { name: t("Telecommuting Services") },
    { name: t("IT Equipment Management") },
    { name: t("Data Backup and Recovery") },
    { name: t("Cybersecurity and Data Protection") },
    { name: t("Company IT Management") },
    { name: t("Network and Device Monitoring") },
    { name: t("Hardware Provisioning") },
    { name: t("Custom Projects") },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xkndpkja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert(t('Form submitted successfully!'));
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          companySize: '',
          industry: '',
          subject: 'Subject',
          message: '',
          service: '',
          contactMethod: '', 
          agreeToTerms: false
        });
      } else {
        alert(t('Error submitting form, please try again.'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('Error submitting form, please try again.'));
    }
  };

  const onChange = (value) => {
    // Handle onChange for reCAPTCHA if needed
  };

  return (
    <section id="contact" className="contact-area pt-120 pb-90 pt-md-60 pb-md-60 pt-xs-60 pb-xs-60 wow fadeInUp2 animated" data-wow-delay=".1s"
      style={{backgroundImage: 'linear-gradient(#fff, rgba(82, 126, 251, 0.40))'}}
    >
      <div className="container">
        <div className="row mt-70">
          <div className="col-lg-6">
            <div className="contact-short-info pr-50 pr-lg-0 pr-md-0 pr-xs-0 pl-80 pl-lg-0 pl-md-0 pl-xs-0">
              <div className="section-title mb-30">
                <h2 className="sect-title lh-1">{t('Contact Us')}</h2>
              </div>
              <p>
                {t('OPLEED, your strategic partner in transforming IT challenges into stepping stones for success. By combining cutting-edge expertise with innovative solutions, we ensure a reliable, secure, and efficient IT infrastructure. Unleash your potential, focus on what truly matters to you and your clients. With OPLEED, move forward confidently into the digital era.')}
              </p>
              <div className="adress-box">
                <div className="icon-link">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="address-content">
                  <p className="fs-14">{t('Phone Number')}</p>
                  <h6>+32488383201</h6>
                </div>
              </div>
              <div className="adress-box ab-2">
                <div className="icon-link">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="address-content">
                  <p className="fs-14">{t('Email Address')}</p>
                  <h6>Info@opleed.com</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form action="https://formspree.io/f/xkndpkja" method="POST" className="row contact-form mb-30" onSubmit={handleSubmit}
              style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', padding: '2.4rem', background: '#fff' }}>
              <div className="col-lg-6 col-md-6">
                <div className="input-box mb-20">
                  <label htmlFor="fullName">{t('Full Name')}</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder={t('Enter your Full Name')}
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-box mail-input mb-20">
                  <label htmlFor="email">{t('Email Address')}</label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t('Enter your Email Address')}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-20">
                <div className="input-box mb-12">
                  <label htmlFor="phoneNumber">{t('Phone Number')} ({t('Optional')})</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder={t('Enter your Phone number')}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-box mail-input mb-20">
                  <label htmlFor="companySize">{t('Company Size')}</label>
                  <select
                    id="companySize"
                    name="companySize"
                    className="form-control contact-form input"
                    value={formData.companySize}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('Select Company Size')}</option>
                    <option value="1-10">{t('1-10 employees')}</option>
                    <option value="11-50">{t('11-50 employees')}</option>
                    <option value="51-200">{t('51-200 employees')}</option>
                    <option value="201+">{t('201+ employees')}</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-box mail-input mb-20">
                  <label htmlFor="industry">{t('Industry')}</label>
                  <select
                    id="industry"
                    name="industry"
                    className="form-control contact-form input"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('Select Industry')}</option>
                    <option value="Healthcare">{t('Healthcare')}</option>
                    <option value="Finance">{t('Finance')}</option>
                    <option value="Education">{t('Education')}</option>
                    <option value="Manufacturing">{t('Manufacturing')}</option>
                    <option value="Other">{t('Other (please specify)')}</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 mb-20">
                <div className="input-box mail-input mb-20">
                  <label htmlFor="service">{t('Service')}</label>
                  <select style={{margin: 0}}
                    id="service"
                    name="service"
                    className="form-control contact-form input"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('Select Service')}</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12 mb-20">
                <div className="input-box text-input mb-15">
                  <label htmlFor="message">{t('Message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder={t('Enter your message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-group mb-20">
                <label htmlFor="contactMethod" style={{ marginRight: '10px' }}>{t('Preferred Contact Method')}: {t('How should we contact you?')}</label>
                <div className="form-check form-check-inline" style={{ display: 'flex', gap: '1.4rem' }}>
                  <label className="form-check-label" htmlFor="emailRadio">{t('Email')}</label>
                  <input className="form-check-input" type="radio" name="contactMethod" id="emailRadio" value="Email" onChange={handleChange} checked={formData.contactMethod === 'Email'} style={{ width: '1vw', height: '3vh' }} />
                  <label className="form-check-label" htmlFor="phoneRadio">{t('Phone')}</label>
                  <input className="form-check-input" type="radio" name="contactMethod" id="phoneRadio" value="Phone" onChange={handleChange} checked={formData.contactMethod === 'Phone'} style={{ width: '1vw', height: '3vh' }} />
                </div>
              </div>
              <div className="form-check mb-20">
                <input className="form-check-input" type="checkbox" id="gridCheck" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} style={{ width: '1vw', height: '3vh', marginBottom: '1rem', marginRight: '1rem' }} />
                <label className="form-check-label" htmlFor="gridCheck" style={{ position: 'relative', width: '82%' }}>
                  {t('I agree to the storage and handling of my data by this website according to the Privacy Policy.')}
                </label>
              </div>
              <ReCAPTCHA className='mb-20'
    sitekey="6Ldfm9ApAAAAAFta2oo3UueG5O6f5oVxvLZ57X1Q"
    onChange={onChange}
  />
              <button type="submit" className="form-btn form-btn3">{t('Send Inquiry')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
