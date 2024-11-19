import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Footer = () => {
  const [footer, setFooter] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
  return (
<footer>
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="wow fadeInUp footer-copyright" data-wow-delay="1.8s">
          <p>{footer.footer1}</p>
        </div>
        <ul className="wow fadeInUp social-icon" data-wow-delay="2s">
          <li>
            <a href="#" className="fa fa-facebook" />
          </li>
          <li>
            <a href="#" className="fa fa-twitter" />
          </li>
          <li>
            <a href="#" className="fa fa-google-plus" />
          </li>
          <li>
            <a href="#" className="fa fa-dribbble" />
          </li>
          <li>
            <a href="#" className="fa fa-linkedin" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
