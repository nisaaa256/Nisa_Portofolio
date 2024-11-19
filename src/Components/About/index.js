
import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <section id="about" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about-thumb">
              <div className="wow fadeInUp section-title" data-wow-delay="0.4s">
                <h1>{about.about1}</h1>
                <p className="color-yellow"></p>
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.8s">
                <p>{about.about2}</p>
                <p>{about.about3}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="background-image about-img" />
          </div>
          <div className="bg-yellow col-md-3 col-sm-6">
            <div className="skill-thumb">
              <div
                className="wow fadeInUp section-title color-white"
                data-wow-delay="1.2s"
              >
                <h1>{about.about4}</h1>
                <p className="color-white">{about.about5}</p>
              </div>
              <div className=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                <strong>{about.about6}</strong>
                <span className="color-white pull-right">{about.about7}</span>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-primary"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "90%" }}
                  />
                </div>
                <strong>{about.about8}</strong>
                <span className="color-white pull-right">{about.about9}</span>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-primary"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "70%" }}
                  />
                </div>
                <strong>{about.about10}</strong>
                <span className="color-white pull-right">{about.about11}</span>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-primary"
                    role="progressbar"
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
