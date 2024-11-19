import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Home = () => {
  const [home, setHome] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home");
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
    });
  }, []);

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
                  {home.home1}
                </h4>
                <h1 className="wow fadeInUp" data-wow-delay="0.6s">
                  {home.home2} <strong>{home.home3}</strong> 
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.9s">
                {home.home4}
                </p>
                <a
                  href="#about"
                  className="wow fadeInUp smoothScroll section-btn btn btn-success"
                  data-wow-delay="1.4s"
                >
                  {home.home5}
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
