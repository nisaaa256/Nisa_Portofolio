import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Experience = () => {
  const [experience, setExperience] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const experienceRef = ref(db, "experience");
    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      setExperience(data);
    });
  }, []);
  return (
<section id="experience" className="parallax-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div className="background-image experience-img" />
      </div>
      <div className="col-md-6 col-sm-6">
        <div className="color-white experience-thumb">
          <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
            <h1>{experience.experience1}</h1>
            <p className="color-white"></p>
          </div>
          <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
            <div className="media-object media-left">
              <i className="fa fa-laptop" />
            </div>
            <div className="media-body">
              <h3 className="media-heading">
                {experience.experience2} <small>{experience.experience3}</small>
              </h3>
              <p className="color-white">
                
              </p>
            </div>
          </div>
          <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
            <div className="media-object media-left">
              <i className="fa fa-laptop" />
            </div>
            <div className="media-body">
              <h3 className="media-heading">
                {experience.experience4} <small>{experience.experience5}</small>
              </h3>
              <p className="color-white">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Experience;
