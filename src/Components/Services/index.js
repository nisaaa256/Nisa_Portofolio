import React from "react";

const Services = () => {
  const [services, setServices] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const servicesRef = ref(db, "services");
    onValue(servicesRef, (snapshot) => {
      const data = snapshot.val();
      setServices(data);
    });
  }, []);
  return (
<section id="service" className="parallax-section">
  <div className="container">
    <div className="row">
      <div className="bg-yellow col-md-3 col-sm-6">
        <div className="wow fadeInUp color-white service-thumb" data-wow-delay="0.8s">
          <i className="fa fa-desktop" />
          <h3>{services.services1}</h3>
          <p className="color-white">
          {services.services2}
          </p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.2s">
          <i className="fa fa-paper-plane" />
          <h3>{services.services3}</h3>
          <p className="color-white">
          {services.services4}
          </p>
        </div>
      </div>
      <div className="bg-dark col-md-3 col-sm-6">
        <div className="wow fadeInUp color-white service-thumb" data-wow-delay="1.6s">
          <i className="fa fa-table" />
          <h3>{services.services5}</h3>
          <p className="color-white">
          {services.services6}
          </p>
        </div>
      </div>
      <div className="bg-white col-md-3 col-sm-6">
        <div className="wow fadeInUp service-thumb" data-wow-delay="1.8s">
          <i className="fa fa-html5" />
          <h3>{services.services7}</h3>
          <p>
          {services.services8}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Services;
