import React from "react";
import { useTranslation } from 'react-i18next';

const DP = () => {
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
                            <h2 className="mb-20">{t('Data Protection Policy')}</h2>
                            <h4 className="mb-20">{t('Introduction')}</h4>
                            <p className="mb-20">
                                {t("Thank you for your interest in this Data Protection Policy! At Opleed, we take our responsibilities under Belgium's Law on the protection of individuals with regard to the processing of Personal Data of 30 July 2018 (the Framework Act) (“DPA”), the General Data Protection Regulation (“GDPR”) very seriously. As such, this policy sets out how personal data is managed and dealt with in order to ensure that the obligation to fulfill individuals’ reasonable expectations of privacy is applied and followed and that the responsibilities established under the DPA and GDPR are complied with.The requirement specified in this policy applies equally to all staff members and service users and contracting parties engaged with Opleed.")}
                            </p>

                            <h4 className="mb-20">{t('Rationale')}</h4>
                            <p className="mb-20">
                                {t("Opleed acquires, uses, stores, and otherwise processes personal data and special category data relating to potential and current service users, and personal data of our contracting parties, current and potential and former employees, staff members and collectively refers to those individuals in this policy as data subjects. Likewise, no distinction is made between the rights of data subjects, and all are treated equally under this policy.")}
                            </p>

                            <h4 className="mb-20">{t('Our Role')}</h4>
                            <p className="mb-20">
                                {t("During the course of you using our services we are processing and only insofar as this is necessary for our services the following categories of personal data: First Name, Last Name, Contact Data, Payment Data, and Contract Data. As well as special category data which is personal data that needs more protection because it is sensitive. This may include personal data revealing racial or ethnic origin, religious or philosophical beliefs, genetic data, biometric data, or data concerning health. Opleed will process personal data and special category data to the extent permitted by law, for example, in the course of providing our services or to comply with our legal obligations. The personal data and special category data processed by us is collected and stored and used for the purpose of fulfilling a contract, our legal obligations, protecting legitimate interests, consent and explicit consent for Special Category Data, if necessary. We may also use personal data for the following purposes: i) managing and planning operational processes; and ii) contractual data processing for payment and administrative purposes and service provision.")}
                            </p>

                            <h5 className="mb-20">{t('Purpose of the policy')}</h5>
                            <p className="mb-20">
                                {t('This policy seeks to ensure that Opleed is:')}
                                <ul className="mb-20">
                                    <li className="mb-10">{t('⦁	clear about how personal data must be processed;')}</li>
                                    <li className="mb-10">{t('⦁ complying with the DPA and GDPR and with good practice;')}</li>
                                    <li className="mb-10">{t('⦁	protecting the personal data entrusted to us and that it is processed in accordance with data subjects’ rights;')}</li>
                                    <li className="mb-10">{t('⦁	protecting itself from risks of personal data breaches and breaches of data protection laws;')}</li>
                                </ul>
                            </p>

                            <h5 className="mb-20">{t('Scope')}</h5>
                            <p className="mb-20">
                                {t("The policy covers both personal and special category personal data held by Opleed in relation to data subjects. The policy applies equally to personal data held in print and digital form. All staff members and others processing personal data on behalf of Opleed must read it and a failure to comply may result in disciplinary action. Opleed's Data Protection Manager is responsible for ensuring that staff members and others working on behalf of Opleed complying with this policy and should implement appropriate practices, processes, controls, and training accordingly.")}
                            </p>

                            <h5 className="mb-20">{t('Data Protection Manager')}</h5>
                            <p className="mb-20">
                                {t("Opleed's Data Protection Manager (“DPM”) can be reached at info@opleed.com.")}
                            </p>

                            <h5 className="mb-20">{t('Data Protection Principles')}</h5>
                            <p className="mb-20">
                                {t("Opleed is responsible for, and must be able to demonstrate compliance with the data protection principles set out in the DPA and GDPR and all personal data must be:")}
                                <ul className="mb-20">
                                    <li className="mb-10">{t('⦁	processed lawfully, fairly and in a transparent manner in relation to the data subject,')}</li>
                                    <li className="mb-10">{t('⦁	collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes shall not be considered to be incompatible with the initial purposes subject to appropriate safeguards, and provided that there is no risk of breaching the privacy of the data subject,')}</li>
                                    <li className="mb-10">{t('⦁	adequate, relevant, and limited to what is necessary in relation to the purposes for which it is processed,')}</li>
                                    <li className="mb-10">{t('⦁	accurate and where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that is inaccurate, having regard to the purposes for which they are processed is erased or rectified without delay,')}</li>
                                    <li className="mb-10">{t('⦁	kept in a form which permits identification of data subjects for no longer than necessary for the purposes for which the personal data is processed; personal data may be stored for longer periods insofar as the personal data will be processed solely for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes subject to implementation of the appropriate technical and organizational measures required by the DPA and GDPR in order to safeguard the rights and freedoms of the data subject, and')}</li>
                                    <li className="mb-10">{t('⦁	processed in a manner that ensures appropriate security of the personal data, including protection against unauthorized or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organizational measures.')}</li>
                                </ul>
                            </p>

                            <h5 className="mb-20">{t('Data Subject’s rights')}</h5>
                            <p className="mb-20">
                                {t("Individuals have rights under the GDPR, some of which are complex, and all of which require careful handling to ensure compliance. Opleed shall ensure it can accommodate the following rights:")}
                                <ul className="mb-20">
                                    <li className="mb-10">{t('⦁	the right to be informed;')}</li>
                                    <li className="mb-10">{t('⦁	the right of access;')}</li>
                                    <li className="mb-10">{t('⦁	the right to rectification;')}</li>
                                    <li className="mb-10">{t('⦁	the right to erasure;')}</li>
                                    <li className="mb-10">{t('⦁	the right to restrict processing;')}</li>
                                    <li className="mb-10">{t('⦁	the right to data portability;')}</li>
                                    <li className="mb-10">{t('⦁	the right to object; and')}</li>
                                    <li className="mb-10">{t('⦁	rights in relation to automated decision making and profiling.')}</li>
                                </ul>
                            </p>

                            <p className="mb-20">
                                {t("Opleed requires the verification of the identity of an individual making data requests under any of the listed rights. Requests must be complied with within one month of receipt and immediately forwarded to the Data Protection Manager (DPM). These requests are processed free of charge. To exercise these rights, please contact our DPM using the details provided above. You also have the right to lodge a complaint with your local data protection supervisory authority or the Belgian Data Protection Authority (BDPA) (www.dataprotectionauthority.be). However, we would appreciate the opportunity to address your concerns before you contact any supervisory authority.")}
                            </p>

                            <h5 className="mb-20">{t('Accountability')}</h5>
                            <p className="mb-20">
                                {t('Opleed must implement appropriate technical and organizational measures in an effective manner to ensure compliance with data protection principles. Opleed is further responsible for and must be able to demonstrate compliance with the data protection principles. Consequently, adequate resources and controls to ensure and document DPA and GDPR compliance are put into place. Those are:')}
                            </p>
                            <ul>
                                <li className="mb-10">{t('⦁	the appointment of a DPM,')}</li>
                                <li className="mb-10">{t('⦁	security and privacy measures when processing and handling data are implemented,')}</li>
                                <li className="mb-10">{t('⦁	a Data Protection Impact Assessment (DPIA) is carried out,')}</li>
                                <li className="mb-10">{t('⦁	policies and procedures for processing and handling data are implemented,')}</li>
                                <li className="mb-10">{t('⦁	Opleed staff members and others working on behalf of Opleed are trained in accordance with the DPA and GDPR,')}</li>
                                <li className="mb-10">{t('⦁	security and privacy measures and processing and handling policies and procedures are reviewed and updated, and')}</li>
                                <li className="mb-10">{t('⦁	Audits and reviews are carried out regularly.')}</li>
                            </ul>

                            <h4 className="mb-20">{t('Responsibility')}</h4>
                            <p className="mb-20">
                                {t("As the Data Controller, Opleed is responsible for establishing policies and procedures to comply with data protection laws. The Data Protection Manager (DPM) is responsible for:")}
                            </p>
                            <ul>
                                <li>{t('⦁ Advising Opleed and its staff members and others working on behalf of Opleed of their obligations under DPA and GDPR,')}</li>
                                <li>{t('⦁ Monitoring compliance with DPA, GDPR, and other relevant data protection laws,')}</li>
                                <li>{t('⦁ Monitoring training and audit activities related to DPA and GDPR compliance,')}</li>
                                <li>{t('⦁ Providing advice and conducting data protection impact assessments,')}</li>
                                <li>{t('⦁ Acting as the contact point for the BDPA and data subjects,')}</li>
                                <li>{t('⦁ Overseeing Opleed\'s performance regarding processing operations risks.')}</li>
                            </ul>

                            <p className="mb-20">
                                {t("Staff and others working on behalf of Opleed must ensure:")}
                            </p>
                            <ul>
                                <li>{t('⦁ All personal data is kept securely,')}</li>
                                <li>{t('⦁ No personal data is disclosed to any unauthorized third party,')}</li>
                                <li>{t('⦁ Personal data is kept in accordance with Opleed\'s Retention Policy,')}</li>
                                <li>{t('⦁ Queries, complaints, and access requests concerning data protection are forwarded to the DPM immediately,')}</li>
                                <li>{t('⦁ Data protection breaches are reported to the DPM swiftly,')}</li>
                                <li>{t('⦁ Any uncertainty about data protection is addressed to the DPM without delay,')}</li>
                                <li>{t('⦁ They are aware of the Data Protection principles and have read the Policy.')}</li>
                            </ul>

                            <h4 className="mb-20">{t('Third-Party Data Processors')}</h4>
                            <p className="mb-20">
                                {t("Where Opleed is outsourcing or using external companies for the processing of personal data, the responsibility for the data remains with Opleed. A third-party data processor must:")}
                            </p>
                            <p className="mb-20">
                                {t("We process the Personal Data involved in your use of our services (“Service Data”) in order to provide our contractual services. The Service Data interconnects with the requested service, and may include the following:")}
                            </p>
                            <ul>
                                <li className="mb-10">
                                    <b>{t("Personal Data:")}</b>
                                    <ul>
                                        <li>{t('Contact information, such as name, country, email address, phone number, time zone, mailing address.')}</li>
                                        <li>{t('Business information such as job title, job level, job role/function and other business or company information.')}</li>
                                        <li>{t('IT systems and operational information: including user ID and password details, computer name, email address, domain name, user names, passwords, IP address, permission data, account and delegate information for communication services, individual mailboxes and directories, chat communication data, software and hardware inventory, tracking information regarding patterns of software and internet usage (e.g. cookies), and information recorded for operational and/or training purposes.')}</li>
                                        <li>{t('Interest information such as products or services purchased, and the activities associated with accounts and preferences.')}</li>
                                        <li>{t('Error reports and performance information, including error reports.')}</li>
                                        <li>{t('Third party sources information may include personal data to supplement the information the Client has provided.')}</li>
                                        <li>{t('Credentials and similar security information used for authentication and access.')}</li>
                                        <li>{t('Demographic information such as age, gender, country, interests, and preferences.')}</li>
                                        <li>{t('Troubleshooting and help information for technical support or customer support services, phone conversations or chat sessions with our representatives may be monitored and recorded.')}</li>
                                        <li>{t('Information necessary for us to provide services to you.')}</li>
                                        <li>{t('Any other personal data you choose to share with us.')}</li>
                                    </ul>
                                </li>
                                <li className="mb-10">
                                    <b>{t("Special Category Data:")}</b>
                                    <ul>
                                        <li>
                                            {t("While we do not intentionally collect special categories data such as may be provided:")}
                                            <ul>
                                                <li>{t('Racial or ethnic origin')}</li>
                                                <li>{t('Genetic data')}</li>
                                                <li>{t('Biometric data')}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <p className="mb-20">
                                {t("We recognize that each Client owns its Service Data and as such provide complete control of Service Data by providing you the ability to:")}
                            </p>

                            <ul>
                                <li className="mb-10">{t('access,')}</li>
                                <li className="mb-10">{t('share through supported third-party integrations, and')}</li>
                                <li className="mb-10">{t('request export or deletion.')}</li>
                            </ul>

                            <p className="mb-20">
                                {t("Where Opleed transfers Service Data as Data Processor, EU Standard Contractual Clauses are applied:")}
                            </p>

                            <ul>
                                <li className="mb-10">
                                    <b>{t("Module Two: Controller to Processor")}</b>
                                    <ul>
                                        <li className="mb-10">{t('Data exporter(s): The Client.')}</li>
                                        <li className="mb-10">{t('Activities relevant to the data transferred: The activities are specified above.')}</li>
                                        <li className="mb-10">{t('Client Role: Controller.')}</li>
                                        <li className="mb-10">{t('Data importer(s): Opleed')}</li>
                                        <li className="mb-10">{t('Opleed’s Role (controller/processor): Processor')}</li>
                                        <li className="mb-10">
                                            {t('Categories of data subjects whose personal data is transferred:')}
                                            <ul>
                                                <li className="mb-10">{t('Customer’s end users, employees, contractors, suppliers and other third parties relevant to the Services.')}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            {t('Categories of personal data transferred:')}
                                            <ul>
                                                <li className="mb-10">{t('Contact details: which may include name, address, email address, telephone, fax, other contact details, emergency contact details, associated local time zone information.')}</li>
                                                <li className="mb-10">{t('Customer details: which may include Contact details, invoicing, and credit related data.')}</li>
                                                <li className="mb-10">{t('IT systems and operational information: which may include user ID and password details, computer name, email address, domain name, user names, passwords, IP address, permission data (according to job roles), account and delegate information for communication services, individual mailboxes and directories, chat communication data, software and hardware inventory, tracking information regarding patterns of software and internet usage (e.g. cookies), and information recorded for operational and/or training purposes.')}</li>
                                                <li className="mb-10">{t('Customer support: which may include personal identifiers, voice, video, and data recordings.')}</li>
                                                <li className="mb-10">{t('Other: Any other Personal Data submitted by the Customer.')}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            {t('Special categories of personal data (if appropriate):')}
                                            <ul>
                                                <li className="mb-10">{t('We do not intend to transfer Special Category Data.')}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            {t('Processing operations:')}
                                            <ul>
                                                <li className="mb-10">{t('We will only process the data in accordance with the instructions given by the Client.')}</li>
                                            </ul>
                                        </li>
                                        <li>{t('Signature and date')}</li>
                                    </ul>
                                </li>
                            </ul>

                            <p className="mb-20">
                                {t("Opleed and its Third-Party Data Processors must comply with this policy and relevant data protection laws and must provide sufficient guarantees to implement appropriate technical and organizational measures to ensure data protection by design and by default. Third-Party Data Processors are required to enter into agreements with Opleed and must allow audits and cooperate with any supervisory authority's requests, to ensure these obligations are met.")}
                            </p>

                            <h5 className="mb-20">{t('Secure Deletion and Archiving of Personal Data')}</h5>
<p className="mb-20">
    {t('Personal Data must be deleted and stored using one of the following secure methods:')}
</p>
<ul className="mb-20">
    <li className="mb-10">{t('⦁	Documents in electronic format must be deleted with a secure deletion utility and standard deletion utilities should not be used,')}</li>
    <li className="mb-10">{t('⦁	Personal Data on hard drives, removable drives, storage devices or any similar item must be securely erased before any disposal or reassignment of the equipment,')}</li>
    <li className="mb-10">{t('⦁	Personal Data that is Archived on hard drives, removable drives, storage devices or any similar item must be organized in an orderly manner and encrypted using at least AES-256,')}</li>
    <li className="mb-10">{t('⦁	Paper copies must be destroyed using cross-cut shredders.')}</li>
</ul>

<h5 className="mb-20">{t('Sensitive and Special Category data')}</h5>
<p className="mb-20">
    {t('Opleed is through the performance of its services routinely collecting Sensitive and Special Category data. If the processing of Sensitive and Special Category data during the course of the provision of services or employment becomes necessary, we first need to obtain consents. In this context, consent means any freely given indication of the data subject\'s wishes for the specific case in an informed and unambiguous manner, in the form of a declaration or any other unambiguous affirmative act by which the data subject indicates that he or she consents to the processing of personal data relating to him or her.')}
</p>

<h5 className="mb-20">{t('Audit and Training')}</h5>
<p className="mb-20">
    {t('Opleed is required to ensure that all staff members and others working on behalf of Opleed are adequately trained and compliance with the DPA and GDPR is possible. We also regularly test our policies, systems, and processes to assess and ensure compliance.')}
</p>

<h5 className="mb-20">{t('Data privacy by design and default')}</h5>
<p className="mb-20">
    {t('Opleed has to ensure that by default only personal data which is necessary for each specific purpose is processed. The obligation applies:')}
</p>
<ul className="mb-20">
    <li className="mb-10">{t('⦁	to the volume of personal data collected,')}</li>
    <li className="mb-10">{t('⦁	the extent of the processing, and')}</li>
    <li className="mb-10">{t('⦁	the period of storage and the accessibility of the personal data.')}</li>
</ul>
<p className="mb-20">
    {t('In particular, personal data should not be available to an indefinite number of persons, and you must ensure that you adhere to those measures.')}
</p>

<h5 className="mb-20">{t('Data Protection Impact Assessments (DPIAs)')}</h5>
<p className="mb-20">
    {t('Opleed must also conduct DPIAs in respect of high-risk processing before that processing is undertaken. Opleed\'s DPM will conduct a DPIA when:')}
</p>
<ul className="mb-20">
    <li className="mb-10">{t('⦁	new or changing technologies such as programs, systems or processes are introduced,')}</li>
    <li className="mb-10">{t('⦁	automated processing including profiling takes place,')}</li>
    <li className="mb-10">{t('⦁	sensitive and special category data is processed on a large scale, and')}</li>
    <li className="mb-10">{t('⦁	systematic monitoring of a publicly accessible area on a large scale takes place.')}</li>
</ul>
<p className="mb-20">
    {t('A DPIA must include:')}
</p>
<ul className="mb-20">
    <li className="mb-10">{t('⦁	a description of the processing, its purposes and the Data Controller’s legitimate interests if appropriate,')}</li>
    <li className="mb-10">{t('⦁	an assessment of the necessity and proportionality of the processing in relation to its purpose,')}</li>
    <li className="mb-10">{t('⦁	an assessment of the risk to individuals, and')}</li>
    <li className="mb-10">{t('⦁	the risk-mitigation measures in place and demonstration of compliance.')}</li>
</ul>

<h5 className="mb-20">{t('Marketing')}</h5>
<p className="mb-20">
    {t('Opleed is subject to certain rules and privacy laws when marketing to our service users, residents, guests and clientele. A data subject’s prior consent is required for electronic direct marketing (for example, by email, text or automated calls). The right to object to direct marketing must be explicitly offered to the data subject in an intelligible manner so that it is clearly distinguishable from other information. A data subject’s request to object to direct marketing must be respected. If a data subject opts out at any time, their details should be suppressed as soon as possible. Suppression involves retaining just enough information to ensure that marketing preferences are respected in the future.')}
</p>

<h5 className="mb-20">{t('Access Control')}</h5>
<p className="mb-20">
    {t('Access to all information will be controlled and will be driven by business requirements. Access will be granted, or arrangements made for users according to their role and the classification of information, only to a level that will allow them to carry out their duties.')}
</p>
<p className="mb-20">
    {t('A formal user registration and deregistration procedure will be maintained for access to all information systems and services. This will include mandatory authentication methods based on the sensitivity of the information being accessed and will include consideration of multiple factors as appropriate.')}
</p>
<p className="mb-20">
    {t('Specific controls will be implemented for users with elevated privileges and leavers, to reduce the risk of negligent or deliberate system misuse. Segregation of duties will be implemented, where practical.')}
</p>

<h5 className="mb-20">{t('Antivirus/Anti-malware Protection')}</h5>
<p className="mb-20">
    {t('All workstation and server-based assets used, whether connected to the Opleed network or as stand-alone units, must use Opleed approved antivirus/anti-malware protection software and configuration provided by Opleed. The following procedures shall be followed:')}
</p>
<ul className="mb-20">
    <li className="mb-10">{t('⦁	Virus protection software must not be disabled or bypassed,')}</li>
    <li className="mb-10">{t('⦁	Settings for the virus protection software must not be altered in a manner that will reduce the software effectiveness,')}</li>
    <li className="mb-10">{t('⦁	Automatic update frequency cannot be altered to reduce the frequency of updates,')}</li>
    <li className="mb-10">{t('⦁	All servers attached to the Opleed network must utilize Opleed approved/standard virus protection software and setup to detect and clean viruses,')}</li>
    <li className="mb-10">{t('⦁	All electronic mail gateways, devices, and servers must use Opleed approved email virus/malware/spam protection software and must adhere to Opleed rules for the set-up and use of this software,')}</li>
    <li className="mb-10">{t('⦁	Any threat that is not automatically cleaned, quarantined, and subsequently deleted by malware protection software constitutes a security incident and must be reported, and')}</li>
    <li className="mb-10">{t('⦁	Antivirus/anti-malware signature updates shall occur on a frequency defined by Opleed but shall occur minimally once each calendar month.')}</li>
</ul>


              
                            <h2 className="mb-20">{t('Glossary of Terms')}</h2>
                            <p className="mb-20">
                                <b>{t('Automated Decision-Making (ADM):')}</b> {t('When a decision is made which is based solely on automated processing (including profiling) which produces legal effects or significantly affects an individual. The DPA and GDPR prohibits Automated Decision-Making (unless certain conditions are met) but not automated processing.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Profiling:')}</b> {t('Any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to an individual, in particular to analyze or predict aspects concerning that individual’s performance at work, economic situation, health, personal preferences, interests, reliability, behavior, location or movements. Profiling is an example of automated processing.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Consent:')}</b> {t('An agreement which must be freely given, specific, informed and be an unambiguous indication of the data subject’s wishes by which they, by a statement or by a clear positive action, signifies agreement to the processing of personal data relating to them.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Data Controller:')}</b> {t('The person or organization that determines when, why and how to process personal data. It is responsible for establishing practices and policies in accordance with the DPA and GDPR. Opleed is the Data Controller of all personal data relating to it and used delivering education and training and all other purposes connected with it including business purposes.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Data Subject:')}</b> {t('A living identified or identifiable individual about whom we hold personal data.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Data Protection impact assessment (DPIA):')}</b> {t('An assessment tool used to identify and reduce risks of a data processing activity. A DPIA can be carried out as part of Privacy by Design and should be conducted for all major system or business change programs involving the processing of personal data.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Data Protection Manager (DPM):')}</b> {t('The person appointed as such under the DPA and GDPR and in accordance with its requirements. A DPM is responsible for advising Opleed on their obligations under the DPA and GDPR, for monitoring compliance with the DPA and GDPR, as well as with policies, cooperating with the BDPA and acting as a point of contact.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Personal Data:')}</b> {t('Any information identifying a data subject or information relating to a data subject that we can identify (directly or indirectly) from that data alone or in combination with other identifiers we possess or can reasonably access. Personal data includes sensitive personal data and pseudonymized personal data but excludes anonymous data or data that has had the identity of an individual permanently removed. Personal data can be factual (for example, a name, email address, location or date of birth) or an opinion about that person’s actions or behavior.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Special category data:')}</b> {t('Special category data is personal data that needs more protection because it is sensitive. This may include personal data revealing racial or ethnic origin, religious or philosophical beliefs, genetic data, biometric data, or data concerning health. In order to process special category data, we first need to obtain consent.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Personal Data Breach:')}</b> {t('Any breach of security resulting in the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or unauthorized access to, personal data, where that breach results in a risk to the data subject. It can be an act or omission.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Privacy by Design and Default:')}</b> {t('Means implementing appropriate technical and organizational measures in an effective manner to ensure compliance with the DPA and GDPR.')}
                            </p>
                            <p className="mb-20">
                                <b>{t('Privacy Policy:')}</b> {t('A separate policy setting out information that may be provided to data subjects when Opleed collects information (for example through the website). These notices may take the form of general privacy statements applicable to a specific group of individuals) or they may be stand-alone, one-time privacy statements covering processing related to a specific purpose.')}
                            </p>
                       


                            <p className="mb-20">
  <b>{t('Processing or Process')}</b>{t(' Any activity that involves the use of personal data. It includes obtaining, recording, or holding the data, or carrying out any operation or set of operations on the data including organizing, amending, retrieving, using, disclosing, erasing or destroying it. Processing also includes transmitting or transferring Personal Data to third parties. Basically, it is anything that can be done to personal data from its creation to its destruction, including both creation and destruction.')}
                            </p>


                            <p className="mb-20">
                            <b>{t('Pseudonymization or Pseudonymized')}</b>        {t('Replacing information that directly or indirectly identifies an individual with one or more artificial identifiers or pseudonyms so that the person, to whom the data relates, cannot be identified without the use of additional information which is meant to be kept separately and secure.')}
                            </p>

                            <p className="mb-20">
                       <b>{t('Breaches of the Policy')}</b>              {t("Anyone who does not comply with this policy, and is directly employed by Opleed, may be subject to disciplinary action as set out in the disciplinary procedures. Any other person covered by this policy, and found not to comply, will be reported to the relevant office/employer. This may also result in Opleed terminating any contract.")}
                            </p>

                            <p className="mb-20">
                       <b>{t('Review')}</b>          {t('Opleed will continue to review the effectiveness of this policy to ensure it is achieving its stated objectives on at least an annual basis and more frequently if required taking into account changes in the law and organizational or security changes.')}
                            </p>

                            <p className="mb-20">
                            <b>{t('Concerns and Contact')}</b>    {t('If you have any questions or comments about our Data Protection Policy or wish to exercise your rights under applicable laws, please contact our DPM.')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DP;
              