import React from "react";

const Education = () => {
  return (
<section id="education" className="parallax-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div className="color-white education-thumb">
          <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
            <h1>My Education</h1>
            <p className="color-white">
              
            </p>
          </div>
          <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
            <div className="media-object media-left">
              <i className="fa fa-laptop" />
            </div>
            <div className="media-body">
              <h3 className="media-heading">
                SD - SMA Airmadidi <small>2010 - 2022</small>
              </h3>
              <p className="color-white">
              I was always an active student in school, participating in various class activities 
              and extracurriculars. This involvement not only helped me develop social and leadership 
              skills but also positively impacted my academic achievements.  
              </p>
            </div>
          </div>
          <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
            <div className="media-object media-left">
              <i className="fa fa-laptop" />
            </div>
            <div className="media-body">
              <h3 className="media-heading">
                Universitas Klabat <small>2022</small>
              </h3>
              <p className="color-white">
              I attended Universitas Klabat and was an active student involved in various 
              organizations and committees. This experience helped me develop teamwork, leadership, 
              and event management skills while contributing to initiatives that supported the university community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="background-image education-img" />
      </div>
    </div>
  </div>
</section>

  );
};

export default Education;
