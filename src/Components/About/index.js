import React from "react";

const About = () => {
  return (
    <section id="about" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about-thumb">
              <div className="wow fadeInUp section-title" data-wow-delay="0.4s">
                <h1>Know About Me</h1>
                <p className="color-yellow">
                  
                </p>
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.8s">
                <p>
                  Hello, I'm Fahrunnisa Indah Cahyani, 20-year-old Digital Marketing enthusiast and 
                  UI/UX Design student currently pursuing my degree at Universitas Klabat. As a dedicated 
                  learner, I’m passionate about exploring the intersection of creativity and strategy, 
                  focusing on delivering user-friendly designs and impactful marketing solutions. 
                </p>
                <p>
                Outside of academics, i enjoy
                exploring the latest trends in design and technology.
                </p>
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
                <h1>My Skills</h1>
                <p className="color-white">
                  HTML CSS JS . Web Design
                </p>
              </div>
              <div className=" wow fadeInUp skills-thumb" data-wow-delay="1.6s">
                <strong>Digital Marketing</strong>
                <span className="color-white pull-right">90%</span>
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
                <strong>Web Design</strong>
                <span className="color-white pull-right">70%</span>
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
                <strong>UI & UX Design</strong>
                <span className="color-white pull-right">80%</span>
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
