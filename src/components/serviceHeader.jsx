import React from 'react';
import Navbar from './primary_nav_link';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

function Header() {
    const { t, i18n } = useTranslation(); // Use the useTranslation hook to access translations and i18n instance

    // Function to handle language change
    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language); // Update the language using i18n instance
    };

    return (
        <>
        <Navbar />
            </>
    );
}

export default Header;
