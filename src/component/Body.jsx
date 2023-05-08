import { useState } from "react";
//scss
import "./body.scss";
import "./hero.scss";
//img
import about from "../assets/features2.jpg";
import advice from "../assets/features3.jpg";
import feature from "../assets/features4.jpg";
//swal
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Body = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "" });

  function handleSubmit(e) {
    e.preventDefault();
    clearMessages();

    if (!emailIsValid(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    }
  }

  function clearMessages() {
    setErrors({ email: "" });
  }

  function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }
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
            <div className="col-14 image-wrapper">
              <img src={feature} alt="feature" />
            </div>
            <div className="col-14 right">
              <div className="text-wrapper">
                <h2 className="mb-3">Our Features</h2>
                <h1 className="mb-3">
                  <strong>Get advice to transform your business</strong>
                </h1>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam consequat sit amet urna iaculis cursus. Phasellus
                  congue porta malesuada.
                </p>
                <div
                  className="section-btn"
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
      <section className="hero">
        <div className="container-fluid">
          <div className="row second-row">
            <div className="col-15">
              <div className="card-wrapper">
                <div className="left">
                  <h2>OUR MISSION</h2>
                  <h1>
                    <strong>About Our Company</strong>
                  </h1>
                </div>
                <div className="right left">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sagittis condimentum dui, nec varius elit condimentum
                    non. Phasellus pulvinar scelerisque lorem non volutpa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="send-email">
        <div className="container">
          <div className="content-wrapper">
            <div className="form-wrapper">
              <form>
                <div className="dragArea">
                  <span className="error">{errors.email}</span>
                  <label>
                    <h1>
                      <strong> How can we help? </strong>
                    </h1>
                  </label>
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className={errors.email ? "error-border" : ""}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="icon" onClick={handleSubmit}>
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
