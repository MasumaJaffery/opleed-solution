import React, { useState, useEffect } from 'react';
import '../assets/css/cookie.css';

const Cookies = () => {
  // Initialize consent state with localStorage value or null
  const [consent, setConsent] = useState(() => {
    const storedValue = localStorage.getItem('cookieConsent');
    if (storedValue === 'true') return true;
    if (storedValue === 'false') return false;
    return null; // Indicate that the user hasn't made a choice yet
  });

  useEffect(() => {
    if (consent === null) {
      document.body.classList.add('cookie-modal-open');
    } else {
      document.body.classList.remove('cookie-modal-open');
    }
  }, [consent]);

  const handleAllowCookies = () => {
    setConsent(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  const handleDisallowCookies = () => {
    setConsent(false);
    localStorage.setItem('cookieConsent', 'false');
  };

  return (
    <div className={`cookie-modal ${consent === null ? 'show' : ''}`}>
      <div className="cookie-modal-content">
        <p style={{margin: '1rem'}}>This website uses cookies to ensure you get the best experience on our website.</p>
        <div>
          <button className="btn btn-primary" onClick={handleAllowCookies}>Allow cookies</button>
          <button className="btn btn-outline-primary" onClick={handleDisallowCookies}>Disallow cookies</button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
