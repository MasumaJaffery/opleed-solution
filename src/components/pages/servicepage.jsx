import React from 'react';
import ServiceDetail from '../service_detials'; // Import ServiceDetail component
import Header from '../primary_nav_link';

const ServiceDetailPage = () => {
    return (
        <>
            <Header />
            <div className="container" style={{ minHeight: 'calc(100vh - 200px)' }}> {/* Adjusted height to accommodate footer */}
                <div className="row">
                    <div className="col">
                        <ServiceDetail /> {/* Render ServiceDetail component */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailPage;
