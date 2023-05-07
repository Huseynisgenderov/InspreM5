import "./hero.scss";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card-wrapper">
              <h2>WHO WE ARE</h2>
              <h1>
                <strong>Psychology Service</strong>
              </h1>
              <p>
                Lorem ipsum dolor sit amet erat, adipiscing elit. Praesent a
                laoreet lacinia. Mauris tempus erat nisl, commodo velit.
              </p>
              <div className="read-more">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
