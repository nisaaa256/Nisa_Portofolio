import React from "react";

const Contact = () => {
  const [contact, setContact] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact");
    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      setContact(data);
    });
  }, []);
  return (
    <section id="contact" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="contact-form">
              <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                <h1 className="color-white">{contact.contact1}</h1>
                <p className="color-white">
                  {contact.contact2}
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
                <h3 className="color-white">{contact.contact3}</h3>
                <p>{contact.contact4}</p>
              </div>
              <div className="wow fadeInUp contact-info" data-wow-delay="0.8s">
                <h3 className="color-white">{contact.contact5}</h3>
                <p>
                  <i className="fa fa-phone" /> {contact.contact6}
                </p>
                <p>
                  <i className="fa fa-envelope-o" />{" "}
                  <a href="mailto:hello@company.co">{contact.contact7}</a>
                </p>
                <p>
                  <i className="fa fa-globe" /> <a href="#">{contact.contact8}</a>
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
