import React from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const quotesRef = ref(db, "quotes");
    onValue(quotesRef, (snapshot) => {
      const data = snapshot.val();
      setQuotes(data);
    });
  }, []);
  return (
<section id="quotes" className="parallax-section">
  <div className="overlay" />
  <div className="container">
    <div className="row">
      <div className="col-md-offset-1 col-md-10 col-sm-12">
        <i className="wow fadeInUp fa fa-star" data-wow-delay="0.6s" />
        <h2 className="wow fadeInUp" data-wow-delay="0.8s">
        {quotes.quotes1}
        </h2>
        <p className="wow fadeInUp" data-wow-delay="1s">
       
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Quotes;
