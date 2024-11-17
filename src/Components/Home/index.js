import React from "react";

const Home = () => {
  return (
    <section id="home" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="home-img" />
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="home-thumb">
              <div className="section-title">
                <h4 className="wow fadeInUp" data-wow-delay="0.3s">
                  welcome to my website
                </h4>
                <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                  Hello, I am <strong>Fahrunnisa</strong> 
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.9s">
                A passionate Digital Marketer and UI/UX Designer who loves creating meaningful experiences 
                that connect brands with their audiences. With expertise in crafting user-centered designs and 
                developing data-driven marketing strategies, I focus on delivering solutions that are both visually 
                compelling and impactful.
                </p>
                <a
                  href="#about"
                  className="wow fadeInUp smoothScroll section-btn btn btn-success"
                  data-wow-delay="1.4s"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
