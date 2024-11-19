const Navbar = () => {
  const [navbar, setNavbar] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const navbarRef = ref(db, "navbar");
    onValue(navbarRef, (snapshot) => {
      const data = snapshot.val();
      setNavbar(data);
    });
  }, []);
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
        {navbar.navbar1}
      </a>
    </div>
    <div className="collapse navbar-collapse">
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="#home" className="smoothScroll">
            {navbar.navbar2}
          </a>
        </li>
        <li>
          <a href="#about" className="smoothScroll">
            {navbar.navbar3}
          </a>
        </li>
        <li>
          <a href="#experience" className="smoothScroll">
            {navbar.navbar4}
          </a>
        </li>
        <li>
          <a href="#quotes" className="smoothScroll">
            {navbar.navbar5}
          </a>
        </li>
        <li>
          <a href="#contact" className="smoothScroll">
            {navbar.navbar6}
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

  );
};
export default Navbar;
