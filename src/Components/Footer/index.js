import React from "react";

const Footer = () => {
  return (
<footer>
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <div className="wow fadeInUp footer-copyright" data-wow-delay="1.8s">
          <p>Copyright © 2016 Your Company | Design: TemplateMo</p>
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
