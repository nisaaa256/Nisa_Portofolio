const Navbar = () => {
  return (
<div className="navbar navbar-fixed-top custom-navbar" role="navigation">
  <div className="container">
    <div className="navbar-header">
      <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="icon icon-bar" />
        <span className="icon icon-bar" />
        <span className="icon icon-bar" />
      </button>
      <a href="#" className="navbar-brand">
        My Portofolio
      </a>
    </div>
    <div className="collapse navbar-collapse">
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#home" className="smoothScroll">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="smoothScroll">
            About Me
          </a>
        </li>
        <li>
          <a href="#experience" className="smoothScroll">
            Awards
          </a>
        </li>
        <li>
          <a href="#quotes" className="smoothScroll">
            Testimonial
          </a>
        </li>
        <li>
          <a href="#contact" className="smoothScroll">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

  );
};
export default Navbar;
