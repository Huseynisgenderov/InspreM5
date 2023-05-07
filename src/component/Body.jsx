import "./body.scss";
import about from "../assets/features2.jpg";
import advice from "../assets/features3.jpg";

const Body = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="right-col col-12">
              <div className="image-wrapper">
                <img src={about} alt="img" />
              </div>
            </div>
            <div className="left-col col-12">
              <div className="text-wrapper">
                <h2>
                  <strong>SERVICES</strong>
                </h2>
                <h1>
                  <strong>About Service</strong>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sagittis condimentum, nec varius elit condimentum non.
                  Phasellus pulvinar scelerisque lorem, non volutpat justo
                  dictum a. Aenean eu ullamcorper quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="advice">
        <div className="container-fluid">
          <div className="advice-row">
            <div className="col-13">
              <h1>
                <strong>Get advice to help transform your business</strong>
              </h1>
            </div>
            <div className="col-13 bottom">
              <img src={advice} alt="advice" />
            </div>
            <div className="col-13 bottom">
              <div className="text-wrapper">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sagittis condimentum dui, nec varius elit condimentum non.
                  Phasellus pulvinar scelerisque lorem, non volutpat justo
                  dictum a. Aenean eu ullamcorper quam. Donec ac malesuada mi.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="insprem5">
        <div className="container">
            <div className="insprem5-row">
                <div className="col-14"></div>
                <div className="col-14"></div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Body;
