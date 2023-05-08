import "./hero.scss";
//swal
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

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
              <div
                className="read-more"
                onClick={function () {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Səhifə onepage-dir keçid mövcud deyil",
                  });
                }}
              >
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
