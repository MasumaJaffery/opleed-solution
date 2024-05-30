import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation(); 

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) setFormData(storedData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/xkndpkja', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <>
      <section
        id="contact"
        className="contact-area pb-90 pt-md-20 pb-md-30 pt-xs-30 pb-xs-30 home-5"
        style={{ backgroundColor: '#7b94eb' }}
      >
        <div className="container wow fadeInUp2 animated" data-wow-delay=".1s">
          <div className="row align-items-center">
            <div className="col-lg-6" style={{ marginTop: '-5rem' }}>
              <div className="section-content mb-20 pl-40 pl-lg-0 pl-md-0 pl-xs-0">
                <div className="section-title mb-30">
                  <h2 className="title mb-20" style={{ color: '#fff', fontWeight: 600 }}>
                    {t('Get in touch')}
                  </h2>
                  <h4 className="title" style={{ color: '#fff' }}>
                    {t("Now Let's Discuss your Project")}
                  </h4>
                </div>
                <p className="description" style={{ color: '#fff' }}>
                  {t(
                    'Opleed is a leading IT solutions provider. Contact us today to learn more about how we can help you achieve your goals.'
                  )}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <form  action="https://formspree.io/f/xkndpkja"
  method="POST"
                className="row contact-form mb-30"
                onSubmit={handleSubmit}
              >
                <div className="col-lg-6 col-md-6">
                  <div className="input-box mb-20">
                    <input
                      type="text"
                      name="fullName"
                      placeholder={t('Enter your Full Name')}
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="input-box mail-input mb-20">
                    <input
                      type="email"
                      name="email"
                      placeholder={t('Enter your Email Address')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12 mb-20">
                  <div className="input-box sub-input">
                    <input
                      type="text"
                      name="subject"
                      placeholder={t('Enter your Subject')}
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-box text-input mb-15">
                    <textarea
                      name="message"
                      cols="30"
                      rows="10"
                      placeholder={t('Enter your Message')}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <button className="form-btn form-btn2" type="submit">
                    {t('Send Now')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
