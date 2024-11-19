import React from "react";

const Education = () => {
  const [education, setEducation] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const educationRef = ref(db, "education");
    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      setEducation(data);
    });
  }, []);

  return (
<section id="education" className="parallax-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <div className="color-white education-thumb">
          <div className="wow fadeInUp section-title" data-wow-delay="0.8s">
            <h1>{education.education1}</h1>
            <p className="color-white">
              
            </p>
          </div>
          <div className="wow fadeInUp color-white media" data-wow-delay="1.2s">
            <div className="media-object media-left">
              <i className="fa fa-laptop" />
            </div>
            <div className="media-body">
              <h3 className="media-heading">
                {education.education2} <small>{education.education3}</small>
              </h3>
              <p className="color-white">
              {education.education4} 
              </p>
            </div>
          </div>
          <div className="wow fadeInUp color-white media" data-wow-delay="1.6s">
            <div className="media-object media-left">
              <i className="fa fa-laptop" />
            </div>
            <div className="media-body">
              <h3 className="media-heading">
                {education.education5} <small>{education.education6}</small>
              </h3>
              <p className="color-white">
              {education.education7}
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
