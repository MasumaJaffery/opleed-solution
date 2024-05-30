import React from "react";
import { useTranslation } from 'react-i18next';

const CookiePolicy = () => {
    const { t } = useTranslation(); 
    return (
        <>
            <section
                id="contact"
                className="contact-area pt-120 pb-90 pt-md-60 pb-md-60 pt-xs-60 pb-xs-60"
                style={{
                    backgroundImage: 'linear-gradient(rgba(82, 126, 251, 0.40), rgba(255, 255, 255, 1))'
                }}
            >
                <div className="container mt-60">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="mb-20">{t('Cookie Policy')}</h2>
                            <p className="mb-20">
                                {t('We are pleased that you are visiting our website at www.opleed.com operated by Opleed, Jurczak Krystian, Bouwkunstlaan 46, Dilbeek, Belgium, 1700 (“Opleed”, “we”, “us”, or “our”). Data protection and data security when using our website are very important to us.')}
                            </p>

                            <p className="mb-20">
                                {t('In this Cookie Policy we adhere to our obligations set out in Belgium`s Electronic Communications Act of 13 June 2005, the Code of Economic Law (“CEL”), the Royal Decree of 4 April 2003 on the sending of advertising by email (“RD”) and the EU`s Privacy and Electronic Communications Directive (“PECD”) and inform you about the purposes for which we and our partners use cookies and similar technologies and how you can manage your preferences regarding cookies.')}
                            </p>

                            <p className="mb-20">
                                {t('If you have any questions about the cookies we use or about our data protection practices in general, please contact us using info@opleed.com.')}
                            </p>

                            <h4 className="mb-20">{t('What are cookies?')}</h4>
                            <p className="mb-20">
                                {t("Cookies are small text files that are sent to your computer to ensure the technical functionality of the website. We use cookies in some areas of our website to make it easier for you to use the pages and to make them more personalized.")}
                            </p>

                            <p className="mb-20">
                                {t("When trying to understand cookies, it can help to know following terminology:")}
                            </p>
                            <ul className="mb-20">
                                <li className="mb-10">{t("Essential or Necessary cookies. These cookies are essential or necessary to ensure that a website works properly and is secure so that you can navigate a website and use its features. Without these cookies, certain features of a website would not function, and thus you would not be able to use certain services.")}</li>
                                <li className="mb-10">{t("Optional cookies. These cookies are non-essential for the website to function and require your consent. When it comes to optional cookies the following distinctions are made:")}
                                    <ul className="mb-20">
                                        <li className="mb-10">{t("Functional cookies or sometimes called convenience cookies. These cookies allow a website to remember the options a user has made (including user ID's stored, consents given, or languages selected) and other personalization options you have selected when browsing.")}</li>
                                        <li className="mb-10">{t("Analysis and performance cookies, which are used to monitor and improve the function and service of a website. Those can track down problems when using a website, facilitate online surveys, record visitor numbers, and provide analytics metrics.")}</li>
                                        <li className="mb-10">{t("Advertising cookies or targeting cookies. They are used to deliver customized advertising to the user.")}</li>
                                    </ul>
                                </li>
                            </ul>

                            <h4 className="mb-20">{t('Consent for Cookies')}</h4>
                            <p className="mb-20">
                                {t('The CEL and PECD require us to ask for your consent when using specific cookies (in particular any cookie that is not strictly necessary for the operation of the website, for example, Functional cookies, Analysis and performance cookies and Advertising cookies or targeting cookies “Optional cookies”); and to have a legal basis for the use of personal data in relation to cookies, the use of cookies would then be your consent as well as our legitimate interest.')}
                            </p>

                            <h4 className="mb-20">{t('What cookies do we use?')}</h4>
                            <p className="mb-20">
                                {t('We only use optional cookies with your prior consent. If you are visiting our website for the first time, a banner will appear on our website asking for your consent to use optional cookies. If you consent to this, we will store a cookie on your computer and the banner will not be displayed again for the lifetime of the cookie. Thereafter, or if you actively delete this cookie beforehand, the banner will be displayed again the next time you visit our website in order to obtain your consent again.')}
                            </p>

                            <h5 className="mb-20">{t('Google Analytics')}</h5>
                            <p className="mb-20">
                                {t('We use Google Analytics, a web analytics service provided by Google LLC (1600 Amphitheatre Parkway Mountain View, CA 94043, US, und Google Ireland Limited Gordon House, Barrow Street, Dublin 4, Ireland). Google Analytics also uses cookies to enable our website to analyze how users use our website across multiple devices. The information generated by the cookies about your use of our website is transmitted to and stored by Google, including transmission to the United States. The following data is processed through the use of Google Analytics:')}
                            </p>
                            <ul>
                                <li>{t('3 bytes of the IP address of the called system of the website visitor (anonymised IP address),')}</li>
                                <li>{t('the website called up,')}</li>
                                <li>{t('the website from which the user reached the accessed page of our website (referrer),')}</li>
                                <li>{t('the subpages accessed from the website,')}</li>
                                <li>{t('the time spent on the website')}</li>
                                <li>{t('the frequency with which the website is accessed.')}</li>
                            </ul>
                            <p className="mb-20">
                                {t('Google states that it will not associate your IP address with any other data held by Google. The use of this service is based on your consent.')}
                            </p>
                            <p className="mb-20">
                                {t('You can disable tracking by Google Analytics with future effect by downloading and installing the Google Analytics Opt-out Browser Add-on for your current web browser following this link http://tools.google.com/dlpage/gaoptout?hl=en.')}
                            </p>
                            <h5 className="mb-20">{t('LinkedIn Insight Tag')}</h5>
                            <p className="mb-20">
                                {t('On our website we use the LinkedIn Insight Tag for conversion tracking by LinkedIn (605 W Maude Ave, Sunnyvale, CA 94085, USA). The Insight Tag places unique LinkedIn browser cookies (conversion cookie) in your browser to enable the collection of the following data for this cookie: Metadata such as IP address, timestamp and page events (e.g. page visits). These cookies have limited validity. If you visit certain pages within our website and the cookie has not expired, both we and LinkedIn can recognize that you were directed to that page after clicking on the advertisement. ')}
                            </p>
                            <p className="mb-20">
                                {t('The LinkedIn Insight Tag allows LinkedIn to collect data on website visits, including URL, referrer URL, IP address, and device and browser features (user agent) as well as the time stamp. This data is transmitted to LinkedIn, the IP addresses are shortened or hashed (if they are used to reach members on different devices). The direct LinkedIn member identification numbers are removed within seven days in order to pseudonymised the data. The remaining pseudonymized data are then deleted by LinkedIn within 180 days. ')}
                            </p>
                            <p className="mb-20">
                                {t('LinkedIn does not share any personal data with us. It merely offers summary reports about the website’s target group and the performance of the advertisement. The information collected using the conversion cookie is used to compile conversion statistics. These inform us about the total number of users who click on one of our advertisements and who have been taken to a page with a conversion tracking tag. The retargeting function provided by LinkedIn helps us show visitors to our website target group-specific advertisements for our products and services outside of our website without being able to identify the user. The legal basis for the processing is your consent.')}
                            </p>
                            <p className="mb-20">
                                {t('If you do not wish to participate in usage-based advertising through LinkedIn you can change your ad settings by following these instructions: https://www.linkedin.com/help/linkedin/answer/a1342443')}
                            </p>
                            <p className="mb-20">
                                {t('If you do not wish to participate in our advertising personalization or retargeting/tracking you can object to behavioral advertising at the following websites: Your Online Choices, Digital Advertising Alliance of Canada, Network Advertising Initiative, AdChoices and the European Interactive Digital Advertising Alliance (Europe only).')}
                            </p>
                            <h4 className="mb-20">{t('How to disable cookies?')}</h4>
                            <p className="mb-20">
                                {t('You can set your web browser to disable cookies. Please note that most browsers offer different ways to protect your privacy. If you do not activate or deactivate certain cookies via the browser settings, it is possible that certain functionalities will not be available to you as expected.')}
                            </p>
                            <p className="mb-20">
                                {t('You can configure the use of cookies in your browser settings by following the relevant link Google Chrome, Mozilla Firefox, Microsoft Edge, Opera, Safari at any time or deactivate them completely.')}
                            </p>
                            <p className="mb-20">
                                {t('Please note that if you disable cookies in this way, you will not be able to set new cookies. However, it will not prevent previously set cookies from continuing to work on your device until you clear all cookies in your browser settings.')}
                            </p>
                            <h4 className="mb-20">{t('Does this policy change?')}</h4>
                            <p className="mb-20">
                                {t('We may update our Cookie Policy from time to time. This might be for a number of reasons, such as to reflect a change in the law or to accommodate a change in our business practices and the way we use cookies. We recommend that you check here periodically for any changes to our Cookie Policy. This Cookie Policy was last updated on Friday, 26th of April 2024.')}
                            </p>
                            <h4 className="mb-20">{t('Who should I contact for more information?')}</h4>
                            <p className="mb-20">
                                {t('If you feel that the above is not sufficient or if you have any queries as regards the collection, processing or use of your information we are looking forward to hearing from you. We will make every effort to reply as soon as possible and take into consideration any suggestions from your end.')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CookiePolicy;
