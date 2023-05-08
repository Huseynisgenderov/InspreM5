import { useState } from "react";
import "./navbar.scss";
import logo from "../assets/logo.png";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="brand">
          <span className="logo">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </span>
          <span className="caption">
            <a href="#">InspireM5</a>
          </span>
        </div>
        <button className="hamburger-but" onClick={toggleMenu}>
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={`collapse ${isOpen ? "open" : ""}`}>
          <ul className="navList">
            <li class="nav-item">
              <a class="nav-link " href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">
                Contacts
              </a>
            </li>
          </ul>
          <div
            class="navbar-buttons"
            onClick={function () {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Səhifə onepage-dir keçid mövcud deyil",
              });
            }}
          >
            <a class="btn" href="#">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
