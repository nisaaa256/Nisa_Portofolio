import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="contact-form">
              <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                <h1 className="color-white">Say hello..</h1>
                <p className="color-white">
                  Integer ut consectetur est. In cursus orci non ipsum gravida
                  dignissim.
                </p>
              </div>
              <div id="contact-form">
                <form action="#template-mo" method="post">
                  <div className="wow fadeInUp" data-wow-delay="1s">
                    <input
                      name="fullname"
                      type="text"
                      className="form-control"
                      id="fullname"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="1.2s">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="1.4s">
                    <textarea
                      name="message"
                      rows={5}
                      className="form-control"
                      id="message"
                      placeholder="Write your message..."
                      defaultValue={""}
                    />
                  </div>
                  <div
                    className="wow fadeInUp col-md-6 col-sm-8"
                    data-wow-delay="1.6s"
                  >
                    <input
                      name="submit"
                      type="submit"
                      className="form-control"
                      id="submit"
                      defaultValue="Send"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="background-image contact-img" />
          </div>
          <div className="bg-dark col-md-3 col-sm-6">
            <div className="contact-thumb">
              <div className="wow fadeInUp contact-info" data-wow-delay="0.6s">
                <h3 className="color-white">Visit my LinkedIn</h3>
                <p>https://www.linkedin.com/in/fahrunnisa-indah-cahyani-b54252271/</p>
              </div>
              <div className="wow fadeInUp contact-info" data-wow-delay="0.8s">
                <h3 className="color-white">Contact.</h3>
                <p>
                  <i className="fa fa-phone" /> 08980835200
                </p>
                <p>
                  <i className="fa fa-envelope-o" />{" "}
                  <a href="mailto:hello@company.co">fahrunisacahyani24@gmail.com</a>
                </p>
                <p>
                  <i className="fa fa-globe" /> <a href="#">company.co</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
