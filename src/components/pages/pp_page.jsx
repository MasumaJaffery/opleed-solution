import React from "react";
import { useTranslation } from 'react-i18next';

const PP = () => {
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
              <h2 className="mb-20">{t('Privacy Policy')}</h2>
              <p className="mb-20">
                {t('We are pleased that you are visiting our website at')}
                <a href="https://www.opleedsolutions.com">www.opleedsolutions.com</a>. {t("Data protection and data security when using our website are very important to us. We would therefore like to inform you which of your Personal Data we collect when you visit our website and for what purposes it is used.")}
              </p>

              <h4 className="mb-20">{t('Who is responsible?')}</h4>
              <p className="mb-20">
                {t('The person responsible in the sense of Belgium\'s Law on the protection of individuals with regard to the processing of Personal Data of 30 July 2018 (the Framework Act) (“DPA”) and the EU’s General Data Protection Regulation (“GDPR”) is Opleed, Jurczak Krystian, Bouwkunstlaan 46, Dilbeek, Belgium, 1700 (“Opleed”, “we”, “us”, or “our”). Please direct any questions you may have to using')}
                <a href="mailto:info@opleed.com">info@opleed.com</a>.
              </p>

              <h4 className="mb-20">{t('Principles of data processing')}</h4>
              <h5 className="mb-20">{t('Personal data')}</h5>
              <p className="mb-20">
                {t('Personal data is any information relating to an identified or identifiable natural person. This includes, for example, information such as your name, age, address, telephone number, date of birth, e-mail address, IP address or user behavior.')}
              </p>

              <h5 className="mb-20">{t('Processing')}</h5>
              <p className="mb-20">
                {t('The processing of Personal Data (e.g. collection, retrieval, use, storage or transmission) always requires a legal basis.')}
              </p>

              <h5 className="mb-20">{t('Legal basis')}</h5>
              <p className="mb-20">
                {t('In accordance with the DPA and the GDPR, we have to have at least one of the following legal bases to process your Personal Data:')}
              </p>
              <ul className="mb-20">
                <li className="mb-10">{t('i) you have given your consent,')}</li>
                <li className="mb-10">{t('ii) the data is necessary for the fulfillment of a contract / pre-contractual measures,')}</li>
                <li className="mb-10">{t('iii) the data is necessary for the fulfillment of a legal obligation, or')}</li>
                <li className="mb-10">{t('iv) the data is necessary to protect our legitimate interests, provided that your interests are not overridden.')}</li>
              </ul>

              <h5 className="mb-20">{t('Retention')}</h5>
              <p className="mb-20">
                {t('Processed Personal Data will be deleted as soon as the purpose of the processing has been achieved and there are no longer any legally required retention obligations.')}
              </p>

              <h4 className="mb-20">{t('Data we collect')}</h4>
              <h5 className="mb-20">{t('Provision and use of the website')}</h5>
              <p className="mb-20">
                {t('When you call up and use our website, we collect the Personal Data that your browser automatically transmits to our server. This is technically necessary for us to display our website and to ensure its stability and security. In this sense, we collect the following data:')}
              </p>
              <ul className="mb-20">
                <li className="mb-10">{t('i) IP address of the requesting computer,')}</li>
                <li className="mb-10">{t('ii) Date and time of access,')}</li>
                <li className="mb-10">{t('iii) Name and URL of the file accessed,')}</li>
                <li className="mb-10">{t('iv) Website from which the access was made (referrer URL),')}</li>
                <li className="mb-10">{t('v) Browser used and, if applicable, the operating system of your computer as well as the name of your access provider.')}</li>
              </ul>
              <p className="mb-20">{t('The legal basis is our legitimate interest.')}</p>

              <h5 className="mb-20">{t('Hosting')}</h5>
              <p className="mb-20">
                {t('The hosting service used by us for the purpose of operating our website is SiteGround Spain S.L. (Calle de Prim 19, 28004 Madrid, Spain). In doing so SiteGround processes inventory data, contact data, content data, usage data, meta data and communication data of customers, interested parties and visitors of our website and services, on the basis of our legitimate interests.')}
              </p>

              <h5 className="mb-20">{t('Content Management System')}</h5>
              <p className="mb-20">
                {t('We use the Content Management System (CMS) of Netlify, Inc. (512 2nd Street, Fl 2, San Francisco, CA 94107), to publish and maintain the created and edited content and texts on our website. This means that all content and texts submitted to our website is transferred to Netlify. The legal basis is our legitimate interest.')}
              </p>

              <h5 className="mb-20">{t('Fonts')}</h5>
              <p className="mb-20">
                {t('We have integrated Google Fonts by Google LLC (1600 Amphitheatre Parkway Mountain View, CA 94043, US, and Google Ireland Limited Gordon House, Barrow Street, Dublin 4, Ireland). To enable the display of fonts, a connection to Google’s server is established when our website is accessed. This enables Google to determine which website sent the request and to which IP address the display of the font is to be transmitted. The integration is based on our legitimate interest.')}
              </p>

              <h5 className="mb-20">{t('Cookies')}</h5>
              <p className="mb-20">
                {t('We use so-called cookies on our website. Cookies are pieces of information that are transmitted from our web server or third-party web servers to your web browser and stored there for later retrieval. Cookies may be small files or other types of information storage. There are different types of cookies:')}
              </p>
              <ul className="mb-20">
                <li className="mb-10">{t('i) Essential Cookies - cookies to provide a correct and user-friendly website, and')}</li>
                <li className="mb-10">{t('ii) Non-essential Cookies - cookies used to analyze your behavior on a website (“analytical” cookies) or cookies used to display advertisements to you (“advertising” cookies).')}</li>
              </ul>
              <p className="mb-20">
                {t('As set out in Belgium`s Electronic Communications Act of 13 June 2005, the Code of Economic Law (“CEL”), the Royal Decree of 4 April 2003 on the sending of advertising by email (“RD”) and the EU`s Privacy and Electronic Communications Directive (“PECD”), we need to obtain consent for the use of Non-essential Cookies. For further information on the cookies we use, please refer to our Cookie Policy. The legal basis for processing is our legitimate interest and your consent.')}
              </p>

              <h5 className="mb-20">{t('Cookie consent')}</h5>
              <p className="mb-20">
                {t('Our website uses a cookie consent tool to obtain your consent to the storage of cookies and to document this consent. When you enter our website, the following Personal Data is transferred to us:')}
              </p>
              <ul className="mb-20">
                <li className="mb-10">{t('i) Your consent(s) or revocation of your consent(s),')}</li>
                <li className="mb-10">{t('ii) Your IP address,')}</li>
                <li className="mb-10">{t('iii) Information about your browser,')}</li>
                <li className="mb-10">{t('iv) Information about your device, and')}</li>
                <li className="mb-10">{t('v) Time of your visit to our website.')}</li>
              </ul>
              <p className="mb-20">{t('The basis for processing is our legitimate interest.')}</p>

              <h5 className="mb-20">{t('Contacting Us')}</h5>
              <p className="mb-20">
                {t('We offer you the opportunity to contact us using various methods. We collect the data you submit such as your name, email address, telephone number and your message in order to process your enquiry and respond to you. The legal basis is both your consent and contract.')}
              </p>

              <h5 className="mb-20">{t('When using our services')}</h5>
              <p className="mb-20">
                {t('We process the Personal Data involved in your use of our services (“Service Data”) in order to be able to provide our contractual services. This includes in particular our support, correspondence with you, invoicing, fulfillment of our contractual, accounting and tax obligations. Accordingly, the data is processed on the basis of fulfilling our contractual obligations and our legal obligations.')}
              </p>
              <p className="mb-20">
                {t('We recognize that you own your Service Data. We provide you complete control of your Service Data by providing you the ability to (i) access your Service Data, (ii) share your Service Data through supported third-party integrations, and (iii) request export or deletion of your Service Data. Where we process Service Data as Data Processor or in other words on behalf of you, we will process the Service Data involved in your use of our services in accordance with your instructions and shall use it only for the purposes agreed between you and us.')}
              </p>
              <p className="mb-20">
                {t('We ensure that access by our employees to your data is only available on a need-to-know basis, restricted to specific individuals, and is logged and audited. We communicate our privacy and security guidelines to our employees and enforce privacy and protection safeguards strictly.')}
              </p>

              <h5 className="mb-20">{t('Customer Relationship Management System')}</h5>
              <p className="mb-20">
                {t('For support, we may store the data related to our customers (for example, your name, address, e-mail address or telephone number) in our customer relationship management system (CRM). This data processing is based on our legitimate interest in providing our customer service and marketing.')}
              </p>

              <h5 className="mb-20">{t('Administration, financial accounting, office organization, contact management')}</h5>
              <p className="mb-20">
                {t('We process data in the context of administrative tasks as well as organization of our business, and compliance with legal obligations, such as archiving. In this regard, we process the same data that we process in the course of providing our contractual services. The processing bases are our legal obligations and our legitimate interest.')}
              </p>

              <h5 className="mb-20">{t('Newsletter')}</h5>
              <p className="mb-20">
                {t('We use GMail by Google LLC to send our Newsletter and if you subscribe we will use your email address to send you information about products, promotions, news and customer satisfaction surveys. You can find an unsubscribe link at the end of each newsletter. The legal basis is your consent.')}
              </p>

              <h5 className="mb-20">{t('Social Media')}</h5>
              <p className="mb-20">
                {t('When you visit our social media profiles on Social Media (currently LinkedIn, 605 W Maude Ave, Sunnyvale, CA 94085, USA), we process your actions and interactions with our profile (e.g., the content of your messages, enquiries, posts or comments that you send to us or leave on our profile or when you like or share our posts) as well as your publicly viewable profile data (e.g., your name and profile picture). Which Personal Data from your profile is publicly viewable depends on your profile settings, which you can adjust yourself in the settings of your social media account. The legal basis is our legitimate interest and your consent.')}
              </p>

              <h5 className="mb-20">{t('Data Security')}</h5>
              <p className="mb-20">
                {t('We undertake to protect your privacy and to treat your Personal Data confidentiality. In order to prevent manipulation or loss or misuse of your data stored with us, we take extensive technical and organizational security precautions which are regularly reviewed and adapted to technological progress. These include, among other things, the use of recognised encryption procedures (SSL or TLS).')}
              </p>
              <p className="mb-20">
                {t('However, we would like to point out that, due to the structure of the Internet, it is possible that the rules of data protection and the above-mentioned security measures are not observed by other persons or institutions that are not in our area of responsibility. We have no technical influence on this. It is the user\'s responsibility to protect the data he or she provides against misuse by encrypting it or in any other way.')}
              </p>

              <h5 className="mb-20">{t('International transfers')}</h5>
              <p className="mb-20">
                {t('We may transfer your Personal Data to other companies as necessary for the purposes described in this Privacy Policy. In order to provide adequate protection for your Personal Data when it is transferred, we have contractual arrangements regarding such transfers. We take all reasonable technical and organizational measures to protect the Personal Data we transfer.')}
              </p>

              <h4 className="mb-20">{t('How we may share your Personal Data')}</h4>
              <p className="mb-20">
                {t('We may share your Personal Data with our business partners for the purposes described in this Privacy Policy, including (but not limited to) conducting the services you request, or customizing our business to better meet your needs. We share your Personal Data only with Business Partners who agree to protect and use your Personal Data solely for the purposes specified by us.')}
              </p>
              <p className="mb-20">
                {t('We may also disclose your Personal Data for any purpose with your consent or for law enforcement, fraud prevention or other legal actions as required by law or regulation, or if we reasonably believe that we must protect us, our customers or other business interests. Except as described above of which you will be informed in advance, we will not disclose your Personal Data.')}
              </p>

              <h5 className="mb-20">{t('What we do not do')}</h5>
              <ul className="mb-20">
                <li className="mb-10">{t('We do not request Personal Data from minors and children;')}</li>
                <li className="mb-10">{t('We do not use Automated decision-making including profiling; and')}</li>
                <li className="mb-10">{t('We do not sell your Personal Data.')}</li>
              </ul>

              <h4 className="mb-20">{t('Privacy rights')}</h4>
              <p className="mb-20">
                {t('Under the DPA and the GDPR, you can exercise the following rights:')}
              </p>
              <ul className="mb-20">
                <li className="mb-10">{t('Right to information')}</li>
                <li className="mb-10">{t('Right to rectification')}</li>
                <li className="mb-10">{t('Right to deletion')}</li>
                <li className="mb-10">{t('Right to data portability')}</li>
                <li className="mb-10">{t('Right of objection')}</li>
                <li className="mb-10">{t('Right to withdraw consent')}</li>
                <li className="mb-10">{t('Right to complain to a supervisory authority')}</li>
                <li className="mb-10">{t('Right to be informed of any security breaches')}</li>
              </ul>

              <p className="mb-20">
                {t('If you believe that the processing of your Personal Data violates data protection law or that your data protection rights have otherwise been violated in any way, you can contact us or the Belgian Data Protection Authority (DPA).')}
              </p>
              <p className="mb-20">
                {t('If you would like to exercise any of these rights, please contact us at')} <a href="mailto:info@opleed.com">info@opleed.com</a>.
              </p>

              <h4 className="mb-20">{t('Amendments')}</h4>
              <p className="mb-20">
                {t('We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.')}
              </p>
              <p className="mb-20">
                {t('We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.')}
              </p>
              <p className="mb-20">
                {t('You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.')}
              </p>

              <h4 className="mb-20">{t('Contact us')}</h4>
              <p className="mb-20">
                {t('If you have any questions about this Privacy Policy, please contact us by email:')} <a href="mailto:info@opleed.com">info@opleed.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PP;
