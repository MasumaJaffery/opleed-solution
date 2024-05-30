import React from 'react';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/animate.css';
import './assets/css/magnific-popup.css';
import './assets/css/all.min.css';
import './assets/css/metisMenu.css';
import './assets/css/nice-select.css';
import './assets/css/spacing.css';
import './assets/css/main.css';
import Footer from './components/footer';
import HomePage from './components/pages/homepage';
import ContactPage from './components/pages/contactpage';
import ServiceDetailPage from './components/pages/servicepage'; // Import ServiceDetailPage component
import ServiceDetail from './components/service_detials'; // Import ServiceDetail component
import Cookies from './components/cookies';
import PrivacyPage from './components/pages/pp_page';
import CookiePolicyPage from './components/pages/cookie_page';
import DataPolicyPage from './components/pages/data-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/primary_nav_link';

function App() {
    return (
        <div className="App">
            <Router>
                <Cookies />
                <Header />
                <div className="content">
                    <Routes>
                        {/* Homepage */}
                        <Route path="/" element={<HomePage />} />

                        {/* Service Detail Page */}
                        <Route path="/service/:serviceId" element={<ServiceDetail />} />
                <Route path="/en/:serviceLinkEn" element={<ServiceDetail />} />
                <Route path="/:serviceLinkFr" element={<ServiceDetail />} />
                        
                        {/* Contact Page */}
                        <Route path="/contact" element={<ContactPage />} />

                         {/* Privacy Policy Page */}
                         <Route path="/privacy_policy" element={<PrivacyPage />} />

                          {/* Cookie Policy Page */}
                        <Route path="/cookie_policy" element={<CookiePolicyPage />} />

                         {/* Data Policy Page */}
                         <Route path="/data_policy" element={<DataPolicyPage />} />
                    </Routes>
                </div>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
