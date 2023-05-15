import "./visitUs.scss";

const VisitUs = () => {
  return (
    <section className="visitUs">
      <div className="container">
        <div className="section-head">
          <h1>Visit Us</h1>
        </div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="map"
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=28May&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://capcuttemplate.org/">Capcut Templates</a>
          </div>
          <style>
            {`.mapouter{position:relative;text-align:right;width:100%;height:400px;}
      .gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}
      .gmap_iframe {height:400px!important;}`}
          </style>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
