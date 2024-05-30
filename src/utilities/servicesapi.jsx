// utilities/servicesapi.js

const services = [
    {
        id: 1,
        title: 'IT Support',
        description: '24/7 technical assistance to resolve all IT issues, thus optimizing company productivity.',
        heading1: 'A professional and immediate assistance service without indirect costs.',
        heading2: 'Service Desk and Remote Support',
        para1: 'Outsourced IT support services offer your business 24/7 access to experts who will address your technological challenges. We provide each client with access to our team of IT experts who are ready to provide assistance 24/7. Outsourcing your support service is an excellent way to save money and provide your employees with the occasional IT support they may need.',
        para2: 'Our comprehensive support services offer numerous benefits to your business. Fast and reliable remote assistance from our state-of-the-art infrastructure improves user satisfaction at a significantly lower cost than on-site support. Most support requests are resolved on the first call, and more complex issues are escalated to level 2 technicians and tracked to ensure quick follow-up and resolution. Our Helpdesk agents have the knowledge and experience to assist you with all IT-related issues. Ongoing training and access to advanced tools enable them to solve problems quickly and accurately. Our team can help you resolve virtually any IT or technological support issues, including those related to applications, hardware, and other vital systems you rely on to conduct your business. As a client, you can call our support number at any time and be immediately connected with a qualified technician ready to assist you. Users can submit help requests through a convenient ready-to-use option, live chat support, or an easy-to-use self-service portal. Our support service can help your employees resolve common issues in just a few minutes.',
        furtherdetails1: 'The OPLEED support service / IT helpdesk includes',
        furtherdetails2: '24/7, 365-day-a-year service',
        furtherderails3: 'Support via email, phone, and live chat',
        furtherderails4: 'Assistance for software, hardware, and VoIP phone systems',
        furtherderails5: 'Convenient self-service IT portal',
        furtherderails6: 'Call tracking',
        furtherderails7: 'Support for Windows/Mac/Linux',
        furtherderails8: 'Expert technicians',
        furtherderails9: 'Remote monitoring and maintenance',
        linkFr: 'support-informatique',
        linkEn: 'en/it-support'
    },
    {
        id: 2,
        title: 'Telecommuting Services',
        description: 'Comprehensive telecommuting solutions including video conferencing, VPN, and collaboration tools for maximum efficiency remotely.',
        heading1: 'Telecommuting Security',
        heading2: 'Business Continuity',
        para1: "OPLEED helps you create a virtualized workplace where employees can collaborate, securely and flexibly in all situations.In today's world, businesses increasingly need alternatives for remote work. The ability to stay mobile and work outside the office is not just about flexibility and employee happiness, but also about survival. As we've all learned, in times of crisis, your ability to deploy remote workforces can make all the difference. Whether you preparing for emergencies or supporting a decentralized workforce, OPLEED will help ensure that your entire team has the same access to critical data and resources.",
        para2: "More and more companies are introducing Mac computers into their workplaces, and we're ready to help them stay productive and secure. Our IT services and network solutions include Mac assistance and services. Our team of experts will ensure that your systems are properly secured, updated, and functioning when you need them.",
        para3: "We've all realized the importance of being able to continue operating despite evacuation/shelter-in-place orders, natural disasters, or business equipment breakdowns. Even if your teams are currently still working in the office, it's important, in these uncertain times, to plan ahead considering remote work options. By allowing your employees to work from anywhere, anytime, you can better maintain your productivity curve in all emergency situations. Our team of experts will help you adopt a model that enables you to cope with the challenges and unexpected events of an interconnected world. Through secure cloud-based computing applications and virtualized environments, you'll be able to maintain business continuity, productivity, and collaboration in virtually any situation.",
        furtherdetails1: "Services for telecommuting",
        furtherdetails2: "Video conferencing and telecommuting",
        furtherderails3: "Remote desktop/VPN",
        furtherderails4: "Multi-level security for remote devices",
        furtherderails5: "Collaboration tools and file sharing",
        furtherderails6: "Employee productivity tracking",
        furtherderails7: "WAN and SD-WAN connectivity",
        furtherderails8: "Device and IoT security",
        furtherderails9: "Remote data backup and recovery",
        linkFr: 'services-de-teletravail',
        linkEn: 'en/remote-work-services'
    },
    {
        id: 3,
        title: 'IT Equipment Management',
        description: 'Complete maintenance and management of IT equipment to ensure hardware and software performance and durability.',
        heading1: 'IT Equipment Management',
        heading2: 'Assistance for iOS/Mac',
        heading3: 'Hybrid IT environments',
        para1: "OPLEED helps you make the most of your devices, workstations, and servers, regardless of the operating system. Support for Windows, Mac, and Linux devices. Our managed services include comprehensive support for Windows workstations and servers, as well as Mac and Linux machines. Our team can ensure that your IT assets run smoothly, whether they are physical devices or remote virtual machines.Most importantly, we will help you secure your network in this era of remote work and bring your own device (BYOD). Our team can develop a comprehensive set of cybersecurity measures to protect your data, no matter the number, location, or types of devices used by your workforce.",
        para2: "More and more companies are using Mac computers, and we are ready to help them stay productive. Our IT services and network solutions include Mac support and services. Even though Mac products are known for their user-friendliness and simplicity, all computer systems occasionally require technical assistance and maintenance. Our team of experts will ensure that your systems are properly integrated, updated, and functioning when you need them.",
        furtherdetails1: "All devices supported by OPLEED",
        para3: "If you need a Mac server or to integrate Mac devices into your network, we can help you configure them correctly from the start. Do you need to use two operating systems in parallel? OPLEED can set up your fleet so that your employees can switch from Windows to Mac on the same machine. Our support solutions include software and hardware for all types of teams, enabling seamless collaboration both in the office and while working remotely. We understand that you want your teams to have access to the latest software and hardware to maximize their productivity. If your employees are struggling to share files for collaborative work, or if they are dealing with slow machines, their productivity decreases. OPLEED will help you overcome the obstacles preventing you from working efficiently and achieving your goals.",
        furtherdetails2: "Installation and configuration of Windows and Mac workstations",
        furtherderails3: "Support for virtual machines and servers",
        furtherderails4: "Mac/Windows/Linux servers and infrastructure",
        furtherderails5: "Mac/Windows/Linux troubleshooting and technical support",
        furtherderails6: "Monitoring, patch management, and file security for Mac/Windows/Linux",
        linkFr: 'gestion-du-materiel-informatique',
        linkEn: 'en/it-equipment-management'
    },
    {
        id: 4,
        title: 'Data Backup and Recovery',
        description: 'Robust services for automatic data and system backup, and quick recovery in case of data loss.',
        heading2: 'Backup solutions you can count on',
        blueheading: 'The most common causes of data loss are hardware/system failure (31%), human error (29%), and software.',
        para1: "Rest easy with Opleed Solutions data backup and recovery services. There are numerous ways to lose or compromise your important data. It's essential for businesses to plan ahead and implement data backup systems before a disaster strikes. Establishing a data backup and recovery plan will protect your business against common data loss scenarios, including hardware failures, human errors, natural disasters, and ransomware attacks.",
        para2: "A backup system creates copies of files or entire systems and stores them in a safe location. These backups can then be used to restore your systems to an earlier point in time, facilitating quick recovery in case of unexpected data loss. Storing a copy of your data on a separate and secure medium is necessary to avoid corruption or loss. Several decades ago, backups were often made on magnetic tapes, then on USB drives or removable hard disks. Today, the standard backup method involves storing on a secure cloud platform. This means that your backups are securely stored in a remote location, usually in a data center located miles away from your physical hardware. Remote backup storage is an important consideration to protect your data against localized hazards such as natural disasters.",
        furtherdetails1: "Our backup and recovery services include:",
        furtherdetails2: "Automated backups so you can focus on your business",
        furtherderails3: "Protection for entire systems or individual folders and files",
        furtherderails4: "Cost-effective and automated management of your most valuable data",
        furtherderails5: "Eliminate worries about compromised, corrupted, or hijacked data",
        heading3: "Opleed Solutions offers advanced backup solutions",
        para3: "The needs of a business for data backup and recovery are rarely met by a simple off-the-shelf solution. Our team will work with you to ensure that your specific solution is robust, reliable, and tailored to your business needs. Therefore, our services include:",
        subheading1: "Data backup advisory",
        subpara1: "Our IT consultants work with you to develop a solid plan for deploying and managing data backup and recovery.",
        subheading2: "Data protection",
        subpara2: " We provide the tools and expertise necessary to ensure maximum data availability and resilience.",
        subheading3: "Business Continuity after Incident",
        subpara3: "Regain access to and functionality of your IT quickly after a crisis with a comprehensive incident recovery plan and an experienced team always ready to respond.",
        subheading4: "Backup Automation",
        subpara4: "Eliminate the costs and risks associated with manual backup processes with backup automation solutions that ensure your data is always ready when you need it.",
        subheading5: "Testing and Validation",
        subpara5: "Opleed ensures the security of your backups so you know your data can always be recovered in case of emergency.", 
        linkFr: 'sauvegarde-et-recuperation-des-donnees',
        linkEn: 'en/data-backup-and-recovery'
    },
    {
        id: 5,
        title: 'Cybersecurity and Data Protection',
        description: 'Advanced protection against cyberattacks, data security, and regulatory compliance to defend company integrity.',
        para1: "OPLEED provides your company with the tools and skills necessary to defend against cyber attacks. Ransomware, hacks, breaches, vulnerabilities, and data theft have a daily impact on businesses worldwide. Cybersecurity experts agree that a company should no longer wonder if it will be attacked, but when and how. These attacks are often extremely costly, causing significant downtime and often resulting in fines. OPLEED will help you avoid these consequences by strengthening your network, monitoring your data, and eliminating software vulnerabilities.",
        furtherdetails1: 'Cybersecurity Services',
        furtherdetails2: 'Identifying assets and data to protect',
        furtherderails3: 'Protecting your assets',
        furtherderails4: 'Training your staff to avoid common threats',
        furtherderails5: 'Maintaining compliance',
        furtherderails6: 'Incident detection',
        furtherderails7: 'Responding with actions in case of an incident or breach',
        furtherderails8: 'Business continuity after an incident',
        heading2: 'Data protection and Cyber defense',
        para2: "OPLEED will provide the necessary information about threats to detect and counter intrusions, eliminate vulnerabilities, and securely backup your data. We have years of field experience and utilize the best available security tools to ensure our clients' safety.Our team is experienced in managing all cyber threats, and we will work with you to create a comprehensive, end-to-end cybersecurity strategy. Our team of cybersecurity experts will develop a solution that meets your specific needs while respecting your budget.",
        heading3:"Cyber Risk Assessments by OPLEED",
        para3 : "We conduct a risk assessment to help you understand your situation and make informed security decisions. Once threats and potential vulnerabilities are identified, they can be mitigated to prevent or reduce security incidents, saving your business money and/or preserving its reputation.Our security risk assessment process helps you understand the following and take action accordingly:",
        qa1: 'What are your most important IT assets, and are they adequately protected and backed up?',
        qa2: 'What data breach would have a major impact on our business, whether due to malware, a cyberattack, or human error?',
        qa3: 'What are the identifiable threat sources? (And what threats are we not aware of?)',
        qa4: 'How could each identified threat impact your business?',
        qa5: 'What are your internal and external vulnerabilities?',
        qa6: 'How could they be exploited, and what is the likelihood of such an event?',
        qa7: 'What security incidents are likely to result in significant downtime or operational disruptions?',
        qa8: 'What level of risk are you willing to take?',
        heading4: 'OPLEED: Your partner in risk mitigation',
        para4: 'Faced with current threats, your company must take a serious approach to data security and privacy. The OPLEED team provides solutions and expertise to implement proactive and effective cybersecurity, significantly reducing concerns for you and your employees.',
        linkFr: 'cybersecurite-et-protection-des-donnees',
        linkEn: 'en/cybersecurity-and-data-protection'
    },
    {
        id: 6,
        title: 'Company IT Management',
        description: 'Supervision and management of all IT operations, ensuring alignment of technologies with company strategic objectives.',
        heading1: 'Brussels IT Operations Supervision and Management Services',
        headingsub1: 'Enhance Your Business in Brussels with Premier IT Oversight',
        headingsub2: 'Introduction:',
        para1: 'In the heart of Brussels, our IT supervision and management services are tailored to help your business achieve its strategic objectives through effective technology alignment. By partnering with us, you ensure that your IT operations are in expert hands, allowing you to focus on growing your business in Brussels.',
        heading2: 'Services Overview:',
        subheading1: 'Comprehensive IT Supervision:',
        subpara1: 'Our Brussels-based team provides full oversight of your IT operations, ensuring everything runs seamlessly and aligns with your business goals.',
        subheading2: 'Strategic IT Management:',
        subpara2: "We align your IT infrastructure with your company's strategic objectives, ensuring that technology investments drive business growth in Brussels.",
        subheading3: 'Proactive Operations Management:',
        subpara3: "In Brussels, we proactively manage your IT environment to prevent issues before they arise, maintaining optimal performance at all times.",
        heading8: 'Why Choose Us in Brussels?',
        subheading4: 'Local Expertise:',
        subpara4: 'Deep understanding of the Brussels business landscape and technological needs.',
        subheading5: 'Custom Solutions:',
        subpara5: 'IT services tailored to the unique challenges and opportunities in Brussels.',
        subheading6: 'Reliable Support:',
        subpara6: 'Dependable IT management that ensures your operations never skip a beat.',
        subheading7 : 'Strategic Alignment:',
        subpara7: 'We make sure that every technological step forward is a step towards achieving your business objectives in Brussels.',
        heading4: 'Benefits for Your Brussels Business:',
        subheading8: 'Efficiency Improvements:',
        subpara8: 'Streamline operations and reduce costs with efficient technology use.',
        subheading9: 'Enhanced Security:',
        subpara9: 'Protect your critical data and systems with state-of-the-art security measures.',
        subheading10: 'Scalable Services:',
        subpara10: 'As your business in Brussels grows, our services scale with you, ensuring that your IT capabilities always meet your needs.',
        linkFr: 'gestion-de-linformatique-de-lentreprise',
        linkEn: 'en/enterprise-it-management'
        
    },
    {
        id: 7,
        title: 'Network and Device Monitoring',
        description: 'Continuous monitoring of networks and devices proactively detect and resolve issues before they affect operations.',
        heading1: 'Proactive Network and Device Monitoring Services in Brussels',
        headingsub1: 'Ensure Seamless Operations with Our Brussels-Based IT Monitoring',
        headingsub2: 'Introduction:',
        para1: 'Operating in the heart of Brussels, our IT services focus on continuous monitoring of networks and devices. This proactive approach is designed to detect and resolve issues before they impact your operations, ensuring that Brussels businesses experience minimal downtime and maximum efficiency.',
        heading2: 'Service Details:',
        subheading1: 'Continuous Monitoring:',
        subpara1: 'Our Brussels team monitors your network and device performance 24/7, detecting anomalies and potential threats before they become problems.',
        subheading2: 'Proactive Issue Resolution:',
        subpara2: 'We don’t just alert you about issues; we resolve them. In Brussels, our rapid response team is equipped to handle problems swiftly, minimizing any potential disruption to your business.',
        subheading3: 'Customized Monitoring Solutions:',
        subpara3: 'Tailored specifically to meet the needs of Brussels enterprises, our services ensure that every aspect of your network and devices is under vigilant oversight.',
        heading8: 'Benefits for Brussels Businesses:',
        subheading4: 'Local Expertise:',
        subpara4: 'Deep understanding of the Brussels IT landscape and business environment.',
        subheading5: 'Advanced Technology:',
        subpara5: 'Utilize the latest monitoring tools and techniques that keep you ahead in a competitive market.',
        subheading6: 'Dedicated Support:',
        subpara6: 'Our Brussels team is on call, providing round-the-clock support to ensure your IT systems are always operational.',
        heading4: 'Contact Us Today!',
        subpara8: 'Enhance your business operations in Brussels with our proactive monitoring services. Contact our Brussels office to find out more about how we can keep your networks and devices running smoothly and securely. Let us help you focus on growing your business without the worry of IT interruptions.',
        linkFr: 'surveillance-des-reseaux-et-des-appareils',
        linkEn: 'en/network-and-device-monitoring'
    },
    {
        id: 8,
        title: 'Hardware Provisioning',
        description: 'Supply of cutting-edge IT hardware tailored to the specific needs of each client, with installation and configuration.',
        heading1: 'State-of-the-Art IT Hardware Solutions in Brussels',
        headingsub1: 'Customized IT Hardware Supply and Setup for Your Brussels Business',
        headingsub2: 'Introduction:',
        para1: 'Located in the heart of Brussels, our company specializes in supplying cutting-edge IT hardware that is tailored to the specific needs of each client. We not only deliver the hardware but also take care of installation and configuration, ensuring that your business in Brussels has the tools it needs to succeed without the hassle.',
        heading2: 'Service Details:',
        subheading1: 'Tailored Hardware Supply:',
        subpara1: 'We provide the latest IT hardware, customized to meet the specific operational requirements of businesses in Brussels.',
        subheading2: 'Professional Installation:',
        subpara2: 'Our skilled technicians in Brussels will handle the complete setup of your IT hardware, ensuring everything is up and running smoothly.',
        subheading3: 'Custom Configuration:',
        subpara3: 'We configure all hardware according to your specific business needs in Brussels, optimizing your systems for peak performance.',
        subheading100: 'Continuous Support:',
        subpara100: 'Post-installation, we offer ongoing support and maintenance services in Brussels to keep your systems operational and up-to-date.',
        heading8: 'Why Choose Our Services?',
        subheading4: 'Local Expertise:',
        subpara4: 'In-depth knowledge of the Brussels IT market and business environment.',
        subheading5: 'Quality and Reliability:',
        subpara5: 'We source only the highest quality hardware from trusted manufacturers, ensuring reliability and durability.',
        subheading6: 'Custom Solutions:',
        subpara6: 'Each solution is crafted to fit the unique needs of your Brussels business, ensuring that you get the most out of your IT investments.',
        subheading7 : 'Streamlined Operations: ',
        subpara7: 'With our comprehensive service, your business can enjoy seamless integration of new technology with minimal disruption.',
        heading4: 'Benefits for Your Brussels Business:',
        subheading8: 'Enhanced Productivity:',
        subpara8: "With state-of-the-art hardware tailored to your needs, increase your business’s efficiency and productivity.",
        subheading9: 'Competitive Edge:',
        subpara9: 'Stay ahead in the Brussels market with the latest technology at your fingertips.',
        subheading10: 'Scalable Services:',
        subpara10: 'Our solutions grow with your business, ensuring that your IT infrastructure in Brussels can adapt to future demands.',
        heading5: 'Contact Us Today!',
        para5: 'Upgrade your business operations in Brussels with our tailored IT hardware solutions. Contact us to discover how our specialized services can benefit your company and help you achieve your business goals in Brussels. Let us handle the technology so you can focus on growing your business.',
        linkFr: 'approvisionnement-en-materiel-informatique',
        linkEn: 'en/equipment-procurement'
    },
    {
        id: 9,
        title: 'Custom Projects',
        description: 'Development of customized IT solutions to meet specific needs, including planning, execution, and post-deployment support.',
        linkFr: 'projets-personnalises',
        linkEn: 'en/customized-projects'
    }
];

export default services;
