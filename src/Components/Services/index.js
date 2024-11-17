import React from "react";

const Services = () => {
  return (
<section id="service" className="parallax-section">
  <div className="container">
    <div className="row">
      <div className="bg-yellow col-md-3 col-sm-6">
        <div className="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
          <i className="fa fa-desktop" />
          <h3>UNKLAB Canteen Information System</h3>
          <p className="color-white">
          This project involved developing an information system to streamline the operational 
          management of the Universitas Klabat (UNKLAB) canteen. The system features menu management, 
          online ordering, and automated transaction recording.
          </p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
          <i className="fa fa-paper-plane" />
          <h3>UI/UX Design for Car Wash</h3>
          <p className="color-white">
          The app is tailored to simplify car wash bookings while enhancing customer convenience through an 
          intuitive interface. It integrates features like scheduling, package selection, real-time service 
          tracking, and digital payment to provide a seamless user experience.
          </p>
        </div>
      </div>
      <div className="bg-dark col-md-3 col-sm-6">
        <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
          <i className="fa fa-table" />
          <h3>Business Process Optimization for CV Mitra Karya Nusantara</h3>
          <p className="color-white">
          This project streamlined business operations at CV Mitra Karya Nusantara by automating workflows and 
          reducing non-value-added activities. Key achievements included implementing a real-time reporting.
          </p>
        </div>
      </div>
      <div className="bg-white col-md-3 col-sm-6">
        <div className="wow fadeInUp service-thumb" data-wow-delay="1.8s">
          <i className="fa fa-html5" />
          <h3> E-Commerce Website Development Using WordPress</h3>
          <p>
          Developed a fully functional e-commerce website using WordPress and WooCommerce. The project focused on 
          creating a user-friendly interface for browsing products, an intuitive navigation system,  
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Services;
